---
weight: 5000
title: "Imports tiers"
description: "Comment gérér l'importation de librairies ou code tiers ?"
titleIcon: "fa-solid fa-right-to-bracket fa-rotate-90"
categories: ["Fonctionnalités"]
tags: ["Configuration"]
---

# Description
---

Par défaut dans le thème, il est possible d'importer des librairies ou du code tiers dans la page html générée, en utilisant la configuration du site.

Les différents types d'imports gérés par le thème sont les suivants:

| Type d'import | Commentaire |
| ------------- | ----------- |
| **Fichiers SCSS** (.scss) |{{< md >}}
* Importés dans la balise `<head>` en tant que `<link rel="stylesheet" type="text/css">` après avoir été [convertis en CSS par Hugo](https://gohugo.io/hugo-pipes/transform-to-css/), regroupés et minifiés dans un fichier **css/main.css**
* Les chemins utilisés pour la conversion SCSS:
    * assets/bulma
    * assets/scss
{{< /md >}}|
| **Fichiers CSS** (.css) |{{< md >}}
* Importés fichier par fichier dans la balise `<head>` en tant que `<link rel="stylesheet" type="text/css">` et minifiés
{{< /md >}}|
| **Fichiers javascript** (.js) |{{< md >}}
* Importés fichier par fichier en fin de balise `<body>` en tant que `<script type="text/javascript"></script>` et minifiés
{{< /md >}}|
| **Modules javascript** (.js) |{{< md >}}
* Importés fichier par fichier en fin de balise `<body>` en tant que `<script type="module"></script>` et minifiés
{{< /md >}}|

{{< alert type="warning" >}}
Les fichiers à importer doivent obligatoirement être définis en tant qu'[assets Hugo](https://gohugo.io/hugo-pipes/introduction/#asset-directory)
{{< /alert >}}

# Définition d'imports tiers
---

Pour définir un fichier à importer il faut utliser la configuration suivante (*Cf. lignes surlignées ci-dessous*):

{{< snippet
    file="templates/configuration/hugo.fr.toml"
    caption="hugo.toml ([params] section)"
    codelang="toml"
    codeparam="linenos=inline,hl_lines=[\"46-112\"]"
/>}}

# Définition d'imports tiers pour les shortcodes
---

Le thème offre de plus la possibilité d'importer des librairies ou du code tiers associé à un shortcode. Ces fichiers seront importés uniquement si le shortcode est utilisé dans la page courante, réduisant ainsi le temps de chargement de la page.

Pour définir un fichier à importer, associé à un shortcode, il faut utliser la configuration suivante (*Cf. lignes surlignées ci-dessous*):

{{< snippet
    file="templates/configuration/hugo.fr.toml"
    caption="hugo.toml ([params] section)"
    codelang="toml"
    codeparam="linenos=inline,hl_lines=[\"38-39\",\"44-49\",\"68-116\"]"
/>}}