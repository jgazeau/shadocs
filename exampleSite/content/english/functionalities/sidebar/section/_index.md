---
weight: 2000
title: "Section"
description: "Sidebar: Section"
categories: ["Functionalities"]
---

# Description
---

A section is automatically defined as follows:
* a **_index.md** content page located in a **folder containing at least one other simple content page**
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