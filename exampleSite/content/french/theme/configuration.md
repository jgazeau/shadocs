---
weight: 1020
linkTitle: "Configuration"
title: "Installation: Configuration"
description: "Comment paramétrer le thème pour un site ?"
categories: ["Thème"]
---

# Généralités
---

Pour configurer un site Hugo utilisant le thème, il existe trois type de configuration:

| Type | Fichier de configuration |
| ---- | ------------------------ |
| [Configuration standard Hugo](https://gohugo.io/getting-started/configuration/) | ./config.toml |
| Configuration spécifique par le biais des [variables site](https://gohugo.io/variables/site/) | ./config.toml |
| Configuration par défaut du thème | .themes/shadocs/data/themeParams.toml |

# Configuration spécifique
---

{{< snippet
    caption="config.toml (section [params])"
    codelang="toml"
>}}
[params]
  # Chemin du fichier du logo du site
  logo             = "images/logo.png"
  # Chemin du fichier de l'image affichée en cas d'erreur 404
  image404         = "images/404.gif"
  # Chemin du fichier du favicon du site
  favicon          = "images/favicon.png"
  # Ordre du contenu du site (https://gohugo.io/templates/lists/#order-content)
  siteContentOrder = "weight"
  # Liste des raccourcis clavier
  # Pour chaque raccourci il faut renseigner les clés suivantes:
  # - keys     = [Table des touches de clavier du raccourci](https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent/key/Key_Values)
  # - function = "Nom de la fonction javascript à appeler par le raccourci"
  [params.navbar.shortcuts]
    # Définition du raccourci d'exemple
    [params.navbar.shortcuts.example]
      keys     = ["Shift","1"]
      function = "scExample"
  # Liste des taxonomies
  # Pour chaque taxonomie il est possible de renseigner les clés suivantes:
  # - icon = "Classes fontawesome associées à la taxonomie"
  [params.taxonomies]
    [params.taxonomies.categories]
      icon = "fas fa-th"
  # Liste des assets (https://gohugo.io/hugo-pipes/resource-from-template/) à inclures
  # Les assets gérés:
  # - jsModules = [Liste des fichiers modules javascript]
  # - js        = [Liste des fichiers javascript communs]
  # - css       = [Liste des fichiers css]
  [params.includes]
    jsModules = [
        "/js/modules/shortcuts.js"
      ]
    js = []
    css = [
        "css/shortcuts.css"
      ]
{{< /snippet >}}

# Configuration par défaut du thème
---

{{< snippet
    caption="themeParams.toml"
    codelang="toml"
>}}
#
# Liens GitHub affichés dans le modal d'information
#
[github]
  main = "https://github.com/jgazeau/shadocs"
  download = "https://github.com/jgazeau/shadocs/archive/main.zip"
  issue = "https://github.com/jgazeau/shadocs/issues"
  fork = "https://github.com/jgazeau/shadocs/fork"
#
# Paramètres divers du menu latéral
#
[sidebar]
  homeSectionIconDefault = "fas fa-home"
  firstSectionIconDefault = "fas fa-ban"
  nestedSectionIconDefault = "fas fa-level-up-alt fa-rotate-90 fa-xs"
#
# Liste des raccourcis clavier du thème
# Pour chaque raccourci les clés suivantes sont renseignées:
# - keys     = [Table des touches de clavier du raccourci] (https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent/key/Key_Values)
# - function = "Nom de la fonction javascript à appeler pour le raccourci"
#
[navbar]
  [navbar.shortcuts.1_info]
    keys = ["Shift","i"]
    function = "scShowInfo"
  [navbar.shortcuts.2_shortcuts]
    keys = ["Shift","k"]
    function = "scShowShortcuts"
  [navbar.shortcuts.3_home]
    keys = ["Shift","h"]
    function = "scGoHome"
  [navbar.shortcuts.4_search]
    keys = ["Shift","f"]
    function = "scGoSearch"
  [navbar.shortcuts.5_togglesidebar]
    keys = ["Shift","m"]
    function = "scToggleSidebar"
  [navbar.shortcuts.6_backtotop]
    keys = ["Shift","ArrowUp"]
    function = "scBackToTop"
  [navbar.shortcuts.7_gotobottom]
    keys = ["Shift","ArrowDown"]
    function = "scGoToBottom"
#
# Liste des assets (https://gohugo.io/hugo-pipes/resource-from-template/) à inclures
# Les assets gérés:
# - jsModules             = [Liste des fichiers modules javascript]
# - js                    = [Liste des fichiers javascript communs]
# - css                   = [Liste des fichiers css]
# - shortcodes.javascript = [Liste des fichiers javascript à inclure quand le shortcode associé est présent dans le contenu de la page]
#
[includes]
  jsModules = [
      "/js/theme/modules/helpers.js",
      "/js/theme/modules/const.js",
      "/js/theme/init.js",
      "/js/theme/navbar.js",
      "/js/theme/search.js",
      "/js/theme/shortcuts.js",
      "/js/theme/sidebar.js"
    ]
  js = [
      "/js/theme/browserCompatibility.js",
      "/js/external/flexsearch.min.js",
      "/js/external/OverlayScrollbars.min.js"
    ]
  css= [
      "css/external/fontawesome.all.min.css",
      "css/external/OverlayScrollbars.min.css"
    ]
  [includes.shortcodes.javascript]
    mermaid = [
        "/js/external/mermaid.min.js",
        "/js/shortcodes/mermaid.js"
      ]
{{< /snippet >}}
