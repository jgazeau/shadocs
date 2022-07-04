---
weight: 4000
title: "Table des matières"
description: "Comment gérér la table des matières ?"
titleIcon: "fa-solid fa-list-ul"
categories: ["Fonctionnalités"]
tags: ["Gestion du contenu"]
---

# Description
---

Par défaut dans le thème, chaque page de contenu (excepté la page d'accueil) génère une table des matières associée aux titres contenus dans la page.  
Il est possible d'activer ou désactiver cette fonctionnalité, soit globalement (sur tout le site), soit par page, en prenant en compteles considérations suivantes:
* la page d'accueil ne contient jamais de table des matières
* la clé de configuration utilisée est `toc`
* sans configuration, la table des matières est activée globalement (sur tout le site)
* la priorité de configuration appliquée est la suivante (de la plus haute à la plus basse):
    * configuration de la page
    * configuration du site
* la configuration utilisée pour activer/désactiver la table des matières de manière globale (sur tout le site) est la suivante:
    ```
    [params]
      toc = true/false
    ```
* la configuration utilisée pour activer/désactiver la table des matières sur une seule page (a définir dans l'entête de la page) est la suivante:
    ```
    ---
    toc: false
    ---
    ```

{{< alert type="warning" >}}
Quand elle est activée, la table des matières n'est disponible que lorsque la largeur de la fenêtre est supérieure à 1024 pixels.
{{< /alert >}}

# Exemple
---

# Titre de niveau 1
## Titre de niveau 2
### Titre de niveau 3
#### Titre de niveau 4
##### Titre de niveau 5
###### Titre de niveau 6

# Deuxième titre de niveau 1
## Deuxième titre de niveau 2
### Deuxième titre de niveau 3
#### Deuxième titre de niveau 4
##### Deuxième titre de niveau 5
###### Deuxième titre de niveau 6
