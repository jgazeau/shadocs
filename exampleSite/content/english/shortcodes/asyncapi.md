---
title: "{{< asyncapi >}}"
description: "Shortcode {{< asyncapi >}}."
categories: ["Shortcode"]
tags: ["Content management"]
---

# Description
---

The **asyncapi** shortcode allows to display an AsyncAPI documentation associated to a service.

# Parameters
---

| Name | Type(named/positional) | Description |
| ---- | ---------------------- | ----------- |
| source | named |{{< md >}}
Source of the AsyncAPI documentation.  
*NB: The source can be either a local path or an URL.*
{{< /md >}}|

# Examples
---

| Markdown | Rendering |
| -------- | --------- |
|{{< md >}}
```
{{</*/* asyncapi source="asyncapi/example.yaml" */*/>}}
```
{{< /md >}}|{{< asyncapi source="asyncapi/example.yaml" >}}|
|{{< md >}}
```
{{</*/* asyncapi source="https://raw.githubusercontent.com/asyncapi/spec/master/examples/simple-asyncapi.yml" */*/>}}
```
{{< /md >}}|{{< asyncapi source="https://raw.githubusercontent.com/asyncapi/spec/master/examples/simple-asyncapi.yml" >}}|
