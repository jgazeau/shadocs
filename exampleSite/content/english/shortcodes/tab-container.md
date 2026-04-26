---
title: "{{< tab-container >}}"
description: "Shortcodes {{< tab-container >}} and {{< tab >}}."
categories: ["Shortcode"]
tags: ["Content management"]
---

# Description
---

The **tab-container** shortcode allows you to organize content in tabs. To do so, nest as many **tab** shortcodes as needed inside a parent **tab-container** shortcode.  
For example, display instructions depending on the operating system used.

{{< alert>}}
The rendering of **tabs** is always in markdown.
{{< /alert >}}

{{< alert type="warning" >}}
The **tab** shortcode must always be nested inside a **tab-container** shortcode.
{{< /alert >}}

# Parameters
---

## *tab-container*

| Name | Type(named/positional) | Description |
| ---- | ---------------------- | ----------- |

## *tab*

| Name | Type(named/positional) | Description |
| ---- | ---------------------- | ----------- |
| title | named |{{< md >}}
Tab title.  
*NB: If not specified, the title is a default text defined by the theme.*
{{< /md >}}|

# Examples
---

| Markdown | Rendering |
| -------- | --------- |
|{{< md >}}
```
{{</*/* tab-container */*/>}}
{{</*/* tab
    title="First tab"
*/*/>}}
I am the **first** tab content.
{{</*/* /tab */*/>}}
{{</*/* tab
    title="Second tab"
*/*/>}}
I am the **second** tab content.
{{</*/* /tab */*/>}}
{{</*/* tab */*/>}}
I am the **third** tab content.
{{</*/* /tab */*/>}}
{{</*/* /tab-container */*/>}}
```
{{< /md >}}|{{< tab-container >}}
{{< tab
    title="First tab"
>}}
I am the **first** tab content.
{{< /tab >}}
{{< tab
    title="Second tab"
>}}
I am the **second** tab content.
{{< /tab >}}
{{< tab >}}
I am the **third** tab content.
{{< /tab >}}
{{< /tab-container >}}|
|{{< md >}}
````
{{</*/* tab-container */*/>}}
{{</*/* tab
    title="Linux"
*/*/>}}
Install on **Linux**:
```bash
sudo apt install my-package
```
{{</*/* /tab */*/>}}
{{</*/* tab
    title="macOS"
*/*/>}}
Install on **macOS**:
```bash
brew install my-package
```
{{</*/* /tab */*/>}}
{{</*/* tab
    title="Windows"
*/*/>}}
Install on **Windows**:
```powershell
choco install my-package
```
{{</*/* /tab */*/>}}
{{</*/* /tab-container */*/>}}
````
{{< /md >}}|{{< tab-container >}}
{{< tab
    title="Linux"
>}}
Install on **Linux**:
```bash
sudo apt install my-package
```
{{< /tab >}}
{{< tab
    title="macOS"
>}}
Install on **macOS**:
```bash
brew install my-package
```
{{< /tab >}}
{{< tab
    title="Windows"
>}}
Install on **Windows**:
```powershell
choco install my-package
```
{{< /tab >}}
{{< /tab-container >}}|
|{{< md >}}
```
{{</*/* tab-container */*/>}}
{{</*/* tab
    title="With snippet"
*/*/>}}
{{</*/* snippet
    file="templates/snippet.go"
    caption="I'm a legend"
    codelang="go"
    codeparam="linenos=table,hl_lines=[1,3,\"5-7\"],linenostart=10"
/*/*/>}}
{{</*/* /tab */*/>}}
{{</*/* tab
    title="Second tab"
*/*/>}}
I am the **second** tab content.
{{</*/* /tab */*/>}}
{{</*/* tab
    title="Third tab"
*/*/>}}
I am the **third** tab content.
{{</*/* /tab */*/>}}
{{</*/* /tab-container */*/>}}
```
{{< /md >}}|{{< tab-container >}}
{{< tab
    title="With snippet"
>}}
{{</* snippet
    file="templates/snippet.go"
    caption="I'm a legend"
    codelang="go"
    codeparam="linenos=table,hl_lines=[1,3,\"5-7\"],linenostart=10"
/*/>}}
{{< /tab >}}
{{< tab
    title="Second tab"
>}}
I am the **second** tab content.
{{< /tab >}}
{{< tab
    title="Third tab"
>}}
I am the **third** tab content.
{{< /tab >}}
{{< /tab-container >}}|
|{{< md >}}
```
{{</*/* tab-container */*/>}}
{{</*/* tab
    title="With alert"
*/*/>}}
{{</*/* alert type="warning" */*/>}}
I’m a **warning** type alert
{{</*/* /alert */*/>}}
{{</*/* /tab */*/>}}
{{</*/* tab
    title="Second tab"
*/*/>}}
I am the **second** tab content.
{{</*/* /tab */*/>}}
{{</*/* tab
    title="Third tab"
*/*/>}}
I am the **third** tab content.
{{</*/* /tab */*/>}}
{{</*/* /tab-container */*/>}}
```
{{< /md >}}|{{< tab-container >}}
{{< tab
    title="With alert"
>}}
{{</* alert type="warning" */>}}
I’m a **warning** type alert
{{</* /alert */>}}
{{< /tab >}}
{{< tab
    title="Second tab"
>}}
I am the **second** tab content.
{{< /tab >}}
{{< tab
    title="Third tab"
>}}
I am the **third** tab content.
{{< /tab >}}
{{< /tab-container >}}|
