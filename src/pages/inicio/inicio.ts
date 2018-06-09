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
  contMovies = 0;
  contSeries = 0;
  seeAllMovies: boolean = false;
  seeAllSeries: boolean = false;
  mensajeSeries: boolean = false;
  mensajePeliculas: boolean = false;
  mensajeViewP = 'There are not films in this group';
  mensajeViewS = 'There are not series in this group';
  mensajeViewPS = 'There are not films and series in this group';
  mensajeF;
  mostrarPeliculas: Array<Movie>;
  mostrarPeliculasF: Array<Movie>;
  seeAllF;
  mostrarSeries: Array<Serie>;
  nombreUsuario;
  contenedor;
  movie: Movie;
  listMovieVieweds: Array<Movie>;
  listMovieLikeds: Array<Movie>;
  serie: Serie;
  listSerieVieweds: Array<Serie>;
  token;

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

  goToSeeAll(contenido: string, lista: Array<any>){
    this.navCtrl.push(VerTodoPage, {
      tipo: contenido,
      array: lista
    });
  }

  ionViewDidLoad() {
    this.identity = this.comprobarLogin.getIdentity();
    this.avatarUrl = this.comprobarLogin.getImageAvatar();
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);
  }

  ngOnInit(){
    this.identity = this.comprobarLogin.getIdentity();
    this.avatarUrl = this.comprobarLogin.getImageAvatar();
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);

    this._movieProvider.getViewedMovie(this.token).subscribe(response => {
      this.listMovieVieweds = [];
      response.views.forEach(eleMovie => {
        if (eleMovie.movieViewed) {
          this.movie = eleMovie.movieViewed;
          this.listMovieVieweds.push(this.movie);
        }
      });

      if (this.listMovieVieweds.length > 0) {
        if (this.listMovieVieweds.length > 3) {
          this.mostrarPeliculas = [];
          for (let index = 0; index < 3; index++) {
            this.mostrarPeliculas.push(this.listMovieVieweds[index]);
          }
          this.seeAllMovies = true;
        } else {
          this.mostrarPeliculas = [];
          for (let index = 0; index < this.listMovieVieweds.length; index++) {
            this.mostrarPeliculas.push(this.listMovieVieweds[index]);
          }
        }
      } else {
        this.mensajePeliculas = true;
      }
    },
      err => {
        console.log(err);
      });

    this._serieProvider.getViewedSerie(this.token).subscribe(response => {
      this.listSerieVieweds = [];
      response.views.forEach(eleSerie => {
        if (eleSerie.chapter) {
          this.serie = eleSerie.chapter;
          this.listSerieVieweds.push(this.serie);
        }
      });

      if (this.listSerieVieweds.length > 0) {
        if (this.listSerieVieweds.length > 3) {
          this.mostrarSeries = [];
          for (let index = 0; index < 3; index++) {
            this.mostrarSeries.push(this.listSerieVieweds[index]);
          }
          this.seeAllSeries = true;
        } else {
          this.mostrarSeries = [];
          for (let index = 0; index < this.listSerieVieweds.length; index++) {
            this.mostrarSeries.push(this.listSerieVieweds[index]);
          }
        }
      } else {
        this.mensajeSeries = true;
      }

    },
      err => {
        console.log(err);
      });

    this._movieProvider.getLikedMovie(this.token).subscribe(response => {
      console.log(response);
      if (response.message) {
        this.mensajeF = true;
      } else {
        this.listMovieLikeds = [];
        response.views.forEach(eleMovie => {
          if (eleMovie) {
            this.movie = eleMovie.chapter;
            this.listMovieLikeds.push(this.movie);
          }
        });

        if (this.listMovieLikeds.length > 0) {
          if (this.listMovieLikeds.length > 3) {
            this.mostrarPeliculasF = [];
            for (let index = 0; index < 3; index++) {
              this.mostrarPeliculasF.push(this.listMovieLikeds[index]);
            }
            this.seeAllF = true;
          } else {
            this.mostrarPeliculasF = [];
            for (let index = 0; index < this.listMovieLikeds.length; index++) {
              this.mostrarPeliculasF.push(this.listMovieLikeds[index]);
            }
          }
        } else {
          this.mensajeF = true;
        }
      }

    },
      err => {
        console.log(err);
      });
  }


  ngDoCheck(){
    this.identity = this.comprobarLogin.getIdentity();
    this.avatarUrl = this.comprobarLogin.getImageAvatar();
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl)
  }
}
