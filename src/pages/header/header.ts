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
import { InfoPage } from '../info/info';

@IonicPage()
@Component({
  selector: 'page-header',
  templateUrl: 'header.html',
  providers: [LoginProvider,SerieProvider, MovieProvider]
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
  searchRes: any;
  token: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private comprobarLogin: LoginProvider,
    private sanitizer: DomSanitizer,
    private _movieProvider: MovieProvider,
    private _serieProvider: SerieProvider
  ){
    this.token= localStorage.getItem('token');
  }

  ngOnInit(){
    this.identity = this.comprobarLogin.getIdentity();
    this.avatarUrl = this.comprobarLogin.getImageAvatar();
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);
  }
  
  
  ngDoCheck(){
    this.identity = this.comprobarLogin.getIdentity();
    //this.avatarUrl = this.comprobarLogin.getImageAvatar();
    //this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);
  }

  listado() {
    this.items = this.items1;
  }

  getItems(varIn: any){
    if(varIn.target.value===''){
      this.searchRes=null;
    }else{
      this._movieProvider.getSearchedMovie(this.token, varIn.target.value).subscribe(response=>{
        console.log(response);
        this.searchRes = response;
      }, 
      err=>{
        console.log(err);
      });
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

  goToInfo(p: Array<any>) {
    this.navCtrl.push(InfoPage, {
      contenido: p,
      tipo: 'movie'
    });
  }

}
