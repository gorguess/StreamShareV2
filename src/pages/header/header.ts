import { Component, OnInit, DoCheck } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { LoginProvider } from '../../providers/login/login';
import { DomSanitizer } from '@angular/platform-browser';
import { PeliculasPage } from '../peliculas/peliculas';
import { SeriesPage } from '../series/series';
import { InicioPage } from '../inicio/inicio';

@IonicPage()
@Component({
  selector: 'page-header',
  templateUrl: 'header.html',
  providers: [LoginProvider]
})
export class HeaderPage implements OnInit, DoCheck{

  contenedor: any;
  items: string[];
  trustedUrl: any;
  avatarUrl: any;
  identity: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private comprobarLogin: LoginProvider,
    private sanitizer: DomSanitizer){}

  ngOnInit(){
    this.identity = this.comprobarLogin.getIdentity();
    this.avatarUrl = this.comprobarLogin.getImageAvatar();
    //console.log('Primera ', this.identity['image']);
    //if (!this.identity['image']) {
    //this.identity['image'] = "assets/imgs/profileNull.png";
    //}
    //console.log('Segunda ', this.identity['image']);
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);
    }
  
  
    ngDoCheck(){
      this.identity = this.comprobarLogin.getIdentity();
      this.avatarUrl = this.comprobarLogin.getImageAvatar();
      this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);
    }

    listado() {
      console.log('Header');
      this.items = [
        'Amsterdam',
        'Bogota',
        'Buenos Aires',
        'Cairo',
        'Dhaka',
        'Edinburgh',
        'Geneva',
        'Genoa',
        'Glasglow',
        'Hanoi',
        'Hong Kong',
        'Islamabad',
        'Istanbul',
        'Jakarta',
        'Kiel',
        'Kyoto',
        'Le Havre',
        'Lebanon',
        'Lhasa',
        'Lima',
        'London',
        'Los Angeles',
        'Madrid',
        'Manila',
        'New York',
        'Olympia',
        'Oslo',
        'Panama City',
        'Peking',
        'Philadelphia',
        'San Francisco',
        'Seoul',
        'Taipeh',
        'Tel Aviv',
        'Tokio',
        'Uelzen',
        'Washington'
      ];
      console.log(this.items);
    }

  getItems(ev) {
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.listado();
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      },
      console.log(this.items)
    )
    } else {
      return;
    }
  }
  
  goToPerfil() {
    this.navCtrl.push(PerfilPage);
  }

  goToPeliculas() {
    this.navCtrl.push(PeliculasPage);
  }

  goToInicio() {
    this.navCtrl.push(InicioPage);
  }

  goToSeries() {
    this.navCtrl.push(SeriesPage);
  }

}
