---
weight: 10000
title: "Impression"
description: "Comment gérér l'impression d'une page ?"
titleIcon: "fa-solid fa-print"
categories: ["Fonctionnalités"]
---

# Description
---

Dans le thème, il est possible d'imprimer (ou exporter en PDF) la page courante, afin de diffuser son contenu.

# Caractéristiques
---

Le thème permet d'imprimer une page de contenu suivant les caractéristiques suivantes:
* l'impression ne contient que le contenu principal de la page courante:
    * le menu latéral n'est pas imprimé
    * la barre de navigation n'est pas imprimée
    * la table des matières n'est pas imprimée
* les sauts de pages sont ajustés automatiquement au contenu mais il est possible d'en définir des spécifiques à l'aide du shortcode [pagebreak](../../shortcodes/pagebreak/)
* un icone situé dans la barre de navigation ainsi qu'un raccourci permettent d'accéder à la prévisualisation de l'impression

{{< alert type="warning" >}}
Le texte du document imprimé en PDF à partir de Firefox n'est pas sélectionnable contrairement aux navigateurs basés sur Chromium.
{{< /alert >}}
{{< alert type="warning" >}}
Pour obtenir une impression ayant un rendu similaire à celui de l'affichage du navigateur, il faut activer l'option **Imprimer les arrière-plans** dans les paramètres d'impression.
{{< /alert >}}
