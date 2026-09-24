"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

import { submitInquiry } from "@/api/inquiries";
import { Button } from "@/components/ui/button";
import { Choice, Field, fieldErrorId, Input, Textarea } from "@/components/ui/field";
import { Modal } from "@/components/ui/modal";
import {
  CONTACT_DETAILS,
  EMPTY_INQUIRY,
  INQUIRY_BUDGETS,
  INQUIRY_NEEDS,
  INQUIRY_STEPS,
  INQUIRY_SUCCESS,
  INQUIRY_TIMELINES,
  labelFor,
} from "@/constants";
import type { InquiryErrors, InquiryNeed, InquiryPayload } from "@/types";
import { cn, INQUIRY_LIMITS, INQUIRY_STEP_FIELDS, validateInquiry } from "@/utils";

/* Five question steps, then a review step with the submit button */
const REVIEW_STEP = INQUIRY_STEPS.length;
const TOTAL_STEPS = INQUIRY_STEPS.length + 1;

const errorProps = (errors: InquiryErrors, field: keyof InquiryPayload, id: string) =>
  errors[field] ? { "aria-invalid": true as const, "aria-describedby": fieldErrorId(id) } : {};

const GroupError = ({ id, message }: { id: string; message?: string }) =>
  message ? (
    <p id={id} className="text-sm font-medium text-destructive">
      {message}
    </p>
  ) : null;

