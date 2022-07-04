---
weight: 3000
title: "Taxonomies"
description: "How to manage taxonomies?"
titleIcon: "fa-solid fa-tags"
categories: ["Functionalities"]
tags: ["Configuration"]
---

# Description
---

By default the theme manages the [Hugo taxonomies](https://gohugo.io/content-management/multilingual/#readout).

{{< alert type="warning" >}}
A menu located in the navigation bar allows to select a taxonomy and switch to the taxonomies view, depending on the configuration of the website. However, this menu will only appear if at least one taxonomy has been parametrized on the website.
{{< /alert >}}

# Associate a logo to a taxonomy
---

A logo can be associated to a taxonomy, that will appear in the navigation bar menu, by defining an `icon parameter like below:

```
[params]
  [params.taxonomies]
    [params.taxonomies.categories]
      icon = "fa-solid fa-table-cells"
```
