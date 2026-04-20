---
title: "{{< highcharts >}}"
description: "Shortcode {{< highcharts >}}."
categories: ["Shortcode"]
tags: ["Gestion du contenu"]
---

# Description
---

Le shortcode **highcharts** permet d'afficher des graphes [Highcharts](https://www.highcharts.com/).

# Paramètres
---

| Nom | Type(nommé/positionnel) | Description |
| --- | ----------------------- | ----------- |
| id | nommé |{{< md >}}
Id du conteneur Highcharts.  
*NB: Cet Id peut être utilisé en tant que paramètre **renderTo** de la [classe Highcharts.Chart](https://api.highcharts.com/class-reference/Highcharts.Chart).*
{{< /md >}}|
| assets | nommé |{{< md >}}
Liste séparée par des virgules des [assets Highcharts](https://cdnjs.com/libraries/highcharts) minifiés à charger dans la page.  
*NB: Tous les assets minifiés de Highcharts sont inclus dans le thème et disponible dans **assets/js/external/highcharts**.*
{{< /md >}}|
| source | nommé |{{< md >}}
Source du graphe Highcharts.  
*NB: La source peut-etre définie par un chemin local ou une URL.*
{{< /md >}}|

# Exemples
---

| Markdown | Rendu |
| -------- | ----- |
|{{< md >}}
```
{{</*/* highcharts
  id="highcharts1"
  assets="js/external/highcharts/highcharts.min.js"
  source="/highcharts/example-default.json"
*/*/>}}
```
{{< /md >}}|{{< highcharts
  id="highcharts1"
  assets="js/external/highcharts/highcharts.min.js"
  source="/highcharts/example-default.json"
>}}|
|{{< md >}}
```
{{</*/* highcharts
  id="highcharts2"
  assets="js/external/highcharts/highcharts.min.js,js/external/highcharts/modules/gantt.min.js"
  source="/highcharts/example-gantt.json"
*/*/>}}
```
{{< /md >}}|{{< highcharts
  id="highcharts2"
  assets="js/external/highcharts/highcharts.min.js,js/external/highcharts/modules/gantt.min.js"
  source="/highcharts/example-gantt.json"
>}}|
|{{< md >}}
```
{{</*/* highcharts
  id="highcharts3"
  assets="js/external/highcharts/highcharts.min.js,js/external/highcharts/modules/map.min.js"
  source="/highcharts/example-maps.json"
*/*/>}}
```
{{< /md >}}|{{< highcharts
  id="highcharts3"
  assets="js/external/highcharts/highcharts.min.js,js/external/highcharts/modules/map.min.js"
  source="/highcharts/example-maps.json"
>}}|
|{{< md >}}
```
{{</*/* highcharts
  id="highcharts4"
  assets="js/external/highcharts/highcharts.min.js,js/external/highcharts/modules/stock.min.js,js/external/highcharts/highcharts-more.min.js,js/external/highcharts/modules/exporting.min.js,js/external/highcharts/modules/export-data.min.js,js/external/highcharts/modules/accessibility.min.js,js/external/highcharts/themes/adaptive.min.js"
  source="/highcharts/example-stock.json"
*/*/>}}
```
{{< /md >}}|{{< highcharts
  id="highcharts4"
  assets="js/external/highcharts/highcharts.min.js,js/external/highcharts/modules/stock.min.js,js/external/highcharts/highcharts-more.min.js,js/external/highcharts/modules/exporting.min.js,js/external/highcharts/modules/export-data.min.js,js/external/highcharts/modules/accessibility.min.js,js/external/highcharts/themes/adaptive.min.js"
  source="/highcharts/example-stock.json"
>}}|
