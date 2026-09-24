import Image from "next/image";

import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { ABOUT_TEAM_INTRO, TEAM } from "@/constants";

/** Renders nothing until real team profiles are added in constants/proof.ts */
export const TeamGrid = () => {
  if (TEAM.length === 0) return null;

  return (
    <Section aria-label={ABOUT_TEAM_INTRO.title}>
      <SectionHeading eyebrow={ABOUT_TEAM_INTRO.eyebrow} title={ABOUT_TEAM_INTRO.title} />
      <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map(({ name, role, bio, photo, linkedIn }, index) => (
          <Reveal key={name} index={index} as="li" className="flex flex-col gap-4">
            {photo ? (
              <div className="relative aspect-[4/5] overflow-hidden rounded-(--radius-card) bg-surface">
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" className="object-cover" />
              </div>
            ) : null}
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-[-0.02em]">{name}</h3>
              <p className="font-mono text-xs tracking-[0.12em] text-muted-foreground uppercase">{role}</p>
            </div>
            <p className="leading-relaxed text-muted-foreground">{bio}</p>
            {linkedIn ? (
              <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="link-underline self-start text-sm">
                LinkedIn
              </a>
            ) : null}
          </Reveal>
        ))}
      </ul>
    </Section>
  );
};
