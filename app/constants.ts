export const INFORMATION: Infomation = {
  logo: "https://via.placeholder.com/150",
  banner: "",
  title: "Luqa",
  description: "Tienda de auriculares calidad precio",
  phone: "987654321",
  sheet:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRSziis5p9IykazYt8zOeEjTyKLYXgma0fu-BhrWG4TVqVRhq3OSfd6BYJR4K76aY60BP9PY5qYZeYu/pub?output=csv",
  color: "#0059f7",
  menu: [
    { label: "Inicio", slug: "/", icon: "fa-home" },
    { label: "Tienda", slug: "/tienda", icon: "fa-shop" },
    {
      label: "Atención al cliente",
      slug: "/atencion-cliente",
      icon: "fa-headset",
    },
  ],
  footer: [
    {
      title: "Tienda",
      submenu: [
        { label: "Soundpeats", slug: "/soundpeats" },
        { label: "Promos y cupones", slug: "/promos-cupones" },
      ],
    },
    {
      title: "Somos Luqa",
      submenu: [
        { label: "nuestros clientes", slug: "/nuestros-clientes" },
        { label: "nosotros", slug: "/nosotros" },
        { label: "trabaja con nosotros", slug: "/trabaja" },
      ],
    },
    {
      title: "Ayuda al cliente",
      submenu: [
        { label: "contáctanos", slug: "/contactanos" },
        { label: "Delivery", slug: "/delivery" },
        { label: "FAQ", slug: "/faq" },
        { label: "Rastrea mi pedido", slug: "/rastrea-mi-pedido" },
        { label: "Gift cards", slug: "/gift-card" },
      ],
    },
  ],
};

interface Infomation {
  logo: string;
  banner: string;
  title: string;
  description: string;
  phone: string;
  sheet: string;
  color: string;
  menu: Menu[];
  footer: Footer[];
}
interface Menu {
  label: string;
  slug: string;
  icon: string;
}
export interface Footer {
  title: string;
  submenu: Link[];
}
export interface Link {
  label: string;
  slug: string;
}
