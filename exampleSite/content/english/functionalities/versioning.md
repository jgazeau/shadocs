---
weight: 14000
title: "Versioning"
description: "How to manage website versions?"
titleIcon: "fa-solid fa-timeline"
categories: ["Functionalities"]
---

# Description
---

By default in the theme, it is possible to specify a dropdown list of links referencing other versions of the website, available in the navigation bar.

# Define another versions of the website
---

To define other versions of the website, specify them in the `params.navbar.versions` list of the `config.toml` configuration file:
```toml
[params]
  [[params.navbar.versions]]
    name = 'latest'
    url  = 'http://latest.website'
  [[params.navbar.versions]]
    name = 'vX'
    url  = 'http://vX.website'
  [[params.navbar.versions]]
    name = 'v1'
    url  = 'http://v1.website'
```
