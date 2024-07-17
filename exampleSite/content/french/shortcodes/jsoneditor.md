---
title: "{{< jsoneditor >}}"
description: "Shortcode {{< jsoneditor >}}."
categories: ["Shortcode"]
tags: ["Gestion du contenu"]
---

# Description
---

Le shortcode **jsoneditor** permet d'afficher un formulaire basé sur un JSON Schema. Ce formulaire peut être utilisé pour exporter (copier dans le presse-papiers/télécharger en tant que fichier) le JSON associé.

# Paramètres
---

| Nom | Type(nommé/positionnel) | Description |
| --- | ----------------------- | ----------- |
| source | nommé |{{< md >}}
Source du JSON Schema.  
*NB: La source peut-etre définie par un chemin local ou une URL.*
{{< /md >}}|
| postProcessFunction | named |{{< md >}}
Nom de la méthode globale Javascript à exécuter après validation du schéma JSON et permettant de traiter le JSON généré avant de l'exporter.  
* **input**: JSON généré depuis le JSON Schema
* **output**: JSON à exporter
{{< /md >}}|

{{< snippet
    file="assets/js/jsoneditor.js"
    caption="jsoneditor.js"
    codelang="js"
/>}}

# Exemples
---

| Markdown | Rendu |
| -------- | ----- |
|{{< md >}}
```
{{</*/* jsoneditor source="https://raw.githubusercontent.com/json-schema-org/website/main/public/data/getting-started-examples/schemas/default.json" */*/>}}
```
{{< /md >}}|{{< jsoneditor source="https://raw.githubusercontent.com/json-schema-org/website/main/public/data/getting-started-examples/schemas/default.json" >}}|
|{{< md >}}
```
{{</*/* jsoneditor
  source="https://raw.githubusercontent.com/json-schema-org/website/main/public/data/getting-started-examples/schemas/default.json"
  postProcessFunction="examplePostProcessJson"
*/*/>}}
```
{{< /md >}}|{{< jsoneditor source="https://raw.githubusercontent.com/json-schema-org/website/main/public/data/getting-started-examples/schemas/default.json" postProcessFunction="examplePostProcessJson" >}}|
|{{< md >}}
```
{{</*/* jsoneditor source="/jsoneditor/example.json" */*/>}}
```
{{< /md >}}|{{< jsoneditor source="/jsoneditor/example.json" >}}|
