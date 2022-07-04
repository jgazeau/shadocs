---
weight: 1000
title: "Global banner"
description: "How to manage global banner?"
categories: ["Functionalities"]
tags: ["Content management"]
banner: true
---

# Description
---

To display a global banner, that will be rendered on every page, define the `globalBanner` parameter to `true` inside the **config.toml** file.  
By default, the banner will contain a text about a deprecated version, defined in the `banner_default_content` variable of the **i18n** module, using the two following parameters:
* currentVersion
* latestVersionUrl

# Example

{{< alert >}}
The current page is displaying the default banner.
{{< /alert >}}
