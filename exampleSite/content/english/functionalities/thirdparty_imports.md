---
weight: 5000
title: "Thridparties imports"
description: "How to manage the import of external libraries or thirdparties code?"
titleIcon: "fa-solid fa-right-to-bracket fa-rotate-90"
categories: ["Functionalities"]
tags: ["Configuration"]
---

# Description
---

By default in the theme, it is possible to import libraries or third-party code into the generated html page, using the website configuration.

The several types of imports managed by the theme are the following ones:

| Import type | Comment |
| ----------- | ------- |
| **SASS files** (.sass) |{{< md >}}
* Imported in `<head>` tag as `<link rel="stylesheet" type="text/css">` after being [converted as CSS by Hugo](https://gohugo.io/hugo-pipes/scss-sass/), grouped and minified in **main.css** file
* Paths used for the SASS➔CSS conversion :
    * assets/bulma
    * assets/sass
{{< /md >}}|
| **CSS files** (.css) |{{< md >}}
* Imported file by file in `<head>` tag as `<link rel="stylesheet" type="text/css">` and minified
{{< /md >}}|
| **Javascript files** (.js) |{{< md >}}
* Imported file by file at the end of the `<body>` tag as `<script type="text/javascript"></script>` and minified
{{< /md >}}|
| **Javascript modules** (.js) |{{< md >}}
* Imported file by file at the end of the `<body>` tag as `<script type="module"></script>` and minified
{{< /md >}}|

{{< alert type="warning" >}}
Files to import must be defined as [Hugo assets](https://gohugo.io/hugo-pipes/introduction/#asset-directory)
{{< /alert >}}

# Define thirparty imports
---

To define a file to import you must use the following configuration (*Cf. highlighted lines below*):

{{< snippet
    file="templates/configuration/config.en.toml"
    caption="config.toml ([params] section)"
    codelang="toml"
    codeparam="linenos=inline,hl_lines=[\"36-41\",\"49-65\"]"
/>}}

# Define thirparty imports for shortcodes
---

The theme also offers the possibility to import libraries or third-party code associated with a shortcode. These files will be imported only if the shortcode is used in the current page, therefore reducing the loading time of the page.

To define a file to import, associated with a shortcode, you must use the following configuration (*Cf. highlighted lines below*):

{{< snippet
    file="templates/configuration/config.en.toml"
    caption="config.toml ([params] section)"
    codelang="toml"
    codeparam="linenos=inline,hl_lines=[\"36-37\",\"42-47\",\"66-114\"]"
/>}}
