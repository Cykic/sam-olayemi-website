import Image from "next/image";

import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";
import { CLIENT_LOGOS } from "@/constants";

/** Renders nothing until real client logos are added in constants/proof.ts */
export const LogoCloud = () => {
  if (CLIENT_LOGOS.length === 0) return null;

  return (
    <Section spacing="compact" rule aria-label="Clients">
      <Eyebrow>Trusted by teams building what&rsquo;s next.</Eyebrow>
      <ul className="mt-10 grid grid-cols-2 items-center gap-x-10 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
        {CLIENT_LOGOS.map(({ name, src, width, height }) => (
          <li key={name} className="flex justify-center">
            <Image
              src={src}
              alt={name}
              width={width}
              height={height}
              className="h-8 w-auto opacity-60 grayscale transition-opacity duration-300 hover:opacity-100 dark:invert"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};
