---
weight: 4110
title: "{{< snippet >}}"
description: "Shortcode {{< snippet >}}."
categories: ["Shortcode"]
---

# Description
---

The **snippet** shortcode allows to write a code fragment, defined either from the [shortcode content](https://gohugo.io/templates/shortcode-templates/#inner), or from a template file.

# Parameters
---

| Name | Type(named/positional) | Description |
| ---- | ---------------------- | ----------- |
| file | named |{{< md >}}
File path to include.  
*NB: The file parameter takes precedence over the content of the shortcode.*
{{< /md >}}|
| type | named |{{< md >}}
File format to include.  
Possible values:
  * md
  * plaintext

*NB:*  
* *If not specified, the file content is displayed as snippet of type **code** by default.*
* *Parameter only applicable if file parameter is specified).*
{{< /md >}}|
| caption | named |{{< md >}}
Code snippet caption.  
*NB: Parameter only applicable for a snippet with default type as code.*
{{< /md >}}|
| codelang | named |{{< md >}}
Code snippet language.  
*NB: Parameter only applicable for a snippet with default type as code.*
{{< /md >}}|
| codeparam | named |{{< md >}}
Code snippet [highlight settings](https://gohugo.io/content-management/syntax-highlighting/#highlighting-in-code-fences).  
*NB: Parameter only applicable for a snippet with default type as **code**.*
{{< /md >}}|

# Examples
---

| Markdown | Rendering |
| -------- | --------- |
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
    caption="I'm a legend"
*/>}}
package main

import "fmt"

func main() {
  fmt.Println("Hello, World!")
}
{{</* /snippet */>}}
```
{{< /md >}}|{{< snippet
    caption="I'm a legend"
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
    caption="I'm a legend"
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
    caption="I'm a legend"
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
    caption="I'm a legend"
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
    caption="I'm a legend"
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
    file="templates/snippet.en.md"
    type="md"
/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.en.md"
    type="md"
/>}}|
|{{< md >}}
```
{{</* snippet
    file="templates/snippet.en.md"
    type="plaintext"
/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.en.md"
    type="plaintext"
/>}}|
|{{< md >}}
```
{{</* snippet
    file="templates/snippet.en.md"
/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.en.md"
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
    caption="I'm a legend"
/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.go"
    caption="I'm a legend"
/>}}|
|{{< md >}}
```
{{</* snippet
    file="templates/snippet.go"
    caption="I'm a legend"
    codelang="go"
/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.go"
    caption="I'm a legend"
    codelang="go"
/>}}|
|{{< md >}}
```
{{</* snippet
    file="templates/snippet.go"
    caption="I'm a legend"
    codelang="go"
    codeparam="linenos=table,hl_lines=[1,3,\"5-7\"],linenostart=10"
/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.go"
    caption="I'm a legend"
    codelang="go"
    codeparam="linenos=table,hl_lines=[1,3,\"5-7\"],linenostart=10"
/>}}|
