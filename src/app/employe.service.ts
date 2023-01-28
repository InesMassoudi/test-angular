import { Injectable } from '@angular/core';
import {  AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private fs : AngularFirestore) { }

  createEmployee(employe : any){
    return new Promise<any>((resolve, reject) => {
     this.fs.collection('employe-collection')
     .add(employe)
     .then(response => console.log(response), error => reject(error))
    })
   }
}
