---
title: "Shadocs theme documentation"
description: "Shadocs theme homepage"
categories: ["Theme"]
---

{{< intro
  introtitle="Theme onboarding"
>}}
{
  "onexit": "toggleNavbarMenu(false);manageDefaultCollapsibleSidebar();",
  "oncomplete": "window.location.href = './theme';",
  "steps": [
    {
      "title": "Shadocs theme",
      "intro": "Welcome on the Shadocs theme documentation website.<br>Through this step by step guide, you will discover the several website features and therefore those of the theme.",
      "onbeforechange": "toggleNavbarMenu(false);toggleSidebar(false,true);"
    },{
      "title": "The logo",
      "intro": "The website logo allows to go back to the homepage.",
      "element": "#globalLogo",
      "position": "right",
      "onbeforechange": "toggleNavbarMenu(false);toggleSidebar(false,true);"
    },{
      "title": "The navigation bar",
      "intro": "The horizontal bar located at the top of the screen, also called as the navigation bar, contains several features to ease navigation and user experience on the website.",
      "element": "#navbarMenu",
      "triggeronly": ["desktop"],
      "onbeforechange": "toggleNavbarMenu(false);toggleSidebar(false,true);"
    },{
      "title": "Burger menu",
      "intro": "When the window is less than 1024 pixels wide, the site navigation bar disappears in favor of a burger menu accessible through a button located in the top right corner. This menu contains several features facilitating navigation and user experience on the website.",
      "element": "#navbarBurger",
      "position": "left",
      "triggeronly": ["mobile","touch"],
      "onbeforechange": "toggleSidebar(false,true);toggleNavbarMenu(false);"
    },{
      "title": "Burger menu",
      "intro": "Once the burger menu is open, it is possible to close it using one of the following two possibilities:<br><ul><li>Click on the close button</li><li>Click outside the menu area</li></ul>",
      "element": "#navbarBurger",
      "position": "left",
      "triggeronly": ["mobile","touch"],
      "onbeforechange": "toggleSidebar(false,true);toggleNavbarMenu(true);"
    },{
      "title": "Search",
      "intro": "The search function allows to search for content across the whole website.<br><i>NB: Advanced search using regular expressions not available.</i>",
      "element": "#search",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleNavbarMenu(true);"
    },{
      "title": "Multilingual",
      "intro": "The multilingual button provides access to the several translations of the current page.<br><i>NB: This button is only visible if a translation exists for the current page.</i>",
      "element": "#langsSelector",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleNavbarMenu(true);"
    },{
      "title": "Taxonomies",
      "intro": "The taxonomies button provides access to the several taxonomies of the website.<br><i>NB: This button is only visible if at least one taxonomy exists.</i>",
      "element": "#tagsSelector",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleNavbarMenu(true);"
    },{
      "title": "Shortcuts",
      "intro": "The shortcuts button provides access to the list of the several shortcuts available on the website.",
      "element": "#shortcutsInfo",
      "position": "left",
      "triggerexcept": ["nohover"],
      "onbeforechange": "toggleSidebar(false,true);toggleNavbarMenu(true);"
    },{
      "title": "About the website",
      "intro": "The information button provides general information about the website.",
      "element": "#siteInfo",
      "position": "left",
      "onbeforechange": "toggleSidebar(false,true);toggleNavbarMenu(true);"
    },{
      "title": "Sidebar",
      "intro": "The sidebar on the left of the screen allows to navigate through all the pages of the website.",
      "element": "#sidebarWrapper",
      "onbeforechange": "toggleNavbarMenu(false);toggleSidebar(true,true);"
    },{
      "title": "Sidebar",
      "intro": "It is possible to collapse the sidebar to only display main sections.",
      "element": "#sidebarCollapse",
      "onbeforechange": "toggleNavbarMenu(false);toggleSidebar(true,true);"
    },{
      "title": "Sidebar",
      "intro": "When the sidebar is collapsed, hover over a section to display the associated sub-menus (or click on touch devices). .<br><i>NB: When the window is less than 1024 pixels wide, the sidebar is collapsed by default.</i>",
      "element": "#sidebarUncollapse",
      "onbeforechange": "toggleNavbarMenu(false);toggleSidebar(false,true);"
    },{
      "title": "Shadocs theme",
      "intro": "Congratulations !!<br>You can now browse the website to learn more about the theme.<br><i>Click on Done to continue the onboarding.</i>",
      "onbeforechange": "toggleNavbarMenu(false);manageDefaultCollapsibleSidebar();"
    }
  ]
}
{{< /intro >}}
