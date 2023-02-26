# Factory Method

## Intenção

*Definir uma interface para criar um objeto ou uma família de objetos relacionados ou dependentes sem especificar suas classes concretas. O Factory Method permite adiar a instanciação para as subclasses.*

---

## Sobre

- É um padrão de projeto de criação (lida com a criação de objetos);
- Oculta a lógica de instanciação do código cliente. O método *Factory* será responsável por instanciar as classes desejadas;
- É obtido através de herança. O método fábrica pode ser criado ou sobrescrito por sublcasses.
- Auxilia em manter o *Open/Close Principle*, pois, dá flexibilidade ao código cliente permitindo a criação de novas factories sem a necessidade de alterar o código já escrito.
