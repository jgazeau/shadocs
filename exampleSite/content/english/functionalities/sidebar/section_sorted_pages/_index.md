---
weight: 5000
title: "Sorted pages"
description: "Sidebar: Sorted pages"
categories: ["Functionalities"]
---

# Description
---

By default the theme manages the sidebar content sorting according to the [standard Hugo content sorting](https://gohugo.io/templates/lists/#order-content).

# Sorting behavior
---

In order to define a specific behavior for the sidebar content sorting, `siteContentOrder` configuration key must be used in the specific parameters of the site.  
The possible values ​​of this parameter is linked to the different Hugo sorting methods, *without spaces and in lowercase*.

# Examples
---

{{< snippet
    caption="config.toml ([params] section)"
    codelang="toml"
    file="templates/configuration/config_siteorder.en.toml"
/>}}