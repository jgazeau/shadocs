---
title: "{{< tab-container >}}"
description: "Shortcodes {{< tab-container >}} et {{< tab >}}."
categories: ["Shortcode"]
tags: ["Gestion du contenu"]
---

# Description
---

Le shortcode **tab-container** permet d'organiser du contenu en onglets. Pour cela, il suffit d'imbriquer autant de shortcodes **tab** que d'onglets souhaités dans un shortcode **tab-container** parent.  
Par exemple, pour afficher des instructions en fonction du système d'exploitation utilisé.

{{< alert>}}
Le rendu des **tabs** est toujours en markdown.
{{< /alert >}}

{{< alert type="warning" >}}
Le shortcode **tab** doit toujours être imbriqué dans un shortcode **tab-container**.
{{< /alert >}}

# Paramètres
---

## tab-container

| Nom | Type(nommé/positionnel) | Description |
| --- | ----------------------- | ----------- |

## tab

| Nom | Type(nommé/positionnel) | Description |
| --- | ----------------------- | ----------- |
| title | nommé |{{< md >}}
Titre de l'onglet.  
*NB: Si non renseigné, le titre est un texte par défaut défini par le thème.*
{{< /md >}}|

# Exemples
---

| Markdown | Rendu |
| -------- | ----- |
|{{< md >}}
```
{{</*/* tab-container */*/>}}
{{</*/* tab
    title="Premier onglet"
*/*/>}}
Je suis le contenu du **premier** onglet.
{{</*/* /tab */*/>}}
{{</*/* tab
    title="Deuxième onglet"
*/*/>}}
Je suis le contenu du **deuxième** onglet.
{{</*/* /tab */*/>}}
{{</*/* tab */*/>}}
Je suis le contenu du **troisième** onglet.
{{</*/* /tab */*/>}}
{{</*/* /tab-container */*/>}}
```
{{< /md >}}|{{< tab-container >}}
{{< tab
    title="Premier onglet"
>}}
Je suis le contenu du **premier** onglet.
{{< /tab >}}
{{< tab
    title="Deuxième onglet"
>}}
Je suis le contenu du **deuxième** onglet.
{{< /tab >}}
{{< tab >}}
Je suis le contenu du **troisième** onglet.
{{< /tab >}}
{{< /tab-container >}}|
|{{< md >}}
````
{{</*/* tab-container */*/>}}
{{</*/* tab
    title="Linux"
*/*/>}}
Installation sur **Linux** :
```bash
sudo apt install my-package
```
{{</*/* /tab */*/>}}
{{</*/* tab
    title="macOS"
*/*/>}}
Installation sur **macOS** :
```bash
brew install my-package
```
{{</*/* /tab */*/>}}
{{</*/* tab
    title="Windows"
*/*/>}}
Installation sur **Windows** :
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
Installation sur **Linux** :
```bash
sudo apt install my-package
```
{{< /tab >}}
{{< tab
    title="macOS"
>}}
Installation sur **macOS** :
```bash
brew install my-package
```
{{< /tab >}}
{{< tab
    title="Windows"
>}}
Installation sur **Windows** :
```powershell
choco install my-package
```
{{< /tab >}}
{{< /tab-container >}}|
|{{< md >}}
```
{{</*/* tab-container */*/>}}
{{</*/* tab
    title="Avec snippet"
*/*/>}}
{{</*/* snippet
    file="templates/snippet.go"
    caption="I'm a legend"
    codelang="go"
    codeparam="linenos=table,hl_lines=[1,3,\"5-7\"],linenostart=10"
/*/*/>}}
{{</*/* /tab */*/>}}
{{</*/* tab
    title="Deuxième onglet"
*/*/>}}
Je suis le contenu du **deuxième** onglet.
{{</*/* /tab */*/>}}
{{</*/* tab
    title="Troisième onglet"
*/*/>}}
Je suis le contenu du **troisième** onglet.
{{</*/* /tab */*/>}}
{{</*/* /tab-container */*/>}}
```
{{< /md >}}|{{< tab-container >}}
{{< tab
    title="Avec snippet"
>}}
{{</* snippet
    file="templates/snippet.go"
    caption="Je suis une légende"
    codelang="go"
    codeparam="linenos=table,hl_lines=[1,3,\"5-7\"],linenostart=10"
/*/>}}
{{< /tab >}}
{{< tab
    title="Deuxième onglet"
>}}
Je suis le contenu du **deuxième** onglet.
{{< /tab >}}
{{< tab
    title="Troisième onglet"
>}}
Je suis le contenu du **troisième** onglet.
{{< /tab >}}
{{< /tab-container >}}|
|{{< md >}}
```
{{</*/* tab-container */*/>}}
{{</*/* tab
    title="Avec alerte"
*/*/>}}
{{</*/* alert type="warning" */*/>}}
Je suis une alerte de type **warning**
{{</*/* /alert */*/>}}
{{</*/* /tab */*/>}}
{{</*/* tab
    title="Deuxième onglet"
*/*/>}}
Je suis le contenu du **deuxième** onglet.
{{</*/* /tab */*/>}}
{{</*/* tab
    title="Troisième onglet"
*/*/>}}
Je suis le contenu du **troisième** onglet.
{{</*/* /tab */*/>}}
{{</*/* /tab-container */*/>}}
```
{{< /md >}}|{{< tab-container >}}
{{< tab
    title="Avec alerte"
>}}
{{</* alert type="warning" */>}}
Je suis une alerte de type **warning**
{{</* /alert */>}}
{{< /tab >}}
{{< tab
    title="Deuxième onglet"
>}}
Je suis le contenu du **deuxième** onglet.
{{< /tab >}}
{{< tab
    title="Troisième onglet"
>}}
Je suis le contenu du **troisième** onglet.
{{< /tab >}}
{{< /tab-container >}}|
