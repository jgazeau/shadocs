---
weight: 1000
title: "Bannière globale"
description: "Comment gérér une bannière globale ?"
categories: ["Fonctionnalités"]
tags: ["Gestion du contenu"]
banner: true
---

# Description
---

Pour afficher une bannière globale, rendue sur toutes les pages, définir le paramètre `globalBanner` à `true` dans le fichier **config.toml**.  
Par défaut, la bannière contient un texte à propos d'une version dépréciée, défini dans la variable `banner_default_content` du module **i18n**, utilisant les deux paramètres suivants:
* currentVersion
* latestVersionUrl

# Exemple

{{< alert >}}
La page courante affiche la bannière par défaut.
{{< /alert >}}
