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
  seeAllMovies: boolean = false;
  seeAllSeries: boolean = false;
  mensajeSeries: boolean = false;
  mensajePeliculas: boolean = false;
  mensajeViewP = 'There are not films in this group';
  mensajeViewS = 'There are not series in this group';
  mensajeViewPS = 'There are not films or series in this group';
  mensajeF;
  mostrarPeliculasF: Array<Movie>;
  seeAllF;
  mostrarSeries: Array<Serie>;
  movie: Movie;
  listMovieVieweds: Array<Movie>;
  listMovieLikeds: Array<Movie>;
  serie: Serie;
  listSerieVieweds: Array<Serie>;
  token;

  // public isSearchbarOpened = false;
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

  ngOnInit() {
    this.identity = this.comprobarLogin.getIdentity();
    this.avatarUrl = this.comprobarLogin.getImageAvatar();
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);

    // Sacamos las películas vistas
    this._movieProvider.getViewedNMovie(this.token).subscribe(response => {
      console.log(response);
      this.listMovieVieweds = [];
      response.views.forEach(eleMovie => {
        if (eleMovie.movieViewed) {
          this.movie = eleMovie.movieViewed;
          this.listMovieVieweds.push(this.movie);
        }
      });

      if (response.contador > 0) {
        if (response.contador > 3) {
          this.seeAllMovies = true;
        }
      } else {
        this.mensajePeliculas = true;
      }
    },
      err => {
        this.mensajePeliculas = true;
        console.log(err);
      });

    // Sacamos las series vistas
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


      this._movieProvider.getLikedNMovie(this.token).subscribe(response=>{
        console.log(response);
      }, 
      err=>{
        console.log(err);
      });


    this._movieProvider.getLikedNMovie(this.token).subscribe(response=>{
      console.log(response);
      if (response.message) {
        this.mensajeF = true;
      } else {
        this.listMovieLikeds = [];
        response.likeds.forEach(eleMovie => {
          if (eleMovie) {
            this.movie = eleMovie.movieLiked;
            this.listMovieLikeds.push(this.movie);
          }
        });

        if (response.contador > 0) {
          if (response.contador > 3) {
            this.seeAllF = true;
          }
        } else {
          this.mensajeF = true;
        }
      }

    },
      err => {
        this.mensajeF = true;
        console.log(err);
      });
  }

  // Se encuentra continuamente ejecutándose para ver si ha cambiado el username o su imagen
  ngDoCheck() {
    this.identity = this.comprobarLogin.getIdentity();
    this.avatarUrl = this.comprobarLogin.getImageAvatar();
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);
  }

  goToInfo(p: Array<any>) {
    this.navCtrl.push(InfoPage, {
      contenido: p,
      tipo: 'movie'
    });
  }

  goToSeeAll(contenido: string, lista: Array<any>){
    this.navCtrl.push(VerTodoPage, {
      tipo: contenido,
      array: lista
    });
  }

}
