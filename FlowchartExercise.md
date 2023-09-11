# Flowchart Exercise

## Exercise 1

### Pseudocode


```
input LFT
LCM = LFT * 30
output LCM
```

### Flowchart

```mermaid
flowchart TB
    S([start])
    I1[/LFT/]
    C1[LCD = LFT * 30]
    I2[/LCD/]
    E([end])
    S --> I1
    I1 --> C1
    C1 --> I2
    I2 --> E
```

## Exercise 2

### Pseudocode

```
input LENGTH
input WIDTH
AREA = L * M
output AREA
```

### Flowchart

```mermaid
flowchart TB
    S([start])
    E([end])
    I1[/LENGTH/]
    I2[/WIDTH/]
    C1[AREA = LENGTH * WIDTH]
    O[/AREA/]
    S-->I1
    I1-->I2
    I2-->C1
    C1-->O
    O-->E
```

## Exercise 3

### Pseudocode

```
BIGGEST = 0
I = 0

while
    if I == 3
        break

    INPUT = input

    if I == 0
        BIGGEST = INPUT
    else
        if INPUT > BIGGEST
            BIGGEST = INPUT
    I++

output BIGGEST
```

### Flowchart

```mermaid
flowchart TB
    S([start])
    C1[BIGGEST = 0]
    C2[I = 0]
    D1{I == 3}
    I[/INPUT/]
    D2{I == 0}
    CBI[BIGGEST = INPUT]
    D3{INPUT > BIGGEST}
    CII[I = I + 1]
    E([end])
    O[/BIGGEST/]

    S-->C1-->C2-->D1
    D1 -- Yes -----> O
    D1 -- No --> I --> D2
    D2 -- Yes --> CBI --> CII
    D2 -- No --> D3
    D3 -- Yes --> CBI
    CII --> D1
    D3 -- No --> CII
    O-->E
```
