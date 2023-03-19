# Abstract Factory Method

## Intenção

*Garantir que uma classe tenha somente uma instância e fornecer um ponto global de acesso para a mesma.*

---

## Quando aplicar
- **Quando:**
    - for preciso haver apenas uma instânia de uma classe e essa instância tiver que dar acesso aos clientes através de um ponto bem conhecido;
    - a única instância tiver de ser extensível através de subclasses, possibilitando aos clientes usar uma instância estendida sem alterar o seu código.

## O diagrama
    - Pela simplicidade, não há diagrama.


## Consequências

- *Acesso controlado à instância única* - Como a classe Singleton encapsula a sua única instância, possui controle total sobre como e quando os clientes a acessam.
- *Single Responsability Principle (SRP)* - Existe uma discusão em relação à esse padrão ferir esse principío (SRP) do *SOLID*.
- *Dificuldade para testes* - Pelo fato de esse padrão "exportar" apenas uma instância da classe em todo o programa, isso pode dificultar os testes, pois, como a instância é a mesma, isso pode gerar conflitos no momento de rodar os testes.

