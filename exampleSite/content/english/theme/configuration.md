---
weight: 2000
linkTitle: "Configuration"
title: "Installation: Configuration"
description: "How to set up the theme for a website?"
categories: ["Theme"]
tags: ["Configuration"]
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
    file="templates/configuration/config.en.toml"
    caption="config.toml ([params] section)"
    codelang="toml"
/>}}

# Default theme configuration
---

{{< snippet
    file="templates/configuration/themeParams.en.toml"
    caption="themeParams.toml"
    codelang="toml"
/>}}
