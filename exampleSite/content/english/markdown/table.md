---
weight: 11000
linkTitle: "Table"
title: "Markdown: Table"
description: "How to define a table?"
categories: ["Markdown"]
tags: ["Content management"]
---

# Table
---

## Classic syntax

To define a table, **use the following rules**:

* **Separate columns with vertical bars (\|)**
* **Insert vertical bars (\|) at both ends of the table**
* **Separate column title with its content, with a demarcation line containing at least 3 hyphens characters (-)**

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
| Variable | Value | Description |
| -------- | ----- | ----------- |
| A        | 1     | Integer     |
| B        | 2     |             |
```
{{< /md >}}|{{< plaintext >}}
<table>
  <thead>
    <tr>
      <th>Variable</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A</td>
      <td>1</td>
      <td>Integer</td>
    </tr>
    <tr>
      <td>B</td>
      <td>2</td>
      <td></td>
    </tr>
  </tbody>
</table>
{{< /plaintext >}}|{{< md >}}
| Variable | Value | Description |
| -------- | ------ | ----------- |
| A        | 1      | Integer     |
| B        | 2      |             |
{{< /md >}}|
|{{< md >}}
```
|Variable|Value|Description|
|---|---|---|
|A|1|Integer|
|B|2||
```
{{< /md >}}|{{< plaintext >}}
<table>
  <thead>
    <tr>
      <th>Variable</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A</td>
      <td>1</td>
      <td>Integer</td>
    </tr>
    <tr>
      <td>B</td>
      <td>2</td>
      <td></td>
    </tr>
  </tbody>
</table>
{{< /plaintext >}}|{{< md >}}
|Variable|Value|Description|
|---|---|---|
|A|1|Integer|
|B|2||
{{< /md >}}|

{{< alert type="info" >}}
To easily create tables, it is possible to use online table generators such as [Markdown Tables Generator](https://www.tablesgenerator.com/markdown_tables) in order to directly get the table markdown code.
{{< /alert >}}
{{< alert type="warning" >}}
Warning, it is possible to format the text of an array using *emphasis*, *link* or *code fragment*. However, it is not possible to use more complex syntaxes such as *code block*, *title*, *list*, *image* or *horizontal rule*.
{{< /alert >}}

## Alignment

To align a column content, **add a colon character (:) to the hyphens of the demarcation line on the desired alignment side (on both sides to make the content centered)**.

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
| Variable | Value | Description |
| :------- | :----: | ----------: |
| A        | 1      | Integer     |
| B        | 2      |             |
```
{{< /md >}}|{{< plaintext >}}
<table>
  <thead>
    <tr>
      <th align="left">Variable</th>
      <th align="center">Value</th>
      <th align="right">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">A</td>
      <td align="center">1</td>
      <td align="right">Integer</td>
    </tr>
    <tr>
      <td align="left">B</td>
      <td align="center">2</td>
      <td align="right"></td>
    </tr>
  </tbody>
</table>
{{< /plaintext >}}|{{< md >}}
| Variable | Value | Description |
| :------- | :----: | ----------: |
| A        | 1      | Integer     |
| B        | 2      |             |
{{< /md >}}|
|{{< md >}}
```
|Variable|Value|Description|
|:---|:---:|---:|
|A|1|Integer|
|B|2||
```
{{< /md >}}|{{< plaintext >}}
<table>
  <thead>
    <tr>
      <th align="left">Variable</th>
      <th align="center">Value</th>
      <th align="right">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">A</td>
      <td align="center">1</td>
      <td align="right">Integer</td>
    </tr>
    <tr>
      <td align="left">B</td>
      <td align="center">2</td>
      <td align="right"></td>
    </tr>
  </tbody>
</table>
{{< /plaintext >}}|{{< md >}}
|Variable|Value|Description|
|:---|:---:|---:|
|A|1|Integer|
|B|2||
{{< /md >}}|
