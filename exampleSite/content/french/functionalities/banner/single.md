---
weight: 2000
title: "Bannière spécifique"
description: "Comment gérér une bannière spécifique ?"
categories: ["Fonctionnalités"]
tags: ["Gestion du contenu"]
banner: true
bannerContent: "Je suis une bannière"
---

# Description
---

Pour afficher une bannière spécifique, rendue sur une seul page, définir le paramètre `banner` à `true` dans **l'entête** d’une page de contenu.  
Par défaut, la bannière contient le text de la variable `banner_default_content` du module **i18n**, mais il est possible d'utiliser un texte spécifique en utilisant le paramètre `bannerContent` dans **l'entête** d’une page de contenu.

# Exemple

{{< snippet
    caption="Entête d’une page de contenu"
>}}
---
...
banner: true
bannerContent: "Je suis une bannière"
...
---
{{< /snippet >}}

{{< alert >}}
La page courante affiche une bannière spécifique.
{{< /alert >}}