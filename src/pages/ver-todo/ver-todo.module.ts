import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerTodoPage } from './ver-todo';

@NgModule({
  declarations: [
    VerTodoPage,
  ],
  imports: [
    IonicPageModule.forChild(VerTodoPage),
  ],
})
export class VerTodoPageModule {}
