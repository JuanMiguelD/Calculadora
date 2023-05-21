import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Calculadora';
  operacion(event:MouseEvent){  
    const texto = event.target as HTMLButtonElement;
    alert(texto!.textContent)
    
    

    
  }
  operar: any;
  reinicio: any
}


