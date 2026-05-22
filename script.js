const products = [
  { id: 1, title: "Святковий торт з ягодами", category: "cakes", price: 1200, badge: "від 2 кг", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80" },
  { id: 2, title: "Дитячий торт з фігурками", category: "cakes", price: 1450, badge: "популярне", image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=900&q=80" },
  { id: 3, title: "Весільний торт у два яруси", category: "events", price: 3200, badge: "під замовлення", image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=900&q=80" },
  { id: 4, title: "Капкейки для кенді-бару", category: "desserts", price: 540, badge: "6 шт", image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80" },
  { id: 5, title: "Набір макаронів", category: "desserts", price: 480, badge: "12 шт", image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=900&q=80" },
  { id: 6, title: "Десертний бокс у подарунок", category: "desserts", price: 690, badge: "хіт", image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=80" },
  { id: 7, title: "Торт з індивідуальним написом", category: "cakes", price: 980, badge: "від 1.5 кг", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80" },
  { id: 8, title: "Кенді-бар для свята", category: "events", price: 2500, badge: "sale", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80", sale: true }
];

const state = { category: "all", query: "", cart: [] };
const productGrid = document.querySelector("#productGrid");
const filters = document.querySelectorAll(".filter");
const searchInput = document.querySelector("#searchInput");
const cartButton = document.querySelector("#cartButton");
const mobileCartButton = document.querySelector("#mobileCartButton");
const cartDrawer = document.querySelector("#cartDrawer");
const closeCart = document.querySelector("#closeCart");
const cartCount = document.querySelector("#cartCount");
const cartItems = document.querySelector("#cartItems");
const orderForm = document.querySelector("#orderForm");
const orderPreview = document.querySelector("#orderPreview");

function money(value) {
  return new Intl.NumberFormat("uk-UA").format(value) + " грн";
}

function visibleProducts() {
  return products.filter((product) => {
    const categoryMatch = state.category === "all" || product.category === state.category || (state.category === "sale" && product.sale);
    const queryMatch = product.title.toLowerCase().includes(state.query.toLowerCase());
    return categoryMatch && queryMatch;
  });
}

function renderProducts() {
  productGrid.innerHTML = visibleProducts().map((product) =>
    '<article class="product-card">' +
      '<img src="' + product.image + '" alt="' + product.title + '" loading="lazy">' +
      '<div class="product-body">' +
        '<h3 class="product-title">' + product.title + '</h3>' +
        '<div class="product-meta"><span class="price">' + money(product.price) + '</span><span class="badge">' + product.badge + '</span></div>' +
        '<button class="add-button" type="button" data-id="' + product.id + '">Додати в заявку</button>' +
      '</div>' +
    '</article>'
  ).join("");
}

function renderCart() {
  cartCount.textContent = state.cart.length;
  if (!state.cart.length) {
    cartItems.innerHTML = '<p class="order-preview">Поки нічого не додано.</p>';
    return;
  }
  cartItems.innerHTML = state.cart.map((product) =>
    '<div class="cart-line">' +
      '<div><p>' + product.title + '</p><span>' + money(product.price) + '</span></div>' +
      '<button class="ghost-button" type="button" data-remove="' + product.id + '">-</button>' +
    '</div>'
  ).join("");
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  renderCart();
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.category = button.dataset.category;
    renderProducts();
  });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderProducts();
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-id]");
  if (!button) return;
  const product = products.find((item) => item.id === Number(button.dataset.id));
  state.cart.push(product);
  renderCart();
  openCart();
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");
  if (!button) return;
  const index = state.cart.findIndex((item) => item.id === Number(button.dataset.remove));
  if (index >= 0) state.cart.splice(index, 1);
  renderCart();
});

cartButton.addEventListener("click", openCart);
mobileCartButton.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartDrawer);
cartDrawer.addEventListener("click", (event) => {
  if (event.target === cartDrawer) closeCartDrawer();
});

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(orderForm);
  const total = state.cart.reduce((sum, product) => sum + product.price, 0);
  const lines = state.cart.map((product) => "- " + product.title + ": " + money(product.price)).join("\n");
  orderPreview.textContent =
    "Заявка Sweet Day для Viber/Telegram:\n" +
    "Ім'я: " + (data.get("name") || "-") + "\n" +
    "Телефон: " + (data.get("phone") || "-") + "\n" +
    "Товари:\n" + (lines || "-") + "\n" +
    "Разом: " + money(total) + "\n" +
    "Коментар: " + (data.get("comment") || "-");
});

renderProducts();
renderCart();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
