const textarea = document.querySelector("textarea");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const palabras = textarea.value
    .replaceAll(",", " ")
    .split(" ")
    .filter((palabra) => palabra.trim() !== "");
  console.log(analizaPalabras(palabras));
});
