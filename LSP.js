//Liskov substitution principle - LSP
//Principio de substituição de Liskov
//Se S é um subtipo de T, então os objetos do tipo T podem ser substituídos por objetos do tipo S sem alterar nenhuma das propriedades desejadas do programa

class Forma{
    area(){

    }
}

class Retangulo extends Forma{
    constructor(altura, largura){
        super()
        this.altura = altura;
        this.largura = largura;
    }
    setLargura(largura){
        this.largura = largura;
    }
    setAltura(altura){
        this.altura = altura;
    }
    area(){
        return this.altura * this.largura;
    }
}

class Quadrado extends Forma{
    constructor(altura){
        super();
        this.lado =  altura;
    }
    setLargura(largura){
        this.lado = largura;
    }
    setAltura(altura){
        this.lado = altura;
    }
    area(){
        return this.lado ** 2; 
    }
}

const retangulo = new Retangulo(2, 3);
console.log(retangulo.area());
const quadrado1 = new Quadrado(5,5);
console.log(quadrado1.area())
quadrado1.setAltura(10);
console.log(quadrado1.area())

/****************************** EXEMPLO 2 ******************************/

/* VIOLANDO O PRINCÍPIO LSP */

// class Ave {
//   voar() {
//     console.log("Posso voar");
//   }
// }

// class Pato extends Ave {
//   barulhoDePato() {
//     console.log("Quack Quack");
//   }
// }

// class Pinguim extends Ave {
//   voar() {
//     console.log("Posso voar");
//   }
//   nadar() {
//     console.log("Posso nadar");
//   }
//   barulhoDePinguim() {
//     console.log("Raaa Raaa");
//   }
// }

// function fazerAveVoar(ave) {
//   ave.voar();
// }

// const pato = new Pato();
// const pinguim = new Pinguim();

// fazerAveVoar(pato);
// fazerAveVoar(pinguim);



/* EM CONFORMIDADE COM O PRINCÍPIO LSP */
class AveQueVoa {
    voar() {
      console.log("Posso voar");
    }
  }
  
  class AveQueNada {
    nadar() {
      console.log("Posso nadar");
    }
  }
  
  class Pato extends AveQueVoa {
    barulhoDePato() {
      console.log("Quack Quack");
    }
  }
  
  class Pinguim extends AveQueNada {
    bargulhoDePiguim() {
      console.log("Raaa Raaa");
    }
  }
  
  function fazerAveVoar(ave) {
    ave.voar();
  }
  function fazerAveNadar(ave) {
    ave.nadar();
  }
  
  const pato = new AveQueVoa();
  const pinguim = new AveQueNada();
  
  fazerAveVoar(pato);
  fazerAveNadar(pinguim);
  
  /****************************** EXEMPLO 2 ******************************/