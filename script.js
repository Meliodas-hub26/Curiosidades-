const curiosidades = [
  "Beber água regularmente melhora o funcionamento do cérebro.",
  "Dormir bem ajuda a prevenir doenças cardíacas.",
  "O riso fortalece o sistema imunológico.",
  "A pele se renova completamente a cada 28 dias.",
  "Respirar profundamente reduz o estresse.",
  "Caminhar diariamente melhora a circulação.",
  "O cérebro consome cerca de 20% da energia do corpo.",
  "Dormir pouco afeta a memória.",
  "Alongamentos evitam dores musculares.",
  "O intestino influencia o humor.",
  "Atividade física melhora a saúde mental.",
  "O coração bate cerca de 100 mil vezes por dia.",
  "Postura correta evita dores nas costas.",
  "Excesso de açúcar prejudica o coração.",
  "O sol ajuda na produção de vitamina D.",
  "A hidratação melhora a concentração.",
  "O riso libera endorfinas.",
  "Dormir bem regula os hormônios.",
  "Lavar as mãos previne infecções.",
  "Respirar pelo nariz filtra o ar.",
  "Exercícios reduzem ansiedade.",
  "Sono regula o metabolismo.",
  "Água ajuda na digestão.",
  "O cérebro trabalha durante o sono.",
  "Alongar melhora flexibilidade.",
  "Atividade física aumenta energia.",
  "Dormir cedo melhora a imunidade.",
  "O estresse afeta o corpo todo.",
  "Boa alimentação melhora o humor.",
  "Exercícios melhoram o sono.",
  "O corpo é 60% água.",
  "A mente influencia o corpo.",
  "Respiração lenta acalma.",
  "Movimento previne doenças.",
  "Sono melhora aprendizado.",
  "Caminhar reduz pressão arterial.",
  "Boa postura melhora respiração.",
  "Atividade física aumenta longevidade.",
  "Dormir bem melhora a pele.",
  "Rir melhora o coração.",
  "Exercício melhora memória.",
  "Hidratação evita fadiga.",
  "Sono reduz inflamações.",
  "Movimento melhora circulação.",
  "Exercício reduz estresse.",
  "Respiração correta melhora foco.",
  "Cuidar da mente é essencial.",
  "Hábitos saudáveis salvam vidas.",
  "Saúde começa com pequenas escolhas.",
  "Constância é a chave da saúde."
];

let index = 0;
let likes = JSON.parse(localStorage.getItem("likes")) || {};
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

const startBtn = document.getElementById("startBtn");
const card = document.getElementById("card");
const curiosidadeEl = document.getElementById("curiosidade");
const nextBtn = document.getElementById("nextBtn");
const shareBtn = document.getElementById("shareBtn");
const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");
const favBtn = document.getElementById("favBtn");
const progress = document.getElementById("progress");
const progressText = document.getElementById("progressText");
const barFill = document.getElementById("barFill");
const themeToggle = document.getElementById("themeToggle");
const viewsCount = document.getElementById("viewsCount");

let views = localStorage.getItem("views") || 0;
views++;
localStorage.setItem("views", views);
viewsCount.textContent = views;

// Tema
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

themeToggle.onclick = () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
};

// Iniciar
startBtn.onclick = () => {
  startBtn.classList.add("hidden");
  document.getElementById("introText").classList.add("hidden");
  card.classList.remove("hidden");
  progress.classList.remove("hidden");
  mostrarCuriosidade();
};

function mostrarCuriosidade() {
  if (index >= curiosidades.length) {
    curiosidadeEl.textContent = "Você chegou ao final 🎉";
    nextBtn.style.display = "none";
    shareBtn.style.display = "none";
    return;
  }

  const texto = curiosidades[index];
  curiosidadeEl.textContent = texto;

  likeCount.textContent = likes[texto] || 0;

  progressText.textContent = `${index + 1} / ${curiosidades.length}`;
  barFill.style.width = `${((index + 1) / curiosidades.length) * 100}%`;

  index++;
}

nextBtn.onclick = mostrarCuriosidade;

// Like
likeBtn.onclick = () => {
  const texto = curiosidadeEl.textContent;
  likes[texto] = (likes[texto] || 0) + 1;
  likeCount.textContent = likes[texto];
  localStorage.setItem("likes", JSON.stringify(likes));
};

// Favoritos
favBtn.onclick = () => {
  const texto = curiosidadeEl.textContent;
  if (!favorites.includes(texto)) {
    favorites.push(texto);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Adicionado aos favoritos ⭐");
  }
};

// Compartilhar
shareBtn.onclick = () => {
  const texto = `${curiosidadeEl.textContent}\n\nVeja mais: ${location.href}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`);
};
