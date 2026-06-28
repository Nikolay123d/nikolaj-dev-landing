# Real Estate Prague Premium Demo

Premium static demo-сайт для риелтора в Праге или небольшой real estate компании.

Проект создан как новый чистый static landing:

- `index.html` - разметка сайта;
- `assets/css/style.css` - дизайн-система и responsive layout;
- `assets/js/preloader.js` - спокойный premium preloader;
- `assets/js/media-loader.js` - безопасная загрузка hero/video-блоков;
- `assets/js/app.js` - меню, FAQ, demo-form, sticky CTA;
- `assets/images/` - локальные изображения;
- `assets/videos/` - локальные demo-видео;
- `assets/icons/` - favicon;
- `docs/source/` - исходный prompt и source reference с FEX.

## Что готово

- compact premium hero с video background и fallback poster;
- второй video-block для презентации объекта;
- услуги для собственников, покупателей и арендаторов;
- demo listings;
- modal-окно деталей объекта;
- блок преимуществ;
- процесс работы;
- about realtor;
- demo reviews;
- FAQ;
- contact / lead form;
- sticky mobile CTA;
- SEO/meta/OpenGraph;
- локальные изображения;
- demo-маркировки для отзывов, объектов и portrait.

## Что является demo

- demo-brand `Real Estate Prague`;
- телефон, email, WhatsApp, Telegram, Facebook, Instagram placeholders;
- объекты недвижимости;
- отзывы;
- portrait;
- видео;
- юридические ссылки в footer;
- форма без реальной отправки.

Перед реальным запуском заменить на данные клиента.

## Где менять контент

- Тексты секций: `index.html`.
- Объекты: блок `#listings` в `index.html`.
- Отзывы: блок `#reviews`.
- Контакты: секция `#lead` и footer.
- Изображения: `assets/images/`.
- Видео: `assets/videos/`; пути подключены через `data-src` в `index.html`.
- Цвета и spacing: CSS variables в начале `assets/css/style.css`.

## Как заменить видео

Hero использует:

```html
<video id="heroVideo" poster="assets/images/hero-prague.jpg" data-src="assets/videos/realtor-showing-apartment.mp4"></video>
```

Внутренний video-block использует:

```html
<video class="lazy-video" poster="assets/images/apartment-premium.jpg" data-src="assets/videos/house-interior-presentation.mp4"></video>
```

Для production лучше использовать короткое сжатое MP4 до 3-8 MB, poster image и не удалять fallback-картинку. При `prefers-reduced-motion` видео скрывается и остаётся фото.

## Как подключить форму

Сейчас форма demo-safe и не отправляет данные наружу.

В `index.html`:

```html
<form class="lead-form" id="leadForm" data-endpoint="">
```

Для production можно подключить Web3Forms, Formspree, FormSubmit или backend endpoint.
После подключения нужно заменить demo-логику в `assets/js/app.js` на реальную отправку `fetch(endpoint, ...)`.

Собирать только минимальные данные:

- имя;
- телефон/email;
- тип запроса;
- район/объект;
- комментарий.

## Как запустить локально

Из папки проекта:

```powershell
python -m http.server 8097
```

Открыть:

```text
http://127.0.0.1:8097/
```

## Что можно улучшить перед продажей клиенту

- заменить demo-фото на реальные фото риелтора и объектов;
- заменить demo-видео на видео клиента или licensed stock;
- добавить legal pages;
- подключить email/CRM endpoint;
- добавить реальные отзывы;
- добавить реальные районы/объекты;
- подготовить чешскую или английскую версию;
- подключить аналитику только после согласия клиента и cookie/privacy настройки.

## Ограничения

Это static demo landing page. Здесь нет:

- backend;
- CRM;
- real authentication;
- real property database;
- автоматической админки;
- онлайн-платежей;
- реальной юридической проверки текстов.
