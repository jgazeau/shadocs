---
weight: 1020
linkTitle: "Configuration"
title: "Installation: Configuration"
description: "How to set up the theme for a website?"
categories: ["Theme"]
---

# General considerations
---

To configure a Hugo website using the theme, there are three types of configuration:

| Type | Configuration file |
| ---- | ------------------------ |
| [Standard Hugo configuration](https://gohugo.io/getting-started/configuration/) | ./config.toml |
| Specific configuration using [site variables](https://gohugo.io/variables/site/) | ./config.toml |
| Default theme configuration | .themes/shadocs/data/themeParams.toml |

# Specific configuration
---

{{< snippet
    caption="config.toml ([params] section)"
    codelang="toml"
>}}
[params]
  # Website logo file path
  logo             = "images/logo.png"
  # Image file path displayed during a 404 error
  image404         = "images/404.gif"
  # Favicon website file path
  favicon          = "images/favicon.png"
  # Site content order (https://gohugo.io/templates/lists/#order-content)
  siteContentOrder = "weight"
  # Keyboard shortcuts list
  # For each shortcut following keys must be sets:
  # - keys     = [Keyboard shortcuts table](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)
  # - function = "Javascript function name to call by the shortcut"
  [params.navbar.shortcuts]
    # Example shortcut definition
    [params.navbar.shortcuts.example]
      keys     = ["Shift","1"]
      function = "scExample"
  # Taxonomies list
  # For each taxonomy following keys can be sets:
  # - icon = "Fontawesome classes associated to the taxonomy"
  [params.taxonomies]
    [params.taxonomies.categories]
      icon = "fas fa-th"
  # Assets list (https://gohugo.io/hugo-pipes/resource-from-template/) to include
  # Managed assets:
  # - jsModules = [Javascript modules list]
  # - js        = [Common javascript files list]
  # - css       = [Css files list]
  [params.includes]
    jsModules = [
        "/js/modules/shortcuts.js"
      ]
    js = []
    css = [
        "css/shortcuts.css"
      ]
{{< /snippet >}}

# Default theme configuration
---

{{< snippet
    caption="themeParams.toml"
    codelang="toml"
>}}
#
# GitHub links displayed in the information modal
#
[github]
  main = "https://github.com/jgazeau/shadocs"
  download = "https://github.com/jgazeau/shadocs/archive/main.zip"
  issue = "https://github.com/jgazeau/shadocs/issues"
  fork = "https://github.com/jgazeau/shadocs/fork"
#
# Miscellaneous sidebar settings
#
[sidebar]
  homeSectionIconDefault = "fas fa-home"
  firstSectionIconDefault = "fas fa-ban"
  nestedSectionIconDefault = "fas fa-level-up-alt fa-rotate-90 fa-xs"
#
# Keyboard shortcuts list of the theme
# For each shortcut following keys must be sets:
# - keys     = [Keyboard shortcuts table] (https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)
# - function = "Javascript function name to call by the shortcut"
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
# Assets list (https://gohugo.io/hugo-pipes/resource-from-template/) to include
# Les assets gérés:
# Managed assets:
# - jsModules             = [Javascript modules list]
# - js                    = [Common javascript files list]
# - css                   = [Css files list]
# - shortcodes.javascript = [Javascript files to include when associated shortcode exists in the page content]
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
