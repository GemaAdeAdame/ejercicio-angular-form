import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent{
  
 forma!: FormGroup;
  constructor(private fb:FormBuilder) {
    this.crearFormulario();
  }

  crearFormulario(){
   this.forma = this.fb.group({
    nombre:[''],
    nif:[''],
    email:[''],
    password:['']

   })
  }
guardar(){
  console.log(this.forma)
}
limpiar(){
  this.forma.reset();
}
}

