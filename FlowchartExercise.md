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

## Exercise 4

### Pseudocode

```

input A
input B
input C

OUTPUT = False

if (B + C) > A && (A + C) > B && (A + B) > C
    OUTPUT = True

output OUTPUT
```

### Flowchart

```mermaid
flowchart TB
    S([start])
    I1[/A/]
    I2[/B/]
    I3[/C/]
    D{"(B + C) > A && (A + C) > B && (A + B) > C"}
    CT[OUTPUT = True]
    CF[OUTPUT = False]
    O[/OUTPUT/]
    E([end])

    S --> I1 --> I2 --> I3 --> CF
    CF --> D
    D -- Yes --> CT --> O
    D -- No --> O
    O-->E
```

## Exercise 5

### Flowchart

```mermaid
flowchart TB
    S([start])
    I1[/NAME/]
    I2[/MARK/]
    D1{MARK >= 0.8}
    D2{MARK >= 0.6}
    D3{MARK >= 0.4}
    O1[/A/]
    O2[/B/]
    O3[/C/]
    O4[/No Grade/]
    E([end])

    S --> I1 --> I2
    I2 --> D1
    D1 -- Yes --> O1
    D1 -- No --> D2
    D2 -- Yes --> O2
    D2 -- No --> D3
    D3 -- Yes --> O3
    D3 -- No --> O4
    O1 --> E
    O2 --> E
    O3 --> E
    O4 --> E
```
