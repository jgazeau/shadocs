---
weight: 10000
linkTitle: "Image"
title: "Markdown: Image"
description: "How to define an image?"
categories: ["Markdown"]
tags: ["Content management"]
---

# Image
---

## Classic syntax

To define an image, **use the following syntax**:

* **\!\[Image_alternative_text\]\(Image_URL\)**

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
![I'm an image](/images/favicon.png)
```
{{< /md >}}|{{< plaintext >}}
<p>
  <img src="/images/favicon.png" alt="I'm an image">
</p>
{{< /plaintext >}}|{{< md >}}
![I'm an image](/images/favicon.png)
{{< /md >}}|

## Image in a link

To define a link to an image, **encapsulate the image in a classic link syntax**.

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
[![I'm an image](/images/favicon.png)](/)
```
{{< /md >}}|{{< plaintext >}}
<p>
  <a href="/">
    <img src="/images/favicon.png" alt="I'm an image">
  </a>
</p>
{{< /plaintext >}}|{{< md >}}
[![I'm an image](/images/favicon.png)](/)
{{< /md >}}|
