---
weight: 3000
title: "Taxonomies"
description: "Comment gérér les taxonomies ?"
titleIcon: "fa-solid fa-tags"
categories: ["Fonctionnalités"]
tags: ["Configuration"]
---

# Description
---

Par défaut le thème gère les [taxonomies Hugo](https://gohugo.io/content-management/taxonomies#readout).

{{< alert type="warning" >}}
Un menu situé dans la barre de navigation permet de choisir une taxonomie et de basculer vers la vue des taxonomies, suivant la configuration du site. Toutefois ce menu n'apparaitra que si au moins une taxonomy a été configuré sur le site.
{{< /alert >}}

# Associer un logo à une taxonomie
---

Il est possible d'associer un logo à une taxonomie, qui appraitra dans le menu de la barre de navigation, en définissant un paramètre `icon` comme ci-dessous:

```
[params]
  [params.taxonomies]
    [params.taxonomies.categories]
      icon = "fa-solid fa-table-cells"
```
