document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const notFound = document.getElementById("not-found");
  const detail = document.getElementById("product-detail");

  if (!id) {
    notFound.style.display = "block";
    return;
  }

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound.style.display = "block";
    return;
  }

  // Titolo pagina
  document.getElementById("page-title").textContent = product.name + " - Sylius Store";

  // Immagine prodotto (se mancante mostra emoji per categoria)
  const detailImageContainer = document.getElementById("detail-image");
  const detailEmojiEl = document.getElementById("detail-emoji");

  if (product.image) {
    detailImageContainer.innerHTML = `<img src="${product.image}" alt="${product.name}" class="detail-img">`;
  } else {
    detailEmojiEl.textContent = getCategoryEmoji(product.category);
  }

  // Dati visibili al cliente (solo nome, prezzo, stock, categoria, descrizione)
  document.getElementById("detail-stock").textContent = `✓ ${product.stock} pezzi in stock`;
  document.getElementById("detail-category").textContent = product.category;
  document.getElementById("detail-name").textContent = product.name;
  document.getElementById("detail-description").textContent = product.description;
  document.getElementById("detail-price").textContent = "€" + product.price.toFixed(2);

  // Bottone WhatsApp con messaggio precompilato
  document.getElementById("btn-whatsapp").href = "https://wa.me/393478986033?text=Ciao,%20sono%20interessato%20al%20prodotto:%20" + encodeURIComponent(product.name) + "%20(ID%20" + product.id + ")";

  detail.style.display = "grid";
});

function getCategoryEmoji(category) {
  const map = {
    Abbigliamento: "👕",
    Casa: "🏠",
    Moda: "🕶️",
    Elettronica: "📱",
    Gioielli: "💍",
    Scarpe: "👟",
    Bellezza: "💄",
    Orologi: "⌚"
  };
  return map[category] || "📦";
}