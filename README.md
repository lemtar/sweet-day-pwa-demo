# Sweet Day PWA Demo

Demo PWA for a home baker who makes custom cakes and festive desserts.

This version is a lightweight PWA shell:

- manifest for installable mobile behavior;
- service worker for app-shell caching;
- bottom mobile navigation;
- static files that can be hosted anywhere.

## What to Show

- Personal intro: "Домашні десерти від Тетяни для сімейних свят".
- Mini-blog trust blocks: about the maker, project, review, and filling advice.
- Catalog: cakes, desserts, event/candy-bar items.
- Order drawer: selected items plus name, phone, date, weight, filling, inscription, delivery/self-pickup notes.
- Mobile feel: bottom navigation and installable PWA shell.

## Demo Script

1. Open the app on a phone-sized screen.
2. Show the personal intro and explain that this is not just a catalog, but a personal storefront for the master.
3. Open "Історії" and show project/review/blog cards.
4. Open "Каталог", add one cake and one dessert to the order.
5. Fill a short comment like: "25 травня, 2 кг, шоколадна начинка, напис З Днем народження".
6. Click "Сформувати заявку" and show the generated Viber/Telegram order text.

## Acer Preview

The current working copy is synced to:

    C:\AgentWork\local-shop-miniapp-demo

If the preview server is running, open:

    http://127.0.0.1:8787/

To start it manually on Acer from PowerShell:

    cd C:\AgentWork\local-shop-miniapp-demo
    node .\server.mjs

For quick static preview only, open:

    file:///C:/AgentWork/local-shop-miniapp-demo/index.html

## How to Reuse

- Change store name and contacts in index.html.
- Change products in script.js.
- Change colors in styles.css.
- For another niche, keep the same structure and replace categories/products.

## Package for Transfer

From the workspace root:

    zip -r sweet-day-pwa-demo.zip local-shop-miniapp-demo

## Local Preview on HP/Linux

Open index.html directly in a browser for a quick static preview, or serve this folder:

    python3 -m http.server 8787

For PWA testing, use HTTP instead of file opening:

    node server.mjs
