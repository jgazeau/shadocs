---
weight: 0
title: "Documentation du thème Shadocs"
description: "Page d'accueil du thème Shadocs"
categories: ["Thème"]
---

{{< intro
  introtitle="Découvrir le thème"
  id="introHome"
>}}
{
  "onexit": "manageDefaultCollapsibleSidebar();toggleExtendMenu(false);",
  "oncomplete": "window.location.href = './theme';",
  "steps": [
    {
      "title": "Thème Shadocs",
      "intro": "Bienvenue sur le site de documentation du thème Shadocs.<br>Au travers de ce guide de découverte pas à pas, vous découvrirez les différentes fonctionnalités du site et par conséquent celles du thème.",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(false);"
    },{
      "title": "Le logo",
      "intro": "Le logo du site permet de retourner directement à l'accueil du site.",
      "element": "#globalLogo",
      "position": "right",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(false);"
    },{
      "title": "La barre de navigation",
      "intro": "La barre horizontale située en haut de l'écran, aussi appelée barre de navigation, contient diverses fonctionnalités facilitant la navigation et l'experience utilisateur sur le site. En fonction de la largeur de la fenêtre, un menu d'extension apparaîtra permettant d'afficher les boutons cachés de la barre de navigation.",
      "element": "#navbar",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(false);"
    },{
      "title": "Recherche",
      "intro": "La fonction de recherche permet de chercher du contenu à travers l'ensemble du site.<br><i>NB: Recherche avancée à l'aide d'expressions régulières non disponible.</i>",
      "element": "#search",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(false);"
    },{
      "title": "Impression",
      "intro": "La fonction d'impression permet d'imprimer le contenu de la page courante.",
      "element": "getFirstVisibleElement('#printButton, #printButtonExtend');",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(true);"
    },{
      "title": "QR code",
      "intro": "La fonction QR code permet d'afficher le QR code associé à l'URL de la page courante.",
      "element": "getFirstVisibleElement('#qrCodeButton, #qrCodeButtonExtend');",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(true);"
    },{
      "title": "Raccourcis",
      "intro": "Le bouton raccourcis permet d'accéder à la liste des différents raccourcis disponibles sur le site.",
      "element": "getFirstVisibleElement('#shortcutsInfo, #shortcutsInfoExtend');",
      "position": "left",
      "triggerexcept": ["nohover"],
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(true);"
    },{
      "title": "Taxonomies",
      "intro": "Le bouton taxonomies permet d'accéder aux différentes taxonomies du site.<br><i>NB: Ce bouton est visible uniquement si au moins une taxonomie existe.</i>",
      "element": "getFirstVisibleElement('#taxonomiesSelector, #taxonomiesSelectorExtend');",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(true);"
    },{
      "title": "Multilingue",
      "intro": "Le bouton multilingue permet d'accéder aux différentes traductions de la page courante.<br><i>NB: Ce bouton est visible uniquement si une page de traduction existe pour la page courante.</i>",
      "element": "getFirstVisibleElement('#langsSelector, #langsSelectorExtend');",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(true);"
    },{
      "title": "Versionning",
      "intro": "Le bouton versionning permet d'obtenir les autres versions disponibles du site.",
      "element": "getFirstVisibleElement('#versionsSelector, #versionsSelectorExtend');",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(true);"
    },{
      "title": "À propos du site",
      "intro": "Le bouton d'information permet d'obtenir les informations générales du site.",
      "element": "getFirstVisibleElement('#siteInfo, #siteInfoExtend');",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(true);"
    },{
      "title": "Menu latéral",
      "intro": "Le menu latéral situé à gauche de l'écran permet de naviguer à travers l'ensemble des pages du site.",
      "element": "#sidebarWrapper",
      "onbeforechange": "toggleSidebar(true,true);toggleExtendMenu(false);"
    },{
      "title": "Menu latéral",
      "intro": "Il est possible de réduire le menu latéral pour n'afficher que les sections principales.",
      "element": "#sidebarCollapse",
      "onbeforechange": "toggleSidebar(true,true);toggleExtendMenu(false);"
    },{
      "title": "Menu latéral",
      "intro": "Quand le menu latéral est réduit il suffit de survoler une section pour afficher les sous-menus associés (ou cliquer sur les appareils tactiles).<br><i>NB: Lorsque la fenêtre est inférieure à 1024 pixels de large, le menu latéral est réduit par défaut.</i>",
      "element": "#sidebarUncollapse",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(false);"
    },{
      "title": "Thème Shadocs",
      "intro": "Félicitations !!<br>Vous pouvez désormais naviguer sur le site pour en apprendre plus sur le thème.<br><i>Cliquez sur Terminer pour continuer la visite.</i>",
      "onbeforechange": "manageDefaultCollapsibleSidebar();toggleExtendMenu(false);"
    }
  ]
}
{{< /intro >}}
