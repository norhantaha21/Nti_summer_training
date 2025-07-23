const postsContainer = document.getElementById("posts-container");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeModal = document.getElementById("close");

const posts = [
  {
    title: "NASA Announces New Moon Mission",
    body: "NASA has officially announced its upcoming Artemis mission to return astronauts to the Moon by 2026. The mission will focus on long-term lunar exploration and preparation for Mars."
  },
  {
    title: "Global Markets React to Tech Surge",
    body: "Stock markets around the world are seeing a boost as major tech companies report record-breaking earnings, with AI playing a key role in their growth."
  },
  {
    title: "Scientists Discover New Coral Reef in the Pacific",
    body: "Marine biologists have discovered a previously unknown coral reef system off the coast of Tahiti, adding to hopes of ocean biodiversity resilience despite climate change."
  },
  {
    title: "New Study Links Daily Walking to Longer Life",
    body: "A new health study published in the Journal of Medicine shows that walking just 20 minutes a day significantly reduces the risk of early death and improves overall well-being."
  }
];

posts.forEach(post => {
  const postDiv = document.createElement("div");
  postDiv.className = "post";

  postDiv.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body.substring(0, 60)}...</p>
  `;

  postDiv.addEventListener("click", () => {
    modalTitle.textContent = post.title;
    modalBody.textContent = post.body;
    modal.style.display = "block";
  });

  postsContainer.appendChild(postDiv);
});

closeModal.onclick = () => {
  modal.style.display = "none";
};

window.onclick = event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};