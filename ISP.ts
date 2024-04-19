//Interface Segregation Principle - Principio da Segregação de Interface
//Uma classe não deve ser forçada a implementar interfaces que não irá utilizar 

/**
 *  INTERFACE SEGREGATION (EXEMPLO EM TS)
 *
 */

/* VIOLANDO O ISP */
// interface Veiculo {
//   rodas: number;
//   tipoDirecao: string;
//   andar(): void;
//   getStatus(combustivel: number): string;
// }

// class Marro implements Veiculo {
//   rodas: number;
//   tipoDirecao: string;
//   constructor(rodas: number, tipoDirecao: string) {
//     this.rodas = rodas;
//     this.tipoDirecao = tipoDirecao;
//   }

//   getStatus(combustivel: number) {
//     return combustivel > 5 ? "OK" : "ABASTECER";
//   }
//   andar() {
//     console.log("andando!");
//   }
// }

// const Marro = new Marro(4, "hidraulica");
// console.log(Marro.getStatus(100)); //OK
// console.log(Marro.getStatus(4)); // ABASTECER


/* EM CONFORMIDADE COM O ISP */

interface Veiculo {
    getStatus(combustivel: number): string;
  }
  
  interface VeiculoTerrestre {
    rodas: number;
    tipoDirecao: string;
    andar(): void;
  }
  
  interface VeiculoAereo {
    numeroPiloto: number;
    voar(): void;
  }
  
  class Marro implements Veiculo, VeiculoTerrestre {
    rodas: number;
    tipoDirecao: string;
    constructor(rodas: number, tipoDirecao: string) {
      this.rodas = rodas;
      this.tipoDirecao = tipoDirecao;
    }
  
    getStatus(combustivel: number) {
      return combustivel > 5 ? "OK" : "ABASTECER";
    }
    andar() {
      console.log("andando!");
    }
  }
  
  
  class Helicoptero implements Veiculo, VeiculoAereo {
    numeroPiloto: number;
    constructor(numeroPilo: number) {
      this.numeroPiloto = numeroPilo;
    }
  
    getStatus(combustivel: number) {
      return combustivel > 50 ? "OK" : "ABASTECER";
    }
    voar() {
      console.log("voando!");
    }
  }
  
  
  const carro = new Marro(4, "hidraulica");
  console.log(carro.getStatus(100)); //OK
  console.log(carro.getStatus(4)); // ABASTECER
  const helicoptero = new Helicoptero(2);
  console.log(helicoptero.getStatus(500)); //OK
  console.log(helicoptero.getStatus(45)); // ABASTECER