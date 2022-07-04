---
weight: 7000
title: "Mermaid"
description: "Comment utiliser Mermaid ?"
titleIcon: "fa-solid fa-chart-column"
categories: ["Fonctionnalités"]
tags: ["Gestion du contenu"]
---

# Description
---

Par défaut le thème prend en charge le format [Mermaid](https://mermaid-js.github.io/mermaid/#/), permettant d'afficher des diagrammes créés à partir de texte et de code, et en rajoutant diverses fonctionnalités utilitaires.

Les différentes caractéristiques et fonctionnalités du thème liées à Mermaid sont :
* rendu obtenu à partir d'un bloc de code cloisonné et language de surlignage à `mermaid`
* bouton d'export associé a chaque svg généré
* aperçu (clic sur l'image généré)

# Exemples
---

| Markdown | Rendu |
| -------- | ----- |
|{{< md >}}
`````````
```mermaid
graph TB
    subgraph Étape 2
    b1(Action 2.1) --> b2(Action 2.2)
    end
    subgraph Étape 1
    a1(Action 1.1) --> a2(Action 1.2)
    end
```
`````````
{{< /md >}}|{{< md >}}
```mermaid
graph TB
    subgraph Étape 2
    b1(Action 2.1) --> b2(Action 2.2)
    end
    subgraph Étape 1
    a1(Action 1.1) --> a2(Action 1.2)
    end
```
{{< /md >}}|
