
# Site

## Intro

There are 4 sections
- 1: header with the menu => never move
- 4: footer with addtitionnal info => never move
- 2: infos => can disapear with a menu's button  
- 3: Content section => will take the free place from infos (3) if diseapears

## Dekstop display

```
|----------------------------|              |----------------------------|
|               1            |              |               1            |
|----------------------------|              |----------------------------|
|      |                     |     Event    |                            |
|   2  |        3            |      =>      |               3'           |
|      |                     |              |                            |
|----------------------------|              |----------------------------|
|              2             |              |              2             |
|----------------------------|              |----------------------------|
```

| Section | height  | width | top   | right | bottom    | left  |
|-------|--------|--------|--------|--------|--------|--------|
| 1     |  10vh | 100vw | 0 | 0 | 0 | 90vh  |      
| 2     | 80vh  | 10vw | 10vh  | 90vw| 10vh    | 0 |      
| 3     | 80vh  | 90vw  | 10vh  | 0 | 10vh  | 10vw |      
| 4     | 10vh  | 100vw | 90vh  | 0 | 0 | 0 |
| 3'    | 80vh  | 100vw | 10vh  | 0 | 10vh  | 10vw |    

## Mobil display

```
|----------|                    |----------|
|     1    |                    |     1    |
|----------|                    |----------|
|     2    |                    |     2    |
|----------|                    |----------|
|          |                    |          |
|          |       Event        |          | 
|     3    |        =>          |     3    |
|          |                    |          |
|          |                    |          |
|----------|                    |----------|
|     4    |                    |     4    |
|----------|                    |----------|
```

| Section | height  | width | top   | right | bottom    | left  |
|-------|--------|--------|--------|--------|--------|--------|
| 1     |  10vh | 100vw | 0 | 0 | 0 | 90vh  |      
| 2     | 10vh  | 100vw | 20vh  | 0 | 80vh    | 0 |      
| 3     | 70vh  | 100vw  | 20vh  | 0 | 80vh  | 10vw |      
| 4     | 10vh  | 100vw | 90vh  | 0 | 0 | 0 |
| 3'    | 80vh  | 100vw | 10vh  | 0 | 10vh  | 10vw | 


