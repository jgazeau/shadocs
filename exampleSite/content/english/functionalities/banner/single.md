---
weight: 2000
title: "Single banner"
description: "How to manage single banner?"
categories: ["Functionalities"]
tags: ["Content management"]
banner: true
bannerContent: "I'm a banner"
---

# Description
---

To display a specific banner, that will be displayed on a single page, define the `banner` parameter to `true` inside the **front matter** of the page.  
By default, the banner will contain the `banner_default_content` variable of the **i18n** module, but it is possible to use a specific text using the `bannerContent` parameter inside the **front matter** of the page.

# Example

{{< snippet
    caption="Page front matter"
>}}
---
...
banner: true
bannerContent: "I'm a banner"
...
---
{{< /snippet >}}

{{< alert >}}
The current page is displaying a specific banner.
{{< /alert >}}