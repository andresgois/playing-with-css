
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

##### Flex-direction
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
##### Flex-wrap
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
##### Flex-flow
- O flex-flow é um atalho para as propriedades flex-direction e flex-wrap.
  - *flex-flow: row nowrap | flex-flow: row wrap | flex-flow: column nowrap;*
    - row nowrap: Coloca o conteúdo em linha e não permite a quebra de linha.
    - row wrap: Coloca o conteúdo em linha e permite a quebra de linha.
    - column nowrap: Coloca o conteúdo em coluna e não permite a quebra de linha.

##### Justify-content
- Alinha os itens flex no container de acordo com a direção. A propriedade só funciona se os itens atuais não ocuparem todo o container.
  - *justify-content | flex-start | flex-end | center | space-between | space-around*
    - flex-start: Alinha os itens ao início do container.
```
---------------------
|🟥🟩🟪🟧         |
|                   |
|                   |
|                   |
---------------------
```
    - flex-end: Alinha os itens ao final do container.
```
---------------------
|         🟥🟩🟪🟧|
|                   |
|                   |
|                   |
---------------------
```
    - center: Alinha os itens ao centro do container.
```
---------------------
|     🟥🟩🟪🟧    |
|                   |
|                   |
|                   |
---------------------
```    
    - space-between: Cria um espaçamento igual entre os elementos. Mantendo o primeiro grudado no início e o último no final.
```
---------------------
|🟥   🟩   🟪   🟧|
|                   |
|                   |
|                   |
---------------------
```       
    - space-around: Cria um espaçamento entre os elementos. Os espaçamentos do meio são duas vezes maiores que o inicial e final.
```
---------------------
|  🟥  🟩  🟪  🟧 |
|                   |
|                   |
|                   |
---------------------
```       