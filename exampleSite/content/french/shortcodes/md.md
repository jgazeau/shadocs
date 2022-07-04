---
title: "{{< md >}}"
description: "Shortcode {{< md >}}."
categories: ["Shortcode"]
tags: ["Gestion du contenu"]
---

# Description
---

Le shortcode **md** permet de forcer la conversion d'un bloc de texte écrit en markdown.  
Ce shortcode est notamment utile pour rajouter du contenu écrit en syntaxes markdown complexes (listes, extrait de code, ...), dans un tableau, ou dans le cas de shortcodes imbriqués.
{{< alert type="warning" >}}
Imbriquer deux shortcode **md** n'est pas possible.
{{< /alert >}}

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
{{</*/* md */*/>}}
Je suis du texte écrit en **markdown**
{{</*/* /md */*/>}}
```
{{< /md >}}|{{< md >}}
Je suis du texte écrit en **markdown**
{{< /md >}}|
|{{< md >}}
~~~
| Markdown | Rendu |
| -------- | ----- |
|{{</*/* md */*/>}}
```
{{</*/* md */*/>}}
Je suis du texte écrit en **markdown**
{{</*/* /md */*/>}}
```
{{</*/* /md */*/>}}|{{</*/* md */*/>}}
Je suis du texte écrit en **markdown**
{{</*/* /md */*/>}}
~~~
{{< /md >}}| Tableau d'exemples sans la ligne courante (***Rendu non disponible car deux shortcode md sont imbriqués dans cet exemple***) |
