---
title: "{{< alert >}}"
description: "Shortcode {{< alert >}}."
categories: ["Shortcode"]
tags: ["Gestion du contenu"]
---

# Description
---

Le shortcode **alert** permet de mettre en valeur du texte suivant différents styles.

# Paramètres
---

| Nom | Type(nommé/positionnel) | Description |
| --- | ----------------------- | ----------- |
| type| nommé |{{< md >}}
Styles disponibles:
* info
* success
* warning
* error

*NB: Si non renseigné, le style par défaut est **info**.*
{{< /md >}}|

# Exemples
---

| Markdown | Rendu |
| -------- | ----- |
|{{< md >}}
```
{{</*/* alert */*/>}}
Je suis une alerte de type **info** par défaut
{{</*/* /alert */*/>}}
```
{{< /md >}}|{{< alert >}}
Je suis une alerte de type **info** par défaut
{{< /alert >}}|
|{{< md >}}
```
{{</*/* alert
    type="info"
*/*/>}}
Je suis une alerte de type **info**
{{</*/* /alert */*/>}}
```
{{< /md >}}|{{< alert
    type="info"
>}}
Je suis une alerte de type **info**
{{< /alert >}}|
|{{< md >}}
```
{{</*/* alert
    type="success"
*/*/>}}
Je suis une alerte de type **success**
{{</*/* /alert */*/>}}
```
{{< /md >}}|{{< alert
    type="success"
>}}
Je suis une alerte de type **success**
{{< /alert >}}|
|{{< md >}}
```
{{</*/* alert
    type="warning"
*/*/>}}
Je suis une alerte de type **warning**
{{</*/* /alert */*/>}}
```
{{< /md >}}|{{< alert
    type="warning"
>}}
Je suis une alerte de type **warning**
{{< /alert >}}|
|{{< md >}}
```
{{</*/* alert
    type="error"
*/*/>}}
Je suis une alerte de type **error**
{{</*/* /alert */*/>}}
```
{{< /md >}}|{{< alert
    type="error"
>}}
Je suis une alerte de type **error**
{{< /alert >}}|
