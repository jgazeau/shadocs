---
weight: 12000
linkTitle: "Note de bas de page"
title: "Markdown: Note de bas de page"
description: "Comment définir une note de bas de page ?"
categories: ["Markdown"]
tags: ["Gestion du contenu"]
---

# Note de bas de page
---

Pour définir une note de bas de page, il faut **la formater en 2 parties**.

* **Première partie** (référence de la note de bas de page)

    Pour définir la première partie de la note de bas de page, qui correspond à une référence à définir dans la deuxième partie, il faut **utiliser la syntaxe suivante**:

    * **Texte_associée_à_une_note_de_bas_de_page\[\^Référence_de_la_note_de_bas_de_page\]**

    {{< alert type="warning" >}}
La référence de la note de bas de page peut contenir uniquement des caractères alphanumériques (aucun espace ou tabulation).
    {{< /alert >}}

* **Deuxième partie** (contenu de la note de bas de page)

    Pour définir la deuxième partie de la note de bas de page, qui correspond au contenu de la note de bas de page, il faut **utiliser la syntaxe suivante**:

    * **\[\^Référence_de_la_note_de_bas_de_page\]: Contenu_de_la_note_de_bas_de_page**

    {{< alert type="warning" >}}
La deuxième partie de la note de bas de page peut-être placée à n'importe quel endroit dans le document, toutes les notes de bas de page seront automatiquement ajoutées en bas de la page courante. Il ne faut cependant pas placer le contenu des notes de bas de page dans d'autre élément markdown (Liste, Extrait de code, tableau, ...).
    {{< /alert >}}

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
Je viens de là[^1]

[^1]: Je suis une note de bas de page
```
{{< /md >}}|{{< plaintext >}}
<p>Je viens de là<sup id="fnref:1"><a href="#fn:1" class="footnote-ref" role="doc-noteref">1</a></sup></p>
[…]
<section class="footnotes" role="doc-endnotes">
  <hr>
  <ol>
    <li id="fn:1" role="doc-endnote">
      <p>Je suis une note de bas de page<a href="#fnref:1" class="footnote-backref" role="doc-backlink">↩︎</a></p>
    </li>
  </ol>
</section>
{{< /plaintext >}}|{{< md >}}
Je viens de là[^1]

[^1]: Je suis une note de bas de page
{{< /md >}}|
