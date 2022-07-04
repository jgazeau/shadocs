---
title: "{{< treeview >}}"
description: "Shortcode {{< treeview >}}."
categories: ["Shortcode"]
tags: ["Gestion du contenu"]
---

# Description
---

Le shortcode **treeview** permet d'afficher une arborescence sous diverses formes.

# Paramètres
---

| Nom | Type(nommé/positionnel) | Description |
| --- | ----------------------- | ----------- |
| rootpath | nommé |{{< md >}}
Chemin du haut niveau de l'arborescence.  
*NB: Si non renseigné, le chemin utilisé est celui de la page actuelle (**.**).*
{{< /md >}}|
| display | nommé |{{< md >}}
Styles disponibles:
* list
* graph
* tree

*NB: Si non renseigné, le style par défaut est **list**.*
{{< /md >}}|
| init | nommé |{{< md >}}
Comportement de l'arborescence à l'initialisation.  
Valeurs possibles:
* collapse
* uncollapse

*NB: Si non renseigné, le comportement par défaut est **uncollapse**.*
{{< /md >}}|

# Exemples
---

| Markdown | Rendu |
| -------- | ----- |
|{{< md >}}
```
{{</*/* treeview /*/*/>}}
```
{{< /md >}}|{{< treeview />}}|
|{{< md >}}
```
{{</*/* treeview
    rootpath="/shortcodes"
/*/*/>}}
```
{{< /md >}}|{{< treeview 
    rootpath="/shortcodes"
/>}}|
|{{< md >}}
```
{{</*/* treeview
    rootpath="/shortcodes"
    display="graph"
/*/*/>}}
```
{{< /md >}}|{{< treeview 
    rootpath="/shortcodes"
    display="graph"
/>}}|
|{{< md >}}
```
{{</*/* treeview
    rootpath="/shortcodes"
    display="tree"
/*/*/>}}
```
{{< /md >}}|{{< treeview 
    rootpath="/shortcodes"
    display="tree"
/>}}|
|{{< md >}}
```
{{</*/* treeview
    rootpath="/shortcodes"
    display="tree"
    init="collapse"
/*/*/>}}
```
{{< /md >}}|{{< treeview 
    rootpath="/shortcodes"
    display="tree"
    init="collapse"
/>}}|
|{{< md >}}
```
{{</*/* treeview
    display="tree"
*/*/>}}
[{
    "kind": "dir",
    "label": "***Répertoire***",
    "content": [{
            "kind": "archive",
            "label": "***Archive***",
            "content": [{
                    "kind": "dir",
                    "label": "***Répertoire** dans une archive*",
                    "content": [{
                            "kind": "file",
                            "label": "***Fichier plat** dans un répertoire dans une archive*"
                        }]
                },{
                    "kind": "file",
                    "label": "***Fichier plat** dans une archive*"
                }]
        },{
            "kind": "file",
            "label": "***Fichier plat** dans un répertoire*"
        }]
},{
    "kind": "default",
    "label": "***Par défaut***"
},{
    "kind": "dir",
    "label": "***Répertoire***"
},{
    "kind": "file",
    "label": "***Fichier***"
},{
    "kind": "home",
    "label": "***Accueil***"
},{
    "kind": "page",
    "label": "***Page***"
},{
    "kind": "section",
    "label": "***Section***"
},{
    "kind": "taxonomy",
    "label": "***Taxonomie***"
},{
    "kind": "term",
    "label": "***Terme de taxonomie***"
},{
    "kind": "archive",
    "label": "***Archive***"
},{
    "kind": "image",
    "label": "***Fichier image***"
},{
    "kind": "video",
    "label": "***Fichier vidéo***"
},{
    "kind": "script",
    "label": "***Script***"
},{
    "kind": "dockerfile",
    "label": "***Dockerfile***"
},{
    "kind": "pdf",
    "label": "***Fichier PDF***"
},{
    "kind": "powerpoint",
    "label": "***Fichier PowerPoint***"
},{
    "kind": "excel",
    "label": "***Fichier Excel***"
},{
    "kind": "csv",
    "label": "***Fichier CSV***"
},{
    "kind": "word",
    "label": "***Fichier Word***"
}]
{{</*/* /treeview */*/>}}
```
{{< /md >}}|{{< treeview
    display="tree"
>}}
[{
    "kind": "dir",
    "label": "***Répertoire***",
    "content": [{
            "kind": "archive",
            "label": "***Archive***",
            "content": [{
                    "kind": "dir",
                    "label": "***Répertoire** dans une archive*",
                    "content": [{
                            "kind": "file",
                            "label": "***Fichier plat** dans un répertoire dans une archive*"
                        }]
                },{
                    "kind": "file",
                    "label": "***Fichier plat** dans une archive*"
                }]
        },{
            "kind": "file",
            "label": "***Fichier plat** dans un répertoire*"
        }]
},{
    "kind": "default",
    "label": "***Par défaut***"
},{
    "kind": "dir",
    "label": "***Répertoire***"
},{
    "kind": "file",
    "label": "***Fichier***"
},{
    "kind": "home",
    "label": "***Accueil***"
},{
    "kind": "page",
    "label": "***Page***"
},{
    "kind": "section",
    "label": "***Section***"
},{
    "kind": "taxonomy",
    "label": "***Taxonomie***"
},{
    "kind": "term",
    "label": "***Terme de taxonomie***"
},{
    "kind": "archive",
    "label": "***Archive***"
},{
    "kind": "image",
    "label": "***Fichier image***"
},{
    "kind": "video",
    "label": "***Fichier vidéo***"
},{
    "kind": "script",
    "label": "***Script***"
},{
    "kind": "dockerfile",
    "label": "***Dockerfile***"
},{
    "kind": "pdf",
    "label": "***Fichier PDF***"
},{
    "kind": "powerpoint",
    "label": "***Fichier PowerPoint***"
},{
    "kind": "excel",
    "label": "***Fichier Excel***"
},{
    "kind": "csv",
    "label": "***Fichier CSV***"
},{
    "kind": "word",
    "label": "***Fichier Word***"
}]
{{< /treeview >}}|
