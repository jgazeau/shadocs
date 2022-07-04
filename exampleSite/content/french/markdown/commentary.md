---
weight: 15000
linkTitle: "Commentaire"
title: "Markdown: Commentaire"
description: "Comment définir un commentaire ?"
categories: ["Markdown"]
tags: ["Gestion du contenu"]
---

# Commentaire
---

Pour définir un commentaire, il faut **utiliser la même syntaxe que des commentaires HTML (\<\!\-\- [...] \-\-\>)**.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
On me voit
<!-- On me voit plus -->
```
{{< /md >}}|{{< plaintext >}}
<p>On me voit<p>
<!-- On me voit plus -->
{{< /plaintext >}}|{{< md >}}
On me voit
<!-- On me voit plus -->
{{< /md >}}|
