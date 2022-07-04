---
weight: 2000
linkTitle: "Séparation horizontale"
title: "Markdown: Séparation horizontale"
description: "Comment définir une séparation horizontale ?"
categories: ["Markdown"]
tags: ["Gestion du contenu"]
---

# Séparation horizontale
---

Pour définir une séparation horizontale, il faut **ajouter au minimum 3 caractères étoiles (\*), traits d'union (-) ou traits de soulignement (_) en début de ligne** (La ligne ne doit contenir que les caractères choisis).

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
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
Attention, pour des raisons de lisibilité de de compatibilité il est recommandé d'**inclure les séparations horizontales entre deux lignes vides**.
{{< /alert >}}
