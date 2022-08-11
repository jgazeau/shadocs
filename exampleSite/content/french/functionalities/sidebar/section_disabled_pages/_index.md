---
weight: 4000
title: "Pages désactivées"
description: "Menu latéral: Pages désactivées"
categories: ["Fonctionnalités"]
---

# Description
---

Une page peut être définie comme désactivée des deux manières suivantes:
* automatiquement, si la page ne contient aucun contenu (*excepté l'entête*)
* manuellement, en définissant la variable `sidebarDisabled` à `true` dans l'entête de la page

{{< alert >}}
Une [section](../section/) étant un cas particulier de page de contenu, il est possible de définir une section vide de la même manière qu'une page de contenu simple.
{{< /alert >}}

# Exemples
---

* Désactivation automatique:
{{< snippet
    caption="page.md"
    codelang="md"
>}}
---
title: "Entête de la page"
---
{{< /snippet >}}
* Désactivation manuelle:
{{< snippet
    caption="page.md"
    codelang="md"
>}}
---
title: "Entête de la page"
sidebardisabled: true
---

# Contenu de la page
---
{{< /snippet >}}
