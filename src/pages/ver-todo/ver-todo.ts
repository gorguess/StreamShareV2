import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, FabContainer,
         ToastController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { PeliculasPage } from '../peliculas/peliculas';
import { InicioPage } from '../inicio/inicio';
import { InfoPage } from '../info/info';
import { MovieProvider } from '../../providers/movie/movie.provider';
import { Movie } from '../../providers/movie/movie';

@IonicPage()
@Component({
  selector: 'page-ver-todo',
  templateUrl: 'ver-todo.html',
})
export class VerTodoPage {
  tipoContenido;
  contenedor;
  movie: Movie;
  listMovie: Array<Movie>;
  list;
  allViews: any;
  iconoIOS;
  iconoAndroid;
  iconoIOS2;
  iconoAndroid2;
  mensaje;
  token;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _movieProvider: MovieProvider,
    public toastCtrl: ToastController
  ) {
    this.tipoContenido = navParams.data['tipo'];
    this.list = navParams.data['array'];
    // this.contenedor = navParams.data['data'];
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
    )
  }

  ionViewDidLoad() {
    if (this.tipoContenido === 'visto') {
      // Ponemos por defecto, el icono de visto
      this.iconoIOS = 'ios-eye-off';
      this.iconoAndroid = 'md-eye-off';
      // Ponemos, que la segunda opción sea cambiarla a favoritos
      this.iconoIOS2 = 'ios-heart';
      this.iconoAndroid2 = 'md-heart';
    } else if (this.tipoContenido === 'favorito') {
      // Ponemos por defecto, el icono de favoritos
      this.iconoIOS2 = 'ios-heart';
      this.iconoAndroid2 = 'md-heart';
      // Ponemos, que la segunda opción sea cambiarla a visto
      this.iconoIOS = 'ios-eye-off';
      this.iconoAndroid = 'md-eye-off';
    } else {
      console.log('Ha ocurrido un error');
    }
  }

  // cambiarIconoSeen(fab, movieId) {
  //   this._movieProvider.viewMovie(this.token, movieId).subscribe(response => {
  //     console.log(response);
  //     this.iconoIOS = 'ios-eye-off';
  //     this.iconoAndroid = 'md-eye-off';
  //     fab.close();
  //     this.mensaje = 'This film has been added to "Seen Group"';
  //     this.presentToast(this.mensaje);
  //   },
  //     err => {
  //       console.log(err);
  //     });
  // }

  // cambiarIconoLike(fab: FabContainer, movieId) {
  //   this._movieProvider.getMovieLiked(this.token, movieId).subscribe(response => {
  //     console.log(response);
  //     this.iconoIOS = 'ios-heart';
  //     this.iconoAndroid = 'md-heart';
  //     fab.close();
  //     this.mensaje = 'This film has been added to "Favourite Group"';
  //     this.presentToast(this.mensaje);
  //   },
  //     err => {
  //       console.log(err);
  //     });
  // }

  cambiarIcono(fab: FabContainer, movieId){
    if (this.iconoIOS2 === "ios-eye-off" && this.iconoAndroid2 === "md-eye-off") {
      this._movieProvider.viewMovie(this.token, movieId).subscribe(response => {
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
    } else {
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
  }


  cambiarIconoRemove(fab: FabContainer, movieId) {
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

  goToInfo(p: Array<any>) {
    this.navCtrl.push(InfoPage, {
      contenido: p,
      data: this.contenedor
    });
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

}
