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

## Adding the theme module

1. To add and use the Shadocs theme with a Hugo website, use one of the following possibilities:
    * Turn your website project into a hugo module and declare the shadocs theme module as a dependency for your site (Recommended method)
        ```Bash
        cd ${PROJECT_DIRECTORY}
        hugo mod init github.com/USERNAME/PROJECT
        hugo mod get github.com/jgazeau/shadocs
        ```
    * Download the [theme archive](https://github.com/jgazeau/shadocs/releases).  and extract it into the `_vendor` directory of your website project's root directory (only if you don't have `go` language installed at your system)
        ```Bash
        cd ${PROJECT_DIRECTORY}
        wget https://github.com/jgazeau/shadocs/releases/download/v2.0.0/_vendor-2.0.0.zip
        unzip _vendor-2.0.0.zip
        ```

2. Declare the theme module as an import in your website's configuration file:
{{< snippet
    caption="hugo.toml"
    codelang="toml"
>}}
[...]
[module]
  [[module.imports]]
    path = 'github.com/jgazeau/shadocs'  
[...]
{{< /snippet >}}
