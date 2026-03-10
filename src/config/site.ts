import ogImage from "@/assets/og-image.png";

const basePath =
  import.meta.env.BASE_URL === "/"
    ? ""
    : import.meta.env.BASE_URL.replace(/\/$/, "");
const withBase = (path: string) => `${basePath}${path}`;

export const siteConfig = {
  name: "Adzy",
  description:
    "Estructura, análisis y optmimización de tus campañas de Amazon para mejorar visibilidad, reducir gasto ineficiente y escalar con una estrategia basada en datos.",
  url: "https://oscar-poski.github.io/amzn-consulting",
  lang: "es",
  locale: "en_MX",
  author: "Poski",
  twitter: "",
  ogImage: ogImage,
  socialLinks: {
    twitter: "",
    github: "",
    discord: "",
  },
  navLinks: [
    { text: "Inicio", href: withBase("/") },
    { text: "Sobre Nosotros", href: withBase("/about") },
    { text: "Servicios", href: withBase("/services") },
    { text: "Contacto", href: withBase("/contact") },
    /*{ text: "Blog", href: withBase("/blog") },
    { text: "Contact", href: withBase("/contact") },
    { text: "Widgets", href: withBase("/widgets") },*/
  ],
};
