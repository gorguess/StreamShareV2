import { Component, OnInit, DoCheck } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { PeliculasPage } from '../peliculas/peliculas';
import { VerTodoPage } from '../ver-todo/ver-todo';
import { LoginProvider } from '../../providers/login/login';
import { DomSanitizer } from '@angular/platform-browser';
import { InfoPage } from '../info/info';
import { MovieProvider } from '../../providers/movie/movie.provider';
import { Movie } from '../../providers/movie/movie';
import { SerieProvider } from '../../providers/serie/serie.provider';
import { Serie } from '../../providers/serie/serie';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
  providers: [LoginProvider,MovieProvider, SerieProvider]
})
export class InicioPage implements OnInit, DoCheck{
  trustedUrl: any;
  avatarUrl: any;
  identity: any;
  items;
  peli1;
  peli2;
  peli3;
  serie1;
  serie2;
  titulo1;
  titulo2;
  titulo3;
  titulo4;
  titulo5;
  cont = 4;
  seeAll: boolean = false;
  nombreUsuario;
  contenedor;
  movie: Movie;
  listMovieVieweds: Array<Movie>;
  serie: Serie;
  listSerieVieweds: Array<Serie>;
  token;
  mensajeView;

  public isSearchbarOpened = false;
  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private comprobarLogin: LoginProvider,
    private sanitizer: DomSanitizer,
    private _movieProvider: MovieProvider,
    private _serieProvider: SerieProvider
  ) {
    this.peli1 = "assets/imgs/peli1.jpg";
    this.peli2 = "assets/imgs/peli2.jpg";
    this.peli3 = "assets/imgs/peli3.jpg";
    this.serie1 = "assets/imgs/serie1.jpg";
    this.serie2 = "assets/imgs/serie2.jpg";
    this.titulo1 = "Deadpool";
    this.titulo2 = "Avengers 2";
    this.titulo3 = "Hasta el último Hombre";
    this.titulo4 = "Breaking Bad";
    this.titulo5 = "Prison Break";
    //this.contenedor = navParams.data['data'];
    this.token = localStorage.getItem('token');
    this.movie = new Movie(
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    );
    
    this.serie = new Serie(
      '',
      '',      
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    );
  }

  goToInfo(p: Array<any>) {
    this.navCtrl.push(InfoPage, {
      contenido: p,
    });
  }

  // goToPerfil() {
  //   this.navCtrl.push(PerfilPage, {
  //     data: this.contenedor
  //   });
  // }

  goToSeeAll(contenido: string){
    this.navCtrl.push(VerTodoPage, {
      tipo: contenido
    });
  }

  // goToPeliculas() {
  //   this.navCtrl.push(PeliculasPage, {
  //     data: this.contenedor
  //   });
  // }

  ionViewDidLoad() {
    this.identity = this.comprobarLogin.getIdentity();
    this.avatarUrl = this.comprobarLogin.getImageAvatar();
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl)

    if (this.cont > 3) {
      this.seeAll = true;
    }

    this._movieProvider.getViewedMovie(this.token).subscribe(response => {
      this.listMovieVieweds = [];
      response.views.forEach(eleMovie => {
        if(eleMovie.movieViewed){
      this.movie = eleMovie.movieViewed;
      this.listMovieVieweds.push(this.movie);
        } else { 
          this.mensajeView = 'No hay peliculas en este momento';
        }
      });
    },
    err => {
      console.log(err);
    });
    this._serieProvider.getViewedSerie(this.token).subscribe(response => {
      this.listSerieVieweds = [];
      response.views.forEach(eleSerie=> {
        if(eleSerie.chapter){
          this.serie = eleSerie.chapter;
          this.listSerieVieweds.push(this.serie);
        } else {
          this.mensajeView = 'No hay series en este momento';
        }
      });
    },
    err => {
      console.log(err);
    });
  }

ngOnInit(){
  this.identity = this.comprobarLogin.getIdentity();
  this.avatarUrl = this.comprobarLogin.getImageAvatar();
  this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl)
  }


  ngDoCheck(){
    //this.identity = this.comprobarLogin.getIdentity();
    this.avatarUrl = this.comprobarLogin.getImageAvatar();
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl)
  }
}
