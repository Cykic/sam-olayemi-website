import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { getServices } from "@/api";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { THEME_SCRIPT } from "@/components/theme-toggle";
import { OG_IMAGE, PAGE_SEO, SITE_CONFIG } from "@/constants";
import { organizationSchema, websiteSchema } from "@/utils";

import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap", weight: ["400"] });

// Rebuild daily so the footer's copyright year rolls over on 1 January
export const revalidate = 86400;

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: { default: PAGE_SEO.home.title, template: `%s | ${SITE_CONFIG.name}` },
  description: PAGE_SEO.home.description,
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  category: "business",
  openGraph: {
    type: "website",
    siteName: SITE_CONFIG.name,
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const services = await getServices();

  return (
    <html lang="en-NG" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        {/* Before first paint: the saved or system theme, so there's no flash */}
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="flex min-h-full flex-col">
        {/* Scroll reveals hide their content only when this has run, so a reader without JavaScript sees everything */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />

        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to main content
        </a>

        <JsonLd data={organizationSchema(services)} />
        <JsonLd data={websiteSchema()} />

        <SiteHeader />
        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
