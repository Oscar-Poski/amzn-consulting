import ogImage from "@/assets/og-image.png";

const basePath =
  import.meta.env.BASE_URL === "/"
    ? ""
    : import.meta.env.BASE_URL.replace(/\/$/, "");
const withBase = (path: string) => `${basePath}${path}`;

export const siteConfig = {
  name: "Astro Starter Pro",
  description:
    "Starter template optimized for SEO and performance. A solid foundation to start your projects with best practices.",
  url: "https://oscar-poski.github.io/amzn-consulting",
  lang: "en",
  locale: "en_US",
  author: "Devgelo",
  twitter: "@Devgelo",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com",
    github: "https://github.com/devgelo-labs/astro-starter-pro",
    discord: "https://discord.com",
  },
  navLinks: [
    { text: "Home", href: withBase("/") },
    { text: "About", href: withBase("/about") },
    { text: "Services", href: withBase("/services") },
    { text: "Blog", href: withBase("/blog") },
    { text: "Contact", href: withBase("/contact") },
    { text: "Widgets", href: withBase("/widgets") },
  ],
};
