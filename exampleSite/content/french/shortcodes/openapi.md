---
title: "{{< openapi >}}"
description: "Shortcode {{< openapi >}}."
categories: ["Shortcode"]
tags: ["Gestion du contenu"]
---

# Description
---

Le shortcode **openapi** permet d'afficher de la documentation OpenAPI associée à un service.

# Paramètres
---

| Nom | Type(nommé/positionnel) | Description |
| --- | ----------------------- | ----------- |
| source | nommé |{{< md >}}
Source de la documentation OpenAPI.  
*NB: La source peut-etre définie par un chemin local ou une URL.*
{{< /md >}}|

# Exemples
---

| Markdown | Rendu |
| -------- | ----- |
|{{< md >}}
```
{{</*/* openapi source="/openapi/example.yaml" */*/>}}
```
{{< /md >}}|{{< openapi source="/openapi/example.yaml" >}}|
|{{< md >}}
```
{{</*/* openapi source="https://petstore.swagger.io/v2/swagger.json" */*/>}}
```
{{< /md >}}|{{< openapi source="https://petstore.swagger.io/v2/swagger.json" >}}|
