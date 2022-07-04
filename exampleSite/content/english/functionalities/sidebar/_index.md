---
weight: 1000
title: "Sidebar"
description: "How to manage the sidebar?"
titleIcon: "fa-solid fa-bars"
categories: ["Functionalities"]
---

# Description
---

By default the theme generates a sidebar associated with the content tree structure of the website.  
This tree structure must follow the [Hugo standard content organization](https://gohugo.io/content-management/organization/) and allows to manage two kind of pages:
* section
    * defined by a **_index.md** content page in a **folder containing at least one other simple content page**
* simple content page
    * defined by a **_index.md** content page in a **folder containing no other simple content page**
    * defined by a **\*.md** page in **any folder**

# Content page front matter parametrization
---

The parametrization of the front matter is used to manage the display of the sidebar.  
The various parameters specifically managed by the theme are described below:

| Parameter | Possible values | Description |
| --------- | --------------- | ----------- |
| title | any character string |{{< md >}}Default title displayed:
* in the sidebar
* in the content page front matter

*NB: If the title is too long in the sidebar, it is truncated accordingly.*
{{< /md >}}|
| titleIcon | [FontAwesome](https://fontawesome.com/icons?d=gallery&p=2&m=free) classes |{{< md >}}
css classes of the FontAwesome library associated with the icon to display in the sidebar.

*NB: If not specified, a default icon is defined by the theme.*
{{< /md >}}|

{{< alert >}}
For more information, check the [front matter Hugo documentation](https://gohugo.io/content-management/front-matter/).
{{< /alert >}}

# Examples
---

{{< treeview />}}
