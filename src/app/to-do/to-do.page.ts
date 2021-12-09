import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddnewTaskPage } from '../addnew-task/addnew-task.page';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
})
export class ToDoPage implements OnInit {
  todoList =[]

today : number=Date.now();
availabe= false;
  constructor(private alertctrl: AlertController,public modalCtrl: ModalController) { }

  ngOnInit() {
  }


  async addTask(){
    const modal = await this.modalCtrl.create({
      component : AddnewTaskPage
    });
    modal.onDidDismiss().then(newTaskObj =>{
      console.log(newTaskObj.data);
      this.todoList.push(newTaskObj.data);
    });

    return await modal.present();

  }
  delete(index){
    this.todoList.splice(index,1);

  }
  workingbtn(){
    this.presentAlert();
  }
  async presentAlert(){
    const alert =await this.alertctrl.create({
      cssClass:'my-custom-class',
      header:'Alert',
      subHeader:'Subtitle',
      message: 'button is working fine',
      buttons:['OK']
    });
  }

}
