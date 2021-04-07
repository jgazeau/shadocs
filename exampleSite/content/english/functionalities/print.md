---
weight: 3090
title: "Print"
description: "How to manage page printing?"
titleIcon: "fas fa-print"
categories: ["Functionalities"]
---

# Description
---

In the theme, it is possible to print (or export as PDF) the current page, to share its content.

# Characteristics
---

The theme makes it possible to print a page content with the following characteristics:
* the print only contains the current main page content:
    * sidebar is not printed
    * navigation bar is not printed
    * table of contents is not printed
* pagebreaks are automatically adjusted to the content but it is possible to define specific ones using [pagebreak](/shortcodes/pagebreak/) shortcode
* an icon located in the navigation bar and a shortcut allow access to the print preview

{{< alert type="warning" >}}
The PDF document printed text from Firefox is not selectable unlike Chromium-based browsers.
{{< /alert >}}
{{< alert type="warning" >}}
To get a similar rendering print as the browser display, you must activate the **Print backgrounds** option in the print settings.
{{< /alert >}}