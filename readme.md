# Wagtail bakerydemo website, with Next.js

A variant of [wagtail/bakerydemo](https://github.com/wagtail/bakerydemo), with a multi-site Next.js front-end.

This project demonstrates:

-   GraphQL data fetching with [wagtail-grapple](https://github.com/torchbox/wagtail-grapple) and [Apollo](https://www.apollographql.com/)
-   Headless page previews with [wagtail-headless-preview](https://github.com/torchbox/wagtail-headless-preview)
-   Headless multi-site support

## Headless features demonstrated

This project is primarily used to test and develop headless website features in Wagtail and related packages. For use as a reference, here is the status of specific features:

| Feature                                                                                   | Status                                                                        |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [REST API](https://areweheadlessyet.wagtail.org/rest-api)                                 | TBC                                                                           |
| [GraphQL](https://areweheadlessyet.wagtail.org/graphql)                                   | ⌛️ First draft, code needs refactoring                                        |
| [Page Preview](https://areweheadlessyet.wagtail.org/page-preview)                         | ⌛️ First draft (lacking correct access control)                               |
| [Images](https://areweheadlessyet.wagtail.org/images)                                     | ⌛️ First draft (lacking multi-format responsive images)                       |
| [Page URL Routing](https://areweheadlessyet.wagtail.org/page-url-routing)                 | ⌛️ First draft (rigid site structure)                                         |
| [Rich Text](https://areweheadlessyet.wagtail.org/rich-text)                               | ⌛️ First draft (needs bespoke rendering)                                      |
| [Multi-site support](https://areweheadlessyet.wagtail.org/multi-site-support)             | ⌛️ First draft (needs Site settings data fetching)                            |
| [Form submissions](https://areweheadlessyet.wagtail.org/form-submissions)                 | TBC                                                                           |
| [Password-protected Pages](https://areweheadlessyet.wagtail.org/password-protected-pages) | Out of scope / TBC                                                            |
| [Internationalisation](https://areweheadlessyet.wagtail.org/internationalisation)         | Out of scope / TBC                                                            |
| [Next.js](https://areweheadlessyet.wagtail.org/nextjs)                                    | ⌛️ First draft (needs further demonstration of code structure best practices) |
| [StreamField](https://areweheadlessyet.wagtail.org/streamfield)                           | ⌛️ First draft - code needs refactoring                                       |

