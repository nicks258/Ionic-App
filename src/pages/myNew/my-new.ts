
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the MyNewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'my-new.html',
})
export class MyNewPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyNewPage');
  }

}
