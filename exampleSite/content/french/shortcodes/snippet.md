---
title: "{{< snippet >}}"
description: "Shortcode {{< snippet >}}."
categories: ["Shortcode"]
tags: ["Gestion du contenu"]
---

# Description
---

Le shortcode **snippet** permet d'écrire un fragment de code, défini soit depuis le [contenu du shortcode](https://gohugo.io/templates/shortcode-templates/#inner), soit depuis un fichier template.

De plus, il est possible de définir plusieurs fragments de code répartis dans différents onglets. Pour cela il suffit d'imbriquer autant de shortcode **tab** que d'onglet voulu dans un shortcode **snippet** parent.  
Par exemple: afficher les commandes d'un CLI en fonction du système d'exploitation utilisé.

{{< alert type="warning" >}}
Le contenu ainsi que les paramètres définis dans un shortcode **tab** sont prépondérant par rapport à ceux définis dans le shortcode **snippet** parent. Si tout les onglets partagent les mêmes paramètres il est donc possible de les définir de manière globale dans le shortcode **snippet** parent (Cf. [exemples](#exemples) ci-dessous).
{{< /alert >}}

# Paramètres
---

| Nom | Type(nommé/positionnel) | Description |
| --- | ----------------------- | ----------- |
| file | nommé |{{< md >}}
Chemin du fichier à inclure.  
*NB: Le paramètre file est prépondérant par rapport au contenu du shortcode.*
{{< /md >}}|
| type | nommé |{{< md >}}
Format du fichier à inclure.  
Valeurs possibles:
  * code
  * md
  * plaintext

*NB: Si non renseigné, le type par défaut est **code**.*
{{< /md >}}|
| caption | nommé |{{< md >}}
Légende de l'extrait de code.  
*NB: Paramètre uniquement applicable pour un extrait de type **code**.*
{{< /md >}}|
| codelang | nommé |{{< md >}}
Langage de l'extrait de code.  
*NB: Paramètre uniquement applicable pour un extrait de type **code**.*
{{< /md >}}|
| codeparam | nommé |{{< md >}}
[Paramètres de surlignage](https://gohugo.io/content-management/syntax-highlighting/#highlighting-in-code-fences) de l'extrait de code.  
*NB: Paramètre uniquement applicable pour un extrait de code de type **code**.*
{{< /md >}}|
| title | nommé |{{< md >}}
Titre de l'onglet.  
*NB: Paramètre uniquement applicable pour un shortcode **tab** imbriqué dans un shortcode **snippet**.*
{{< /md >}}|

# Exemples
---

| Markdown | Rendu |
| -------- | ----- |
|{{< md >}}
```
{{</*/* snippet */*/>}}
# Hello, World!
---
*Je suis* **un template** ***réutilisable*** à inclure dans le contenu d'une page.
}
{{</*/* /snippet */*/>}}
```
{{< /md >}}|{{< snippet >}}
# Hello, World!
---
*Je suis* **un template** ***réutilisable*** à inclure dans le contenu d'une page.
}
{{< /snippet >}}|
|{{< md >}}
```
{{</*/* snippet
    type="code"
*/*/>}}
# Hello, World!
---
*Je suis* **un template** ***réutilisable*** à inclure dans le contenu d'une page.
}
{{</*/* /snippet */*/>}}
```
{{< /md >}}|{{< snippet
    type="code"
>}}
# Hello, World!
---
*Je suis* **un template** ***réutilisable*** à inclure dans le contenu d'une page.
}
{{< /snippet >}}|
|{{< md >}}
```
{{</*/* snippet
    type="md"
*/*/>}}
# Hello, World!
---
*Je suis* **un template** ***réutilisable*** à inclure dans le contenu d'une page.
{{</*/* /snippet */*/>}}
```
{{< /md >}}|{{< snippet
    type="md"
>}}
# Hello, World!
---
*Je suis* **un template** ***réutilisable*** à inclure dans le contenu d'une page.
{{< /snippet >}}|
|{{< md >}}
```
{{</*/* snippet
    type="plaintext"
*/*/>}}
# Hello, World!
---
*Je suis* **un template** ***réutilisable*** à inclure dans le contenu d'une page.
{{</*/* /snippet */*/>}}
```
{{< /md >}}|{{< snippet
    type="plaintext"
>}}
# Hello, World!
---
*Je suis* **un template** ***réutilisable*** à inclure dans le contenu d'une page.
{{< /snippet >}}|
|{{< md >}}
```
{{</*/* snippet
    file="templates/snippet.fr.md"
    caption="Je suis une légende"
/*/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.fr.md"
    caption="Je suis une légende"
/>}}|
|{{< md >}}
```
{{</*/* snippet
    file="templates/snippet.fr.md"
    type="md"
    caption="Je suis une légende"
/*/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.fr.md"
    type="md"
    caption="Je suis une légende"
/>}}|
|{{< md >}}
```
{{</*/* snippet
    file="templates/snippet.fr.md"
    type="plaintext"
    caption="Je suis une légende"
/*/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.fr.md"
    type="plaintext"
    caption="Je suis une légende"
/>}}|
|{{< md >}}
```
{{</*/* snippet
    file="templates/snippet.go"
    caption="Je suis une légende"
    codelang="go"
    codeparam="linenos=table,hl_lines=[1,3,\"5-7\"],linenostart=10"
/*/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.go"
    caption="Je suis une légende"
    codelang="go"
    codeparam="linenos=table,hl_lines=[1,3,\"5-7\"],linenostart=10"
/>}}|
|{{< md >}}
```
{{</*/* snippet */*/>}}
{{</*/* tab
    title="code"
*/*/>}}
# Hello, World!
---
*Je suis* **un template** ***réutilisable*** à inclure dans le contenu d'une page.
{{</*/* /tab */*/>}}
{{</*/* tab
    title="md"
    type="md"
*/*/>}}
# Hello, World!
---
*Je suis* **un template** ***réutilisable*** à inclure dans le contenu d'une page.
{{</*/* /tab */*/>}}
{{</*/* tab
    title="plaintext"
    type="plaintext"
*/*/>}}
# Hello, World!
---
*Je suis* **un template** ***réutilisable*** à inclure dans le contenu d'une page.
{{</*/* /tab */*/>}}
{{</*/* /snippet */*/>}}
```
{{< /md >}}|{{< snippet >}}
{{< tab
    title="code"
>}}
# Hello, World!
---
*Je suis* **un template** ***réutilisable*** à inclure dans le contenu d'une page.
{{< /tab >}}
{{< tab
    title="md"
    type="md"
>}}
# Hello, World!
---
*Je suis* **un template** ***réutilisable*** à inclure dans le contenu d'une page.
{{< /tab >}}
{{< tab
    title="plaintext"
    type="plaintext"
>}}
# Hello, World!
---
*Je suis* **un template** ***réutilisable*** à inclure dans le contenu d'une page.
{{< /tab >}}
{{< /snippet >}}|
|{{< md >}}
```
{{</*/* snippet
    file="templates/snippet.go"
    type="md"
    caption="Je suis une légende"
    codelang="go"
    codeparam="linenos=table,hl_lines=[1,3,\"5-7\"],linenostart=10"
*/*/>}}
{{</*/* tab
    title="first tab"
    type="code"
    caption="Je suis une autre légende"
    codelang="go"
    codeparam="linenos=table,hl_lines=[1,3],linenostart=20"
/*/*/>}}
{{</*/* tab
    file="templates/snippet.fr.md"
    title="second tab"
    codelang="md"
/*/*/>}}
{{</*/* tab
    title="third tab"
    type="plaintext"
    caption=""
*/*/>}}
# Hello, World!
---
*Je suis* **un template** ***réutilisable*** à inclure dans le contenu d'une page.
{{</*/* /tab */*/>}}
{{</*/* /snippet */*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.go"
    type="md"
    caption="Je suis une légende"
    codelang="go"
    codeparam="linenos=table,hl_lines=[1,3,\"5-7\"],linenostart=10"
>}}
{{< tab
    title="first tab"
    type="code"
    caption="Je suis une autre légende"
    codelang="go"
    codeparam="linenos=table,hl_lines=[1,3],linenostart=20"
/>}}
{{< tab
    file="templates/snippet.fr.md"
    title="second tab"
    codelang="md"
/>}}
{{< tab
    title="third tab"
    type="plaintext"
    caption=""
>}}
# Hello, World!
---
*Je suis* **un template** ***réutilisable*** à inclure dans le contenu d'une page.
{{< /tab >}}
{{< /snippet >}}|
