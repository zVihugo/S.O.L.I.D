//Open Closed Principle - Principio do aberto e fechado
//Entidades de software devem estar abertas para extensão, mas fechadas para modificação
//Comportamentos de classe podem ser extendidos sem alterar  a classe em si

class Transporte {
    constructor(transportador, volume){
        this.transportador = transportador;
        this.volume = volume;
    }

    getMultiplicador(){
        return 1;
    }

    calculaPreco(){
       return this.getMultiplicador() * this.volume;
    }
}
//Agora, se quisermos adicionar um novo tipo de transporte, basta criar uma nova classe que herda de Transporte
class Navio extends Transporte{
    constructor(volume){
        super("Navio", volume);
    }
    getMultiplicador(){
        return 300;
    }
}
class Caminhao extends Transporte{
    constructor(volume){
        super("Caminhao", volume);
    }
    getMultiplicador(){
        return 500;
    }
}
class Aviao extends Transporte{
    constructor(volume){
        super("Aviao", volume);
    }
    getMultiplicador(){
        return 1000;
    }
}

const transporte1 = new Caminhao(10);
const transporte2 = new Navio(10);
const transporte3 = new Aviao(10);
console.log(transporte1.calculaPreco())
console.log(transporte2.calculaPreco())
console.log(transporte3.calculaPreco())
