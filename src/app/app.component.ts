import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Calculadora';
  x: number=0
  lista: (string | number)[] = [];

  
  operacion(event:MouseEvent){  
    const texto = event.target as HTMLButtonElement;
    let operacion= ""

    if (texto!.textContent == "()"){
      if (this.x%2==0){
        this.lista.push("(")
      }
      else{
        this.lista.push(")")
      }
      this.x = this.x+1

    }
    else{
      if(texto!.textContent == "DEL"){
        this.lista.pop()
      }else{

        this.lista.push(texto!.textContent!)
      }
    }

    
    for(let i = 0; i < (this.lista.length);i++){
      operacion = operacion + this.lista[i]  
    }
    
    document.getElementById("answ")!.innerHTML=operacion
    
  }
  operar:any
  reinicio: any
}


