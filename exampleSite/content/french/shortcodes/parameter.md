---
title: "{{< parameter >}}"
description: "Shortcode {{< parameter >}}."
categories: ["Shortcode"]
tags: ["Gestion du contenu"]
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
Chemin du paramètre spécifique à afficher, relatif au dossier *data* (le paramètre doit être défini dans un [fichier de type data](https://gohugo.io/templates/data-templates/)).  
*NB: Le paramètre path est prépondérant par rapport au paramètre i18n.*
{{< /md >}}|
| i18n | nommé | Clé du paramètre i18n à afficher. |

# Exemples
---

Considérant les définitions de paramètres suivant:

{{< snippet
    caption="config.toml"
    codelang="toml"
>}}
[params]
  logo      = "images/logo.png"
  faviconmd = "![Favicon](/images/favicon.png)"
{{< /snippet >}}
{{< snippet
    caption="./data/dir/exampleTemplate.json"
    codelang="json"
>}}
{
  "exampleMap": {
    "exampleArray": ["VAR1","VAR2","VAR3"],
    "exampleString": "STRING"
  }
}
{{< /snippet >}}
{{< snippet
    caption="./theme/data/themeParams.toml"
    codelang="toml"
>}}
[navbar]
  [navbar.shortcuts.1_info]
    keys = ["Shift","i"]
    function = "scShowInfo"
{{< /snippet >}}
{{< snippet
    caption="./theme/i18n/fr.yaml"
    codelang="yaml"
>}}
- id: homepage_title
  translation: "Page d'accueil"
{{< /snippet >}}

| Markdown | Rendu |
| -------- | ----- |
|{{< md >}}
```
{{</*/* parameter "inconnu" /*/*/>}}
```
{{< /md >}}|{{< parameter "inconnu" />}}|
|{{< md >}}
```
{{</*/* parameter "logo" /*/*/>}}
```
{{< /md >}}|{{< parameter "logo" />}}|
|{{< md >}}
```
{{</*/* parameter "faviconmd" /*/*/>}}
```
{{< /md >}}|{{< parameter "faviconmd" />}}|
|{{< md >}}
```
{{</*/* parameter
    path="dir.exampleTemplate.exampleMap"
/*/*/>}}
```
{{< /md >}}|{{< parameter
    path="dir.exampleTemplate.exampleMap"
/>}}|
|{{< md >}}
```
{{</*/* parameter
    path="dir.exampleTemplate.exampleMap.exampleArray"
/*/*/>}}
```
{{< /md >}}|{{< parameter
    path="dir.exampleTemplate.exampleMap.exampleArray"
/>}}|
|{{< md >}}
```
{{</*/* parameter
    path="dir.exampleTemplate.exampleMap.exampleString"
/*/*/>}}
```
{{< /md >}}|{{< parameter
    path="dir.exampleTemplate.exampleMap.exampleString"
/>}}|
|{{< md >}}
```
{{</*/* parameter
    path="themeParams.navbar.shortcuts.1_info"
/*/*/>}}
```
{{< /md >}}|{{< parameter
    path="themeParams.navbar.shortcuts.1_info"
/>}}|
|{{< md >}}
```
{{</*/* parameter
    i18n="homepage_title"
/*/*/>}}
```
{{< /md >}}|{{< parameter
    i18n="homepage_title"
/>}}|
