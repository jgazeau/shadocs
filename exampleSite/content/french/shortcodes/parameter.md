---
title: "{{< parameter >}}"
description: "Shortcode {{< parameter >}}."
categories: ["Shortcode"]
---

# Description
---

Le shortcode **parameter** permet d'afficher un paramètre du site suivant son type.

| Type | Affichage |
| ---- | --------- |
| Map (Clé/Valeur) | Tableau |
| Liste de String | Liste |
| String | Texte |

Le paramètre à afficher peut être déclaré de deux manières différentes:
* Paramètres standard du site (variables [.Site.Params](https://gohugo.io/variables/site/#the-siteparams-variable)), en utilisant **le paramètre positionnel** du shortcode.
* [Fichier de données spécifique du site](https://gohugo.io/templates/data-templates/), en utilisant **le paramètre nommé** du shortcode.

{{< alert
    type="warning"
>}}
Le paramètre à afficher est interprété en markdown et converti en conséquence.
{{< /alert >}}

# Paramètres
---

| Nom | Type(nommé/positionnel) | Description |
| --- | ----------------------- | ----------- |
| | positionnel | Chemin du paramètre standard du site à afficher. |
| path | nommé |{{< md >}}
Chemin du paramètre spécifique à afficher.  
*NB: Le paramètre path est prépondérant par rapport au paramètre i18n.*
{{< /md >}}|
| i18n | nommé | Clé du paramètre i18n à afficher. |

# Exemples
---

| Markdown | Rendu |
| -------- | ----- |
|{{< md >}}
```
{{</* parameter "inconnu" /*/>}}
```
{{< /md >}}|{{< parameter "inconnu" />}}|
|{{< md >}}
```
{{</* parameter "logo" /*/>}}
```
{{< /md >}}|{{< parameter "logo" />}}|
|{{< md >}}
```
{{</* parameter "faviconmd" /*/>}}
```
{{< /md >}}|{{< parameter "faviconmd" />}}|
|{{< md >}}
```
{{</* parameter
    path="dir.exampleTemplate.exampleMap"
/*/>}}
```
{{< /md >}}|{{< parameter
    path="dir.exampleTemplate.exampleMap"
/>}}|
|{{< md >}}
```
{{</* parameter
    path="dir.exampleTemplate.exampleMap.exampleArray"
/*/>}}
```
{{< /md >}}|{{< parameter
    path="dir.exampleTemplate.exampleMap.exampleArray"
/>}}|
|{{< md >}}
```
{{</* parameter
    path="dir.exampleTemplate.exampleMap.exampleString"
/*/>}}
```
{{< /md >}}|{{< parameter
    path="dir.exampleTemplate.exampleMap.exampleString"
/>}}|
|{{< md >}}
```
{{</* parameter
    path="themeParams.navbar.shortcuts.1_info"
/*/>}}
```
{{< /md >}}|{{< parameter
    path="themeParams.navbar.shortcuts.1_info"
/>}}|
|{{< md >}}
```
{{</* parameter
    i18n="homepage_title"
/*/>}}
```
{{< /md >}}|{{< parameter
    i18n="homepage_title"
/>}}|
