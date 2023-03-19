# Abstract Factory Method Pattern

## Intenção

*Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas*

---

## Quando aplicar
- **Quando:**
    - um sistema deve ser independente de como seus produtos s`~ao crados, compostos ou representados;
    - um ssitema deve ser configurado como um produto de uma família de múltiplos produtos;
    - você quer fornecer uma biblioteca de classes de produtos e quer revelar somente suas interfaces, não suas implementações.

## O diagrama

- **AbstractFactory**
    - declara uma interface (ou uma classe abstrata como no diagrama) para operações que criam objetos-produto abstratos.
- **Concrete Factory(1 e 2)**
    - declara uma interface (ou classe abstrata) para um tipo de objeto-produto.
- **ConcreteProduct**
    - define um objeto-produto a ser criado pela correspondente fábrica concreta.
    - implementa a interface (ou extends uma classe abstrata) **AbstractFactory**.
- **Client**
    - usa somente interfaces declaradas pela classes **AbstractFactory** e **AbstractProduct**.


## Consequências

- *Isolar as classes concretas*. O padrão *Abstract Factory* ajuda a controlar as classes de objetos criadas por uma aplicação. Uma vez que a *factory* encapsula a responsabilidade e o processo de criar objetos-produto, isola os clientes das suas interfaces abstratas. Nomes de classes-produto ficam isolados na implementação da *factory* concreta.
- *Promove a harmonia entre produtos*. Quando objetos-produto em uma família são projetados para trabalharem juntos é imporatnte que uma aplicação use objetos de somente uma família de cada vez. *AbstractFactory* torna fácil assegurar isso.
- ***É difícil suportar novos tipos de produtos***. Estender *factory* abstrata para produzir novos tipos de Produtos não é fácil. Isso se deve ao fato de que a interface de *AbstractFactory* fixa o conjunto de produtos que podem ser criados, o que envolve mudar a classe (ou interface) *AbstractFactory* e todas as suas subclasses.

