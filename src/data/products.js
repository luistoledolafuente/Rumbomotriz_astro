export const products = [
  {
    id: 'terra-grip-5000',
    title: "Modelo Terra-GRIP 5000",
    description: "Ideal para camiones de acarreo en minas a cielo abierto.",
    fullDescription: "El Terra-GRIP 5000 es la solución definitiva para terrenos agrestes. Su compuesto de caucho reforzado ofrece una vida útil un 20% superior al estándar.",
    specs: ["Resistencia a cortes: Alta", "Terreno: Cielo abierto", "Carga máxima: 50 ton"],
    imgSrc: "/images/tire-1.png",
    imgAlt: "Neumático minero Terra-GRIP 5000",
    featured: true // Opción para decidir si sale en el Home
  },
  {
    id: 'rock-hauler-22',
    title: "Modelo Rock-HAULER 22",
    description: "Diseñado para cargadores frontales y maquinaria de movimiento.",
    fullDescription: "Diseñado específicamente para soportar el peso y la abrasión constante en zonas de carga.",
    specs: ["Resistencia a abrasión: Extrema", "Terreno: Mixto", "Carga máxima: 35 ton"],
    imgSrc: "/images/tire-2.png",
    imgAlt: "Neumático para cargador frontal Rock-HAULER 22",
    featured: true
  },
  {
    id: 'subterra-pro-x',
    title: "Modelo Subterra-PRO X",
    description: "Neumático de bajo perfil para minería subterránea.",
    fullDescription: "Optimizado para espacios confinados con flancos reforzados.",
    specs: ["Perfil: Bajo", "Terreno: Subterráneo", "Protección lateral: Reforzada"],
    imgSrc: "/images/tire-3.png",
    imgAlt: "Neumático de bajo perfil Subterra-PRO X",
    featured: false // Este NO saldría en el home, por ejemplo
  },
  // Agrega aquí todas las llantas que quieras...
];