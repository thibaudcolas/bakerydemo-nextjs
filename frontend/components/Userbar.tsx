'use client';

import Script from 'next/script';

const userbar = `
<template id="wagtail-userbar-template">

    <aside >
        <div class="w-userbar w-userbar--bottom-right w-theme-system w-density-default" data-wagtail-userbar part="userbar">
            <link rel="stylesheet" href="http://localhost:8000/static/wagtailadmin/css/core.css">

            <div class="w-userbar-nav">

                <svg class="w-hidden">
                    <defs>
                        <svg xmlns="http://www.w3.org/2000/svg" id="icon-wagtail-icon" viewBox="0 0 16 16">
    <!--! Custom icon -->
    <path d="M12.324 2.539c0 0.152-0.114 0.303-0.303 0.303-0.152 0-0.303-0.152-0.303-0.303 0-0.19 0.152-0.303 0.303-0.303 0.19 0 0.303 0.114 0.303 0.303zM12.437 5.421c0 0-0.417-1.896-2.92-1.403-0.228-0.872-0.19-1.517 0.341-2.086 0.759-0.796 1.972-0.379 1.972-0.379v-0.645c-0.417-0.19-0.834-0.228-1.252-0.228-1.631 0-2.541 1.214-2.92 2.048l-4.513 8.306 1.289-0.228-2.351 4.513 1.631-0.303 1.252-3.527c3.527 0 8.078-1.289 7.471-6.068zM13.954 3.828l-0.986-0.986-0.796 0.986zM5.535 10.465c0 0 0.152-0.038 0.341-0.076 0.19-0.076 0.493-0.114 0.834-0.228 0.19-0.038 0.379-0.114 0.569-0.152 0.19-0.076 0.417-0.152 0.607-0.228 0.228-0.114 0.417-0.19 0.607-0.303 0.228-0.114 0.417-0.265 0.607-0.379 0.038-0.038 0.114-0.076 0.152-0.114l0.114-0.114c0.114-0.114 0.19-0.19 0.265-0.265s0.152-0.19 0.228-0.265c0.038-0.038 0.076-0.076 0.114-0.152l0.038-0.076 0.038-0.038c0.038-0.076 0.076-0.114 0.076-0.152 0.038-0.038 0.076-0.114 0.076-0.152 0.038-0.038 0.038-0.038 0.038-0.076 0.038 0 0.038-0.038 0.038-0.076 0.038-0.038 0.038-0.076 0.076-0.114 0.038-0.114 0.076-0.19 0.114-0.303 0-0.076 0.038-0.152 0.076-0.265 0-0.076 0.038-0.152 0.038-0.228s0.038-0.152 0.038-0.228c0-0.076 0.038-0.152 0.038-0.228 0-0.038 0-0.114 0-0.152 0-0.19 0.038-0.341 0.038-0.341l0.19 0.038c0 0-0.038 0.114-0.038 0.303 0 0.076-0.038 0.114-0.038 0.19s0 0.152-0.038 0.19c0 0.076 0 0.152-0.038 0.265 0 0.076-0.038 0.152-0.038 0.228-0.038 0.114-0.076 0.19-0.114 0.303-0.038 0.076-0.076 0.19-0.114 0.265 0 0.038-0.038 0.114-0.076 0.152 0 0.038 0 0.038-0.038 0.076 0 0.038 0 0.038-0.038 0.076 0 0.038-0.038 0.076-0.076 0.152-0.038 0.038-0.038 0.076-0.076 0.114s-0.038 0.076-0.038 0.076l-0.076 0.076c-0.038 0.038-0.076 0.114-0.114 0.152-0.076 0.076-0.152 0.19-0.228 0.265s-0.152 0.152-0.265 0.265l-0.114 0.114c-0.076 0.038-0.114 0.038-0.152 0.076-0.228 0.152-0.417 0.303-0.645 0.417-0.19 0.076-0.417 0.19-0.607 0.265-0.228 0.076-0.417 0.152-0.645 0.228-0.19 0.038-0.379 0.114-0.569 0.152-0.341 0.076-0.645 0.152-0.834 0.19s-0.341 0.076-0.341 0.076z"></path>
</svg>

                        <svg id="icon-key" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! key (solid): Font Awesome Pro 6.4.0 --><path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"/></svg>

                        <svg id="icon-folder-open-inverse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 16"><!--! folder-open (solid): Font Awesome Pro 6.4.0 --><path d="M4.594 6H15V4.5c0-.813-.688-1.5-1.5-1.5h-5l-2-2h-5A1.5 1.5 0 0 0 0 2.5v10.281l2.813-5.656A2.003 2.003 0 0 1 4.593 6Zm12.375 1H4.594a.962.962 0 0 0-.875.563L0 15h13.969c.375 0 .719-.188.875-.531l3-6A.986.986 0 0 0 16.969 7Z"/></svg>

                        <svg id="icon-edit" class="icon--directional" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><!--! pen (solid): Font Awesome Pro 6.4.0 --><path d="M12.313 1.625a2.018 2.018 0 0 1 2.843 0l1.219 1.219a2.018 2.018 0 0 1 0 2.844l-1.5 1.5-4.063-4.063 1.5-1.5Zm1.843 6.281-7.281 7.282a2.722 2.722 0 0 1-1.156.687l-3.782 1.094a.638.638 0 0 1-.718-.188.708.708 0 0 1-.219-.718l1.125-3.782c.125-.437.375-.844.688-1.156l7.28-7.281 4.063 4.062Z"/></svg>

                        <svg id="icon-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><!--! plus (solid): Font Awesome Pro 6.4.0 --><path d="M14.5 8c0 .563-.469 1.031-1 1.031H9v4.5c0 .531-.469.969-1 .969a.98.98 0 0 1-1-.969v-4.5H2.5c-.563 0-1-.469-1-1.031a.98.98 0 0 1 1-.969H7v-4.5C7 1.97 7.438 1.5 8 1.5c.531 0 1 .469 1 1.031v4.5h4.5c.531-.031 1 .438 1 .969Z"/></svg>

                        <svg id="icon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><!--! check (solid): Font Awesome Pro 6.4.0 --><path d="M14.688 3.313a.964.964 0 0 1 0 1.406l-8 8a.964.964 0 0 1-1.407 0l-4-4a.964.964 0 0 1 0-1.406.964.964 0 0 1 1.407 0l3.28 3.28 7.313-7.28a.964.964 0 0 1 1.406 0Z"/></svg>

                        <svg id="icon-cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><!--! xmark (solid): Font Awesome Pro 6.4.0 --><path d="M12.688 11.313a.964.964 0 0 1 0 1.406A.97.97 0 0 1 12 13a.99.99 0 0 1-.719-.281L8 9.438l-3.313 3.28A.97.97 0 0 1 4 13a.99.99 0 0 1-.719-.281.964.964 0 0 1 0-1.406L6.562 8l-3.28-3.281a.964.964 0 0 1 0-1.407.964.964 0 0 1 1.405 0L8 6.595l3.281-3.282a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.407L9.408 8.03l3.28 3.281Z"/></svg>

                        <svg id="icon-crosshairs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><!--! crosshairs (solid): Font Awesome Pro 6.4.0 --><path d="M7 8c0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1-.563 0-1-.438-1-1Zm1-8c.531 0 1 .469 1 1v.344A6.764 6.764 0 0 1 14.656 7H15c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-.344c-.437 2.938-2.75 5.25-5.656 5.688V15c0 .563-.469 1-1 1-.563 0-1-.438-1-1v-.313A6.762 6.762 0 0 1 1.312 9H1c-.563 0-1-.438-1-1 0-.531.438-1 1-1h.313C1.75 4.094 4.063 1.781 7 1.344V1c0-.531.438-1 1-1ZM7 12.656V12c0-.531.438-1 1-1 .531 0 1 .469 1 1v.656A4.685 4.685 0 0 0 12.625 9H12c-.563 0-1-.438-1-1 0-.531.438-1 1-1h.625A4.69 4.69 0 0 0 9 3.375V4c0 .563-.469 1-1 1-.563 0-1-.438-1-1v-.625A4.685 4.685 0 0 0 3.344 7H4c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-.656A4.68 4.68 0 0 0 7 12.656Z"/></svg>

                    </defs>
                </svg>

                <button aria-controls="wagtail-userbar-items" aria-haspopup="true" class="w-userbar-trigger" id="wagtail-userbar-trigger" data-wagtail-userbar-trigger>

<svg class="icon-wagtail w-userbar-icon" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 274" fill="none"><path fill="#fff" d="M194.897 79.492c-8.392-12.793-22.602-21.27-38.773-21.27-5.322 0-10.496.915-15.32 2.62a30.755 30.755 0 0 1-4.039-15.3c0-17.078 13.325-30.792 29.918-30.792 4.274 0 8.046.776 11.565 2.328 1.746-2.566 3.491-5.64 5.236-9.476 7.108 4.095 19.786 14.99 21.26 33.397L190.72 61.88l4.177 17.612Z"/><path fill="#000" d="m49.277 186.425 8.718 18.407-1.743-30.679-6.975 12.272Z"/><path fill="#000" d="m21.867 193.558 92.839-164.565C122.124 11.853 138.827 0 158.135 0c9.302 0 18.102 2.588 25.393 7.504-1.76 3.882-3.52 6.987-5.28 9.575-3.52-1.553-7.291-2.33-11.565-2.33-16.594 0-29.919 13.716-29.919 30.794 0 5.646 1.496 10.83 4.04 15.3a45.95 45.95 0 0 1 15.319-2.62c25.896 0 46.764 21.736 46.764 48.131 0 1.104-.183 2.209-.394 3.475l-.109.665h.252c-.126.906-.315 1.811-.503 2.717-.189.906-.377 1.811-.503 2.717v.259c-17.487 91.789-126.812 89.821-143.747 89.031l.112-.386-1.743-30.679-6.872 12.197-27.513 7.208Z"/><path fill="#fff" d="m99.304 170.528-2.012 1.552s66.877-11.127 77.437-67.797l-10.56 3.623s-2.765 43.99-64.865 62.622Z"/><path fill="#000" d="M185.54 42.697c3.332 0 6.034-2.781 6.034-6.211s-2.702-6.21-6.034-6.21c-3.333 0-6.034 2.78-6.034 6.21s2.701 6.21 6.034 6.21ZM204.648 41.144l-11.817 18.114h31.93l-20.113-18.114ZM56.252 174.153.456 273.202l41.847-14.025 15.692-54.345-1.743-30.679Z"/></svg>

                    <span class="w-sr-only">View Wagtail quick actions</span>
                </button>
                <ul aria-labelledby="wagtail-userbar-trigger" class="w-userbar-items" id="wagtail-userbar-items" role="menu">

                        <li class="w-userbar__item " role="presentation">

    <a href="/admin/" target="_parent" role="menuitem">
        <svg class="icon icon-key w-action-icon" aria-hidden="true"><use href="#icon-key"></use></svg>
        Go to Wagtail admin
    </a>

</li>


                        <li class="w-userbar__item " role="presentation">

    <a href="/admin/pages/1/" target="_parent" role="menuitem">
        <svg class="icon icon-folder-open-inverse w-action-icon" aria-hidden="true"><use href="#icon-folder-open-inverse"></use></svg>
        Show in Explorer
    </a>

</li>


                        <li class="w-userbar__item " role="presentation">

    <a href="/admin/pages/60/edit/" target="_parent" role="menuitem">
        <svg class="icon icon-edit w-action-icon" aria-hidden="true"><use href="#icon-edit"></use></svg>
        Edit this page
    </a>

</li>


                        <li class="w-userbar__item " role="presentation">

    <a href="/admin/pages/60/add_subpage/" target="_parent" role="menuitem">
        <svg class="icon icon-plus w-action-icon" aria-hidden="true"><use href="#icon-plus"></use></svg>
        Add a child page
    </a>

</li>


                        <li class="w-userbar__item " role="presentation">

    <button type="button" id="accessibility-trigger" role="menuitem">
        <span class="w-sr-only">Issues found</span><span class="w-a11y-result__count" data-a11y-result-count></span>
        Accessibility
    </button>
    <script id="accessibility-axe-configuration" type="application/json">{"context": {"include": ["body"], "exclude": [{"fromShadowDOM": ["wagtail-userbar"]}]}, "options": {"rules": {}}, "messages": {"button-name": "Button text is empty. Use meaningful text for screen reader users.", "empty-heading": "Empty heading found. Use meaningful text for screen reader users.", "empty-table-header": "Table header text is empty. Use meaningful text for screen reader users.", "frame-title": "Empty frame title found. Use a meaningful title for screen reader users.", "heading-order": "Incorrect heading hierarchy. Avoid skipping levels.", "input-button-name": "Input button text is empty. Use meaningful text for screen reader users.", "link-name": "Link text is empty. Use meaningful text for screen reader users.", "p-as-heading": "Misusing paragraphs as headings. Use proper heading tags."}}</script>




<template
    data-controller="w-teleport"

>
    <div id="accessibility-results"
         aria-labelledby="title-accessibility-results"
         aria-hidden="true"
         class="w-dialog w-dialog--floating w-dialog--userbar w-theme-system w-density-default"
         data-controller="w-dialog"
         data-action="w-dialog:hide->w-dialog#hide w-dialog:show->w-dialog#show"
         data-w-dialog-theme-value="floating"

    >
        <div class="w-dialog__overlay" data-action="click->w-dialog#hide"></div>
        <div class="w-dialog__box">
            <button type="button" class="w-dialog__close-button" aria-label="Close dialog" data-action="w-dialog#hide">
                <svg class="icon icon-cross w-dialog__close-icon" aria-hidden="true"><use href="#icon-cross"></use></svg>
            </button>



            <div class="w-dialog__content">
                <div class="w-dialog__header">
                    <h2 class="w-dialog__title w-h1" id="title-accessibility-results">

                        Warnings
                    </h2>


                        <p class="w-dialog__subtitle w-help-text">
        Issues found
        <span class="w-a11y-result__count" data-a11y-result-count></span>
    </p>

                </div>

                <div data-w-dialog-target="body">


        <template id="w-a11y-result-row-template">
            <div class="w-a11y-result__row" data-a11y-result-row>
                <h3 class="w-a11y-result__header">
                    <span class="w-a11y-result__name" data-a11y-result-name></span>
                    <span class="w-sr-only">Issues found</span><span class="w-a11y-result__subtotal_count" data-a11y-result-count></span>
                </h3>
                <div class="w-a11y-result__container" data-a11y-result-container></div>
            </div>
        </template>
        <template id="w-a11y-result-selector-template">
            <button class="w-a11y-result__selector" data-a11y-result-selector type="button">
                <svg class="icon icon-crosshairs w-a11y-result__icon" aria-hidden="true"><use href="#icon-crosshairs"></use></svg>
                <span data-a11y-result-selector-text></span>
            </button>
        </template>
        <template id="w-a11y-result-outline-template">
            <div class="w-a11y-result__outline" data-a11y-result-outline></div>
        </template>

                </div>
            </div>
        </div>
    </div>
</template>


</li>


                </ul>
            </div>
        </div>
        <div data-a11y-result-outline-container></div>
    </aside>
</template>
<wagtail-userbar></wagtail-userbar>
`;

const Userbar = () => (
  <>
    <div dangerouslySetInnerHTML={{ __html: userbar }}></div>
    <Script src="http://localhost:8000/static/wagtailadmin/js/vendor.js" />
    <Script
      src="http://localhost:8000/static/wagtailadmin/js/userbar.js"
      onReady={() => {
        const u = document.querySelector('wagtail-userbar');
        if (u) {
          setTimeout(() => {
            axe.configure({ allowedOrigins: ['<unsafe_all_origins>'] });
            u.initialiseAxe();
          }, 100);
        }
      }}
    />
  </>
);

export default Userbar;
