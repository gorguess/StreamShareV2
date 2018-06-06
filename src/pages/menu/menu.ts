import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { PeliculasPage } from '../peliculas/peliculas';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = InicioPage;
  pages: Array<{ title: string, component: any }>;
  destino: 'Peliculas';


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.destino == "Peliculas") {
      this.rootPage = InicioPage;
      this.pages = [
        { title: 'Películas', component:PeliculasPage }
        // { title: 'Series', component: GeneralPage },
        // { title: 'Perfil', component: ClimaPage }
        // { title: 'Monuments', component: MonumentsPage },
        // { title: 'Festivities', component: FestPage },
        // { title: 'Transport', component: TransportPage },
        // { title: 'Typical food', component: FoodPage }
      ];
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
