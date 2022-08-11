---
title: "{{< blockquote >}}"
description: "Shortcode {{< blockquote >}}."
categories: ["Shortcode"]
tags: ["Gestion du contenu"]
---

# Description
---

Le shortcode **blockquote** permet d'écrire une citation.

# Paramètres
---

| Nom | Type(nommé/positionnel) | Description |
| --- | ----------------------- | ----------- |
| source | nommé |{{< md >}}
Source de la citation.  
*NB: Si non renseigné, le rendu est celui d'une [citation standard en markdown](../../markdown/blockquote/).*
{{< /md >}}|

# Exemples
---

| Markdown | Rendu |
| -------- | ----- |
|{{< md >}}
```
{{</*/* blockquote */*/>}}
Je suis une citation sans source
{{</*/* /blockquote */*/>}}
```
{{< /md >}}|{{< blockquote >}}
Je suis une citation sans source
{{< /blockquote >}}|
|{{< md >}}
```
{{</*/* blockquote
    source="Shadocs"
*/*/>}}
Je suis une citation avec source
{{</*/* /blockquote */*/>}}
```
{{< /md >}}|{{< blockquote
    source="Shadocs"
>}}
Je suis une citation avec source
{{< /blockquote >}}|
