---
weight: 2000
title: "Le Markdown"
description: "Descriptions et exemples des syntaxes markdown utilisées dans Hugo."
titleIcon: "fa-brands fa-markdown"
categories: ["Markdown"]
tags: ["Gestion du contenu"]
---

# Un peu d'histoire
---

Le markdown a été créé par John Gruber afin de faciliter l'ecriture de texte et d'en améliorer la visibilité. Il s'agit d'un langage de balisage léger permettant à l'utilisateur d'écrire du contenu de manière structuré sans avoir à se concentrer sur le rendu et le style. L'utilisation d'un convertisseur markdown générerera des documents stylisées dans différents formats.

{{< blockquote source="John Gruber" >}}
The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions. While Markdown’s syntax has been influenced by several existing text-to-HTML filters, the single biggest source of inspiration for Markdown’s syntax is the format of plain text email.
{{< /blockquote >}}

Bien que John Gruber ai défini la syntaxe du markdown de manière générale, il n'existe pas de spécification détaillée de ce language et donc des ambiguités quant à son implémentation. Par conséquent il existe plusieurs types de markdown avec chacuns leurs spécificités.

# Le markdown dans Hugo
---

Dans le cas de Hugo, le convertisseur markdown utilisé est [Goldmark](https://github.com/yuin/goldmark/) et permet de convertir du markdown en HTML. Il s'appuie sur la [spécification CommonMark](https://spec.commonmark.org/current/) qui tend à définir de manière précise et sans ambiguité l'implémentation du markdown.

# La Syntaxe Markdown
---

{{< treeview />}}