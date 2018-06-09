import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fullvideo',
  templateUrl: 'fullvideo.html',
})
export class FullvideoPage {

  movie: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.movie = navParams.data['video'];
  }

  ionViewDidLoad() {

  }

  goToBack(){
    this.navCtrl.pop();
  }

}
