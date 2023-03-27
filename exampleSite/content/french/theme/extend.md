---
weight: 3000
linkTitle: "Étendre le thème"
title: "Installation: Étendre le thème"
description: "Coment étendre le thème ?"
categories: ["Thème"]
tags: ["Configuration"]
---

# Généralités
---

Comme tous les autres thèmes Hugo, il est possible d'étendre et modifer le thème Shadocs pour des besoins spécifiques
 
{{< alert type="info" >}}
Pour plus d'information, se référer à la [documentation Hugo sur les templates](https://gohugo.io/templates/).
{{< /alert >}}

# Personnalisation HTML
---

Plusieurs fichier de mise en page spécifique sont disponibles dans le thème.

Ces fichiers sont vides par défaut, mais ils peuvent être défini dans un site web spécifique (en utilisant [l'ordre de recherche des fichier Hugo](https://gohugo.io/templates/lookup-order/)), pour inclure du code spécifique à un endroit spécifique, directement dans la mise en page HTML globale, sans avoir à modifier la mise en page par défaut du thème.

Les fichiers suivants sont gérés dans le thème:
* **layouts/partials/custom/custom-head.html** pour insérer du code juste avant le tag de fin </head>
{{< snippet
    caption="custom-head.html"
    codelang="html"
>}}
<html>
    <head>
        [...]
        {{- partial "custom/custom-head.html" .root -}}
    </head>
</html>
{{< /snippet >}}
* **layouts/partials/custom/custom-footer.html** pour insérer du code juste avant le tag de fin </body>
{{< snippet
    caption="custom-footer.html"
    codelang="html"
>}}
<html>
    <body>
    [...]
    {{- partial "custom/custom-footer.html" .root -}}
    </body>
</html>
{{< /snippet >}}
* **layouts/partials/custom/custom-info.html** pour insérer du code dans la fenêtre modale d'information
    {{< alert type="info" >}}
Pour plus d'information, se référer au fichier du [site de documentation custom-info.html](https://github.com/jgazeau/shadocs/blob/main/exampleSite/layouts/partials/custom/custom-info.html)
    {{< /alert >}}

# Personnalisation SASS
---

La mise en page CSS du thème est implémentée en utilisant le langage [SASS](https://sass-lang.com/).

Tout comme les fichiers de mise en page spécifique HTML, des fichiers de mise en page spécifique SASS sont disponibles dans le thème.

Les fichiers suivants sont gérés dans le thème:
* **assets/sass/custom/custom_pre_variables.sass** pour surcharger les [variables bulma](https://bulma.io/documentation/customize/variables/) de même que les [variables primaires du thème](https://github.com/jgazeau/shadocs/blob/main/assets/sass/theme/pre_variables.sass)
* **assets/sass/custom/custom_variables.sass** pour surcharger les [variables secondaires du thème](https://github.com/jgazeau/shadocs/blob/main/assets/sass/theme/variables.sass)

{{< alert type="info" >}}
Pour plus d'information, se référer au fichier du site de documentation [custom_variables.sass](https://github.com/jgazeau/shadocs/blob/main/exampleSite/assets/sass/custom/custom_variables.sass) et [example.sass](https://github.com/jgazeau/shadocs/blob/main/exampleSite/assets/sass/custom/example.sass), pour implémenter un comportement CSS spécifique:
### Couleur de titre spécifique pour exemple de personnalisation SASS {#sass_custom_example}
{{< /alert >}}