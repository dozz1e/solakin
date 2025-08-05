const base = "https://cenakin.cl/otec/wp-json/wc/v3/";
const kis =
  "&consumer_key=ck_a62303a495e142cc35dbb14ca13884a4a8ae8b4e&consumer_secret=cs_49e0b6468aa1af67c931ed88fc59bfdacb5395ae";

const response = await fetch(`${base}products?category=22&per_page=50${kis}`);

if (!response.ok) throw new Error("Problemas con la conexión");
const cursos = await response.json();

export { cursos };
