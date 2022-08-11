---
weight: 4000
title: "Disabled pages"
description: "Sidebar: Disabled pages"
categories: ["Functionalities"]
---

# Description
---

A page can be set as disabled using the two following methods:
* automatically, if the page does not contain any content (*excluding front matter*)
* manually, by setting the `sidebarDisabled` variable  to `true` in the front matter

{{< alert >}}
Since a [section](../section/) is a special case of a content page, it is possible to define an empty section in the same way as a simple content page.
{{< /alert >}}

# Examples
---

* Automatic deactivation:
{{< snippet
    caption="page.md"
    codelang="md"
>}}
---
title: "Front matter"
---
{{< /snippet >}}
* Manual deactivation:
{{< snippet
    caption="page.md"
    codelang="md"
>}}
---
title: "Front matter"
sidebardisabled: true
---

# Page content
---
{{< /snippet >}}
