import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddnewTaskPage } from '../addnew-task/addnew-task.page';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
})
export class ToDoPage implements OnInit {
  todoList =[]

today : number=Date.now();

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }


  async addTask(){
    const modal = await this.modalCtrl.create({
      component : AddnewTaskPage
    })
    modal.onDidDismiss().then(newTaskObj =>{
      console.log(newTaskObj.data)
      this.todoList.push(newTaskObj.data)
    })

    return await modal.present()

  }
}
