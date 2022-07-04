---
weight: 1000
title: "Section vide"
description: "Menu latéral: Section vide"
categories: ["Fonctionnalités"]
---

# Description
---

Une section vide sera **affichée de la même manière qu'une page simple** et peut donc être définie des manières suivantes:
* une page de contenu **_index.md** située dans un **dossier ne contenant aucune autre page simple de contenu**
    {{< treeview
        display="tree"
    >}}
        [{
            "kind": "dir",
            "label": "Section",
                "content": [{
                    "kind": "file",
                    "label": "***_index.md***"
                  }]
        }]
    {{< /treeview >}}
* une page de contenu définie par une page **\*.md** située dans **n'importe quel dossier**
    {{< treeview
        display="tree"
    >}}
        [{
            "kind": "file",
            "label": "Section",
                "content": [{
                    "kind": "file",
                    "label": "***section_vide.md***"
                  },{
                    "kind": "file",
                    "label": "..."
                  }]
        }]
    {{< /treeview >}}