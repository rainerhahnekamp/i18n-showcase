This Angular project demonstrates a use case that cannot be implemented by using the official i18n module.

Ngx-formly is used to generate forms. With it, we can declare the form config within the component and the html is generated on-the-fly.

That's why we need access to the translations within the component. Since Angular's i18n doesn't offer that possibility, ngx-translate is used.
