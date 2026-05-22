const businessPresets = {
  cakes: {
    appName: "Sweet Day",
    kind: "Міні-додаток кондитера",
    title: "Sweet Day | Mini Shop",
    heroLead: "Торти, капкейки та святкові десерти на замовлення",
    heroTitle: "Каталог робіт, начинки і швидка заявка у Viber або Telegram",
    heroImage: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=80",
    info: [
      ["Замовлення", "краще за 2-4 дні"],
      ["Формат", "торти, бокси, кенді-бар"],
      ["Заявки", "Viber / Telegram / дзвінок"]
    ],
    makerLabel: "Про майстриню",
    makerTitle: "Домашні десерти від Тетяни для сімейних свят",
    makerText: "Кожне замовлення обговорюється особисто: смак, вага, декор, напис і дата видачі. У каталозі можна подивитись приклади робіт, а в заявці коротко описати своє свято.",
    makerImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",
    facts: ["5+ років випічки", "Дитячі та сімейні свята", "Індивідуальний декор"],
    stories: [
      ["Проєкт", "День народження Софійки", "Ніжний торт з ягідною начинкою, капкейки для дітей і невеликий солодкий бокс для гостей."],
      ["Відгук", "Було красиво і дуже смачно", "Замовляли торт на 2.5 кг, усе встигли до свята, декор зробили саме як на прикладі."],
      ["Блог", "Як вибрати начинку", "Для дітей краще легкі креми й ягоди, для дорослих часто беруть шоколад, карамель або горіхи."]
    ],
    catalogTitle: "Популярні десерти",
    searchPlaceholder: "торт, капкейки, макарони",
    commentPlaceholder: "Дата, вага, начинка, напис, самовивіз або доставка",
    categories: [["all", "Усе"], ["cakes", "Торти"], ["desserts", "Десерти"], ["events", "Свята"], ["sale", "Акції"]],
    products: [
      { id: 1, title: "Святковий торт з ягодами", category: "cakes", price: 1200, badge: "від 2 кг", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80" },
      { id: 2, title: "Дитячий торт з фігурками", category: "cakes", price: 1450, badge: "популярне", image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=900&q=80" },
      { id: 3, title: "Весільний торт у два яруси", category: "events", price: 3200, badge: "під замовлення", image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=900&q=80" },
      { id: 4, title: "Капкейки для кенді-бару", category: "desserts", price: 540, badge: "6 шт", image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80" },
      { id: 5, title: "Набір макаронів", category: "desserts", price: 480, badge: "12 шт", image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=900&q=80" },
      { id: 6, title: "Десертний бокс у подарунок", category: "desserts", price: 690, badge: "хіт", image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=80" },
      { id: 7, title: "Торт з індивідуальним написом", category: "cakes", price: 980, badge: "від 1.5 кг", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80" },
      { id: 8, title: "Кенді-бар для свята", category: "events", price: 2500, badge: "sale", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80", sale: true }
    ]
  },
  flowers: {
    appName: "Flora Fest",
    kind: "Міні-додаток студії",
    title: "Flora Fest | Mini Shop",
    heroLead: "Квіти, кульки та оформлення свят у вашому місті",
    heroTitle: "Букети, декор і святкові послуги з швидкою заявкою в месенджер",
    heroImage: "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=1600&q=80",
    info: [["Доставка", "місто та найближчі села"], ["Формат", "букети, кульки, декор"], ["Заявки", "Viber / Telegram / дзвінок"]],
    makerLabel: "Про студію",
    makerTitle: "Святкові букети й декор від місцевої майстрині",
    makerText: "Допомагаємо швидко підібрати букет, оформити подарунок або підготувати невелику фотозону для сімейного свята.",
    makerImage: "https://images.unsplash.com/photo-1558350315-8aa00e8e4590?auto=format&fit=crop&w=900&q=80",
    facts: ["Букети в день звернення", "Декор під подію", "Доставка по місту"],
    stories: [["Проєкт", "День народження з фотозоною", "Букет, набір кульок і ніжна зона для фото вдома."], ["Відгук", "Швидко підібрали букет", "Написали вранці, а до обіду подарунок уже був готовий."], ["Блог", "Що додати до букета", "Листівка, стрічка, коробка солодощів або невеликий набір кульок роблять подарунок повнішим."]],
    catalogTitle: "Популярні замовлення",
    searchPlaceholder: "троянди, кульки, фотозона",
    commentPlaceholder: "Дата, адреса, кольори, доставка або самовивіз",
    categories: [["all", "Усе"], ["flowers", "Букети"], ["decor", "Декор"], ["events", "Свята"], ["sale", "Акції"]],
    products: [
      { id: 1, title: "Букет з троянд та еустоми", category: "flowers", price: 1450, badge: "хіт", image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=900&q=80" },
      { id: 2, title: "Весняний мікс у крафті", category: "flowers", price: 890, badge: "сьогодні", image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80" },
      { id: 3, title: "Коробка квітів з солодощами", category: "flowers", price: 1750, badge: "подарунок", image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=900&q=80" },
      { id: 4, title: "Фотозона з кульками", category: "decor", price: 3200, badge: "sale", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80", sale: true },
      { id: 5, title: "Набір кульок на день народження", category: "decor", price: 780, badge: "швидко", image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80" },
      { id: 6, title: "Оформлення святкового столу", category: "events", price: 2500, badge: "під ключ", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  toys: {
    appName: "Kids Joy",
    kind: "Міні-додаток магазину",
    title: "Kids Joy | Mini Shop",
    heroLead: "Іграшки, подарунки та набори для дітей",
    heroTitle: "Каталог популярних іграшок із швидкою заявкою в месенджер",
    heroImage: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1600&q=80",
    info: [["Підбір", "за віком і бюджетом"], ["Формат", "іграшки, набори, подарунки"], ["Заявки", "Viber / Telegram / дзвінок"]],
    makerLabel: "Про магазин",
    makerTitle: "Подарунки для дітей без довгого пошуку",
    makerText: "Підбираємо іграшки під вік, інтереси й бюджет. Можна швидко уточнити наявність і забронювати товар.",
    makerImage: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=80",
    facts: ["Підбір за віком", "Подарункове пакування", "Бронювання товару"],
    stories: [["Проєкт", "Подарунок на 5 років", "Підібрали конструктор, пазл і невеликий сюрприз у бюджет."], ["Відгук", "Швидко знайшли потрібне", "Скинули варіанти у Viber і відклали товар до вечора."], ["Блог", "Як обрати іграшку", "Для малих дітей важливі безпечні матеріали, для старших - інтереси й рівень складності."]],
    catalogTitle: "Популярні іграшки",
    searchPlaceholder: "конструктор, лялька, пазл",
    commentPlaceholder: "Вік дитини, бюджет, побажання, самовивіз або доставка",
    categories: [["all", "Усе"], ["build", "Конструктори"], ["soft", "М'які"], ["creative", "Творчість"], ["sale", "Акції"]],
    products: [
      { id: 1, title: "Конструктор місто", category: "build", price: 890, badge: "6+", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=80" },
      { id: 2, title: "М'який ведмедик", category: "soft", price: 520, badge: "хіт", image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=900&q=80" },
      { id: 3, title: "Набір для малювання", category: "creative", price: 430, badge: "творчість", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80" },
      { id: 4, title: "Пазл для дітей", category: "creative", price: 260, badge: "sale", image: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=900&q=80", sale: true }
    ]
  },
  grocery: {
    appName: "Fresh Local",
    kind: "Міні-додаток магазину",
    title: "Fresh Local | Mini Shop",
    heroLead: "Свіжі продукти, акції та локальні пропозиції",
    heroTitle: "Щоденний каталог товарів із заявкою на самовивіз або доставку",
    heroImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
    info: [["Свіже", "оновлення щодня"], ["Формат", "продукти, акції, набори"], ["Заявки", "Viber / Telegram / дзвінок"]],
    makerLabel: "Про магазин",
    makerTitle: "Місцевий магазин для швидких щоденних покупок",
    makerText: "Показуємо актуальні акції, популярні товари та готові набори, щоб клієнт міг швидко написати заявку.",
    makerImage: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=900&q=80",
    facts: ["Акції дня", "Готові набори", "Самовивіз поруч"],
    stories: [["Проєкт", "Набір на вечерю", "Готовий список продуктів для сімейної вечері без зайвого пошуку."], ["Відгук", "Зручно бачити акції", "Клієнти швидко уточнюють наявність і бронюють потрібне."], ["Блог", "Що брати на тиждень", "Можна робити добірки: сніданки, перекуси, овочі, молочне або сезонні товари."]],
    catalogTitle: "Популярні товари",
    searchPlaceholder: "молоко, овочі, набір",
    commentPlaceholder: "Що відкласти, кількість, самовивіз або доставка",
    categories: [["all", "Усе"], ["daily", "Щоденне"], ["sets", "Набори"], ["fresh", "Свіже"], ["sale", "Акції"]],
    products: [
      { id: 1, title: "Набір до сніданку", category: "sets", price: 290, badge: "готовий", image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=900&q=80" },
      { id: 2, title: "Овочевий кошик", category: "fresh", price: 360, badge: "свіже", image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=900&q=80" },
      { id: 3, title: "Молочний набір", category: "daily", price: 240, badge: "щодня", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=900&q=80" },
      { id: 4, title: "Акція тижня", category: "sale", price: 199, badge: "sale", image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=900&q=80", sale: true }
    ]
  }
};

const params = new URLSearchParams(location.search);
let presetKey = businessPresets[params.get("biz")] ? params.get("biz") : "cakes";
let preset = businessPresets[presetKey];
let products = preset.products;

const state = { category: "all", query: "", cart: [] };
const productGrid = document.querySelector("#productGrid");
const filterNav = document.querySelector(".filters");
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

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function applyPreset(nextKey) {
  presetKey = nextKey;
  preset = businessPresets[presetKey];
  products = preset.products;
  state.category = "all";
  state.query = "";
  state.cart = [];
  orderPreview.textContent = "";

  document.title = preset.title;
  document.documentElement.style.setProperty("--hero-image", 'url("' + preset.heroImage + '")');
  setText(".topbar .eyebrow", preset.kind);
  setText(".topbar h1", preset.appName);
  setText(".hero-copy p", preset.heroLead);
  setText(".hero-copy h2", preset.heroTitle);
  setText(".maker-copy .eyebrow", preset.makerLabel);
  setText(".maker-copy h2", preset.makerTitle);
  setText(".maker-copy > p:not(.eyebrow)", preset.makerText);
  setText(".section-head h2", preset.catalogTitle);
  searchInput.placeholder = preset.searchPlaceholder;
  searchInput.value = "";
  const comment = orderForm.querySelector("textarea[name='comment']");
  comment.placeholder = preset.commentPlaceholder;

  document.querySelector(".maker-photo img").src = preset.makerImage;
  document.querySelector(".maker-photo img").alt = preset.makerTitle;

  document.querySelector(".info-strip").innerHTML = preset.info
    .map((item) => "<div><strong>" + item[0] + "</strong><span>" + item[1] + "</span></div>")
    .join("");

  document.querySelector(".maker-facts").innerHTML = preset.facts
    .map((fact) => "<span>" + fact + "</span>")
    .join("");

  document.querySelector(".story-grid").innerHTML = preset.stories
    .map((story) =>
      "<article><p class='eyebrow'>" + story[0] + "</p><h3>" + story[1] + "</h3><p>" + story[2] + "</p></article>"
    )
    .join("");

  filterNav.innerHTML = preset.categories
    .map((category) =>
      "<button class='filter" + (category[0] === "all" ? " active" : "") + "' type='button' data-category='" + category[0] + "'>" + category[1] + "</button>"
    )
    .join("");

  if (params.get("switcher") === "1") {
    document.body.classList.add("demo-tools-on");
    renderDemoSwitcher();
  }

  bindFilters();
  renderProducts();
  renderCart();
}

function renderDemoSwitcher() {
  let switcher = document.querySelector(".demo-switcher");
  if (!switcher) {
    switcher = document.createElement("div");
    switcher.className = "demo-switcher";
    document.body.prepend(switcher);
  }

  switcher.innerHTML =
    "<label>Демо бізнес <select id='businessPreset'>" +
    Object.keys(businessPresets).map((key) =>
      "<option value='" + key + "'" + (key === presetKey ? " selected" : "") + ">" + businessPresets[key].appName + "</option>"
    ).join("") +
    "</select></label>";

  switcher.querySelector("select").addEventListener("change", (event) => {
    const next = event.target.value;
    const url = new URL(location.href);
    url.searchParams.set("biz", next);
    url.searchParams.set("switcher", "1");
    history.replaceState(null, "", url);
    presetKey = next;
    preset = businessPresets[next];
    applyPreset(next);
  });
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

function bindFilters() {
  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.category = button.dataset.category;
      renderProducts();
    });
  });
}

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
    "Заявка " + preset.appName + " для Viber/Telegram:\n" +
    "Ім'я: " + (data.get("name") || "-") + "\n" +
    "Телефон: " + (data.get("phone") || "-") + "\n" +
    "Позиції:\n" + (lines || "-") + "\n" +
    "Разом: " + money(total) + "\n" +
    "Коментар: " + (data.get("comment") || "-");
});

applyPreset(presetKey);

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

