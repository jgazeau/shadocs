---
title: "{{< snippet >}}"
description: "Shortcode {{< snippet >}}."
categories: ["Shortcode"]
tags: ["Content management"]
---

# Description
---

The **snippet** shortcode allows to write a code fragment, defined either from the [shortcode content](https://gohugo.io/templates/shortcode-templates/#inner), or from a template file.

Moreover, it is possible to define snippets organised in tabs. To do so, nest as many **tab** shortcode as needed in a parent **snippet** shortcode.  
For example: display CLI commands depending on the operating system used.

{{< alert type="warning" >}}
The content as well as parameters defined in a **tab** shortcode take precedence over definitions in the parent **snippet** shortcode. If all tabs share the same parameters, it is therefore possible to define them globally in the parent **snippet** shortcode (cf. [examples](#examples) below).
{{< /alert >}}

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
  * code
  * md
  * plaintext

*NB: If not specified, the default type is **code**.*
{{< /md >}}|
| caption | named |{{< md >}}
Code snippet caption.  
*NB: Parameter only applicable for a snippet of **code** type.*
{{< /md >}}|
| codelang | named |{{< md >}}
Code snippet language.  
*NB: Parameter only applicable for a snippet of **code** type.*
{{< /md >}}|
| codeparam | named |{{< md >}}
Code snippet [highlight settings](https://gohugo.io/content-management/syntax-highlighting/#highlighting-in-code-fences).  
*NB: Parameter only applicable for a snippet of **code** type.*
{{< /md >}}|
| title | named |{{< md >}}
Tab title.  
*NB: Parameter only applicable for a **tab** shortcode nested in a **snippet** shortcode.*
{{< /md >}}|

# Examples
---

| Markdown | Rendering |
| -------- | --------- |
|{{< md >}}
```
{{</*/* snippet */*/>}}
# Hello, World!
---
*I am* **a reusable** ***template*** to include in a page content.
}
{{</*/* /snippet */*/>}}
```
{{< /md >}}|{{< snippet >}}
# Hello, World!
---
*I am* **a reusable** ***template*** to include in a page content.
}
{{< /snippet >}}|
|{{< md >}}
```
{{</*/* snippet
    type="code"
*/*/>}}
# Hello, World!
---
*I am* **a reusable** ***template*** to include in a page content.
}
{{</*/* /snippet */*/>}}
```
{{< /md >}}|{{< snippet
    type="code"
>}}
# Hello, World!
---
*I am* **a reusable** ***template*** to include in a page content.
}
{{< /snippet >}}|
|{{< md >}}
```
{{</*/* snippet
    type="md"
*/*/>}}
# Hello, World!
---
*I am* **a reusable** ***template*** to include in a page content.
{{</*/* /snippet */*/>}}
```
{{< /md >}}|{{< snippet
    type="md"
>}}
# Hello, World!
---
*I am* **a reusable** ***template*** to include in a page content.
{{< /snippet >}}|
|{{< md >}}
```
{{</*/* snippet
    type="plaintext"
*/*/>}}
# Hello, World!
---
*I am* **a reusable** ***template*** to include in a page content.
{{</*/* /snippet */*/>}}
```
{{< /md >}}|{{< snippet
    type="plaintext"
>}}
# Hello, World!
---
*I am* **a reusable** ***template*** to include in a page content.
{{< /snippet >}}|
|{{< md >}}
```
{{</*/* snippet
    file="templates/snippet.en.md"
    caption="I'm a legend"
/*/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.en.md"
    caption="I'm a legend"
/>}}|
|{{< md >}}
```
{{</*/* snippet
    file="templates/snippet.en.md"
    type="md"
    caption="I'm a legend"
/*/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.en.md"
    type="md"
    caption="I'm a legend"
/>}}|
|{{< md >}}
```
{{</*/* snippet
    file="templates/snippet.en.md"
    type="plaintext"
    caption="I'm a legend"
/*/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.en.md"
    type="plaintext"
    caption="I'm a legend"
/>}}|
|{{< md >}}
```
{{</*/* snippet
    file="templates/snippet.go"
    caption="I'm a legend"
    codelang="go"
    codeparam="linenos=table,hl_lines=[1,3,\"5-7\"],linenostart=10"
/*/*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.go"
    caption="I'm a legend"
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
*I am* **a reusable** ***template*** to include in a page content.
{{</*/* /tab */*/>}}
{{</*/* tab
    title="md"
    type="md"
*/*/>}}
# Hello, World!
---
*I am* **a reusable** ***template*** to include in a page content.
{{</*/* /tab */*/>}}
{{</*/* tab
    title="plaintext"
    type="plaintext"
*/*/>}}
# Hello, World!
---
*I am* **a reusable** ***template*** to include in a page content.
{{</*/* /tab */*/>}}
{{</*/* /snippet */*/>}}
```
{{< /md >}}|{{< snippet >}}
{{< tab
    title="code"
>}}
# Hello, World!
---
*I am* **a reusable** ***template*** to include in a page content.
{{< /tab >}}
{{< tab
    title="md"
    type="md"
>}}
# Hello, World!
---
*I am* **a reusable** ***template*** to include in a page content.
{{< /tab >}}
{{< tab
    title="plaintext"
    type="plaintext"
>}}
# Hello, World!
---
*I am* **a reusable** ***template*** to include in a page content.
{{< /tab >}}
{{< /snippet >}}|
|{{< md >}}
```
{{</*/* snippet
    file="templates/snippet.go"
    type="md"
    caption="I'm a legend"
    codelang="go"
    codeparam="linenos=table,hl_lines=[1,3,\"5-7\"],linenostart=10"
*/*/>}}
{{</*/* tab
    title="first tab"
    type="code"
    caption="I'm an other legend"
    codelang="go"
    codeparam="linenos=table,hl_lines=[1,3],linenostart=20"
/*/*/>}}
{{</*/* tab
    file="templates/snippet.en.md"
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
*I am* **a reusable** ***template*** to include in a page content.
{{</*/* /tab */*/>}}
{{</*/* /snippet */*/>}}
```
{{< /md >}}|{{< snippet
    file="templates/snippet.go"
    type="md"
    caption="I'm a legend"
    codelang="go"
    codeparam="linenos=table,hl_lines=[1,3,\"5-7\"],linenostart=10"
>}}
{{< tab
    title="first tab"
    type="code"
    caption="I'm an other legend"
    codelang="go"
    codeparam="linenos=table,hl_lines=[1,3],linenostart=20"
/>}}
{{< tab
    file="templates/snippet.en.md"
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
*I am* **a reusable** ***template*** to include in a page content.
{{< /tab >}}
{{< /snippet >}}|
