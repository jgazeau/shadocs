---
weight: 4000
title: "Table of contents"
description: "How to manage table of contents?"
titleIcon: "fa-solid fa-list-ul"
categories: ["Functionalities"]
tags: ["Content management"]
---

# Description
---

By default in the theme, each content page (except homepage) generates a table of contents associated with the titles defined in the page.  
It is possible to activate or deactivate this functionality, both globally (sitewide) or per-page, with the following considerations:
* the homepage never contains the table of contents
* the configuration key to use is `toc`
* without configuration, the table of contents is enabled globally (sitewide)
* the following configuration precedence apply (from highest to lowest):
    * page configuration
    * site configuration
* the following configuration is used to activate/deactivate the table of content globally (sitewide)
    ```
    [params]
      toc = true/false
    ```
* the following configuration is used to activate/deactivate the table of content on a single page (to define in the front matter)
    ```
    ---
    toc: false
    ---
    ```

{{< alert type="warning" >}}
When activated, the table of contents is only available when the window width is greater than 1024 pixels.
{{< /alert >}}

# Example
---

# Level 1 title
## Level 2 title
### Level 3 title
#### Level 4 title
##### Level 5 title
###### Level 6 title

# Second level 1 title
## Second level 2 title
### Second level 3 title
#### Second level 4 title
##### Second level 5 title
###### Second level 6 title
