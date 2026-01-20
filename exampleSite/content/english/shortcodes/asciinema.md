---
title: "{{< asciinema >}}"
description: "Shortcode {{< asciinema >}}."
categories: ["Shortcode"]
tags: ["Content management"]
---

# Description
---

The **asciinema** shortcode allows to display an Asciinema record.

# Parameters
---

| Name | Type(named/positional) | Description |
| ---- | ---------------------- | ----------- |
| source | named |{{< md >}}
Source of the Asciinema record.  
*NB: The source can be either a local path or an URL.*
{{< /md >}}|

# Examples
---

| Markdown | Rendering |
| -------- | --------- |
|{{< md >}}
```
{{</*/* asciinema
  source="asciinema/example.cast"
*/*/>}}
```
{{< /md >}}|{{< asciinema
  source="asciinema/example.cast"
>}}|
|{{< md >}}
```
{{</*/* asciinema
  source="asciinema/example.cast"
  options={"autoPlay":true,"loop":true,"speed":2}
*/*/>}}
```
{{< /md >}}|{{< asciinema
  source="asciinema/example.cast"
  options={"autoPlay":true,"loop":true,"speed":2}
>}}|
|{{< md >}}
```
{{</*/* asciinema
  embedded-player="<script src='https://asciinema.org/a/bJMOlPe5F4mFLY0Rl6fiJSOp3.js' id='asciicast-bJMOlPe5F4mFLY0Rl6fiJSOp3' async></script>"
*/*/>}}
```
{{< /md >}}|{{< asciinema
  embedded-player="<script src='https://asciinema.org/a/bJMOlPe5F4mFLY0Rl6fiJSOp3.js' id='asciicast-bJMOlPe5F4mFLY0Rl6fiJSOp3' async></script>"
>}}|
