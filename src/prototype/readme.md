# Prototype

## Intenção

*Especificar os tipos de objetos a serem criados usando uma instância-protótipo e criar novos objetos pela cópia desse protótipo.*

---

## Quando aplicar
- **Quando:**
Use esse padão (Prototype) quando um sistema tiver que ser independente de como os seus produtos são criados, compostos e representados;
    - as classes a instanciar forem especificadas em tempo de execução, por exemplo, por carga dinãmica;
    - quando as instâncias de uma classe puderem ter uma dentre poucas combinações diferentes de estados. Pode ser mais conveniente instalar um número correspondente de protótipo e cloná-los, ao invés de instanciar a classe manualmente, cada vez com um estado apropriado;
    - para evitar a construção de uma hierarquia de classe de *factory*paralela à hierarquia de classes de produto.

## O diagrama

- **Prototype**
    - declara uma interface (ou uma classe abstrata) para clonar a si próprio. Garante que todos os objetos protótipo tenham o método clone.
- **ConcretePrototype (1 e 2)**
    - são objetos protótipos. Implementa uma operação para clonar a si próprio.
- **Client**
    - cria um novo objeto solicitando a um protótipo que clone a si próprio. É o código que deseja clonar o objeto protótipo.


## Consequências

- oculta classes concretas do código cliente;
- ajuda na criação de objetos "caros" ou complexos;
- evita a excesso ou a criação de muitas subclasses;
- **Clonar objetos que têm referências para outros objetos pode ser bastante complexo.**

