# Composite Pattern

## Intenção

*Compor objetos em estruturas de árvore para representarem hierarquias partes-todo. Composite permite aos clientes tratarem de maneira uniforme objetos individuais e composições de objetos.*

---

## Quando aplicar
- **Quando:**
    - quiser representar hierarquias partes-todo de objetos;
    - quiser que os clientes sejam capazes de ignorar a diferença entre composições de objetos e objetos individuais. Os clientes tratarão todos os objetos na estrutura composta de maneira uniforme.

## O diagrama
- **Component:**
    - declara a interface para os objetos na composição;
    - implementa comportamento padrão para a interface comum a todas as classes, conforme apropriado;
    - declara uma interface para acessar e gerenciar os seus componentes filhos;
- **Leaf:**
    - representa objetos folha na composição. Uma folha não tem filhos;
    - define comportamento para objetos primitivos na composição.
- **Composite:**
    - define comportamento para componentes que têm filhos;
    - armazena os componentes filho;
    - implementa as operações relacionadas com os filhos presentes na interface de Component.    
- **Client:**
    - manipula objetos na composição através da interface de Component.

## Consequências
    - é fácil criar objetos complexos por composição;
    - é fácil gerar uma hierarquia de objetos;
    - é fácil adicionar novos tipo de elementos na estrutura;
    - pode quebrar o princípio da segregação de interfaces (ISP - Interface Segregation Principle), pois, o objeto *Leaf* pode conter métodos vazios, sem sentido.
    - pode tornar o projeto excessivamente genérico. A desvantagem de facilitar o acrescimo de novos componentes é que isso torna mais difícil restringir os componentes de uma composição.
