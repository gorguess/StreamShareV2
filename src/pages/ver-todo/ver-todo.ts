import { Component , OnInit} from '@angular/core';
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
  providers: [MovieProvider]
})
export class VerTodoPage implements OnInit{
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
    this.token = localStorage.getItem('token');
    this.tipoContenido = navParams.data['tipo'];
    this.list = navParams.data['array'];
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

      this._movieProvider.getViewedMovie(this.token).subscribe(response => {
        console.log(response);
        this.list = [];
        response.views.forEach(eleMovie => {
          if (eleMovie.movieViewed) {
            this.movie = eleMovie.movieViewed;
            this.list.push(this.movie);
          }
        });
      });
    } else if (this.tipoContenido === 'favorito') {
      // Ponemos por defecto, el icono de favoritos
      this.iconoIOS = 'ios-heart';
      this.iconoAndroid = 'md-heart';
      // Ponemos, que la segunda opción sea cambiarla a visto
      this.iconoIOS2 = 'ios-eye-off';
      this.iconoAndroid2 = 'md-eye-off';

      this._movieProvider.getLikedMovie(this.token).subscribe(response => {
        this.list = [];
        response.likeds.forEach(eleMovie => {
          if (eleMovie) {
            this.movie = eleMovie.movieLiked;
            this.list.push(this.movie);
          }
        });
      },
      err => {
        console.log(err);
      });
    }
  }

  ngOnInit() {}

  cambiarIcono(fab, movieId){
    console.log(movieId);
    if (this.iconoIOS2 === "ios-eye-off" && this.iconoAndroid2 === "md-eye-off") {
      this._movieProvider.viewMovie(this.token, movieId).subscribe(response => {
        if (response.message === "Ya estás viendo esta película") {
          fab.close();
          this.mensaje = 'This film is already in "Seen Group"';
          this.presentToast(this.mensaje);
        } else {
          console.log(response);
          fab.close();
          this.mensaje = 'This film has been added to "Seen Group"';
          this.presentToast(this.mensaje);
        }
      },
        err => {
          console.log(err);
        });
    } else {
      this._movieProvider.likedMovie(this.token, movieId).subscribe(response => {
        if (response.message === "Ya estás viendo esta película") {
          fab.close();
          this.mensaje = 'This film is already in "Favourite Group"';
          this.presentToast(this.mensaje);
        } else {
          console.log(response);
          fab.close();
          this.mensaje = 'This film has been added to "Favourite Group"';
          this.presentToast(this.mensaje);
        }
      },
        err => {
          console.log(err);
        });
    }
  }
  
  deleteView(fab, movieId) {
    if (this.tipoContenido === 'visto') {
      console.log(movieId);
      this._movieProvider.deleteViewed(this.token, movieId).subscribe(response => {
        fab.close();
        this.mensaje = 'This film has been removed of "Seen Group"';
        this.presentToast(this.mensaje);
        var index = 0
        this.list.forEach(element => {
          if(element._id===movieId){
            console.log(index);
            this.list.splice(index,1);
            console.log(this.list);
          }
          index++;
        });
      },
        err => {
          fab.close();
          this.mensaje = 'This film has already been removed of "Seen Group". Please refresh this view.';
          this.presentToast(this.mensaje);
        });
    } else if (this.tipoContenido === 'favorito') {
      this._movieProvider.dislikeMovie(this.token, movieId).subscribe(response => {
        fab.close();
        this.mensaje = 'This film has been removed of "Favourite Group"';
        this.presentToast(this.mensaje);
        var index = 0
        this.list.forEach(element => {
          if(element._id===movieId){
            console.log(index);
            this.list.splice(index,1);
            console.log(this.list);
          }
          index++;
        });
      },
        err => {
          fab.close();
          this.mensaje = 'This film has already been removed of "Favourite Group". Please refresh this view.';
          this.presentToast(this.mensaje);
        });
    }
  }

  doRefresh(refresher) {
    if (this.tipoContenido === 'visto') {
      // Ponemos por defecto, el icono de visto
      this.iconoIOS = 'ios-eye-off';
      this.iconoAndroid = 'md-eye-off';
      // Ponemos, que la segunda opción sea cambiarla a favoritos
      this.iconoIOS2 = 'ios-heart';
      this.iconoAndroid2 = 'md-heart';

      this._movieProvider.getViewedMovie(this.token).subscribe(response => {
        console.log(response);
        this.list = [];
        response.views.forEach(eleMovie => {
          if (eleMovie.movieViewed) {
            this.movie = eleMovie.movieViewed;
            this.list.push(this.movie);
          }
        });
      });
      refresher.complete();
    } else if (this.tipoContenido === 'favorito') {
      // Ponemos por defecto, el icono de favoritos
      this.iconoIOS = 'ios-heart';
      this.iconoAndroid = 'md-heart';
      // Ponemos, que la segunda opción sea cambiarla a visto
      this.iconoIOS2 = 'ios-eye-off';
      this.iconoAndroid2 = 'md-eye-off';

      this._movieProvider.getLikedMovie(this.token).subscribe(response => {
        this.list = [];
        response.likeds.forEach(eleMovie => {
          if (eleMovie) {
            this.movie = eleMovie.movieLiked;
            this.list.push(this.movie);
          }
        });
      },
        err => {
          console.log(err);
        });
      refresher.complete();
    }
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


}
