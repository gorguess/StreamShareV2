import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, FabContainer,
         ToastController, LoadingController} from 'ionic-angular';
import { Subject } from 'rxjs';
import { LoginProvider } from '../../providers/login/login';
import { PerfilPage } from '../perfil/perfil';
import { InicioPage } from '../inicio/inicio';
import { InfoPage } from '../info/info';
import { MovieProvider } from '../../providers/movie/movie.provider';
import { Movie } from '../../providers/movie/movie';

@IonicPage()
@Component({
  selector: 'page-peliculas',
  templateUrl: 'peliculas.html',
})
export class PeliculasPage {

  structure: any = { lower: 1990, upper: 2018 };
  filter = false;
  genre: any = 'Genre: All';
  videoLanguage: any = 'Video Language: All';
  subtitleLanguage: any = 'Subtitle Language: All';
  iconoIOS1;
  iconoAndroid1;
  iconoIOS;
  iconoAndroid;
  mensaje;
  movie: Movie;
  listMovie: Array<Movie>;
  page = 1;
  contador: any;
  mensajeVacio: any;
  token;

  public isSearchbarOpened = false;
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public contenedorFilms: LoginProvider,
    private _movieProvider: MovieProvider
  ) {
    this.iconoIOS1 = 'ios-arrow-dropdown';
    this.iconoAndroid1 = 'md-arrow-dropdown';
    this.iconoIOS = 'ios-arrow-dropdown';
    this.iconoAndroid = 'md-arrow-dropdown';
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
    this.token=localStorage.getItem('token');
  }

  ngOnInit(): void {
    this._movieProvider.getAllMovies(localStorage.getItem('token'), this.page).subscribe(response => {
      this.listMovie = [];
      if(response.message.length===0){
        this.mensajeVacio = 'No hay peliculas aún';
      }else{
        response.message.forEach(eleMovie => {
        this.listMovie.push(eleMovie);
        });
        console.log(this.listMovie);
      }
      
    },
      error => {
        console.log(error);
      });
  }

  // goToPerfil() {
  //   this.navCtrl.push(PerfilPage, {
  //     data: this.contenedor
  //   });
  // }

  // goToInicio() {
  //   this.navCtrl.push(InicioPage, {
  //     data: this.contenedor
  //   });
  // }

  goToInfo(p: Array<any>) {
    this.navCtrl.push(InfoPage, {
      contenido: p,
      tipo: 'movie'
    });
  }

  filterType() {
    this.filter = true;
  }

  filterType2() {
    this.filter = false;
  }

  loginLoading() {
    this.filter = false;
    let loading = this.loadingCtrl.create({
      content: 'Years between ' + this.structure.lower + ' and ' + this.structure.upper+
        '<br>' + this.genre + '<br>' + this.videoLanguage + '<br>' + this.subtitleLanguage,
      duration: 5000,
      dismissOnPageChange: true
    });

    loading.present();
    setTimeout(() => {
      
    },
      2000);
  }

  doRefresh(refresher) {
    this._movieProvider.getAllMovies(localStorage.getItem('token'), this.page).subscribe(response => {
      this.listMovie = [];
      response.message.forEach(eleMovie => {
        this.listMovie.push(eleMovie);
      });
      refresher.complete();
    });
  }

  cambiarIconoSeen(fab, movieId) {
    this._movieProvider.viewMovie(this.token, movieId).subscribe(response=>{
      console.log(response);
      this.iconoIOS = 'ios-eye-off';
      this.iconoAndroid = 'md-eye-off';
      fab.close();
      this.mensaje = 'This film has been added to "Seen Group"';
      this.presentToast(this.mensaje);
    },
    err => {
      console.log(err);
    });
  }

  cambiarIconoLike(fab: FabContainer, movieId) {
    this._movieProvider.getMovieLiked(this.token, movieId).subscribe(response => {
      console.log(response);
      this.iconoIOS = 'ios-heart';
      this.iconoAndroid = 'md-heart';
      fab.close();
      this.mensaje = 'This film has been added to "Favourite Group"';
      this.presentToast(this.mensaje);
    },
      err => {
        console.log(err);
      });
  }
  cambiarIconoRemove(fab: FabContainer) {
    this.iconoIOS = 'ios-arrow-dropdown';
    this.iconoAndroid = 'md-arrow-dropdown';
    fab.close();
    this.mensaje = 'This film has been removed of his old group';
    this.presentToast(this.mensaje);
  }

  presentToast(mensaje: string) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 4000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  moreFilms() {
    console.log('Array de peliculas1: ', this.listMovie.length);
    this.page = this.page + 1;
    this._movieProvider.getAllMovies(localStorage.getItem('token'), this.page).subscribe(response => {
      response.message.forEach(eleMovie => {
        this.listMovie.push(eleMovie);
      });
      
      if(response.message.length===0){
        this.alert();
      }
    });
    console.log('Array de peliculas2: ', this.listMovie.length);
    console.log('Contenido que trae el server: ', this.contador);
    /*if(this.listMovie.length == this.contador){
      this.alert();
    }*/
  }

  alert() {
    this.alertCtrl.create({
      title: 'There was a problem!',
      subTitle: 'There are not more films in our Database',
      buttons: ['OK']
    }).present();
  }
}
