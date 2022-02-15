---
weight: 1010
linkTitle: "Introduction"
title: "Installation: Introduction"
description: "Tout ce qu'il faut savoir avant d'utiliser le thème."
categories: ["Thème"]
tags: ["Configuration"]
---

# Gestion des versions
---

## Applications tierces

| Application | Version minimum |
| ----------- | --------------- |
| [Hugo (Extended version)](https://gohugo.io/) | {{< parameter "versions.hugo_min" />}} |

## Assets utilisées dans le thème

| Asset | Version utilisée | Type |
| ----- | ---------------- | ---- |
| [Bulma](https://bulma.io/) | {{< parameter "versions.bulma" />}} | css |
| [Font Awesome](https://fontawesome.com/) | {{< parameter "versions.fontawesome" />}} | css |
| [Overlay Scrollbar](https://kingsora.github.io/OverlayScrollbars/#!overview) | {{< parameter "versions.overlayscrollbar" />}} | css/js |
| [FlexSearch](https://github.com/nextapps-de/flexsearch) | {{< parameter "versions.flexsearch" />}} | js |
| [Mermaid](https://mermaid-js.github.io/mermaid/) | {{< parameter "versions.mermaid" />}} | js |
| [QRious](https://github.com/neocotic/qrious/) | {{< parameter "versions.qrious" />}} | js |
| [Intro](https://introjs.com/docs/) | {{< parameter "versions.intro" />}} | js |
| [Swagger UI](https://swagger.io/tools/swagger-ui/) | {{< parameter "versions.swaggerui" />}} | js |

# Installation
---

## Création d'un site Hugo

Pour créer un site Hugo, la documentation Hugo propose un [Quickstart](https://gohugo.io/getting-started/quick-start/) complet qui reprend l'ensemble des étapes necessaires afin de créer facilement et rapidement un site Hugo.

## Ajout du thème

1. Pour pouvoir ajouter et utiliser le thème Shadocs avec un site Hugo il utiliser l'une des possibilités suivantes:
    * Ajouter le thème en tant que sous-module Git au projet du site (Méthode recommandée)
        ```Bash
        cd ${REPERTOIRE_PROJET}
        git submodule add https://github.com/jgazeau/shadocs.git themes/shadocs
        git submodule update --init --recursive
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
