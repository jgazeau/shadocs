---
weight: 8000
title: "Shortcuts"
description: "How to manage keyboard shortcuts?"
titleIcon: "fa-solid fa-keyboard"
categories: ["Functionalities"]
tags: ["Configuration"]
---

# Description
---

By default keyboard shortcuts are provided to make it easier to interact with the theme, but it is possible to define specific shortcuts through a minimum of configuration.
For example, it is possible to get the list of available shortcuts using the shortcut `Shift + k`.

# Define a specific shortcut
---

To define a shortcut, follow this process (example with the **example** (`Maj + 1`) shortcut from the theme website):

1. Define the general configuration of the shortcut in the site specific configuration file (*Cf. highlighted lines below*):
{{< snippet
    file="templates/configuration/config.en.toml"
    caption="config.toml ([params] section)"
    codelang="toml"
    codeparam="linenos=inline,hl_lines=[\"23-31\"]"
/>}}
2. Define shortcut labels that will appear in the shortcut help menu (in the appropriate *i18n* translation file):
{{< snippet
    file="templates/configuration/i18n.en.yaml"
    caption="en.yaml"
    codelang="yaml"
    codeparam="linenos=inline,hl_lines=[\"12-17\"]"
/>}}
3. Define the javascript code associated with the shortcut and called through the function defined in step 1:
{{< snippet
    file="templates/configuration/shortcuts.js"
    caption="shortcuts.js"
    codelang="js"
/>}}
