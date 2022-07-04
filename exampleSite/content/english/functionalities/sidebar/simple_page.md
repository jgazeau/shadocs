---
weight: 6000
title: "Simple page"
description: "Sidebar: Simple page"
categories: ["Functionalities"]
---

# Description
---

A content page is defined as follows:
* **\*.md** page located in a **folder containing at least one section definition page (_index.md)**
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
                    "label": "***simple_page.md***"
                  }]
        }]
    {{< /treeview >}}