export const ProjectInquiryForm = () => {
  const [values, setValues] = useState<InquiryPayload>(EMPTY_INQUIRY);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const hasMoved = useRef(false);

  // Move focus to the new step's heading, but not on first render
  useEffect(() => {
    if (!hasMoved.current) return;
    headingRef.current?.focus();
  }, [step]);

  const set = <K extends keyof InquiryPayload>(field: K, value: InquiryPayload[K]) => {
    setValues((previous) => ({ ...previous, [field]: value }));
    if (errors[field]) setErrors((previous) => ({ ...previous, [field]: undefined }));
  };

  const toggleNeed = (need: InquiryNeed) =>
    set("needs", values.needs.includes(need) ? values.needs.filter((item) => item !== need) : [...values.needs, need]);

  const goTo = (next: number) => {
    hasMoved.current = true;
    setSubmitError(null);
    setStep(next);
  };

  const next = () => {
    const stepErrors = validateInquiry(values, INQUIRY_STEP_FIELDS[step]);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length === 0) goTo(step + 1);
  };

  const submit = async () => {
    const allErrors = validateInquiry(values);
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      const firstBadStep = INQUIRY_STEP_FIELDS.findIndex((fields) => fields.some((field) => allErrors[field]));
      goTo(Math.max(0, firstBadStep));
      return;
    }

    setStatus("submitting");
    const result = await submitInquiry(values);

    if (result.ok) {
      setStatus("sent");
      return;
    }

    setStatus("idle");
    setSubmitError(result.message);
    if (result.errors) setErrors(result.errors);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (step === REVIEW_STEP) void submit();
    else next();
  };

  const reset = () => {
    setValues(EMPTY_INQUIRY);
    setErrors({});
    setStatus("idle");
    hasMoved.current = false;
    setStep(0);
  };

  const title = step === REVIEW_STEP ? "Ready to send?" : INQUIRY_STEPS[step].title;
  const description = step === REVIEW_STEP ? "Check the details below, then send." : INQUIRY_STEPS[step].description;

  const summary = [
    { label: "What you need", value: values.needs.map((need) => labelFor(INQUIRY_NEEDS, need)).join(", "), step: 0 },
    { label: "The project", value: values.details.trim(), step: 1 },
    { label: "Timeline", value: labelFor(INQUIRY_TIMELINES, values.timeline), step: 2 },
    { label: "Budget", value: labelFor(INQUIRY_BUDGETS, values.budget), step: 3 },
    {
      label: "Contact",
      value: [values.name, values.email, values.company, values.phone].map((item) => item.trim()).filter(Boolean).join(" · "),
      step: 4,
    },
  ];

  return (
    <>
      <form noValidate onSubmit={onSubmit} aria-labelledby="inquiry-step-title" className="flex flex-col gap-10">
        {/* Progress */}
        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
            Step {step + 1} of {TOTAL_STEPS}
          </p>
          <div aria-hidden="true" className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${TOTAL_STEPS}, 1fr)` }}>
            {Array.from({ length: TOTAL_STEPS }, (_, index) => (
              <span key={index} className="relative h-0.5 overflow-hidden rounded-full bg-border">
                <span
                  className={cn(
                    "absolute inset-0 origin-left bg-foreground transition-transform duration-500 ease-(--ease-out)",
                    index <= step ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2
            id="inquiry-step-title"
            ref={headingRef}
            tabIndex={-1}
            className="font-display text-3xl font-semibold tracking-[-0.04em] outline-none sm:text-4xl"
          >
            {title}
          </h2>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div key={step} className="animate-[zoom-in_400ms_var(--ease-out)]">
          {step === 0 ? (
            <fieldset aria-describedby={errors.needs ? "needs-error" : undefined} className="flex flex-col gap-4">
              <legend className="sr-only">{INQUIRY_STEPS[0].title}</legend>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {INQUIRY_NEEDS.map(({ value, label, hint }) => (
                  <Choice
                    key={value}
                    type="checkbox"
                    name="needs"
                    value={value}
                    label={label}
                    hint={hint}
                    checked={values.needs.includes(value)}
                    onChange={() => toggleNeed(value)}
                  />
                ))}
              </div>
              <GroupError id="needs-error" message={errors.needs} />
            </fieldset>
          ) : null}

          {step === 1 ? (
            <Field
              id="inquiry-details"
              label="Project details"
              hint="What you're working on, the problem, and what a good result looks like."
              error={errors.details}
            >
              <Textarea
                id="inquiry-details"
                name="details"
                value={values.details}
                maxLength={INQUIRY_LIMITS.details.max}
                onChange={(event) => set("details", event.target.value)}
                placeholder="We're launching a new service in March and need…"
                {...errorProps(errors, "details", "inquiry-details")}
              />
            </Field>
          ) : null}

          {step === 2 || step === 3 ? (
            <fieldset
              aria-describedby={errors[step === 2 ? "timeline" : "budget"] ? "choice-error" : undefined}
              className="flex flex-col gap-4"
            >
              <legend className="sr-only">{INQUIRY_STEPS[step].title}</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {(step === 2 ? INQUIRY_TIMELINES : INQUIRY_BUDGETS).map(({ value, label }) => {
                  const field = step === 2 ? "timeline" : "budget";

                  return (
                    <Choice
                      key={value}
                      type="radio"
                      name={field}
                      value={value}
                      label={label}
                      checked={values[field] === value}
                      onChange={() => set(field, value as never)}
                    />
                  );
                })}
              </div>
              <GroupError id="choice-error" message={errors[step === 2 ? "timeline" : "budget"]} />
            </fieldset>
          ) : null}

          {step === 4 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              <Field id="inquiry-name" label="Name" error={errors.name}>
                <Input
                  id="inquiry-name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={(event) => set("name", event.target.value)}
                  {...errorProps(errors, "name", "inquiry-name")}
                />
              </Field>
              <Field id="inquiry-email" label="Email" error={errors.email}>
                <Input
                  id="inquiry-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  value={values.email}
                  onChange={(event) => set("email", event.target.value)}
                  {...errorProps(errors, "email", "inquiry-email")}
                />
              </Field>
              <Field id="inquiry-company" label="Company" optional error={errors.company}>
                <Input
                  id="inquiry-company"
                  name="company"
                  autoComplete="organization"
                  value={values.company}
                  onChange={(event) => set("company", event.target.value)}
                  {...errorProps(errors, "company", "inquiry-company")}
                />
              </Field>
              <Field id="inquiry-phone" label="Phone" optional error={errors.phone}>
                <Input
                  id="inquiry-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  value={values.phone}
                  onChange={(event) => set("phone", event.target.value)}
                  {...errorProps(errors, "phone", "inquiry-phone")}
                />
              </Field>

              {/* Honeypot: hidden from people and assistive tech, tempting to bots */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label htmlFor="inquiry-website">Website</label>
                <input
                  id="inquiry-website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.website}
                  onChange={(event) => set("website", event.target.value)}
                />
              </div>
            </div>
          ) : null}

          {step === REVIEW_STEP ? (
            <dl className="border-t border-border">
              {summary.map(({ label, value, step: target }) => (
                <div key={label} className="grid gap-2 border-b border-border py-5 sm:grid-cols-[10rem_1fr_auto] sm:gap-6">
                  <dt className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase sm:pt-1">{label}</dt>
                  <dd className="line-clamp-4 whitespace-pre-line">{value || "—"}</dd>
                  <dd>
                    <button
                      type="button"
                      onClick={() => goTo(target)}
                      className="link-underline cursor-pointer text-sm text-accent-foreground"
                    >
                      Edit<span className="sr-only"> {label.toLowerCase()}</span>
                    </button>
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        {submitError ? (
          <div role="alert" className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm">
            <p className="font-medium text-destructive">{submitError}</p>
            <p className="mt-1 text-muted-foreground">
              You can also email us directly at{" "}
              <a href={`mailto:${CONTACT_DETAILS.email}`} className="link-underline text-foreground">
                {CONTACT_DETAILS.email}
              </a>
              .
            </p>
          </div>
        ) : null}

        <div className="flex items-center justify-between gap-4 border-t border-border pt-6">
          {step > 0 ? (
            <Button variant="link" onClick={() => goTo(step - 1)} className="text-muted-foreground hover:text-foreground">
              ← Back
            </Button>
          ) : (
            <span />
          )}
          <Button type="submit" size="lg" isLoading={status === "submitting"}>
            {step === REVIEW_STEP ? "Send inquiry" : "Continue"}
          </Button>
        </div>
      </form>

      <Modal open={status === "sent"} onClose={reset} title={INQUIRY_SUCCESS.title}>
        <div className="flex flex-col gap-4 pr-8">
          <span aria-hidden="true" className="flex size-12 items-center justify-center rounded-full bg-success/10 text-success">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
              <path d="m4 10.5 4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.04em]">{INQUIRY_SUCCESS.title}</h2>
          <p className="leading-relaxed text-muted-foreground">{INQUIRY_SUCCESS.body}</p>
          <p className="text-sm text-muted-foreground">{CONTACT_DETAILS.responseTime}</p>
          <div className="pt-2">
            <Button onClick={reset}>Done</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
