---
weight: 7000
title: "Mermaid"
description: "How to use Mermaid?"
titleIcon: "fa-solid fa-chart-column"
categories: ["Functionalities"]
tags: ["Content management"]
---

# Description
---

By default the theme manages the [Mermaid](https://mermaid-js.github.io/mermaid/#/) format, allowing to display diagrams created from text and code, while adding several utility functionalities.

The several characteristics and functionalities of the Mermaid management in the theme are:
* rendered from a fenced code block and `mermaid` highlight language
* export button associated to each rendered svg
* preview (click on the rendered image)

# Examples
---

| Markdown | Rendering |
| -------- | --------- |
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