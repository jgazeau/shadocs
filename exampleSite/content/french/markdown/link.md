---
weight: 2090
linkTitle: "Lien"
title: "Markdown: Lien"
description: "Comment définir un lien ?"
categories: ["Markdown"]
---

# Lien
---

## Syntaxe classique

Pour définir un lien, il faut **respecter la syntaxe suivante**:

* **\[Texte_du_lien\]\(URL_du_lien\)**

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
[Je suis un lien](/markdown/link/)
```
{{< /md >}}|{{< plaintext >}}
<a href="/markdown/link/">Je suis un lien</a>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien](/markdown/link/)
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien vers un ID de titre](/markdown/link/#lien)
```
{{< /md >}}|{{< plaintext >}}
<a href="/markdown/link/#lien">Je suis un lien vers un ID de titre</a>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien vers un ID de titre](/markdown/link/#lien)
{{< /md >}}|

## Syntaxe classique avec titre

Pour définir un lien avec un titre, il faut **respecter la syntaxe suivante**:

* **\[Texte_du_lien\]\(URL_du_lien \"Titre_du_lien\"\)**

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
[Je suis un lien](/markdown/link/ "Et moi son titre")
```
{{< /md >}}|{{< plaintext >}}
<a title="Et moi son titre" href="/markdown/link/">Je suis un lien</a>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien](/markdown/link/ "Et moi son titre")
{{< /md >}}|

## Syntaxe alternative

Pour définir un lien il est possible d'utiliser des syntaxes alternatives:

* **Ecrire l'URL du lien** (le rendu sera automatiquement réalisé par le convertisseur markdown).
* **Entourer l'URL du lien entre les caractères inférieur et supérieur**.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
https://www.google.com
```
{{< /md >}}|{{< plaintext >}}
<a href="https://www.google.com">https://www.google.com</a>
{{< /plaintext >}}|{{< md >}}
https://www.google.com
{{< /md >}}|
|{{< md >}}
```
<https://www.google.com>
```
{{< /md >}}|{{< plaintext >}}
<a href="https://www.google.com">https://www.google.com</a>
{{< /plaintext >}}|{{< md >}}
<https://www.google.com>
{{< /md >}}|
|{{< md >}}
```
<foo@bar.com>
```
{{< /md >}}|{{< plaintext >}}
<a href="mailto:foo@bar.com">foo@bar.com</a>
{{< /plaintext >}}|{{< md >}}
<foo@bar.com>
{{< /md >}}|

{{< alert type="warning" >}}
Attention, pour permettre un rendu plus agréable (à l'aide des [Markdown Render Hooks](https://gohugo.io/getting-started/configuration-markup#markdown-render-hooks)) il est recommandé d'**utiliser la syntaxe classique**.
{{< /alert >}}

## Echapper un lien

Pour échapper un lien (faire apparaitre une URL en tant que texte) et éviter son rendu automatique par le convertisseur markdown, il est possible d'utiliser des syntaxes alternatives:

* **Ajouter une apostrophe inversée (`) avant et après l'URL du lien (Définir le lien en fragment de code)**.
* **Echapper le premier slash (/) de l'URL du lien**.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
`https://www.google.com`
```
{{< /md >}}|{{< plaintext >}}
<p>https://www.google.com</p>
{{< /plaintext >}}|{{< md >}}
`https://www.google.com`
{{< /md >}}|
|{{< md >}}
```
https:\//www.google.com
```
{{< /md >}}|{{< plaintext >}}
<p>https://www.google.com</p>
{{< /plaintext >}}|{{< md >}}
https:\//www.google.com
{{< /md >}}|

## Accentuer un lien

Pour accentuer un lien, il faut **entourer le code markdown du lien par le code d'acccentuation choisi**. Dans le cas d'un lien en fragment de code il faut **placer les parenthèses inversées à l'intérieur du texte du lien** (entre les crochets).

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
*[Je suis un lien en italique](/markdown/link/)*
```
{{< /md >}}|{{< plaintext >}}
<em><br><a href="/markdown/link/">Je suis un lien en italique</a>
</em>
{{< /plaintext >}}|{{< md >}}
*[Je suis un lien en italique](/markdown/link/)*
{{< /md >}}|
|{{< md >}}
```
**[Je suis un lien en gras](/markdown/link/)**
```
{{< /md >}}|{{< plaintext >}}
<strong><br><a href="/markdown/link/">Je suis un lien en gras</a>
</strong>
{{< /plaintext >}}|{{< md >}}
**[Je suis un lien en gras](/markdown/link/)**
{{< /md >}}|
|{{< md >}}
```
***[Je suis un lien en italique et en gras](/markdown/link/)***
```
{{< /md >}}|{{< plaintext >}}
<em><strong><br><a href="/markdown/link/">Je suis un lien en italique et en gras</a>
</strong></em>
{{< /plaintext >}}|{{< md >}}
***[Je suis un lien en italique et en gras](/markdown/link/)***
{{< /md >}}|
|{{< md >}}
```
[`Je suis un lien en fragment de code`](/markdown/link/)
```
{{< /md >}}|{{< plaintext >}}
<a href="/markdown/link/">
<code>Je suis un lien en fragment de code</code>
</a>
{{< /plaintext >}}|{{< md >}}
[`Je suis un lien en fragment de code`](/markdown/link/)
{{< /md >}}|

## Lien référencé

Pour définir un lien dont l'URL est référencée (donc réutilisable), il faut **formater le lien en 2 parties**.

* **Première partie** (texte du lien)

    Pour définir la première partie du lien, qui correspond au texte qui sera rendu et fait le lien avec une référence d'URL à définir dans la deuxième partie, il faut **respecter la syntaxe suivante**:

    * **\[Texte_du_lien\]\[Référence_de_l'URL_du_lien\]**

    La référence de l'URL du lien n'est pas sensible à la casse et peut contenir des caractères alphanumériques, des espaces et de la ponctuation.

* **Deuxième partie** (référence du lien)

    Pour définir la deuxième partie du lien, qui fait le lien entre la référence de l'URL du lien définie dans la première partie, et la valeur de l'URL, il faut **respecter une des syntaxes suivantes**:

    * **\[Référence_de_l'URL_du_lien\]: URL_du_lien**
    * **\[Référence_de_l'URL_du_lien\]: URL_du_lien \"Titre_du_lien\"**
    * **\[Référence_de_l'URL_du_lien\]: URL_du_lien \'Titre_du_lien\'**
    * **\[Référence_de_l'URL_du_lien\]: URL_du_lien \(Titre_du_lien\)**
    * **\<\[Référence_de_l'URL_du_lien\]\>: URL_du_lien \"Titre_du_lien\"**
    * **\<\[Référence_de_l'URL_du_lien\]\>: URL_du_lien \'Titre_du_lien\'**
    * **\<\[Référence_de_l'URL_du_lien\]\>: URL_du_lien \(Titre_du_lien\)**

    La deuxième partie du lien peut-être placée à n'importe quel endroit dans le document. Par exemple toutes les références d'un document peuvent être regroupée à la fin d'un document pour des raisons de lisibilité et de simplicité.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: /markdown/link/
```
{{< /md >}}|{{< plaintext >}}
<a href="/markdown/link/">Je suis un lien</a>
<a href="/markdown/link/">Je suis un second lien</a>
<p>Je suis un texte tout seul</p>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: /markdown/link/
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: /markdown/link/ "Et moi son titre"
```
{{< /md >}}|{{< plaintext >}}
<a title="Et moi son titre" href="/markdown/link/">Je suis un lien</a>
<a title="Et moi son titre" href="/markdown/link/">Je suis un second lien</a>
<p>Je suis un texte tout seul</p>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: /markdown/link/ "Et moi son titre"
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: /markdown/link/ 'Et moi son titre'
```
{{< /md >}}|{{< plaintext >}}
<a title="Et moi son titre" href="/markdown/link/">Je suis un lien</a>
<a title="Et moi son titre" href="/markdown/link/">Je suis un second lien</a>
<p>Je suis un texte tout seul</p>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: /markdown/link/ 'Et moi son titre'
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: /markdown/link/ (Et moi son titre)
```
{{< /md >}}|{{< plaintext >}}
<a title="Et moi son titre" href="/markdown/link/">Je suis un lien</a>
<a title="Et moi son titre" href="/markdown/link/">Je suis un second lien</a>
<p>Je suis un texte tout seul</p>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: /markdown/link/ (Et moi son titre)
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: </markdown/link/> "Et moi son titre"
```
{{< /md >}}|{{< plaintext >}}
<a title="Et moi son titre" href="/markdown/link/">Je suis un lien</a>
<a title="Et moi son titre" href="/markdown/link/">Je suis un second lien</a>
<p>Je suis un texte tout seul</p>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: </markdown/link/> "Et moi son titre"
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: </markdown/link/> 'Et moi son titre'
```
{{< /md >}}|{{< plaintext >}}
<a title="Et moi son titre" href="/markdown/link/">Je suis un lien</a>
<a title="Et moi son titre" href="/markdown/link/">Je suis un second lien</a>
<p>Je suis un texte tout seul</p>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: </markdown/link/> 'Et moi son titre'
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: </markdown/link/> (Et moi son titre)
```
{{< /md >}}|{{< plaintext >}}
<a title="Et moi son titre" href="/markdown/link/">Je suis un lien</a>
<a title="Et moi son titre" href="/markdown/link/">Je suis un second lien</a>
<p>Je suis un texte tout seul</p>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: </markdown/link/> (Et moi son titre)
{{< /md >}}|

## Lien avec espace

Pour définir un lien dont l'URL contient des espaces, il faut **encoder l'URL avec le code en pourcentage associé au caractère espace (%20)**.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
[Themes Hugo](https://www.google.com/?query=Themes%20Hugo)
```
{{< /md >}}|{{< plaintext >}}
<a href="https://www.google.com/?query=Themes%20Hugo">Themes Hugo</a>
{{< /plaintext >}}|{{< md >}}
[Themes Hugo](https://www.google.com/?query=Themes%20Hugo)
{{< /md >}}|

## ID d'un lien (Spécificité du thème)

Pour définir l'ID d'un lien, il faut **écrire un lien en suivant la [syntaxe classique avec titre](markdown/link/#syntaxe-classique-avec-titre)**. L'ID est rajouté au lien automatiquement (à l'aide du thème) et aura pour valeur la sortie de la fonction [anchorize](https://gohugo.io/functions/anchorize/) de Hugo avec en entrée la valeur du titre du lien:

* **\[Texte_du_lien\]\(URL_du_lien \"Titre_du_lien\"\)**

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
[Je suis un lien](/markdown/link/ "Et moi son titre")
```
{{< /md >}}|{{< plaintext >}}
<a id="et-moi-son-titre" title="Et moi son titre" href="/markdown/link/">Je suis un lien</a>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien](/markdown/link/ "Et moi son titre")
{{< /md >}}|
