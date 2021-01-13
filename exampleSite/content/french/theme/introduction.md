---
weight: 1010
linkTitle: "Introduction"
title: "Installation: Introduction"
description: "Tout ce qu'il faut savoir avant d'utiliser le thème."
categories: ["Thème"]
---

# Gestion des versions
---

## Applications tierces

| Application | Version minimum |
| ----------- | --------------- |
| [Hugo (Extended version)](https://gohugo.io/) | [0.71.0](https://github.com/gohugoio/hugo/releases/tag/v0.71.0) |

## Assets utilisées dans le thème

| Asset | Version utilisée | Type |
| ----- | ---------------- | ---- |
| [Bulma](https://bulma.io/) | [0.9.1](https://github.com/jgthms/bulma/releases/tag/0.9.1) | css |
| [Font Awesome](https://fontawesome.com/) | [5.14.0](https://github.com/FortAwesome/Font-Awesome/releases/tag/5.14.0) | css |
| [Overlay Scrollbar](https://kingsora.github.io/OverlayScrollbars/#!overview) | [1.12.0](https://github.com/KingSora/OverlayScrollbars/releases/tag/v1.12.0) | css/js |
| [FlexSearch](https://github.com/nextapps-de/flexsearch) | [0.6.30](https://www.npmjs.com/package/flexsearch/v/0.6.30) | js |
| [Mermaid](https://mermaid-js.github.io/mermaid/) | [8.8.4](https://github.com/mermaid-js/mermaid/releases/tag/v8.8.4) | js |
| [Intro](https://introjs.com/docs/) | [3.1.0](https://github.com/usablica/intro.js/releases/tag/v3.1.0) | js |

# Installation
---

## Création d'un site Hugo

Pour créer un site Hugo, la documentation Hugo propose un [Quickstart](https://gohugo.io/getting-started/quick-start/) complet qui reprend l'ensemble des étapes necessaires afin de créer facilement et rapidement un premier site Hugo.

## Ajout du thème

1. Pour pouvoir ajouter et utiliser le thème Shadocs avec un site Hugo il utiliser l'une des possibilités suivantes:
    * Ajouter le thème en tant que sous-module Git au projet du site (Méthode recommandée)
        ```Bash
        cd ${REPERTOIRE_PROJET}
        git submodule add https://github.com/jgazeau/shadocs.git themes/shadocs
        ```
    * Télécharger les [sources du thème](https://github.com/jgazeau/shadocs/releases) et les ajouter au projet du site dans le répertoire `themes/shadocs`

2. Ajouter le thème au fichier de configuration du site:
{{< snippet
    caption="config.toml"
    codelang="toml"
>}}
[...]
theme = "shadocs"
[...]
{{< /snippet >}}
