---
weight: 3150
title: "Single page with icon"
description: "Sidebar: Single page with icon"
titleIcon: "fas fa-icons"
categories: ["Functionalities"]
---

# Description
---

A content section or page can be identified using an icon from the [FontAwesome](https://fontawesome.com/icons) library in order to ease navigation.

Two possible parametrization (with the several FontAwesome classes for each parameter value):
* standard parametrization using the default theme configuration
* per-page parametrization using the `titleIcon` variable in front matter

# Standard parametrization
---

{{< snippet
    caption="themeParams.toml"
    codelang="toml"
    file="templates/configuration/themeParams_sidebar.en.toml"
/>}}

# Per-page parametrization
---

* example of the current page:
{{< snippet
    caption="page.md"
    codelang="md"
>}}
---
titleIcon: "fas fa-icons"
---
{{< /snippet >}}