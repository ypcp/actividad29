import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { crearUser } from 'src/firebaseConection/firestore';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  public userForm: FormGroup;
  constructor(public fb: FormBuilder, 
              private router: Router){
      this.userForm = this.fb.group({
        codigo: [0,[Validators.required]],
        descripcion: ['',[Validators.required]],
        precio: ['',[Validators.required]],
        /* correo: ['',[Validators.required]], */
      })
  }
  ngOnInit(){
    
  }
  get codigo(){
    return this.userForm.get('codigo');
  }
  get descripcion(){
    return this.userForm.get('descripcion');
  }
  get precio(){
    return this.userForm.get('precio');
  }
  /* get correo(){
    return this.userForm.get('correo');
  } */
  ResetForm(){
    /* this.userForm.reset(); */
    this.router.navigate(['listar']);
  }
  submitArticuloData(){
    crearUser(this.userForm.value).then((result)=>{
      console.log(result)
      this.router.navigate(['listar']);
    }).catch(err => {
      console.log(err)
    });
  }

}
