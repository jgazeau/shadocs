---
title: "{{< asyncapi >}}"
description: "Shortcode {{< asyncapi >}}."
categories: ["Shortcode"]
tags: ["Gestion du contenu"]
---

# Description
---

Le shortcode **asyncapi** permet d'afficher de la documentation AsyncAPI associée à un service.

# Paramètres
---

| Nom | Type(nommé/positionnel) | Description |
| --- | ----------------------- | ----------- |
| source | nommé |{{< md >}}
Source de la documentation AsyncAPI.  
*NB: La source peut-etre définie par un chemin local ou une URL.*
{{< /md >}}|

# Exemples
---

| Markdown | Rendu |
| -------- | ----- |
|{{< md >}}
```
{{</*/* asyncapi source="/asyncapi/example.yaml" */*/>}}
```
{{< /md >}}|{{< asyncapi source="/asyncapi/example.yaml" >}}|
|{{< md >}}
```
{{</*/* asyncapi source="https://raw.githubusercontent.com/asyncapi/spec/master/examples/simple.yml" */*/>}}
```
{{< /md >}}|{{< asyncapi source="https://raw.githubusercontent.com/asyncapi/spec/master/examples/simple.yml" >}}|
