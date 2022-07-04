---
title: "{{< intro >}}"
description: "Shortcode {{< intro >}}."
categories: ["Shortcode"]
tags: ["Gestion du contenu"]
---

# Description
---

Le shortcode **intro** permet d'utiliser la librairie [intro.js](https://introjs.com/) afin de générer une intro de démonstration.

## Configuration de intro.js

Le contenu du shortcode définit la configuration au **format JSON** de l'intro. De plus, des paramètres ont été ajoutés dans le thème afin de permettre un paramétrage simplifié et adapté.

{{< snippet
    caption="Configuration JSON du contenu du shortcode intro"
    codelang="json"
>}}
{
  "[...]",
  "[Options standard intro.js]": "https://introjs.com/docs/intro/options (Cf. liste des options par défaut du thème ci-dessous)",
  "[...]",
  "onbeforeexit": "Code javascript a executer avant la sortie de l'intro (lié à l'API onbeforeexit standard de intro.js)",
  "onexit": "Code javascript a executer à la sortie de l'intro (lié à l'API onexit standard de intro.js)",
  "oncomplete": "Code javascript a executer à la complétion de l'intro (lié à l'API oncomplete standard de intro.js)",
  "steps": [
    {
      "title": "Titre de l'étape (lié à l'option title standard de intro.js)",
      "element": "Element à surligner (lié à l'option element standard de intro.js (⚠ seule la sélection d'un élément par id est disponible))",
      "intro": "Contenu de l'étape (lié à l'option intro standard de intro.js)",
      "position": "Position de la fenêtre d'aide de l'étape (lié à l'option position standard de intro.js)",
      "onchange": "Code javascript a executer au changement de l'étape (lié à l'API onchange standard de intro.js)",
      "onbeforechange": "Code javascript a executer avant le changement de l'étape (lié à l'API onbeforechange standard de intro.js)",
      "onafterchange": "Code javascript a executer après le changement de l'étape (lié à l'API onafterchange standard de intro.js)",
      "triggeronly": "Liste des déclencheurs permettant l'execution de l'étape (Cf. liste des déclencheurs ci-dessous)",
      "triggerexcept": "Liste des déclencheurs ne permettant pas l'execution de l'étape (Cf. liste des déclencheurs ci-dessous)"
    }]
}
{{< /snippet >}}

## Déclencheurs d'étape

Les déclencheurs d'étapes permettent d'executer ou non une étape de l'intro.  
Si un des déclencheurs est défini dans l'étape et que celui-ci est aussi actif sur le site, alors l'étape est executée ou non suivant le paramétrage.

| Nom | Description |
| --- | ----------- |
| desktop | Activé si la fenêtre est supérieure ou égale à 1024 pixels de large |
| touch | Activé si la fenêtre est inférieure à 1024 pixels de large et supérieur ou égale à 769 pixels de large |
| mobile | Activé si la fenêtre est inférieure à 769 pixels de large |
| hover | Activé si l'appareil permet le survol d'élément (via un dispositif de pointage) |
| nohover | Activé si l'appareil ne permet pas le survol d'élément (appareils tactiles) |

## Options par défaut

