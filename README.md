
# Site

## Table of Contents
- [Intro](#Intro)
- [How to start?](#How-to-start)
- [Explanation ](#Explanation )
- [Dekstop display](#Dekstop-display)
- [Mobil display](#Mobil-display)
- [Traduction](#Traduction)
- [Work environment](#dev-environment)
- [Project structure](#Project-structure)

## Intro

I created this project to have a CV. The main goal is to be responsive and easy to understand.

## How-to-start

You should run
```sh
npm install && npm start
```
or
```sh
node server.js
```
Then, you can open
```
http://localhost:3000/
```

## Explanation 

There are 4 sections
- 1: header with the menu => never move
- 4: footer with addtitionnal info => never move
- 2: infos => move when mobile device
- 3: Content section => will take the free place from infos (3) if infos diseapears

## Dekstop-display

```
|----------------------------|
|               1            |
|----------------------------|
|      |                     |
|   2  |        3            |
|      |                     |
|----------------------------|
|              2             |
|----------------------------|
```

## Mobil-display

```
|----------|
|     1    |
|----------|
|     2    |
|----------|
|          |
|          |
|     3    |
|          |
|          |
|----------|
|     4    |
|----------|
```

## Traduction

All elements that have an id from **elem_to_change_id** in **js/global_var.js** will be updated when language changing. \
All language traduction should be in **js/contents/** with this the name **??_??** like **fr_FR** or **en_EN**. This file should have the following structure:
```
id:type:contents
```
with type **file** or **raw**. If type is a **file**, its content is a file. If not, it's directly the traduction. \
The file should be in **js/contents/file** with the following structure:
```
content_??_??.html
```
Example:
```
content_fr_FR.html
content_en_EN.html
```
"content" is the same content as **??_??** (fr_FR/en_EN)

## dev-environment

- Ubuntu 22.04.5 LTS (22.04, jammy)
- node: v20.14.0
- nom: 10.7.0

## Project-structure

- **server.js**: The endpoint of the server
- **robot.txt**: For google robot
- **index.html**: The main html page
- **404_NOTFOUND.html**: 404 Error page
- **package***: All dependencies
- **style.css**: For index.html
- **scripts:main.js**: This script will call all other scripts
- **scripts/button.js**: To handle with click (menu)
- **scripts/global_var**: To put all hardcoded values
- **scripts/language.js**: To have a website with multiple language
- **scripts/mobile-dekstop.js**: To deal with Dekstop/Mobil display
- **scripts/contents/**: a directory for **language.js** with [Traduction]