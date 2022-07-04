---
title: "{{< treeview >}}"
description: "Shortcode {{< treeview >}}."
categories: ["Shortcode"]
tags: ["Content management"]
---

# Description
---

The **treeview** shortcode allows to display a tree structure in various forms.

# Parameters
---

| Name | Type(named/positional) | Description |
| ---- | ---------------------- | ----------- |
| rootpath | named |{{< md >}}
Top level tree path.  
*NB: If not specified, the current page path is used (**.**).*
{{< /md >}}|
| display | named |{{< md >}}
Styles available:
* list
* graph
* tree

*NB: If not specified, the default style is **list**.*
{{< /md >}}|
| init | named |{{< md >}}
Tree behavior at initialization.  
Possible values:
* collapse
* uncollapse

*NB: If not specified, the default behavior is **uncollapse**.*
{{< /md >}}|

# Examples
---

| Markdown | Rendering |
| -------- | --------- |
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
    "label": "***Directory***",
    "content": [{
            "kind": "archive",
            "label": "***Archive***",
            "content": [{
                    "kind": "dir",
                    "label": "***Directory** in an archive*",
                    "content": [{
                            "kind": "file",
                            "label": "***Flat file** in a directory in an archive*"
                        }]
                },{
                    "kind": "file",
                    "label": "***Flat file** in an archive*"
                }]
        },{
            "kind": "file",
            "label": "***Flat file** in a directory*"
        }]
},{
    "kind": "default",
    "label": "***Default***"
},{
    "kind": "dir",
    "label": "***Directory***"
},{
    "kind": "file",
    "label": "***File***"
},{
    "kind": "home",
    "label": "***Home***"
},{
    "kind": "page",
    "label": "***Page***"
},{
    "kind": "section",
    "label": "***Section***"
},{
    "kind": "taxonomy",
    "label": "***Taxonomy***"
},{
    "kind": "term",
    "label": "***Taxonomy's term***"
},{
    "kind": "archive",
    "label": "***Archive***"
},{
    "kind": "image",
    "label": "***Image file***"
},{
    "kind": "video",
    "label": "***Video file***"
},{
    "kind": "script",
    "label": "***Script***"
},{
    "kind": "dockerfile",
    "label": "***Dockerfile***"
},{
    "kind": "pdf",
    "label": "***PDF file***"
},{
    "kind": "powerpoint",
    "label": "***PowerPoint file***"
},{
    "kind": "excel",
    "label": "***Excel file***"
},{
    "kind": "csv",
    "label": "***CSV file***"
},{
    "kind": "word",
    "label": "***Word file***"
}]
{{</*/* /treeview */*/>}}
```
{{< /md >}}|{{< treeview
    display="tree"
>}}
[{
    "kind": "dir",
    "label": "***Directory***",
    "content": [{
            "kind": "archive",
            "label": "***Archive***",
            "content": [{
                    "kind": "dir",
                    "label": "***Directory** in an archive*",
                    "content": [{
                            "kind": "file",
                            "label": "***Flat file** in a directory in an archive*"
                        }]
                },{
                    "kind": "file",
                    "label": "***Flat file** in an archive*"
                }]
        },{
            "kind": "file",
            "label": "***Flat file** in a directory*"
        }]
},{
    "kind": "default",
    "label": "***Default***"
},{
    "kind": "dir",
    "label": "***Directory***"
},{
    "kind": "file",
    "label": "***File***"
},{
    "kind": "home",
    "label": "***Home***"
},{
    "kind": "page",
    "label": "***Page***"
},{
    "kind": "section",
    "label": "***Section***"
},{
    "kind": "taxonomy",
    "label": "***Taxonomy***"
},{
    "kind": "term",
    "label": "***Taxonomy's term***"
},{
    "kind": "archive",
    "label": "***Archive***"
},{
    "kind": "image",
    "label": "***Image file***"
},{
    "kind": "video",
    "label": "***Video file***"
},{
    "kind": "script",
    "label": "***Script***"
},{
    "kind": "dockerfile",
    "label": "***Dockerfile***"
},{
    "kind": "pdf",
    "label": "***PDF file***"
},{
    "kind": "powerpoint",
    "label": "***PowerPoint file***"
},{
    "kind": "excel",
    "label": "***Excel file***"
},{
    "kind": "csv",
    "label": "***CSV file***"
},{
    "kind": "word",
    "label": "***Word file***"
}]
{{< /treeview >}}|
