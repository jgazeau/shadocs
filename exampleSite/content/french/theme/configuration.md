---
weight: 2000
linkTitle: "Configuration"
title: "Installation: Configuration"
description: "Comment paramétrer le thème pour un site ?"
categories: ["Thème"]
tags: ["Configuration"]
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
    file="templates/configuration/config.fr.toml"
    caption="config.toml (section [params])"
    codelang="toml"
/>}}

# Configuration par défaut du thème
---

{{< snippet
    file="templates/configuration/themeParams.fr.toml"
    caption="themeParams.toml"
    codelang="toml"
/>}}
