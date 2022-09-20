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

## Assets used in the theme

| Asset | Minimum version |
| ----------- | --------------- |
| [Hugo (Extended version)](https://gohugo.io/) | {{< parameter "versions.hugo_min" />}} |
| [Bulma](https://bulma.io/) | {{< parameter "versions.bulma" />}} |

{{< alert type="info" >}}
Several other assets are used in Shadocs. Versions can be found within the *.bmycconfig.json* file and assets are automatically updated using the [Bmyc](https://github.com/jgazeau/bmyc#bump-me-if-you-can-bmyc) library.
{{< /alert >}}

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
