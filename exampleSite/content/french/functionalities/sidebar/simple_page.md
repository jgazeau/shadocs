---
weight: 6000
title: "Page simple"
description: "Menu latéral: Page simple"
categories: ["Fonctionnalités"]
---

# Description
---

Une page de contenu est définie de la manière suivante:
* une page **\*.md** située dans un **dossier contenant au minimum une page de définition de section (_index.md)**
    {{< treeview
        display="tree"
    >}}
        [{
            "kind": "dir",
            "label": "Section",
                "content": [{
                    "kind": "file",
                    "label": "_index.md"
                  },{
                    "kind": "file",
                    "label": "***page_simple.md***"
                  }]
        }]
    {{< /treeview >}}