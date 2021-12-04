import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
 user ={
  email:'',
   password:'',


}


  constructor(public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {

  }

  async onRegister(){
    const user=await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email,this.user.password);
    console.log(user);
    if(user.user.email){
      alert('Register succuess!');
    }else{
      alert('Register Faild !');
    }
   }

}
