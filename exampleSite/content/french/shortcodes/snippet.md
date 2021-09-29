---
weight: 4110
title: "{{< snippet >}}"
description: "Shortcode {{< snippet >}}."
categories: ["Shortcode"]
---

# Description
---

Le shortcode **snippet** permet d'écrire un fragment de code, défini soit depuis le [contenu du shortcode](https://gohugo.io/templates/shortcode-templates/#inner), soit depuis un fichier template.

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
  * md
  * plaintext

*NB: Si non renseigné, le contenu du fichier est affiché en tant qu'extrait de code (Paramètre uniquement applicable si le paramètre fichier est renseigné).*
{{< /md >}}|
| caption | nommé |{{< md >}}
Légende de l'extrait de code.  
*NB: Paramètre uniquement applicable pour un extrait de code.*
{{< /md >}}|
| codelang | nommé |{{< md >}}
Langage de l'extrait de code.  
*NB: Paramètre uniquement applicable pour un extrait de code.*
{{< /md >}}|
| codeparam | nommé |{{< md >}}
[Paramètres de surlignage](https://gohugo.io/content-management/syntax-highlighting/#highlighting-in-code-fences) de l'extrait de code.  
*NB: Paramètre uniquement applicable pour un extrait de code.*
{{< /md >}}|

# Exemples
---

| Markdown | Rendu |
| -------- | ----- |
|{{< md >}}
```
{{</* snippet
*/>}}
package main

import "fmt"

func main() {
  fmt.Println("Hello, World!")
}
{{</* /snippet */>}}
```
{{< /md >}}|{{< snippet >}}
package main

import "fmt"

func main() {
  fmt.Println("Hello, World!")
}
{{< /snippet >}}|
|{{< md >}}
```
{{</* snippet
    caption="Je suis une légende"
*/>}}
package main

import "fmt"

func main() {
  fmt.Println("Hello, World!")
}
{{</* /snippet */>}}
```
{{< /md >}}|{{< snippet
    caption="Je suis une légende"
>}}
package main

import "fmt"

func main() {
  fmt.Println("Hello, World!")
}
{{< /snippet >}}|
|{{< md >}}
```
{{</* snippet
    caption="Je suis une légende"
    codelang="go"
*/>}}
package main

import "fmt"

func main() {
  fmt.Println("Hello, World!")
}
{{</* /snippet */>}}
```
{{< /md >}}|{{< snippet
    caption="Je suis une légende"
    codelang="go"
>}}
package main

import "fmt"

func main() {
  fmt.Println("Hello, World!")
}
{{< /snippet >}}|
|{{< md >}}
```
{{</* snippet
    caption="Je suis une légende"
    codelang="go"
    codeparam="linenos=table,hl_lines=[1,3,\"5-7\"],linenostart=10"
*/>}}
package main

import "fmt"

func main() {
  fmt.Println("Hello, World!")
}
{{</* /snippet */>}}
```
{{< /md >}}|{{< snippet
    caption="Je suis une légende"
    codelang="go"
    codeparam="linenos=table,hl_lines=[1,3,\"5-7\"],linenostart=10"
>}}
package main

import "fmt"

func main() {
  fmt.Println("Hello, World!")
}
{{< /snippet >}}|
|{{< md >}}
```
{{</* snippet
    file="templates/snippet.fr.md"
    type="md"
/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.fr.md"
    type="md"
/>}}|
|{{< md >}}
```
{{</* snippet
    file="templates/snippet.fr.md"
    type="plaintext"
/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.fr.md"
    type="plaintext"
/>}}|
|{{< md >}}
```
{{</* snippet
    file="templates/snippet.fr.md"
/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.fr.md"
/>}}|
|{{< md >}}
```
{{</* snippet
    file="templates/snippet.html"
    type="plaintext"
/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.html"
    type="plaintext"
/>}}|
|{{< md >}}
```
{{</* snippet
    file="templates/snippet.html"
/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.html"
/>}}|
|{{< md >}}
```
{{</* snippet
    file="templates/snippet.go"
    type="plaintext"
/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.go"
    type="plaintext"
/>}}|
|{{< md >}}
```
{{</* snippet
    file="templates/snippet.go"
/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.go"
/>}}|
|{{< md >}}
```
{{</* snippet
    file="templates/snippet.go"
    caption="Je suis une légende"
/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.go"
    caption="Je suis une légende"
/>}}|
|{{< md >}}
```
{{</* snippet
    file="templates/snippet.go"
    caption="Je suis une légende"
    codelang="go"
/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.go"
    caption="Je suis une légende"
    codelang="go"
/>}}|
|{{< md >}}
```
{{</* snippet
    file="templates/snippet.go"
    caption="Je suis une légende"
    codelang="go"
    codeparam="linenos=table,hl_lines=[1,3,\"5-7\"],linenostart=10"
/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.go"
    caption="Je suis une légende"
    codelang="go"
    codeparam="linenos=table,hl_lines=[1,3,\"5-7\"],linenostart=10"
/>}}|
