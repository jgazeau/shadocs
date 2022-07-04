---
weight: 2000
title: "Section"
description: "Menu latéral: Section"
categories: ["Fonctionnalités"]
---

# Description
---

Une section est définie automatiquement de la manière suivante:
* une page de contenu **_index.md** située dans un **dossier contenant au moins une autre page simple de contenu**
    {{< treeview
        display="tree"
    >}}
        [{
            "kind": "dir",
            "label": "Section",
                "content": [{
                    "kind": "file",
                    "label": "***_index.md***"
                  },{
                    "kind": "file",
                    "label": "..."
                  }]
        }]
    {{< /treeview >}}