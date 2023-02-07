export const INFORMATION: Information = {
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
  cart: {
    identification: [
      { label: 'Correo', placeholder: 'Ingresa tu correo', type: 'email' },
      { label: 'Nombres y Apellidos', placeholder: 'Ingresa tu nombre', type: 'text' },
      { label: 'Doc. identidad', placeholder: 'Ingresa tu n° doc. identidad', type: 'text' },
      { label: 'Celular', placeholder: 'Ingresa tu n° celular', type: 'text' },
    ],
    location: [
      { label: 'Dirección', placeholder: 'Ingresa tu dirección ', type: 'text' },
      { label: 'Distrito', placeholder: 'Ingresa tu dirección ', type: 'text' },
      { label: 'Provincia', placeholder: 'Ingresa tu dirección ', type: 'text' },
      { label: 'Departamento', placeholder: 'Ingresa tu dirección ', type: 'text' },
      { label: 'Referencia', placeholder: 'Ingresa tu dirección ', type: 'text' },
    ]
  }
};

export interface Information {
  logo: string;
  banner: string;
  title: string;
  description: string;
  phone: string;
  sheet: string;
  color: string;
  menu: Menu[];
  cart: Cart;
}

export interface Cart {
  identification: Input[];
  location: Input[];
}

export interface Input {
  label: string;
  placeholder: string;
  type: string;
}

export interface Menu {
  label: string;
  slug: string;
  icon: string;
}
