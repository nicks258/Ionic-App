import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyNewPage } from './my-new';

@NgModule({
  declarations: [
    MyNewPage,
  ],
  imports: [
    IonicPageModule.forChild(MyNewPage),
  ],
  exports: [
    MyNewPage
  ]
})
export class MyNewPageModule {}
