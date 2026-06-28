# ZEVO Shop — mini e-shop demo

Легкий статический catalog-shop / mini e-shop MVP для малого бизнеса. Сделан без React, backend, Firebase, Supabase, платежных систем и настоящей авторизации.

## Что входит

- главная страница mini-shop;
- категории и product rails;
- карточки товаров с бейджами, рейтингом, скидкой и CTA;
- отдельная страница товара `product.html`;
- поиск и фильтр по категориям;
- корзина на `localStorage`;
- wishlist на `localStorage`;
- checkout-заявка с подготовленной email integration point;
- сохранение demo orders в `localStorage`;
- `admin-local/` как local demo admin / JSON editor для владельца;
- export/import товаров JSON;
- чешский legal-kit: `kontakt.html`, `obchodni-podminky.html`, `doprava-a-platba.html`, `odstoupeni-od-smlouvy.html`, `reklamacni-rad.html`, `ochrana-osobnich-udaju.html`, `cookies.html`;
- статическая архитектура для GitHub Pages / Netlify / Cloudflare Pages.

## Что не входит

- онлайн-оплата картой;
- реальные аккаунты пользователей;
- складской учет;
- защищённая backend admin;
- CRM;
- счета и инвойсы;
- автоматическая доставка;
- правовые документы клиента;
- финальная юридическая проверка;
- реальные данные provozovatel / IČO / DIČ / sídlo;
- настоящая гарантия или реальные отзывы.

## Где менять товары

Основной файл:

`assets/data/products.json`

Категории:

`assets/data/categories.json`

Admin-local:

`admin-local/`

Admin-local сохраняет изменения в `localStorage` текущего браузера. Это не защищённая production-админка и не backend. Чтобы перенести изменения в публичный магазин:

1. Откройте `admin-local/`.
2. Добавьте, удалите или измените товары.
3. Нажмите `Export products JSON`.
4. Замените файл `assets/data/products.json` в проекте или на хостинге.
5. Перезагрузите публичный магазин.

Root `admin.html` оставлен только как warning page: public admin не является частью магазина.

## Как работает заявка

Checkout собирает:

- имя;
- телефон;
- email;
- город;
- способ доставки;
- мессенджер;
- комментарий;
- список товаров из корзины.

Checkout формирует скрытые поля:

- `order_summary`;
- `order_items_json`;
- `order_total`.

Если в форме не указан endpoint, заявка сохраняется локально в `localStorage` и появляется в `admin-local/` во вкладке Orders.

Чтобы включить реальную отправку на email, вставьте endpoint в форму checkout:

```html
<form id="checkoutForm" class="form-grid" data-email-endpoint="PASTE_WEB3FORMS_OR_FORMSPREE_ENDPOINT">
```

Подходящие варианты: Web3Forms, Formspree, FormSubmit или собственный endpoint. Не добавляйте лишние персональные данные: для START mini-shop достаточно имени, телефона/email, города, доставки, мессенджера, комментария и состава заказа.

Для Czech e-shop flow финальная кнопка checkout показывает формулировку `Objednávka zavazující k platbě`. В demo режиме это только пример UI, без реального списания денег и без внешней отправки.

## Что можно добавить потом

- Web3Forms / Formspree / FormSubmit / Telegram bot для реальной отправки заявок;
- backend admin;
- база данных;
- онлайн-оплата;
- импорт из Excel / CSV;
- SEO-страницы категорий;
- мультиязычность;
- домен;
- analytics и рекламные пиксели только отдельным этапом с cookie consent;
- интеграция доставки.

## START mini-shop за 20 000 Kč

Можно продавать как стартовый mini e-shop / каталог-магазин, а не как полноценный маркетплейс.

Входит:

- адаптация шаблона под бизнес клиента;
- замена названия, логотипа, цветов и контактов;
- до 20-30 стартовых товаров;
- до 6-8 категорий;
- замена фото и текстов;
- корзина, избранное, checkout-заявка;
- отправка заявки на email после вставки endpoint;
- базовые legal pages с placeholders;
- мобильная версия;
- публикация на GitHub Pages / Netlify / Cloudflare Pages после отдельного подтверждения;
- инструкция README;
- `admin-local/` JSON editor для экспорта товаров.

Не входит:

- онлайн-оплата;
- складской учёт;
- личный кабинет клиента;
- защищённая backend-админка;
- интеграция с бухгалтерией;
- интеграция с доставками/API;
- CRM;
- автоматический импорт товаров;
- месячная SEO-работа;
- рекламные кампании.

Это можно добавить отдельным этапом.

## Demo warning

Все товары, цены, контакты, доставка, условия продажи и юридические тексты являются demo placeholders. Перед показом реальному клиенту нужно заменить их на данные бизнеса.

Legal pages не являются юридической консультацией. Перед публикацией клиент должен заменить все `[DOPLNIT ...]` / `[NÁZEV FIRMY]` / `[IČO]` / `[DIČ]` / `[ADRESA]` / `[EMAIL]` / `[TELEFON]`, указать реальные dopravce/platby/reklamace/GDPR zpracovatele и проверить документы у юриста.

## Cookies / localStorage

В demo нет Google Analytics, Meta Pixel, TikTok Pixel, Hotjar и других маркетинговых/аналитических трекеров.

Используется только технический `localStorage`:

- корзина;
- wishlist;
- локальные demo orders;
- локальные admin-local изменения товаров/категорий.

Данные корзины остаются в браузере пользователя до отправки checkout-формы. Заказ отправляется наружу только после подключения endpoint и отправки формы.
