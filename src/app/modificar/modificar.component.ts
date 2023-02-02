import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { obtenerUsuariosDetalles, editarUser } from 'src/firebaseConection/firestore';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  dniUser:number = 0;
  editForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
  ){
    this.editForm =this.fb.group({
      descripcion: ['',[Validators.required]],
      precio: ['',[Validators.required]],
      /* correo: ['',[Validators.required]], */

    });
  }
  ngOnInit(): void {
    const id = this.actRoute.snapshot.paramMap.get('id');
    console.log('id', id);
    obtenerUsuariosDetalles(id !==null ? parseInt(id.substring(1)):0)
    .then((result)=>{
      console.log(result)
      this.dniUser = result[0].codigo
      this.editForm.setValue({
        descripcion: result[0].descripcion,
        precio: result[0].precio,
        /* correo: result[0].correo, */

      });
    }).catch(err=>{
      console.log(err)
    });
  }
  get descripcion(){
    return this.editForm.get('descripcion');
  }
  get precio(){
    return this.editForm.get('precio');
  }
  /* get correo(){
    return this.editForm.get('correo');
  } */
  goBack(){
    this.location.back();
  }

  updateForm(){
    console.log('editar');
    editarUser(this.editForm.value, this.dniUser)
    .then((result)=>{
      console.log(result)
      this.router.navigate(['listar'])
    }).catch(err =>{
      console.log(err)
    });
  }

}
