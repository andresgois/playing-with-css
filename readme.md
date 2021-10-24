
## Playing with css


### Dispaly 

#### FLEX
- uma **div** sempre se comporta como uma elemento em bloco, sempre fica uma em baixo da outro, mesmo que tenha espaços na lateral.
```
.container {}
--------------------------------
| 🟥                            |
| 🟥                            |
| 🟥                            |
| 🟥                            |
--------------------------------
```
- a partir do momento que faço a definição do meu display para flex, a **div** fica uma ao lado da outra.
```
.container { display: flex}
--------------------------------
| 🟥🟩🟪🟧                    |
|                               |
|                               |
|                               |
--------------------------------
```

##### flex-direction
- Comportamento dos elementos filhos do conteiner
  - *row | row-reverse | column | column-reverse*
    - row: padrão, deixa os elementos um ao lado do outro
      - 🟥🟩🟪🟧 
    - row-reverse: um ao lado do outro, porém em ordem invertida
      - 🟧🟪🟩🟥
    - column: Elementos uma a baixo do outro
      - 🟥
      - 🟩
      - 🟪
      - 🟧 
    - column-reverse: um a baixo do outro, porém em ordem invertida
      - 🟧
      - 🟪
      - 🟩
      - 🟥
##### flex-wrap
- Define se os itens devem quebrar ou não a linha. Por padrão eles não quebram linha, isso faz com que os flex itens sejam compactados além do limite do conteúdo.
  - *nowrap | wrap | wrap-reverse*
    - nowrap: não permite a quebra de linha
```
----------
|🟥🟩🟪|🟧
|        |
----------
```
    - wrap: quebra alinha assim que o item não possa ser compactado
```
----------
|🟥🟩🟪|
|🟧     |
----------
```
    - wrap-reverse: quebra os itens, mas em direção contrária 
```
----------
|🟧🟪🟩|
|🟥     |
----------
```