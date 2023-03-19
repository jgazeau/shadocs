---
weight: 9000
linkTitle: "Link"
title: "Markdown: Link"
description: "How to define a link?"
categories: ["Markdown"]
tags: ["Content management"]
---

# Link
---

## Classic syntax

To define a link, **use the following syntax**:

* **\[Link_text\]\(Link_URL\)**

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
[I'm a relative link to another page (in the same folder) of the website](image/)
```
{{< /md >}}|{{< plaintext >}}
<a href="/markdown/image/">I'm a relative link to another page (in the same folder) of the website</a>
{{< /plaintext >}}|{{< md >}}
[I'm a relative link to another page (in the same folder) of the website](image/)
{{< /md >}}|
|{{< md >}}
```
[I'm a relative link to another page (parent page) of the website](./)
```
{{< /md >}}|{{< plaintext >}}
<a href="/markdown/">I'm a relative link to another page (parent page) of the website</a>
{{< /plaintext >}}|{{< md >}}
[I'm a relative link to another page (parent page) of the website](./)
{{< /md >}}|
|{{< md >}}
```
[I'm an absolute link to another page of the website](/markdown/image/)
```
{{< /md >}}|{{< plaintext >}}
<a href="/markdown/image/">I'm an absolute link to another page of the website</a>
{{< /plaintext >}}|{{< md >}}
[I'm an absolute link to another page of the website](/markdown/image/)
{{< /md >}}|
|{{< md >}}
```
[I'm an absolute link to a static resource of the website](/images/favicon.png)
```
{{< /md >}}|{{< plaintext >}}
<a href="/images/favicon.png">I'm an absolute link to a static resource of the website</a>
{{< /plaintext >}}|{{< md >}}
[I'm an absolute link to a static resource of the website](/images/favicon.png)
{{< /md >}}|
|{{< md >}}
```
[I'm a link to a title ID](#link)
```
{{< /md >}}|{{< plaintext >}}
<a href="#link">I'm a link to a title ID</a>
{{< /plaintext >}}|{{< md >}}
[I'm a link to a title ID](#link)
{{< /md >}}|
|{{< md >}}
```
[I'm a link to the homepage](/)
```
{{< /md >}}|{{< plaintext >}}
<a href="/">I'm a link to the homepage</a>
{{< /plaintext >}}|{{< md >}}
[I'm a link to the homepage](/)
{{< /md >}}|
|{{< md >}}
```
[I'm a link to the homepage in another language](/fr/)
```
{{< /md >}}|{{< plaintext >}}
<a href="/fr/">I'm a link to the homepage in another language</a>
{{< /plaintext >}}|{{< md >}}
[I'm a link to the homepage in another language](/fr/)
{{< /md >}}|
|{{< md >}}
```
[I'm an external link](https://www.google.com)
```
{{< /md >}}|{{< plaintext >}}
<a href="https://www.google.com">I'm an external link</a>
{{< /plaintext >}}|{{< md >}}
[I'm an external link](https://www.google.com)
{{< /md >}}|

{{< alert type="warning" >}}
Links that does not contain a URL scheme are all prefixed depending on the `baseURL` configuration.  
For example:  
| baseURL | Markdown | Rendering |
| ------- | -------- | --------- |
| / | \[](/markdown/link/) | href="**/markdown/link/**" |
| http\://myWebsite.com/subpath/ | \[](/markdown/link/) | href="**/subpath/markdown/link/**" |
{{< /alert >}}
{{< alert type="warning" >}}
Links to the homepage using `/` is relative to the actual website lang.
{{< /alert >}}
{{< alert type="warning" >}}
Absolute links to resources using `/<RESOURCE_PATH>` is not relative to the actual website lang.
{{< /alert >}}

## Classic syntax with title

To define a link with a title, **use the following syntax**:

* **\[Link_text\]\(Link_URL \"Link_title\"\)**

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
[I'm a link](#classic-syntax-with-title "And I'm its title")
```
{{< /md >}}|{{< plaintext >}}
<a title="And I'm its title" href="#classic-syntax-with-title">I'm a link</a>
{{< /plaintext >}}|{{< md >}}
[I'm a link](#classic-syntax-with-title "And I'm its title")
{{< /md >}}|

## Alternative syntax

To define an external link it is possible to use alternative syntaxes:

* **Write the link URL** (rendering will be automatically made by the markdown converter).
* **Surround the link URL between the lower-than (\<) and greater-than (\>) characters**.

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
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
Warning, for a user-friendly rendering (using [Markdown Render Hooks](https://gohugo.io/getting-started/configuration-markup#markdown-render-hooks)) it is recommended to **use the classic syntax**.
{{< /alert >}}

## Escape a link

To escape a link (display a URL as a text) and avoid its automatic rendering by the markdown converter, it is possible to use alternative syntaxes:

* **Add a backtick (\`) before and after the link URL (Define link as a code fragment)**.
* **Escape the first slash (/) of the link URL**.

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
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

## Emphasize a link

To emphasize a link, **surround the markdown code of the link with the chosen emphasis code**. In case of a code fragment link, **place backticks (\`) inside the link text** (between the brackets).

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
*[I'm an italic link](/markdown/link/)*
```
{{< /md >}}|{{< plaintext >}}
<em><br><a href="/markdown/link/">I'm an italic link</a>
</em>
{{< /plaintext >}}|{{< md >}}
*[I'm an italic link](/markdown/link/)*
{{< /md >}}|
|{{< md >}}
```
**[I'm a bold link](/markdown/link/)**
```
{{< /md >}}|{{< plaintext >}}
<strong><br><a href="/markdown/link/">I'm a bold link</a>
</strong>
{{< /plaintext >}}|{{< md >}}
**[I'm a bold link](/markdown/link/)**
{{< /md >}}|
|{{< md >}}
```
***[I'm an italic and bold link](/markdown/link/)***
```
{{< /md >}}|{{< plaintext >}}
<em><strong><br><a href="/markdown/link/">I'm an italic and bold link</a>
</strong></em>
{{< /plaintext >}}|{{< md >}}
***[I'm an italic and bold link](/markdown/link/)***
{{< /md >}}|
|{{< md >}}
```
[`I'm a code fragment link`](/markdown/link/)
```
{{< /md >}}|{{< plaintext >}}
<a href="/markdown/link/">
<code>I'm a code fragment link</code>
</a>
{{< /plaintext >}}|{{< md >}}
[`I'm a code fragment link`](/markdown/link/)
{{< /md >}}|

## Referenced link

To define a link whose URL is referenced (therefore reusable), it must **be formatted in 2 parts**.

* **First part** (link text)

    To define the first part of the link, which corresponds to the text that will be rendered and a reference to be defined in the second part, **use the following syntax**:

    * **\[Link_text\]\[Link_URL_reference\]**

    {{< alert type="info" >}}
The link URL reference is not case sensitive and may contain alphanumeric characters, spaces, and punctuation.
    {{< /alert >}}

* **Second part** (link reference)

    To define the second part of the link, which is the link between the link URL reference defined in the first part, and the value of the URL, **use one of the following syntaxes**:

    * **\[Link_URL_reference\]: Link_URL**
    * **\[Link_URL_reference\]: Link_URL \"Link_title\"**
    * **\[Link_URL_reference\]: Link_URL \'Link_title\'**
    * **\[Link_URL_reference\]: Link_URL \(Link_title\)**
    * **\<\[Link_URL_reference\]\>: Link_URL \"Link_title\"**
    * **\<\[Link_URL_reference\]\>: Link_URL \'Link_title\'**
    * **\<\[Link_URL_reference\]\>: Link_URL \(Link_title\)**

    {{< alert type="info" >}}
The second part of the link can be placed anywhere in the document. For example all references of a document can be grouped together at the end of a document for readability and simplicity reasons.
    {{< /alert >}}

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
[I'm a link][Reference A]

[I'm a second link][Reference A]

I'm a lonely text

[Reference A]: #referenced-link
```
{{< /md >}}|{{< plaintext >}}
<a href="#referenced-link">I'm a link</a>
<a href="#referenced-link">I'm a second link</a>
<p>I'm a lonely text</p>
{{< /plaintext >}}|{{< md >}}
[I'm a link][Reference A]

[I'm a second link][Reference A]

I'm a lonely text

[Reference A]: #referenced-link
{{< /md >}}|
|{{< md >}}
```
[I'm a link][Reference A]

[I'm a second link][Reference A]

I'm a lonely text

[Reference A]: #referenced-link "And I'm its title"
```
{{< /md >}}|{{< plaintext >}}
<a title="And I'm its title" href="#referenced-link">I'm a link</a>
<a title="And I'm its title" href="#referenced-link">I'm a second link</a>
<p>I'm a lonely text</p>
{{< /plaintext >}}|{{< md >}}
[I'm a link][Reference A]

[I'm a second link][Reference A]

I'm a lonely text

[Reference A]: #referenced-link "And I'm its title"
{{< /md >}}|
|{{< md >}}
```
[I'm a link][Reference A]

[I'm a second link][Reference A]

I'm a lonely text

[Reference A]: #referenced-link 'And I\'m its title'
```
{{< /md >}}|{{< plaintext >}}
<a title="And I'm its title" href="#referenced-link">I'm a link</a>
<a title="And I'm its title" href="#referenced-link">I'm a second link</a>
<p>I'm a lonely text</p>
{{< /plaintext >}}|{{< md >}}
[I'm a link][Reference A]

[I'm a second link][Reference A]

I'm a lonely text

[Reference A]: #referenced-link 'And I\'m its title'
{{< /md >}}|
|{{< md >}}
```
[I'm a link][Reference A]

[I'm a second link][Reference A]

I'm a lonely text

[Reference A]: #referenced-link (And I'm its title)
```
{{< /md >}}|{{< plaintext >}}
<a title="And I'm its title" href="#referenced-link">I'm a link</a>
<a title="And I'm its title" href="#referenced-link">I'm a second link</a>
<p>I'm a lonely text</p>
{{< /plaintext >}}|{{< md >}}
[I'm a link][Reference A]

[I'm a second link][Reference A]

I'm a lonely text

[Reference A]: #referenced-link (And I'm its title)
{{< /md >}}|
|{{< md >}}
```
[I'm a link][Reference A]

[I'm a second link][Reference A]

I'm a lonely text

[Reference A]: <#referenced-link> "And I'm its title"
```
{{< /md >}}|{{< plaintext >}}
<a title="And I'm its title" href="#referenced-link">I'm a link</a>
<a title="And I'm its title" href="#referenced-link">I'm a second link</a>
<p>I'm a lonely text</p>
{{< /plaintext >}}|{{< md >}}
[I'm a link][Reference A]

[I'm a second link][Reference A]

I'm a lonely text

[Reference A]: <#referenced-link> "And I'm its title"
{{< /md >}}|
|{{< md >}}
```
[I'm a link][Reference A]

[I'm a second link][Reference A]

I'm a lonely text

[Reference A]: <#referenced-link> 'And I\'m its title'
```
{{< /md >}}|{{< plaintext >}}
<a title="And I'm its title" href="#referenced-link">I'm a link</a>
<a title="And I'm its title" href="#referenced-link">I'm a second link</a>
<p>I'm a lonely text</p>
{{< /plaintext >}}|{{< md >}}
[I'm a link][Reference A]

[I'm a second link][Reference A]

I'm a lonely text

[Reference A]: <#referenced-link> 'And I\'m its title'
{{< /md >}}|
|{{< md >}}
```
[I'm a link][Reference A]

[I'm a second link][Reference A]

I'm a lonely text

[Reference A]: <#referenced-link> (And I'm its title)
```
{{< /md >}}|{{< plaintext >}}
<a title="And I'm its title" href="#referenced-link">I'm a link</a>
<a title="And I'm its title" href="#referenced-link">I'm a second link</a>
<p>I'm a lonely text</p>
{{< /plaintext >}}|{{< md >}}
[I'm a link][Reference A]

[I'm a second link][Reference A]

I'm a lonely text

[Reference A]: <#referenced-link> (And I'm its title)
{{< /md >}}|

## Link with space

To define a link whose URL contains spaces, **encode the URL with the associated percentage code of the space character (%20)**.

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
[Hugo themes](https://www.google.com/?query=Hugo%20themes)
```
{{< /md >}}|{{< plaintext >}}
<a href="https://www.google.com/?query=Hugo%20themes">Hugo themes</a>
{{< /plaintext >}}|{{< md >}}
[Hugo themes](https://www.google.com/?query=Hugo%20themes)
{{< /md >}}|

## Link ID (Theme specific)

To define a link ID, **write a link following the [classic syntax with title](#classic-syntax-with-title)**. The ID is automatically added to the link (using the theme) and its value is the output of Hugo's [anchorize](https://gohugo.io/functions/anchorize/) function with the link title as input value:

* **\[Link_text\]\(Link_URL \"Link_title\"\)**

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
[I'm a link](#link-id-theme-specific "And I'm its title")
```
{{< /md >}}|{{< plaintext >}}
<a id="and-im-its-title" title="And I'm its title" href="#link-id-theme-specific">I'm a link</a>
{{< /plaintext >}}|{{< md >}}
[I'm a link](#link-id-theme-specific "And I'm its title")
{{< /md >}}|

## Ref/Relref

To define a link using the `ref` or `relref`, **follow the associated default [built-in Hugo shortcodes syntax](https://gohugo.io/content-management/shortcodes/#ref-and-relref)**.

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
[I'm a ref link]({{%/*/* ref "image/" */*/%}})
```
{{< /md >}}|{{< plaintext >}}
<a href="<baseURL>/markdown/image/">I'm a ref link</a>
{{< /plaintext >}}|{{< md >}}
[I'm a ref link]({{% ref "image/" %}})
{{< /md >}}|
|{{< md >}}
```
[I'm a ref link with named parameters]({{%/*/* ref path="image/" lang="fr" outputFormat="html" */*/%}})
```
{{< /md >}}|{{< plaintext >}}
<a href="<baseURL>/fr/markdown/image/">I'm a ref link with named parameters</a>
{{< /plaintext >}}|{{< md >}}
[I'm a ref link with named parameters]({{% ref path="image/" lang="fr" outputFormat="html" %}})
{{< /md >}}|
|{{< md >}}
```
[I'm a relref link]({{%/*/* relref "image/" */*/%}})
```
{{< /md >}}|{{< plaintext >}}
<a href="/markdown/image/">I'm a relref link</a>
{{< /plaintext >}}|{{< md >}}
[I'm a relref link]({{% relref "image/" %}})
{{< /md >}}|
|{{< md >}}
```
[I'm a relref link with named parameters]({{%/*/* relref path="image/" lang="fr" outputFormat="html" */*/%}})
```
{{< /md >}}|{{< plaintext >}}
<a href="/fr/markdown/image/">I'm a relref link with named parameters</a>
{{< /plaintext >}}|{{< md >}}
[I'm a relref link with named parameters]({{% relref path="image/" lang="fr" outputFormat="html" %}})
{{< /md >}}|