{{< snippet
    caption="Options intro.js par défaut du thème"
    codelang="javascript"
>}}
const themeCommonOptions = {
  nextLabel:          {{i18n "intro_nextlabel"}},
  prevLabel:          {{i18n "intro_prevlabel"}},
  skipLabel:          {{i18n "intro_skiplabel"}},
  doneLabel:          {{i18n "intro_donelabel"}},
  hidePrev:           false,
  hideNext:           false,
  nextToDone:         true,
  exitOnEsc:          true,
  exitOnOverlayClick: true,
  showStepNumbers:    false,
  keyboardNavigation: true,
  showButtons:        true,
  showBullets:        true,
  showProgress:       true,
  scrollToElement:    true,
  scrollTo:           "element",
  scrollPadding:      30,
  overlayOpacity:     0.8,
  disableInteraction: true
{{< /snippet >}}

# Paramètres
---

| Nom | Type(nommé/positionnel) | Description |
| --- | ----------------------- | ----------- |
| introtitle| nommé |{{< md >}}
Titre du bouton de lancement de l'intro.  
*NB: Si non renseigné, le titre est un texte par défaut défini par le thème.*
{{< /md >}}|
| id | nommé |{{< md >}}
Identifiant donné à l'élément HTML du bouton de lancement de l'intro.  
*NB: Si non renseigné, l'identifiant est généré par défaut par le thème et est incrémenté à chaque nouveau shortcode intro défini dans la page (intro-X).*
{{< /md >}}|

# Exemples
---

| Markdown | Rendu |
| -------- | ----- |
|{{< md >}}
```
{{</*/* intro
  introtitle="Je suis une intro"
  id="introTest"
*/*/>}}
{
  "showBullets": false,
  "showStepNumbers": true,
  "onexit": "console.log(\"Je quitte l'intro\");",
  "oncomplete": "console.log(\"Je quitte l'intro après l'avoir complété\");",
  "steps": [
    {
      "title": "Etape 1",
      "intro": "Je suis l'étape 1 pour tout le monde",
      "onchange": "console.log(\"J'arrive dans l'étape 1 pour tout le monde\");"
    },{
      "title": "Etape 2",
      "intro": "Je suis l'étape 2 pour le déclencheur desktop",
      "onchange": "console.log(\"J'arrive dans l'étape 2 pour le déclencheur desktop\");",
      "triggeronly": ["desktop"]
    },{
      "title": "Etape 2",
      "intro": "Je suis l'étape 2 pour les déclencheurs mobile et touch",
      "onchange": "console.log(\"J'arrive dans l'étape 2 pour les déclencheurs mobile et touch\");",
      "triggeronly": ["mobile","touch"]
    },{
      "title": "Etape 3",
      "intro": "Je suis l'étape 3 pour tout le monde sauf le déclencheur hover",
      "onchange": "console.log(\"J'arrive dans l'étape 3 pour tout le monde sauf le déclencheur hover\");",
      "triggerexcept": ["hover"]
    },{
      "title": "Etape 3",
      "intro": "Je suis l'étape 3 pour tout le monde sauf le déclencheur nohover",
      "onchange": "console.log(\"J'arrive dans l'étape 3 pour tout le monde sauf le déclencheur nohover\");",
      "triggerexcept": ["nohover"]
    },{
      "title": "Etape 4",
      "element": "#globalLogo",
      "intro": "Je suis l'étape 4 pour tout le monde sur l'élément #globalLogo",
      "onchange": "console.log(\"J'arrive dans l'étape 4 pour tout le monde sur l'élément #globalLogo\");"
    },{
      "title": "Etape 5",
      "element": "#globalLogo",
      "intro": "Je suis l'étape 5 pour tout le monde sur l'élément #globalLogo en position droite",
      "position": "right",
      "onchange": "console.log(\"J'arrive dans l'étape 5 pour tout le monde sur l'élément #globalLogo en position droite\");"
    }]
}
{{</*/* /intro */*/>}}
```
{{< /md >}}|{{< intro
  introtitle="Je suis une intro"
  id="introTest"
>}}
{
  "showBullets": false,
  "showStepNumbers": true,
  "onexit": "console.log(\"Je quitte l'intro\");",
  "oncomplete": "console.log(\"Je quitte l'intro après l'avoir complété\");",
  "steps": [
    {
      "title": "Etape 1",
      "intro": "Je suis l'étape 1 pour tout le monde",
      "onchange": "console.log(\"J'arrive dans l'étape 1 pour tout le monde\");"
    },{
      "title": "Etape 2",
      "intro": "Je suis l'étape 2 pour le déclencheur desktop",
      "onchange": "console.log(\"J'arrive dans l'étape 2 pour le déclencheur desktop\");",
      "triggeronly": ["desktop"]
    },{
      "title": "Etape 2",
      "intro": "Je suis l'étape 2 pour les déclencheurs mobile et touch",
      "onchange": "console.log(\"J'arrive dans l'étape 2 pour les déclencheurs mobile et touch\");",
      "triggeronly": ["mobile","touch"]
    },{
      "title": "Etape 3",
      "intro": "Je suis l'étape 3 pour tout le monde sauf le déclencheur hover",
      "onchange": "console.log(\"J'arrive dans l'étape 3 pour tout le monde sauf le déclencheur hover\");",
      "triggerexcept": ["hover"]
    },{
      "title": "Etape 3",
      "intro": "Je suis l'étape 3 pour tout le monde sauf le déclencheur nohover",
      "onchange": "console.log(\"J'arrive dans l'étape 3 pour tout le monde sauf le déclencheur nohover\");",
      "triggerexcept": ["nohover"]
    },{
      "title": "Etape 4",
      "element": "#globalLogo",
      "intro": "Je suis l'étape 4 pour tout le monde sur l'élément #globalLogo",
      "onchange": "console.log(\"J'arrive dans l'étape 4 pour tout le monde sur l'élément #globalLogo\");"
    },{
      "title": "Etape 5",
      "element": "#globalLogo",
      "intro": "Je suis l'étape 5 pour tout le monde sur l'élément #globalLogo en position droite",
      "position": "right",
      "onchange": "console.log(\"J'arrive dans l'étape 5 pour tout le monde sur l'élément #globalLogo en position droite\");"
    }]
}
{{< /intro >}}|
