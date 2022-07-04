---
weight: 1000
title: "Menu latéral"
description: "Comment gérér le menu latéral ?"
titleIcon: "fa-solid fa-bars"
categories: ["Fonctionnalités"]
---

# Description
---

Par défaut le thème génère un menu latéral associé à l'arborescence du contenu du site.  
Cette arborescence doit suivre le standard de l'[organisation du contenu Hugo](https://gohugo.io/content-management/organization/) et permet de gérer deux types de pages:
* la section
    * définie par une page de contenu **_index.md** dans un **dossier contenant au moins une autre page simple de contenu**
* la page simple de contenu
    * définie par une page contenu **_index.md** dans un **dossier ne contenant aucune autre page simple de contenu**
    * définie par une page **\*.md** dans **n'importe quel dossier**

# Paramétrage de l'entête d'une page de contenu
---

Le paramétrage de l'entête de la page permet de gérer l'affichage du menu.  
Les différents paramètres gérés de manière spécifique par le thème sont décris ci-dessous:

| Paramètre | Valeurs possibles | Description |
| --------- | ----------------- | ----------- |
| title | chaine de caractères libre |{{< md >}}Titre affiché par défaut:
* dans le menu latéral
* en entête de page de contenu

*NB: Si le titre est trop long dans le menu latéral, il est tronqué en conséquence.*
{{< /md >}}|
| titleIcon | classes [FontAwesome](https://fontawesome.com/icons?d=gallery&p=2&m=free) |{{< md >}}
classes css de la librairie FontAwesome associées à l'icone à afficher dans le menu latéral.

*NB: Si non renseigné, un icone par défaut est défini par le thème.*
{{< /md >}}|

{{< alert >}}
Pour plus d'information, se référer à la [documentation Hugo sur l'entête d'une page de contenu](https://gohugo.io/content-management/front-matter/).
{{< /alert >}}

# Exemples
---

{{< treeview />}}
