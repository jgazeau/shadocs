---
weight: 1000
linkTitle: "Introduction"
title: "Installation: Introduction"
description: "Tout ce qu'il faut savoir avant d'utiliser le thème."
categories: ["Thème"]
tags: ["Configuration"]
---

# Gestion des versions
---

## Assets utilisées dans le thème

| Application | Version minimum |
| ----------- | --------------- |
| [Hugo (Extended version)](https://gohugo.io/) | {{< parameter "versions.hugo_min" />}} |
| [Bulma](https://bulma.io/) | {{< parameter "versions.bulma" />}} |

{{< alert type="info" >}}
Plusieurs autres assets sont utilisés dans Shadocs. Leurs versions sont disponibles dans le fichier *.bmycconfig.json*, et les assets sont automatiquements mis à jour grâce à la librairie [Bmyc](https://github.com/jgazeau/bmyc#bump-me-if-you-can-bmyc).
{{< /alert >}}

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
