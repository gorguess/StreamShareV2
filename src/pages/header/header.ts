import { Component, OnInit, DoCheck } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { LoginProvider } from '../../providers/login/login';
import { DomSanitizer } from '@angular/platform-browser';
import { PeliculasPage } from '../peliculas/peliculas';
import { SeriesPage } from '../series/series';
import { InicioPage } from '../inicio/inicio';
import { MovieProvider } from '../../providers/movie/movie.provider';
import { SerieProvider } from '../../providers/serie/serie.provider';

@IonicPage()
@Component({
  selector: 'page-header',
  templateUrl: 'header.html',
  providers: [LoginProvider]
})
export class HeaderPage implements OnInit, DoCheck{

  contenedor: any;
  items1: Array<any>;
  items: string[];
  trustedUrl: any;
  avatarUrl: any;
  identity: any;
  list: boolean = false;
  index;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private comprobarLogin: LoginProvider,
    private sanitizer: DomSanitizer,
    private _movieProvider: MovieProvider,
    private _serieProvider: SerieProvider
  ){}

  ngOnInit(){
    this.identity = this.comprobarLogin.getIdentity();
    this.avatarUrl = this.comprobarLogin.getImageAvatar();
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);
  }
  
  
    ngDoCheck(){
      this.identity = this.comprobarLogin.getIdentity();
      this.avatarUrl = this.comprobarLogin.getImageAvatar();
      this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);

      this.items1 = [];

      this._movieProvider.getAllMovies(localStorage.getItem('token'), this.page).subscribe(response => {
        if (response.message.length !== 0) {
          response.message.forEach(eleMovie => {
            this.index = eleMovie["title"];
            this.items1.push(this.index);
          });
        }

      },
        error => {
          console.log(error);
        });

      this._serieProvider.getAllSeries(localStorage.getItem('token'), this.page).subscribe(response => {
        if (response.message.length !== 0) {
          response.message.forEach(eleSerie => {
            this.index = eleSerie["title"];
            this.items1.push(this.index);
          });
        }
      },
        error => {
          console.log(error);
        });
    }

    listado() {
      this.items = this.items1;
    }

  getItems(ev) {
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.listado();
      console.log(this.items);
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
