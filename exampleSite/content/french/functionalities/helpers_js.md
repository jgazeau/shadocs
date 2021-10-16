---
weight: 3220
title: "Fonctions d'aide Javascript"
description: "Comment utiliser les fonctions d'aide Javascript?"
titleIcon: "fab fa-js-square"
categories: ["Fonctionnalités"]
---

# Description
---

Afin de faciliter l'utilisation du thème, celui-ci met à disposition des fonctions d'aide javascripts définies dans le fichier **assets/js/theme/modules/helpers.js**.
Ces fonctions sont définies de manières globales à l'aide du fichier **assets/js/theme/modules/helpersGlobal.js** et peuvent donc être appelées depuis n'importe quel scope.

# Fonctions d'aide javascript
---

| Code | Description |
| ---- | ----------- |
| closeModals(modal); |{{< md >}}
Fonction qui gère la fermeture des fenêtres modales:
* Si renseigné, seul la fenêtre modale définie en entrée est fermée
* Si aucune entrée, toutes les fenêtres modales sont fermées
{{< /md >}}|
| disableSmoothScroll(); |{{< md >}}
Fonction désactivant le défilement doux du contenu principal.
{{< /md >}}|
| enableSmoothScroll(); |{{< md >}}
Fonction activant le défilement doux du contenu principal.
{{< /md >}}|
| getFirstVisibleElement(selector); |{{< md >}}
Function récupérant le premier élement visible d'un sélecteur CSS:
* selector
    * [sélecteur CSS](https://developer.mozilla.org/docs/Web/CSS/CSS_Selectors)
{{< /md >}}|
| manageDefaultCollapsibleSidebar(); |{{< md >}}
Fonction qui gère le comportement par défaut du menu latéral:
* Si la fenêtre est supérieure ou égale à 1024 pixels de large, le menu est développé
* Si la fenêtre est inférieure à 1024 pixels de large, le menu est réduit
{{< /md >}}|
| toggleExtendMenu(force); |{{< md >}}
Fonction qui gère le comportement du menu d'extension de la barre de navigation (uniquement si celui-ci est visible):
* force
    * true: le menu d'extension est affiché
    * false: le menu d'extension est caché
{{< /md >}}|
| toggleSidebar(force, noTransition); |{{< md >}}
Fonction qui gère le comportement du menu latéral:
* force
    * true: le menu latéral est developpé
    * false: le menu latéral est réduit
* noTransition
    * true: désactive l'animation de transition du menu
    * false: active l'animation de transition du menu (comportement par défaut)
{{< /md >}}|
| toggleSidebarEntry(rubrique, force); |{{< md >}}
Fonction qui gère le comportement d'une rubrique du menu latéral:
* rubrique
    * rubrique du ménu permettant de développer ou réduire ses entrées (éléments <a> contenant la classe *is-icon-expandable*)
* force
    * true: la rubrique est developpée
    * false: la rubrique est réduite
{{< /md >}}|
| toggleSidebarEntries(force); |{{< md >}}
Fonction qui gère le comportement des rubriques du menu latéral:
* force
    * true: toutes les rubriques du menu latéral sont développées
    * false: toutes les rubriques du menu latéral sont réduites
{{< /md >}}|
