---
title: "{{< collapsible >}}"
description: "Shortcode {{< collapsible >}}."
categories: ["Shortcode"]
---

# Description
---

Le shortcode **collapsible** permet d'écrire un bloc de texte réductible.

# Paramètres
---

| Nom | Type(nommé/positionnel) | Description |
| --- | ----------------------- | ----------- |
| title | nommé |{{< md >}}
Titre du bloc de texte.  
*NB: Si non renseigné, le titre est un texte par défaut défini par le thème.*
{{< /md >}}|

# Exemples
---

| Markdown | Rendu |
| -------- | ----- |
|{{< md >}}
```
{{</* collapsible */>}}
Je suis caché
{{</* /collapsible */>}}
```
{{< /md >}}|{{< collapsible >}}
Je suis caché
{{< /collapsible >}}|
|{{< md >}}
```
{{</* collapsible
    title="Sésame, ouvre-toi!"
*/>}}
Je suis caché
{{</* /collapsible */>}}
```
{{< /md >}}|{{< collapsible
    title="Sésame, ouvre-toi!"
>}}
Je suis caché
{{< /collapsible >}}|
