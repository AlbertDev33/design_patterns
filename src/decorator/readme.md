# Decorator Pattern

## Intenção

*Agregar responsabilidades adicionais a um objeto dinamicamente. Os Decorators fornecem uma alternativa flexível ao uso de subclasses para extensão de funcionalidades.*

---

## Quando aplicar
- **Quando:**
    - for necessário acrescentar responsabilidades a objetos individuais e forma dinâmica e transparente, ou seja, sem afetar outros objetos;
    - para responsabilidades que podem ser removidas;
    - a extensão através do uso de subclasses não é prática. Às vezes, um grande número de extensões independentes é possível e isso poderia produzir uma explosão de subclasses para suportar cada combinação. Ou a definição de uma classe pode estar oculta ou não estar disponível para a utilização de subclasses.

## O diagrama
- **VisualComponent:**
    - define a interface para objetos que podem ter responsabilidades acrescentadas aos mesmos dinamicamente.
- **TextView:**
    - define um objeto para o qual responsabilidades adicionais podem ser atribuídas.
- **Decorator:**
    - mantém uma referência para o objeto *VisualComponent* e define uma interface que segue a interface de *VisualComponent*;
    - esse componente do diagrama pode ser implementado como uma interface, classe abstrata ou até mesmo uma classe concreta.
- **BoderDecorator, ScrollDecorator:**
    - acrescenta responsabilidades ao componente.

## Consequências
    - composição é melhor do que herança na grande maioria dos casos;
    - É fácil adicionar ou remover comportamento de objetos sem tocar em código já escrito ou testado, obedecendo o OCP (Open Closed Principle);
    - É possível decorar um objeto já decorado, adicionando ainda mais funcionalidades (camadas).