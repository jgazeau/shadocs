---
weight: 2000
title: "The Markdown"
description: "Descriptions and examples of markdown syntaxes used in Hugo."
titleIcon: "fa-brands fa-markdown"
categories: ["Markdown"]
tags: ["Content management"]
---

# A little bit of history
---

The Markdown has been created by John Gruber to make it easier writing text and improve its visibility. It is a lightweight markup language that allows user to write content in a structured way without having to focus on rendering and styling. Using a markdown converter will generate stylized documents in several formats.

{{< blockquote source="John Gruber" >}}
The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions. While Markdown’s syntax has been influenced by several existing text-to-HTML filters, the single biggest source of inspiration for Markdown’s syntax is the format of plain text email.
{{< /blockquote >}}

Although John Gruber have defined generally the markdown syntax, there is no detailed specification of this language and therefore ambiguities in its implementation. As a consequence several types of markdowns exists, each with its own specificities.

# The Markdown in Hugo
---

In Hugo's case, the markdown converter used is [Goldmark](https://github.com/yuin/goldmark/) and allows you to convert markdown into HTML. It relies on the [CommonMark specification](https://spec.commonmark.org/current/) which aims to define precisely and unambiguously the implementation of markdown.

# The Markdown syntax
---

{{< treeview />}}