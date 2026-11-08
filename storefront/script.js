document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("product-grid");
  const countEl = document.getElementById("product-count");

  if (!grid) return;

  countEl.textContent = `(${products.length} prodotti)`;

  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.cursor = "pointer";
    card.onclick = () => {
      window.location.href = `product.html?id=${p.id}`;
    };

    const imageHtml = p.image
      ? `<img src="${p.image}" alt="${p.name}" class="product-img">`
      : `<div class="placeholder" style="color:${p.color};">📦</div>`;

    card.innerHTML = `
      <div class="product-image">
        ${imageHtml}
        <div class="badge">Disponibile</div>
      </div>
      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-description">${p.description}</div>
        <div class="product-meta">
          <span class="product-price">€${p.price.toFixed(2)}</span>
        </div>
        <div class="product-stock">✓ ${p.stock} pezzi in stock</div>
        <div class="product-actions">
          <a href="product.html?id=${p.id}" class="btn-primary">Acquista ora</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
});