---
weight: 14000
title: "Versionning"
description: "Comment gérér les versions du site ?"
titleIcon: "fa-solid fa-timeline"
categories: ["Fonctionnalités"]
---

# Description
---

Par défaut dans le thème, il est possible de renseigner une liste de liens référençant d'autres versions du site, disponible dans la barre de navigation.

# Définir d'autres versions du site
---

Pour définir d'autres version du site, spécifier les dans la liste `params.navbar.versions` du fichier de configuration `config.toml`:
```toml
[params]
  [[params.navbar.versions]]
    name = 'latest'
    url  = 'http://latest.website'
  [[params.navbar.versions]]
    name = 'vX'
    url  = 'http://vX.website'
  [[params.navbar.versions]]
    name = 'v1'
    url  = 'http://v1.website'
```
