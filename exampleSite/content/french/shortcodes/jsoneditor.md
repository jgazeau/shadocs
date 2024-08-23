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
| postAnalyzeFunction | nommé |{{< md >}}
Nom de la méthode globale Javascript utilisé pour exécuter une validation spécifique et supplémentaire juste après la validation standard Jsoneditor.  
* **input**: JSON Schema, JSON généré depuis le JSON Schema par Jsoneditor
* **output**: List d'***erreurs*** (Liste vide si aucune erreur), avec les ***erreurs*** de la forme:
  ```
  {
    path: [CHEMIN_DU_CHAMP_EN_ERREUR],
    message: [MESSAGE_D'ERREUR]
  }
  ```
{{< /md >}}|
| postProcessFunction | nommé |{{< md >}}
Nom de la méthode globale Javascript utilisée pour exécuter un processus spécifique et supplémentaire juste après la génération standard du JSON de Jsoneditor.  
* **input**: JSON Schema, JSON généré depuis le JSON Schema par Jsoneditor
* **output**: JSON à exporter
{{< /md >}}|
| filenameToDownloadFunction | nommé |{{< md >}}
Nom de la méthode globale Javascript utilisée pour définir le nom du fichier à télécharger.  
* **input**: JSON Schema, JSON généré depuis le JSON Schema par Jsoneditor
* **output**: Nom du fichier à télécharger

*NB: Par défaut le nom du fichier est égal au **schema.title** ou en dernier recours à **l'ID du conteneur HTML jsoneditor**.*
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
  postAnalyzeFunction="examplePostAnalyzeFunction"
*/*/>}}
```
{{< /md >}}|{{< jsoneditor source="https://raw.githubusercontent.com/json-schema-org/website/main/public/data/getting-started-examples/schemas/default.json" postAnalyzeFunction="examplePostAnalyzeFunction" >}}|
|{{< md >}}
```
{{</*/* jsoneditor
  source="https://raw.githubusercontent.com/json-schema-org/website/main/public/data/getting-started-examples/schemas/default.json"
  postProcessFunction="examplePostProcessFunction"
*/*/>}}
```
{{< /md >}}|{{< jsoneditor source="https://raw.githubusercontent.com/json-schema-org/website/main/public/data/getting-started-examples/schemas/default.json" postProcessFunction="examplePostProcessFunction" >}}|
|{{< md >}}
```
{{</*/* jsoneditor
  source="https://raw.githubusercontent.com/json-schema-org/website/main/public/data/getting-started-examples/schemas/default.json"
  filenameToDownloadFunction="exampleFilenameToDownloadFunction"
*/*/>}}
```
{{< /md >}}|{{< jsoneditor source="https://raw.githubusercontent.com/json-schema-org/website/main/public/data/getting-started-examples/schemas/default.json" filenameToDownloadFunction="exampleFilenameToDownloadFunction" >}}|
|{{< md >}}
```
{{</*/* jsoneditor source="jsoneditor/example.json" */*/>}}
```
{{< /md >}}|{{< jsoneditor source="jsoneditor/example.json" >}}|
