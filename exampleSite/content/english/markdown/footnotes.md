---
weight: 12000
linkTitle: "Footnotes"
title: "Markdown: Footnotes"
description: "How to define footnotes?"
categories: ["Markdown"]
tags: ["Content management"]
---

# Footnotes
---

To define a footnote, **it must be formatted in 2 parts**.

* **First part** (footnote reference)

    To define the footnote first part, which corresponds to a reference to be defined in the second part, **use the following syntax**:

    * **Text_associated_to_a_footnote\[\^Footnote_reference\]**

    {{< alert type="warning" >}}
The footnote reference can only contain alphanumeric characters (no spaces nor tabs).
    {{< /alert >}}

* **Second part** (footnote content)

    To define the footnote second part, which corresponds to the content of the footnote, **use the following syntax**:

    * **\[\^Footnote_reference\]: Footnote_content**

    {{< alert type="warning" >}}
The footnote second part can be placed anywhere in the document, all footnotes will be automatically added at the bottom of the current page. However, footnotes content should not be placed in another markdown element (List, code snippet, table, ...).
    {{< /alert >}}

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
I come from there[^1]

[^1]: I'm a footnote
```
{{< /md >}}|{{< plaintext >}}
<p>I come from there<sup id="fnref:1"><a href="#fn:1" class="footnote-ref" role="doc-noteref">1</a></sup></p>
[…]
<section class="footnotes" role="doc-endnotes">
  <hr>
  <ol>
    <li id="fn:1" role="doc-endnote">
      <p>I'm a footnote<a href="#fnref:1" class="footnote-backref" role="doc-backlink">↩︎</a></p>
    </li>
  </ol>
</section>
{{< /plaintext >}}|{{< md >}}
I come from there[^1]

[^1]: I'm a footnote
{{< /md >}}|
