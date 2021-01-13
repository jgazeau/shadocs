---
title: "Documentation du thème Shadocs"
description: "Page d'accueil du thème Shadocs"
categories: ["Thème"]
---

{{< intro
  introtitle="Découvrir le thème"
>}}
{
  "onexit": "toggleNavbarMenu(false);manageDefaultCollapsibleSidebar();",
  "oncomplete": "window.location.href = './theme';",
  "steps": [
    {
      "title": "Thème Shadocs",
      "intro": "Bienvenue sur le site de documentation du thème Shadocs.<br>Au travers de ce guide pas à pas, vous découvrirez les différentes fonctionnalités du site et par conséquent celles du thème.",
      "onbeforechange": "toggleNavbarMenu(false);toggleSidebar(false,true);"
    },{
      "title": "Le logo",
      "intro": "Le logo du site permet de retourner directement à l'acceuil.",
      "element": "#globalLogo",
      "position": "right",
      "onbeforechange": "toggleNavbarMenu(false);toggleSidebar(false,true);"
    },{
      "title": "La barre de navigation",
      "intro": "La barre horizontale située en haut de l'écran, aussi appelée barre de navigation, contient diverses fonctionnalités facilitant la navigation et l'experience utilisateur sur le site.",
      "element": "#navbarMenu",
      "triggeronly": ["desktop"],
      "onbeforechange": "toggleNavbarMenu(false);toggleSidebar(false,true);"
    },{
      "title": "Menu burger",
      "intro": "Lorsque la fenêtre est inférieure à 1024 pixels de large, la barre de navigation du site disparait au profit d'un menu burger accessible par un bouton situé dans le coin en haut à droite. Ce menu contient diverses fonctionnalités facilitant la navigation et l'experience utilisateur sur le site.",
      "element": "#navbarBurger",
      "position": "left",
      "triggeronly": ["mobile","touch"],
      "onbeforechange": "toggleSidebar(false,true);toggleNavbarMenu(false);"
    },{
      "title": "Menu burger",
      "intro": "Une fois le menu burger ouvert, il est possible de le fermer en utilisant l'une des deux possibilités suivantes:<br><ul><li>Cliquer sur le bouton fermer</li><li>Cliquer en dehors de la zone du menu</li></ul>",
      "element": "#navbarBurger",
      "position": "left",
      "triggeronly": ["mobile","touch"],
      "onbeforechange": "toggleSidebar(false,true);toggleNavbarMenu(true);"
    },{
      "title": "Recherche",
      "intro": "La fonction de recherche permet de chercher du contenu à travers l'ensemble du site.<br><i>NB: Recherche avancée à l'aide d'expressions régulières non disponible.</i>",
      "element": "#search",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleNavbarMenu(true);"
    },{
      "title": "Multilangue",
      "intro": "Le bouton multilangue permet d'accéder aux différentes traductions de la page courante.<br><i>NB: Ce bouton est visible uniquement si une traduction existe pour la page courante.</i>",
      "element": "#langsSelector",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleNavbarMenu(true);"
    },{
      "title": "Taxonomies",
      "intro": "Le bouton taxonomies permet d'accéder aux différentes taxonomies du site.<br><i>NB: Ce bouton est visible uniquement si au moins une taxonomie existe.</i>",
      "element": "#tagsSelector",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleNavbarMenu(true);"
    },{
      "title": "Raccourcis",
      "intro": "Le bouton raccourcis permet d'accéder à la liste des différents raccourcis disponibles sur le site.",
      "element": "#shortcutsInfo",
      "position": "left",
      "triggerexcept": ["nohover"],
      "onbeforechange": "toggleSidebar(false,true);toggleNavbarMenu(true);"
    },{
      "title": "À propos du site",
      "intro": "Le bouton d'information générale permet d'obtenir les informations générales du site.",
      "element": "#siteInfo",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleNavbarMenu(true);"
    },{
      "title": "Menu latéral",
      "intro": "Le menu latéral situé à gauche de l'écran permet de naviguer a travers l'ensemble des pages du site.",
      "element": "#sidebarWrapper",
      "onbeforechange": "toggleNavbarMenu(false);toggleSidebar(true,true);"
    },{
      "title": "Menu latéral",
      "intro": "Il est possible de réduire le menu latéral pour n'afficher que les sections principales.",
      "element": "#sidebarCollapse",
      "onbeforechange": "toggleNavbarMenu(false);toggleSidebar(true,true);"
    },{
      "title": "Menu latéral",
      "intro": "Quand le menu est réduit il suffit de survoler une section pour afficher les sous-menus associés (ou cliquer sur les appareils tactiles).<br><i>NB: Lorsque la fenêtre est inférieure à 1024 pixels de large, le menu latéral est réduit par défaut.</i>",
      "element": "#sidebarUncollapse",
      "onbeforechange": "toggleNavbarMenu(false);toggleSidebar(false,true);"
    },{
      "title": "Thème Shadocs",
      "intro": "Félicitations !!<br>Vous pouvez désormais naviguer sur le site pour en apprendre plus sur le thème.<br><i>Cliquez sur Terminer pour continuer la visite.</i>",
      "onbeforechange": "toggleNavbarMenu(false);manageDefaultCollapsibleSidebar();"
    }
  ]
}
{{< /intro >}}
