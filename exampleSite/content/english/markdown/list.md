---
weight: 7000
linkTitle: "List"
title: "Markdown: List"
description: "How to define a list?"
categories: ["Markdown"]
tags: ["Content management"]
---

# List
---

## Ordered list

To define an ordered list, **add a number followed by the dot character (.) to the line start, followed by a space** (The numbers order is not important, but **the first line number defines the starting point of the list**).  
It is possible to **nest lists by adding at least 4 spaces to the line start** compared to the previous level (all the same level elements must have **the same number of spaces at the line start**).

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
1. First
2. Second
3. Third
```
{{< /md >}}|{{< plaintext >}}
<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>
{{< /plaintext >}}|{{< md >}}
1. First
2. Second
3. Third
{{< /md >}}|
|{{< md >}}
```
1. First
1. Second
1. Third
```
{{< /md >}}|{{< plaintext >}}
<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>
{{< /plaintext >}}|{{< md >}}
1. First
1. Second
1. Third
{{< /md >}}|
|{{< md >}}
```
1. First
3. Second
6. Third
```
{{< /md >}}|{{< plaintext >}}
<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>
{{< /plaintext >}}|{{< md >}}
1. First
3. Second
6. Third
{{< /md >}}|
|{{< md >}}
```
1. First
2. Second
    1. Second.1
    2. Second.2
3. Third
```
{{< /md >}}|{{< plaintext >}}
<ol>
  <li>First</li>
  <li>Second
    <ol>
      <li>Second.1</li>
      <li>Second.2</li>
    </ol>
  </li>
  <li>Third</li>
</ol>
{{< /plaintext >}}|{{< md >}}
1. First
2. Second
    1. Second.1
    2. Second.2
3. Third
{{< /md >}}|

## Unordered list

To define an unordered list, **add a hyphen (-), a plus (+) or a star (*) character to the line start, followed by a space**.  
It is possible to **nest lists by adding at least 4 spaces to the line start** compared to the previous level (all the same level elements must have **the same number of spaces at the line start**).

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
* First
* Second
* Third
```
{{< /md >}}|{{< plaintext >}}
<ul>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
{{< /plaintext >}}|{{< md >}}
* First
* Second
* Third
{{< /md >}}|
|{{< md >}}
```
+ First
+ Second
+ Third
```
{{< /md >}}|{{< plaintext >}}
<ul>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
{{< /plaintext >}}|{{< md >}}
+ First
+ Second
+ Third
{{< /md >}}|
|{{< md >}}
```
- First
- Second
- Third
```
{{< /md >}}|{{< plaintext >}}
<ul>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
{{< /plaintext >}}|{{< md >}}
- First
- Second
- Third
{{< /md >}}|
|{{< md >}}
```
* First
* Second
    * Second.1
    * Second.2
* Third
```
{{< /md >}}|{{< plaintext >}}
<ul>
  <li>First</li>
  <li>Second
    <ul>
      <li>Second.1</li>
      <li>Second.2</li>
    </ul>
  </li>
  <li>Third</li>
</ul>
{{< /plaintext >}}|{{< md >}}
* First
* Second
    * Second.1
    * Second.2
* Third
{{< /md >}}|

{{< alert type="warning" >}}
Warning, for readability and compatibility reasons, it is recommended to **avoid mixing different characters for one and the same list**.
{{< /alert >}}

## Definition list

To define a definition list, **add a colon character (:) to the line start, followed by a space only for lines containing the definition**.

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
Definition 1
: I'm the definition 1

Definition 2
: I'm a definition 2
: I'm another definition 2
```
{{< /md >}}|{{< plaintext >}}
<dl>
  <dt>Definition 1</dt>
  <dd>I'm the definition 1</dd>
  <dt>Definition 2</dt>
  <dd>I'm a definition 2</dd>
  <dd>I'm another definition 2</dd>
</dl>
{{< /plaintext >}}|{{< md >}}
Definition 1
: I'm the definition 1

Definition 2
: I'm a definition 2
: I'm another definition 2
{{< /md >}}|

## Task list

To define a task list, **use one of the following syntaxes for each task line**:

* **- \[ \] Task_text** (For a not yet done task)
* **- \[x\] Task_text** (For a done task)

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
- [ ] Task 1 not done
- [x] Task 2 done
```
{{< /md >}}|{{< plaintext >}}
<ul>
  <li><input disabled="" type="checkbox"> Task 1 not done</li>
  <li><input checked="" disabled="" type="checkbox"> Task 2 done</li>
</ul>
{{< /plaintext >}}|{{< md >}}
- [ ] Task 1 not done
- [x] Task 2 done
{{< /md >}}|

## Adding items to a list

To add an element to a list, **consider the element as one level lower than the level to be included in the list**. Therefore **add at least 4 spaces to the line start**, in front of each element to be included in the list.

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
* First
* Second
    > I'm a blockquote  
    I'm a paragraph
* Third
```
{{< /md >}}|{{< plaintext >}}
<ul>
  <li>First</li>
  <li>Second
    <blockquote><p>I'm a blockquote
      <br>
      I'm a paragraph</p>
    </blockquote>
  </li>
  <li>Third</li>
</ul>
{{< /plaintext >}}|{{< md >}}
* First
* Second
    > I'm a blockquote  
    I'm a paragraph
* Third
{{< /md >}}|
