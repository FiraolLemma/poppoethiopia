Translate my entire React/Vite website into 4 languages:

* 🇪🇹 Amharic (አማርኛ) — DEFAULT
* 🇬🇧 English
* 🟢 Afaan Oromo (Afaan Oromoo)
* 🟡 Tigrinya (ትግርኛ)

Use **i18next + react-i18next**.

Project structure:
`src/App.jsx`
`src/config.js`
`src/index.css`
`src/main.jsx`

Create:
`src/locales/am/translation.json`
`src/locales/en/translation.json`
`src/locales/om/translation.json`
`src/locales/ti/translation.json`
`src/i18n.js`

Replace all hard-coded user-facing English text with translation keys.

Add a language switcher to the existing navbar/header.

Requirements:

* Amharic is the default.
* Save the selected language in localStorage.
* Switching language should update the website without reload.
* Translate ALL visible text.
* Keep the existing design, CSS, images, layout, and functionality unchanged.
* Do not change the website's appearance.

First inspect `App.jsx` and the existing project, then implement the translation system.






























Translate this English language. I need the website default language to be Amharic. Inside class="nav-menu is-open" there is a class="button ". I need it to be language switching button defaul is Amharic and Others like English, Amharic and Tigray languages use switche.