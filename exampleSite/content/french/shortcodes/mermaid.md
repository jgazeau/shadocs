---
title: "{{< mermaid >}}"
description: "Shortcode {{< mermaid >}}."
categories: ["Shortcode"]
---

# Description
---

Le shortcode **mermaid** permet d'utiliser la librairie [mermaid.js](https://mermaid-js.github.io/mermaid/) afin de générer des diagrammes et graphiques.
Par défaut le thème génère un élement global contenant:
* le svg rendu par mermaid.js
* un icone de téléchargement du svg rendu
* un icone de rechargement du svg rendu

# Paramètres
---

| Nom | Type(nommé/positionnel) | Description |
| --- | ----------------------- | ----------- |
| id | nommé |{{< md >}}
Identifiant donné à l'élément global contenant le svg généré par mermaid.  
*NB: Si non renseigné, l'identifiant est généré par défaut par le thème et est incrémenté à chaque nouveau shortcode mermaid défini dans la page (mermaid-X).*
{{< /md >}}|
| class | nommé | Classe css donnée à l'élément global contenant le svg généré par mermaid. |

# Exemples
---

| Markdown | Rendu |
| -------- | ----- |
|{{< md >}}
```
{{</* mermaid
  id="mermaidIdX"
  class="mermaidClassX"
*/>}}
graph TB
    subgraph Étape 2
    b1(Action 2.1) --> b2(Action 2.2)
    end
    subgraph Étape 1
    a1(Action 1.1) --> a2(Action 1.2)
    end
{{</* /mermaid */>}}
```
{{< /md >}}|{{< mermaid
  id="mermaidIdX"
  class="mermaidClassX"
>}}
graph TB
    subgraph Étape 2
    b1(Action 2.1) --> b2(Action 2.2)
    end
    subgraph Étape 1
    a1(Action 1.1) --> a2(Action 1.2)
    end
{{< /mermaid >}}|
