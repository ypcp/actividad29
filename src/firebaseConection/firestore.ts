//cuando exportas del firebaseconexion  no es
//necesario que pongas llaves aca

//--------aca voy hacer mis fuunciones------
import db from "./firebaseConexion";
import { collection,getDocs, updateDoc, deleteDoc, doc, query, where, addDoc, setDoc } from "firebase/firestore/lite";
import { User } from "src/producto.model";

const userRef = collection(db,'articulos'); //aca especifico que uso la coleccion de usuarios de mmi base de datos

export async function obtenerUsuarios() {
    //sirve para listar todos los usuarios

    const userSnapshot = await getDocs(userRef);
    const userList = userSnapshot.docs.map((doc) => doc.data() as User);
    return userList;
}
export async function obtenerUsuariosDetalles(id:number) {
    //funcion que sirve para filtrar un usuario
    const q = query(userRef, where("codigo", "==", id));
    const usersSnapshot = await getDocs(q);
    const usersList = usersSnapshot.docs.map((doc) => doc.data() as User);
    return usersList;
    
}
export async function crearUser(user:any) {
    return await setDoc(doc(userRef,`${user.codigo}`),user)
    
}

export async function editarUser(user:any, id:number) {
    const userRefDoc = doc(db, `articulos/${id}`);
    return await updateDoc(userRefDoc, user);
    
}
export async function eliminarUser(user:any) {
    const userRefDoc = doc(db, `articulos/${user.codigo}`);
    return await deleteDoc(userRefDoc);
    
}


