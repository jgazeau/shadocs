---
weight: 5000
title: "Pages triées"
description: "Menu latéral: Pages triées"
categories: ["Fonctionnalités"]
---

# Description
---

Par défaut le thème gère le tri du menu latéral selon le [tri standard du contenu Hugo](https://gohugo.io/templates/lists/#order-content).

# Définition du comportement de tri
---

Afin de définir un comportement spécifique pour le tri du menu latéral il faut définir la clé de configuration `siteContentOrder` dans les paramètres spécifiques du site.  
Les valeurs possibles de ce paramètre correspondent aux différentes méthodes de tri Hugo, *sans espaces et en minuscules*.

# Exemples
---

{{< snippet
    caption="config.toml (section [params])"
    codelang="toml"
    file="templates/configuration/config_siteorder.fr.toml"
/>}}