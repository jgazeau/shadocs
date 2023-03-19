---
weight: 0
title: "Shadocs theme documentation"
description: "Shadocs theme homepage"
categories: ["Theme"]
---

{{< intro
  introtitle="Theme onboarding"
  id="introHome"
>}}
{
  "onexit": "manageDefaultCollapsibleSidebar();toggleExtendMenu(false);",
  "oncomplete": "window.location.href = './theme';",
  "steps": [
    {
      "title": "Shadocs theme",
      "intro": "Welcome on the Shadocs theme documentation website.<br>Through this step by step onboarding guide, you will discover the several website features and therefore the theme ones.",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(false);"
    },{
      "title": "The logo",
      "intro": "The website logo allows to go back to the homepage.",
      "element": "#globalLogo",
      "position": "right",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(false);"
    },{
      "title": "The navigation bar",
      "intro": "The horizontal bar located at the top of the screen, also called as the navigation bar, contains several features to ease navigation and user experience on the website. Depending on the window width an extend menu will appear allowing to display hidden navigation bar buttons.",
      "element": "#navbar",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(false);"
    },{
      "title": "Search",
      "intro": "The search function allows to search for content across the whole website.<br><i>NB: Advanced search using regular expressions not available.</i>",
      "element": "#search",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(false);"
    },{
      "title": "Print",
      "intro": "The print function allows to print the current page content.",
      "element": "getFirstVisibleElement('#printButton, #printButtonExtend');",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(true);"
    },{
      "title": "QR code",
      "intro": "The QR code function allows to display the QR code associated to the current page URL.",
      "element": "getFirstVisibleElement('#qrCodeButton, #qrCodeButtonExtend');",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(true);"
    },{
      "title": "Shortcuts",
      "intro": "The shortcuts button provides access to the list of the shortcuts available on the website.",
      "element": "getFirstVisibleElement('#shortcutsInfo, #shortcutsInfoExtend');",
      "position": "left",
      "triggerexcept": ["nohover"],
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(true);"
    },{
      "title": "Taxonomies",
      "intro": "The taxonomies button provides access to the several taxonomies of the website.<br><i>NB: This button is only visible if at least one taxonomy exists.</i>",
      "element": "getFirstVisibleElement('#taxonomiesSelector, #taxonomiesSelectorExtend');",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(true);"
    },{
      "title": "Multilingual",
      "intro": "The multilingual button provides access to the several translations of the current page.<br><i>NB: This button is only visible if a translation page exists for the current page.</i>",
      "element": "getFirstVisibleElement('#langsSelector, #langsSelectorExtend');",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(true);"
    },{
      "title": "Versioning",
      "intro": "The versioning button provides other available versions of the website.",
      "element": "getFirstVisibleElement('#versionsSelector, #versionsSelectorExtend');",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(true);"
    },{
      "title": "About the website",
      "intro": "The information button provides general information about the website.",
      "element": "getFirstVisibleElement('#siteInfo, #siteInfoExtend');",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(true);"
    },{
      "title": "Sidebar",
      "intro": "The sidebar on the left of the screen allows to navigate through all the pages of the website.",
      "element": "#sidebarWrapper",
      "onbeforechange": "toggleSidebar(true,true);toggleExtendMenu(false);"
    },{
      "title": "Sidebar",
      "intro": "It is possible to collapse the sidebar to display main sections icons only.",
      "element": "#sidebarCollapse",
      "onbeforechange": "toggleSidebar(true,true);toggleExtendMenu(false);"
    },{
      "title": "Sidebar",
      "intro": "When the sidebar is collapsed, hover over a section to display the associated sub-menus (or click on touch devices).<br><i>NB: When the window is less than 1024 pixels wide, the sidebar is collapsed by default.</i>",
      "element": "#sidebarUncollapse",
      "onbeforechange": "toggleSidebar(false,true);toggleExtendMenu(false);"
    },{
      "title": "Shadocs theme",
      "intro": "Congratulations !!<br>You can now browse the website to learn more about the theme.<br><i>Click on Done to continue the onboarding.</i>",
      "onbeforechange": "manageDefaultCollapsibleSidebar();toggleExtendMenu(false);"
    }
  ]
}
{{< /intro >}}
