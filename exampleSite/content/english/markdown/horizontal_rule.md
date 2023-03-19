---
weight: 2000
linkTitle: "Horizontal rule"
title: "Markdown: Horizontal rule"
description: "How to define a horizontal rule?"
categories: ["Markdown"]
tags: ["Content management"]
---

# Horizontal rule
---

To define a horizontal rule, **add at least 3 stars (\*), hyphens (-) or underscores (_) characters at line start** (The line must only contain the chosen characters).

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
***
---
___
******
```
{{< /md >}}|{{< plaintext >}}
<hr>
<hr>
<hr>
<hr>
{{< /plaintext >}}|{{< md >}}
***
---
___
******
{{< /md >}}|

{{< alert type="warning" >}}
Warning, for readability and compatibility reasons, it is recommended to **include horizontal rules between two empty lines**.
{{< /alert >}}
