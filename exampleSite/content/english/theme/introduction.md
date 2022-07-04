---
weight: 1000
linkTitle: "Introduction"
title: "Installation: Introduction"
description: "Everything you need to know before using the theme."
categories: ["Theme"]
tags: ["Configuration"]
---

# Version management
---

## Third party applications

| Application | Minimum version |
| ----------- | --------------- |
| [Hugo (Extended version)](https://gohugo.io/) | {{< parameter "versions.hugo_min" />}} |

## Assets used in the theme

| Asset | Used version | Type |
| ----- | ---------------- | ---- |
| [Bulma](https://bulma.io/) | {{< parameter "versions.bulma" />}} | css |
| [Font Awesome](https://fontawesome.com/) | {{< parameter "versions.fontawesome" />}} | css |
| [Overlay Scrollbar](https://kingsora.github.io/OverlayScrollbars/#!overview) | {{< parameter "versions.overlayscrollbar" />}} | css/js |
| [FlexSearch](https://github.com/nextapps-de/flexsearch) | {{< parameter "versions.flexsearch" />}} | js |
| [Mermaid](https://mermaid-js.github.io/mermaid/) | {{< parameter "versions.mermaid" />}} | js |
| [QRious](https://github.com/neocotic/qrious/) | {{< parameter "versions.qrious" />}} | js |
| [Intro](https://introjs.com/docs/) | {{< parameter "versions.intro" />}} | js |
| [Swagger UI](https://swagger.io/tools/swagger-ui/) | {{< parameter "versions.swaggerui" />}} | js |

# Installation
---

## Hugo website creation

To create a Hugo website, the Hugo documentation provides a complete [Quickstart](https://gohugo.io/getting-started/quick-start/) which includes all the necessary steps to easily and quickly create a Hugo website.

## Adding the theme

1. To add and use the Shadocs theme with a Hugo website, use one of the following possibilities:
    * Add the theme as a Git submodule to the website project (Recommended method)
        ```Bash
        cd ${PROJECT_DIRECTORY}
        git submodule add https://github.com/jgazeau/shadocs.git themes/shadocs
        git submodule update --init --recursive
        ```
    * Download the [theme sources](https://github.com/jgazeau/shadocs/releases) and add them to the website project in the `themes/shadocs` directory

2. Add the theme to the website configuration file:
{{< snippet
    caption="config.toml"
    codelang="toml"
>}}
[...]
theme = "shadocs"
[...]
{{< /snippet >}}
