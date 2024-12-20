class Animal {
    especie: string;
    estagio: number;
    barulho: string;

    constructor(especie: string = "", barulho: string = "") {
        this.especie = especie;
        this.barulho = barulho;
        this.estagio = 0;
    }
    makeNoise(): string {
        if (this.estagio == 0) {
            return "---";
        }
        if (this.estagio == 4) {
            return "RIP";
        }
        return this.barulho;
    }
    envelhecer(qtd: number = 1) {
        this.estagio += qtd;
        if (this.estagio >= 4) {
            console.log(`warning: ${this.especie} morreu`)
            this.estagio = 4;
        }
    }
    toString(): string {
        return `${this.especie}:${this.estagio}:${this.barulho}`
    }
}


class Adapter {
    animal: Animal;
    constructor(especie: string, barulho: string) {
        //Inicializa o objeto animal com os valores passados e idade 0
        this.animal = new Animal(especie, barulho);
    }

    // Envelhece qtd níveis
    grow(qtd: number): void {
        this.animal.envelhecer(qtd);
    }

    // retorna o barulho que o animal faz
    noise(): void {
        console.log(this.animal.makeNoise());
    }

    // mostra a representação do animal como texto
    // no formato "{especie}:{estagio}:{barulho}"
    show(): void {
        console.log(this.animal.toString());
    }
}

export {Adapter};
