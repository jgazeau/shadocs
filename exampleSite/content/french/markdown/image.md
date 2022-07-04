---
weight: 10000
linkTitle: "Image"
title: "Markdown: Image"
description: "Comment définir une image ?"
categories: ["Markdown"]
tags: ["Gestion du contenu"]
---

# Image
---

## Syntaxe classique

Pour définir une image, il faut **respecter la syntaxe suivante**:

* **\!\[Texte_alternatif_de_l'image\]\(URL_de_l'image\)**

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
![Je suis une image](/images/favicon.png)
```
{{< /md >}}|{{< plaintext >}}
<p>
  <img src="/images/favicon.png" alt="Je suis une image">
</p>
{{< /plaintext >}}|{{< md >}}
![Je suis une image](/images/favicon.png)
{{< /md >}}|

## Image dans un lien

Pour définir un lien sur une image, il faut **encapsuler l'image dans la syntaxe d'un lien classique**.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
[![Je suis une image](/images/favicon.png)](/)
```
{{< /md >}}|{{< plaintext >}}
<p>
  <a href="/">
    <img src="/images/favicon.png" alt="Je suis une image">
  </a>
</p>
{{< /plaintext >}}|{{< md >}}
[![Je suis une image](/images/favicon.png)](/)
{{< /md >}}|
