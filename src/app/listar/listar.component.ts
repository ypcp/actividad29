import { Component, OnInit } from '@angular/core';
import { User } from '../../producto.model';
import { obtenerUsuarios, eliminarUser } from 'src/firebaseConection/firestore';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  Users:User[]=[];
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    obtenerUsuarios()
    .then((result)=>{
      this.Users=[];
      console.log(result)
      result.forEach(item => {
        this.Users.push(item as User);
        
      })
    }).catch(err=>{
      console.log(err)
      this.Users=[]
    });
  }
  deleteArticulo(user:User){
    eliminarUser(user)
    .then((result)=>{
      console.log(result)
      this.getUsers();
    }).catch(err=>{
      console.log(err)
    });
  }

}
