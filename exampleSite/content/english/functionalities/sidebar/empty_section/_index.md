---
weight: 1000
title: "Empty section"
description: "Sidebar: Empty section"
categories: ["Functionalities"]
---

# Description
---

An empty section will be **displayed in same way as a single page** and therefore can be defined using the following methods:
* a **_index.md** content page located in a **folder containing no other single content page**
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
* a content page defined by a **\*.md** page located in **any folder**
    {{< treeview
        display="tree"
    >}}
        [{
            "kind": "file",
            "label": "Section",
                "content": [{
                    "kind": "file",
                    "label": "***empty_section.md***"
                  },{
                    "kind": "file",
                    "label": "..."
                  }]
        }]
    {{< /treeview >}}