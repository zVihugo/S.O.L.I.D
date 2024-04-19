//Principio da responsabilidade Única - Single Responsibility Principle (SRP)
 
//Código exemplificando o principio SRP

const clima_proibir_uso = [
    "furacao",
    "clicone",
    "tornado",
    "terremoto",
    "vulcao"
]

const lista_clima = [
    "ensolarado",
    "nublado",
    "chuvoso",
    "tempestade",
    "parcialmente nublado",
    "neve",
    ...clima_proibir_uso
]

const clima_hoje = lista_clima[Math.floor(Math.random() * lista_clima.length)]

class LogMovimento{
    static logMovimento(modelo, distanciaKm) {
        console.log(`O carro ${modelo} se movimentou ${distanciaKm} km`)
    }
}

class LogErro{     
    static logErro(modelo, mensagem){
        console.error(`Esse ${modelo} não pode ser usado hoje porque: ${mensagem}`);
    }
}

class Carro{
    constructor(modelo, km){
        this.modelo = modelo;
        this.km = km;
    }

    movimentar(distanciaKm){
        if(clima_proibir_uso.find(clima => clima === clima_hoje)){
           LogErro.logErro(this.modelo, "o clima não permite");
           return
        }
        this.km += distanciaKm;
        LogMovimento.logMovimento(this.modelo, distanciaKm);
    }
}

const carro1 = new Carro("Fusca", 1000);
carro1.movimentar(1)
