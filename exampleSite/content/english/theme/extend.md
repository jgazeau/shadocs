---
weight: 3000
linkTitle: "Extend the theme"
title: "Installation: Extend the theme"
description: "How to extend the theme?"
categories: ["Theme"]
tags: ["Configuration"]
---

# General considerations
---

As every other Hugo theme, Shadocs theme can be extended and modified for specific purposes.
 
{{< alert type="info" >}}
For more information, check [Hugo template documentation](https://gohugo.io/templates/)
{{< /alert >}}

# HTML customization
---

Several custom HTML layout files are available in the theme.

These files are empty by default, but they can be defined within a specific website (using the [Hugo's Lookup Order](https://gohugo.io/templates/lookup-order/)), to include specific code at a specific place, directly within the global HTML layout, without having to modify the default theme layout.

The following files are managed within the theme:
* **layouts/partials/custom/custom-head.html** to insert code right before the ending </head> tag
{{< snippet
    caption="custom-head.html"
    codelang="html"
>}}
<html>
    <head>
        [...]
        {{- partial "custom/custom-head.html" .root -}}
    </head>
</html>
{{< /snippet >}}
* **layouts/partials/custom/custom-footer.html** to insert code right before the ending </body> tag
{{< snippet
    caption="custom-footer.html"
    codelang="html"
>}}
<html>
    <body>
    [...]
    {{- partial "custom/custom-footer.html" .root -}}
    </body>
</html>
{{< /snippet >}}
* **layouts/partials/custom/custom-info.html** to insert code in the navbar info modal
    {{< alert type="info" >}}
For more information, check the [documentation website custom-info.html](https://github.com/jgazeau/shadocs/blob/main/exampleSite/layouts/partials/custom/custom-info.html)
    {{< /alert >}}

# SASS customization
---

CSS layout of the theme is implemented using [SASS](https://sass-lang.com/).

The same way as HTML custom layout files, custom SASS layout files are available in the theme.

The following files are managed within the theme:
* **assets/sass/custom/custom_pre_variables.sass** to override [bulma variables](https://bulma.io/documentation/customize/variables/) as well as [primary theme variables](https://github.com/jgazeau/shadocs/blob/main/assets/sass/theme/pre_variables.sass)
* **assets/sass/custom/custom_variables.sass** to override [secondary theme variables](https://github.com/jgazeau/shadocs/blob/main/assets/sass/theme/variables.sass)

{{< alert type="info" >}}
For more information, check the documentation website [custom_variables.sass](https://github.com/jgazeau/shadocs/blob/main/exampleSite/assets/sass/custom/custom_variables.sass) and [example.sass](https://github.com/jgazeau/shadocs/blob/main/exampleSite/assets/sass/custom/example.sass), to implement specific CSS behavior:
### Specific title color for custom SASS example {#sass_custom_example}
{{< /alert >}}