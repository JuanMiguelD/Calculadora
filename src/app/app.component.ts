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
    
    if(texto!.textContent == "="){
      try{
        document.getElementById("answ")!.innerHTML=eval(this.lista.join(""))
      } catch(error){
        document.getElementById("answ")!.innerHTML= "Invalid operation"
      }
        
    }
    else{
      if (texto!.textContent == "()"){
        if (this.x%2==0){
        this.lista.push("(")
      }
      else{
        this.lista.push(")")
      }
      this.x = this.x+1 }

    else{
      if(texto!.textContent == "DEL"){
        this.lista.pop()
      }else{
        if(texto!.textContent == "AC"){
          this.lista.splice(0)
        }else{
          this.lista.push(texto!.textContent!)
        }

      }
    }
    document.getElementById("answ")!.innerHTML=this.lista.join("") 
  }

  }
}


