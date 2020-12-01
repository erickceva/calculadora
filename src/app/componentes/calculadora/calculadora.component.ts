import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  numero1: number=0;
  numero2 : number=0;
  resultado : any;
  numeros : string ="";
  conectar : string="";
  operacion : string="";

  constructor() { }

  ngOnInit(): void {
  }
  nueve(){
    this.conectar=this.numeros;
    this.numeros=this.conectar+"9";
  }
  ocho(){
    this.conectar=this.numeros;
    this.numeros=this.conectar+"8";
  }
  siete(){
    this.conectar=this.numeros;
    this.numeros=this.conectar+"7";
  }
  seis(){
    this.conectar=this.numeros;
    this.numeros=this.conectar+"6";
  }
  cinco(){
    this.conectar=this.numeros;
    this.numeros=this.conectar+"5";
  }
  cuatro(){
    this.conectar=this.numeros;
    this.numeros=this.conectar+"4";
  }
  tres(){
    this.conectar=this.numeros;
    this.numeros=this.conectar+"3";
  }
  dos(){
    this.conectar=this.numeros;
    this.numeros=this.conectar+"2";
  }
  uno(){
    this.conectar=this.numeros;
    this.numeros=this.conectar+"1";
  }
  cero(){
    this.conectar=this.numeros;
    this.numeros=this.conectar+"0";
  }
  borrar(){
    this.numeros="";
    this.resultado=0;
  }
  sumar(){
    this.operacion="+";
    this.conectar=this.numeros;
    this.numero1=parseFloat(this.conectar);
    this.numeros="";
  }
  dividir(){
    this.operacion="/";
    this.conectar=this.numeros;
    this.numero1=parseFloat(this.conectar);
    this.numeros="";
  }
  multiplicar(){
    this.operacion="*";
    this.conectar=this.numeros;
    this.numero1=parseFloat(this.conectar);
    this.numeros="";
  }
  restar(){
    this.operacion="-";
    this.conectar=this.numeros;
    this.numero1=parseFloat(this.conectar);
    this.numeros="";
  }
  resultados(){
    this.conectar=this.numeros;
    this.numero2=parseFloat(this.conectar);
    if(this.operacion === "+"){
      this.numeros="";
      this.resultado=this.numero1+this.numero2;
    }
    if(this.operacion === "/"){
      this.numeros="";
      this.resultado=this.numero1/this.numero2;
    }
    if(this.operacion === "*"){
      this.numeros="";
      this.resultado=this.numero1*this.numero2;
    }
    if(this.operacion === "-"){
      this.numeros="";
      this.resultado=this.numero1-this.numero2;
    }

    this.numeros=String(this.resultado);
  }
  negativo(){
    this.operacion="neg";
    this.conectar=this.numeros;
    this.numero1=parseFloat(this.conectar);
    this.numeros="";
    this.resultado=this.numero1*(-1);
    this.numeros=this.resultado;
  }
  raiz(){
    this.operacion="√";
    this.conectar=this.numeros;
    this.numero1=parseFloat(this.conectar);
    this.resultado=Math.sqrt(this.numero1);
    this.numeros=this.resultado;
  }

}
