---
title: "{{< plaintext >}}"
description: "Shortcode {{< plaintext >}}."
categories: ["Shortcode"]
tags: ["Gestion du contenu"]
---

# Description
---

Le shortcode **plaintext** permet de forcer l'affichage du texte brut, sans conversion markdown et échappement des caractères.  
Ce shortcode est notamment utile pour afficher du code HTML, ou du code markdown sans conversion.

# Paramètres
---

| Nom | Type(nommé/positionnel) | Description |
| --- | ----------------------- | ----------- |

# Exemples
---

| Markdown | Rendu |
| -------- | ----- |
|{{< md >}}
```
{{</*/* plaintext */*/>}}
<p>Je suis du code HTML</p>
{{</*/* /plaintext */*/>}}
```
{{< /md >}}|{{< plaintext >}}
<p>Je suis du code HTML</p>
{{< /plaintext >}}|
|{{< md >}}
```
{{</*/* plaintext */*/>}}
**Je suis du code markdown**
{{</*/* /plaintext */*/>}}
```
{{< /md >}}|{{< plaintext >}}
**Je suis du code markdown**
{{< /plaintext >}}|
