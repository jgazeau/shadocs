---
weight: 9000
linkTitle: "Lien"
title: "Markdown: Lien"
description: "Comment définir un lien ?"
categories: ["Markdown"]
tags: ["Gestion du contenu"]
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
[Je suis un lien relatif vers une autre page (du même répertoire) du site](image/)
```
{{< /md >}}|{{< plaintext >}}
<a href="/markdown/image/">Je suis un lien relatif vers une autre page (du même répertoire) du site</a>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien relatif vers une autre page (du même répertoire) du site](image/)
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien relatif vers une autre page (page parente) du site](./)
```
{{< /md >}}|{{< plaintext >}}
<a href="/markdown/">Je suis un lien relatif vers une autre page (page parente) du site</a>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien relatif vers une autre page (page parente) du site](./)
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien absolu vers une autre page du site](/markdown/image/)
```
{{< /md >}}|{{< plaintext >}}
<a href="/markdown/image/">Je suis un lien absolu vers une autre page du site</a>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien absolu vers une autre page du site](/markdown/image/)
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien absolu vers une ressource statique du site](/images/favicon.png)
```
{{< /md >}}|{{< plaintext >}}
<a href="/images/favicon.png">Je suis un lien absolu vers une ressource statique du site</a>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien absolu vers une ressource statique du site](/images/favicon.png)
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien vers un ID de titre](#lien)
```
{{< /md >}}|{{< plaintext >}}
<a href="#lien">Je suis un lien vers un ID de titre</a>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien vers un ID de titre](#lien)
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien vers la page d'accueil](/)
```
{{< /md >}}|{{< plaintext >}}
<a href="/">Je suis un lien vers la page d'accueil</a>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien vers la page d'accueil](/)
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien vers la page d'accueil d'une autre langue](/fr/)
```
{{< /md >}}|{{< plaintext >}}
<a href="/fr/">Je suis un lien vers la page d'accueil d'une autre langue</a>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien vers la page d'accueil d'une autre langue](/fr/)
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien externe](https://www.google.com)
```
{{< /md >}}|{{< plaintext >}}
<a href="https://www.google.com">Je suis un lien externe</a>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien externe](https://www.google.com)
{{< /md >}}|

{{< alert type="warning" >}}
Les liens ne contenant pas de schéma URL sont tous préfixé en fonction de la configuration `baseURL`.  
Par exemple:  
| baseURL | Markdown | Rendu |
| ------- | -------- | ----- |
| / | \[](/markdown/link/) | href="**/markdown/link/**" |
| http\://myWebsite.com/subpath/ | \[](/markdown/link/) | href="**/subpath/markdown/link/**" |
{{< /alert >}}
{{< alert type="warning" >}}
Les liens vers la page d'accueil utilisant `/` sont relatif à la langue actuelle du site.
{{< /alert >}}
{{< alert type="warning" >}}
Les liens absolus vers des resources utilisant `/<CHEMIN_DE_LA_RESOURCE>` ne sont pas relatif à la langue actuelle du site.
{{< /alert >}}

## Syntaxe classique avec titre

Pour définir un lien avec un titre, il faut **respecter la syntaxe suivante**:

* **\[Texte_du_lien\]\(URL_du_lien \"Titre_du_lien\"\)**

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
[Je suis un lien](#syntaxe-classique-avec-titre "Et moi son titre")
```
{{< /md >}}|{{< plaintext >}}
<a title="Et moi son titre" href="#syntaxe-classique-avec-titre">Je suis un lien</a>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien](#syntaxe-classique-avec-titre "Et moi son titre")
{{< /md >}}|

## Syntaxe alternative

Pour définir un lien externe il est possible d'utiliser des syntaxes alternatives:

* **Ecrire l'URL du lien** (le rendu sera automatiquement réalisé par le convertisseur markdown).
* **Entourer l'URL du lien entre les caractères inférieur (<) et supérieur (>)**.

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

* **Ajouter une apostrophe inversée (\`) avant et après l'URL du lien (Définir le lien en fragment de code)**.
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

Pour accentuer un lien, il faut **entourer le code markdown du lien par le code d'acccentuation choisi**. Dans le cas d'un lien en fragment de code il faut **placer les parenthèses inversées (\`) à l'intérieur du texte du lien** (entre les crochets).

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

    {{< alert type="info" >}}
La référence de l'URL du lien n'est pas sensible à la casse et peut contenir des caractères alphanumériques, des espaces et de la ponctuation.
    {{< /alert >}}

* **Deuxième partie** (référence du lien)

    Pour définir la deuxième partie du lien, qui fait le lien entre la référence de l'URL du lien définie dans la première partie, et la valeur de l'URL, il faut **respecter une des syntaxes suivantes**:

    * **\[Référence_de_l'URL_du_lien\]: URL_du_lien**
    * **\[Référence_de_l'URL_du_lien\]: URL_du_lien \"Titre_du_lien\"**
    * **\[Référence_de_l'URL_du_lien\]: URL_du_lien \'Titre_du_lien\'**
    * **\[Référence_de_l'URL_du_lien\]: URL_du_lien \(Titre_du_lien\)**
    * **\<\[Référence_de_l'URL_du_lien\]\>: URL_du_lien \"Titre_du_lien\"**
    * **\<\[Référence_de_l'URL_du_lien\]\>: URL_du_lien \'Titre_du_lien\'**
    * **\<\[Référence_de_l'URL_du_lien\]\>: URL_du_lien \(Titre_du_lien\)**

    {{< alert type="info" >}}
La deuxième partie du lien peut-être placée à n'importe quel endroit dans le document. Par exemple toutes les références d'un document peuvent être regroupée à la fin d'un document pour des raisons de lisibilité et de simplicité.
    {{< /alert >}}

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: #lien-référencé
```
{{< /md >}}|{{< plaintext >}}
<a href="#lien-référencé">Je suis un lien</a>
<a href="#lien-référencé">Je suis un second lien</a>
<p>Je suis un texte tout seul</p>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: #lien-référencé
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: #lien-référencé "Et moi son titre"
```
{{< /md >}}|{{< plaintext >}}
<a title="Et moi son titre" href="#lien-référencé">Je suis un lien</a>
<a title="Et moi son titre" href="#lien-référencé">Je suis un second lien</a>
<p>Je suis un texte tout seul</p>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: #lien-référencé "Et moi son titre"
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: #lien-référencé 'Et moi son titre'
```
{{< /md >}}|{{< plaintext >}}
<a title="Et moi son titre" href="#lien-référencé">Je suis un lien</a>
<a title="Et moi son titre" href="#lien-référencé">Je suis un second lien</a>
<p>Je suis un texte tout seul</p>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: #lien-référencé 'Et moi son titre'
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: #lien-référencé (Et moi son titre)
```
{{< /md >}}|{{< plaintext >}}
<a title="Et moi son titre" href="#lien-référencé">Je suis un lien</a>
<a title="Et moi son titre" href="#lien-référencé">Je suis un second lien</a>
<p>Je suis un texte tout seul</p>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: #lien-référencé (Et moi son titre)
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: <#lien-référencé> "Et moi son titre"
```
{{< /md >}}|{{< plaintext >}}
<a title="Et moi son titre" href="#lien-référencé">Je suis un lien</a>
<a title="Et moi son titre" href="#lien-référencé">Je suis un second lien</a>
<p>Je suis un texte tout seul</p>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: <#lien-référencé> "Et moi son titre"
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: <#lien-référencé> 'Et moi son titre'
```
{{< /md >}}|{{< plaintext >}}
<a title="Et moi son titre" href="#lien-référencé">Je suis un lien</a>
<a title="Et moi son titre" href="#lien-référencé">Je suis un second lien</a>
<p>Je suis un texte tout seul</p>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: <#lien-référencé> 'Et moi son titre'
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: <#lien-référencé> (Et moi son titre)
```
{{< /md >}}|{{< plaintext >}}
<a title="Et moi son titre" href="#lien-référencé">Je suis un lien</a>
<a title="Et moi son titre" href="#lien-référencé">Je suis un second lien</a>
<p>Je suis un texte tout seul</p>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien][Référence A]

[Je suis un second lien][Référence A]

Je suis un texte tout seul

[Référence A]: <#lien-référencé> (Et moi son titre)
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

Pour définir l'ID d'un lien, il faut **écrire un lien en suivant la [syntaxe classique avec titre](#syntaxe-classique-avec-titre)**. L'ID est rajouté au lien automatiquement (à l'aide du thème) et aura pour valeur la sortie de la fonction [anchorize](https://gohugo.io/functions/anchorize/) de Hugo avec en entrée la valeur du titre du lien:

* **\[Texte_du_lien\]\(URL_du_lien \"Titre_du_lien\"\)**

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
[Je suis un lien](#id-dun-lien-spécificité-du-thème "Et moi son titre")
```
{{< /md >}}|{{< plaintext >}}
<a id="et-moi-son-titre" title="Et moi son titre" href="#id-dun-lien-spécificité-du-thème">Je suis un lien</a>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien](#id-dun-lien-spécificité-du-thème "Et moi son titre")
{{< /md >}}|

## Ref/Relref

Pour définir un lien en utilisant `ref` ou `relref`, il faut **suivre la [syntaxe par défaut des shortcodes intégrés à Hugo](https://gohugo.io/content-management/shortcodes/#ref-and-relref)**.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
[Je suis un lien ref]({{%/*/* ref "image/" */*/%}})
```
{{< /md >}}|{{< plaintext >}}
<a href="<baseURL>/markdown/image/">Je suis un lien ref</a>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien ref]({{% ref "image/" %}})
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien ref avec des paramètres nommées]({{%/*/* ref path="image/" lang="fr" outputFormat="html" */*/%}})
```
{{< /md >}}|{{< plaintext >}}
<a href="<baseURL>/fr/markdown/image/">Je suis un lien ref avec des paramètres nommées</a>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien ref avec des paramètres nommées]({{% ref path="image/" lang="fr" outputFormat="html" %}})
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien relref]({{%/*/* relref "image/" */*/%}})
```
{{< /md >}}|{{< plaintext >}}
<a href="/markdown/image/">Je suis un lien relref</a>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien relref]({{% relref "image/" %}})
{{< /md >}}|
|{{< md >}}
```
[Je suis un lien relref avec des paramètres nommées]({{%/*/* relref path="image/" lang="fr" outputFormat="html" */*/%}})
```
{{< /md >}}|{{< plaintext >}}
<a href="/fr/markdown/image/">Je suis un lien relref avec des paramètres nommées</a>
{{< /plaintext >}}|{{< md >}}
[Je suis un lien relref avec des paramètres nommées]({{% relref path="image/" lang="fr" outputFormat="html" %}})
{{< /md >}}|
