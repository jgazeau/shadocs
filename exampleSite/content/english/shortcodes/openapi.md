---
title: "{{< openapi >}}"
description: "Shortcode {{< openapi >}}."
categories: ["Shortcode"]
tags: ["Content management"]
---

# Description
---

The **openapi** shortcode allows to display an OpenAPI documentation associated to a service.

# Paramètres
---

| Name | Type(named/positional) | Description |
| ---- | ---------------------- | ----------- |
| source | named |{{< md >}}
Source of the OpenAPI documentation.  
*NB: The source can be either a local path or an URL.*
{{< /md >}}|

# Examples
---

| Markdown | Rendering |
| -------- | --------- |
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
