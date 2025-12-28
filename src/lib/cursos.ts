const base = "https://cenakin.cl/otec/wp-json/wc/v3/";
const kis =
  "&consumer_key=ck_a62303a495e142cc35dbb14ca13884a4a8ae8b4e&consumer_secret=cs_49e0b6468aa1af67c931ed88fc59bfdacb5395ae";

const response = await fetch(`${base}products?category=22&per_page=50${kis}`);

if (!response.ok) throw new Error("Problemas con la conexión");
const cursos = await response.json();

const masoterapia = cursos.filter((curso: any) => {
  return curso.categories.some((category: any) => category.id === 47);
});

const marketing = cursos.filter((curso: any) => {
  return curso.categories.some((category: any) => category.id === 25);
});

const online = cursos.filter((curso: any) => {
  return curso.categories.some((category: any) => category.id === 27);
});

const salud = cursos.filter((curso: any) => {
  return curso.categories.some((category: any) => category.id === 28);
});

const categorias = [
  {
    name: "Masoterapia",
    slug: "masoterapia",
    descripcion:
      "La masoterapia es una técnica terapéutica basada en masajes manuales que ayudan a aliviar tensiones musculares, mejorar la circulación, reducir el estrés y promover el bienestar general. Ideal para relajar el cuerpo, equilibrar la mente y potenciar la salud de forma natural.",
  },
  {
    name: "Marketing",
    slug: "marketing",
    descripcion:
      "Descubre el poder de la masoterapia: una experiencia única que combina relajación y bienestar. Libera tensiones, revitaliza tu cuerpo y recupera tu energía con masajes terapéuticos diseñados para ti. ¡Regálate el cuidado que mereces y siéntete renovado desde la primera sesión!",
  },
  {
    name: "Online",
    slug: "online",
    descripcion:
      "Aprende desde donde estés con nuestras clases online: flexibles, interactivas y diseñadas para ti. Conéctate, adquiere nuevas habilidades y avanza a tu ritmo, acompañado por expertos que te guiarán paso a paso. ¡Transforma tu tiempo en aprendizaje!",
  },
  {
    name: "Salud",
    slug: "salud",
    descripcion:
      "Mejora tu bienestar con nuestras clases de salud: aprende hábitos, ejercicios y técnicas para cuidar tu cuerpo y mente. Sesiones prácticas, accesibles y guiadas por profesionales que te acompañarán en cada paso. ¡Invierte en tu salud hoy y vive mejor!",
  },
];

const compra = (id) => {
  window.location.href = `https://cenakin.cl/otec/carrito/?add-to-cart=${id}`;
};

export { cursos, masoterapia, marketing, online, salud, categorias, compra };
