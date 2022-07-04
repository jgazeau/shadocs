---
weight: 7000
title: "Page simple avec icone"
description: "Menu latéral: Page simple avec icone"
titleIcon: "fa-solid fa-icons"
categories: ["Fonctionnalités"]
---

# Description
---

Une section ou une page de contenu peut être identifiée par un icone issu de la librairie [FontAwesome](https://fontawesome.com/icons) afin de faciliter la navigation.

Pour cela deux paramétrages sont possibles (avec pour chaque valeur de paramètre les différentes classes FontAwesome):
* paramétrage standard par le biais de la configuration par défaut du thème
* paramétrage par page en définissant la variable `titleIcon` dans l'entête de la page

# Paramétrage standard
---

{{< snippet
    caption="themeParams.toml"
    codelang="toml"
    file="templates/configuration/themeParams_sidebar.fr.toml"
/>}}

# Paramétrage par page
---

* exemple de la page courante:
{{< snippet
    caption="page.md"
    codelang="md"
>}}
---
titleIcon: "fa-solid fa-icons"
---
{{< /snippet >}}