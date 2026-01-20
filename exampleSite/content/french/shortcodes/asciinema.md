---
title: "{{< asciinema >}}"
description: "Shortcode {{< asciinema >}}."
categories: ["Shortcode"]
tags: ["Gestion du contenu"]
---

# Description
---

Le shortcode **asciinema** permet d'afficher des enregistrements Asciinema.

# Paramètres
---

| Nom | Type(nommé/positionnel) | Description |
| --- | ----------------------- | ----------- |
| source | nommé |{{< md >}}
Source de l'enregistrement Asciinema.  
*NB: La source peut-etre définie par un chemin local ou une URL.*
{{< /md >}}|

# Exemples
---

| Markdown | Rendu |
| -------- | ----- |
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
