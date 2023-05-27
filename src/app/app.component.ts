import { Component } from '@angular/core';
import * as math from 'mathjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Calculadora';
  x: number=0
  listaUser: (string)[] = [];
  listaOper: (string)[] = [];
  historial: (string)[] = [];
  
  operacion(event:MouseEvent){  
    
    const texto = event.target as HTMLButtonElement;
    let resultado=""
    
    if(texto!.textContent == "="){
      try{
        document.getElementById("answ")!.innerHTML= math.round(math.evaluate(this.listaOper.join("")),5)
        
        this.historial.push((this.listaUser.join("") + "  =  " + math.round(math.evaluate(this.listaOper.join("")),5)))
        
        
        for (var i = 0; i < this.historial.length; i++) {
          resultado += "<p>" + this.historial[i] + "</p>";
        }

        document.getElementById("hst")!.innerHTML = resultado;
        this.listaUser.splice(0)
        this.listaOper.splice(0)

      } catch(error){
        document.getElementById("answ")!.innerHTML= "Invalid operation"
        this.listaUser.splice(0)
        this.listaOper.splice(0)
      }
      
      
    }
    else{
      if (texto!.textContent == "()"){
        if (this.x%2==0){
        this.listaUser.push("(")
        this.listaOper.push("(")
      }
      else{
        this.listaUser.push(")")
        this.listaOper.push(")")
      }
      this.x = this.x+1 
    }else{
      if(texto!.textContent == "DEL"){
        this.listaUser.pop()
        this.listaOper.pop()
      }else{
        if(texto!.textContent == "AC"){
          this.listaUser.splice(0)
          this.listaOper.splice(0)
        }else{
          this.listaUser.push(texto!.textContent!)
          if(texto!.textContent == "√"){
            this.listaOper.push("sqrt");
          } else{
            if(texto!.textContent == "π"){
              this.listaOper.push("pi")
          } else{
            if(texto!.textContent == "ln"){
              this.listaOper.push("log")
          } else{
            if(texto!.textContent == "×"){
              this.listaOper.push("*")
            } else{
              this.listaOper.push(texto!.textContent!)
            }
          }
          }
          }
          
        }

      }
    }
    document.getElementById("answ")!.innerHTML=this.listaUser.join("") 
   
  }

  }
}


