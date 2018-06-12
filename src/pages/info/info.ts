import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, FabContainer } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { PerfilPage } from '../perfil/perfil';
import { InicioPage } from '../inicio/inicio';
import { PeliculasPage } from '../peliculas/peliculas';
import { Movie } from '../../models/movie';
import { VideoplayerPage } from '../videoplayer/videoplayer';
import { LinkProvider } from '../../providers/links/link.provider'; 
import{ MovieProvider } from '../../providers/movie/movie.provider';
import{ SerieProvider } from '../../providers/serie/serie.provider';
import { Serie } from '../../providers/serie/serie';


@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
  providers: [LinkProvider, MovieProvider, SerieProvider]
})
export class InfoPage implements OnInit {

  content: any;
  file: Blob;
  fileURL: string;
  movie: Movie;
  serie: Serie;
  portada;
  titulo;
  nombreUsuario;
  token;
  video;
  type;
  mensaje;
  links: Array<any>;
  primerError: boolean = false;
  segundoError: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    private streamingMedia: StreamingMedia,
    private _linkProvider: LinkProvider,
    private _movieProvider: MovieProvider,
    private _serieProvider: SerieProvider
  ) {
    this.type = navParams.data['tipo'];
    if(this.type==='movie'){
      this.movie = navParams.data['contenido'];
      this.content = this.movie;
    }else if(this.type==='serie'){
      this.serie = navParams.data['contenido'];
      this.content = this.serie;
    }
    this.token = localStorage.getItem('token');
  }

  ngOnInit() {
    this._linkProvider.getLinks(this.token, this.movie["_id"]).subscribe(response=>{
      this.video = response.link[0].url;
    },
    err =>{
      console.log(err);
    });
  }

  ionViewDidLoad() {
    if (this.movie['genre'] == 'N/A') {
      this.movie['genre'] = 'Not available';
    }
    if (this.movie['year'] == 'N/A') {
      this.movie['year'] = 'Not available';
    }
    if (this.movie['description'] == 'N/A') {
      this.movie['description'] = 'Not available';
    }
  }

  cambiarIconoSeen(fab, movieId) {
    this._movieProvider.viewMovie(this.token, movieId).subscribe(response => {
      if (response.message === "Ya estás viendo esta película") {
        fab.close();
        this.mensaje = 'This film is already in "Seen Group';
        this.presentToast(this.mensaje);
      } else {
        fab.close();
        this.mensaje = 'This film has been added to "Seen Group"';
        this.presentToast(this.mensaje);
      }
    },
      err => {
        console.log(err);
      });
  }

  cambiarIconoLike(fab: FabContainer, movieId) {
    this._movieProvider.likedMovie(this.token, movieId).subscribe(response => {
      if (response.message === "Ya estás viendo esta película") {
        fab.close();
        this.mensaje = 'This film is already in "Favourite Group';
        this.presentToast(this.mensaje);
      } else {
        fab.close();
        this.mensaje = 'This film has been added to "Favourite Group"';
        this.presentToast(this.mensaje);
      }
    },
      err => {
        console.log(err);
      });
  }

  deleteView(fab, movieId) {
    this._movieProvider.deleteViewed(this.token, movieId).subscribe(response => {
      fab.close();
      console.log('Primero: ', response);
      // this.mensaje = 'This film has been removed of "Seen Group"';
      // this.presentToast(this.mensaje);
    },
      err => {
        console.log('Error1', err);
        this.primerError = true;
        fab.close();
        // this.mensaje = 'This film has already been removed of "Seen Group". Please refresh this view.';
        // this.presentToast(this.mensaje);
      });
    this._movieProvider.dislikeMovie(this.token, movieId).subscribe(response => {
      fab.close();
      console.log('Segundo: ', response);
      // this.mensaje = 'This film has been removed of "Favourite Group"';
      // this.presentToast(this.mensaje);
    },
      err => {
        console.log('Error2', err);
        this.segundoError = true;
        fab.close();
        // this.mensaje = 'This film has already been removed of "Favourite Group". Please refresh this view.';
        // this.presentToast(this.mensaje);
      });

    setTimeout(() => {
      this.errores(this.primerError, this.segundoError);
    }, 1250);
      
    /*if (this.primerError) {
      if (this.segundoError) {
        this.mensaje = 'This film have not got a group. You can not remove a film of non-existent group.';
        this.presentToast(this.mensaje);
      } else {
        this.mensaje = 'This film has been removed of "Favourite Group"';
        this.presentToast(this.mensaje);
      }
    } else if (!this.primerError) {
      if (this.segundoError) {
        this.mensaje = 'This film has been removed of "Seen Group"';
        this.presentToast(this.mensaje);
      } else {
        this.mensaje = 'This film has been removed of "Favourite Group" and "Seen Group"';
        this.presentToast(this.mensaje);
      }
    }*/


    // if (this.primerError == true && this.segundoError == true) {
    //   this.mensaje = 'This film have not got a group. You can not remove a film of non-existent group.';
    //   this.presentToast(this.mensaje);
    // } else if (!this.primerError == false && this.segundoError == true) {
    //   this.mensaje = 'This film has been removed of "Seen Group"';
    //   this.presentToast(this.mensaje);
    // } else if (this.primerError == true && !this.segundoError == false) {
    //   this.mensaje = 'This film has been removed of "Favourite Group"';
    //   this.presentToast(this.mensaje);
    // } else {
    //   this.mensaje = 'This film has been removed of "Favourite Group" and "Seen Group"';
    //   this.presentToast(this.mensaje);
    // }
  }

  errores(primerError = null, segundoError = null){
    console.log('Primero: ', this.primerError);
    console.log('Segundo: ', this.segundoError);
    if (this.primerError) {
      if (this.segundoError) {
        this.mensaje = 'This film have not got a group. You can not remove a film of non-existent group.';
        this.presentToast(this.mensaje);
      } else {
        this.mensaje = 'This film has been removed of "Favourite Group"';
        this.presentToast(this.mensaje);
      }
    } else if (!this.primerError) {
      if (this.segundoError) {
        this.mensaje = 'This film has been removed of "Seen Group"';
        this.presentToast(this.mensaje);
      } else {
        this.mensaje = 'This film has been removed of "Favourite Group" and "Seen Group"';
        this.presentToast(this.mensaje);
      }
    }
  }

  gotoreproductor(){
    this.navCtrl.push(VideoplayerPage,{movie: this.content, video: this.video});
  }

  obtenerLinks(movieId) {
    // this._movieProvider.getLinks(this.token, movieId).subscribe(response => {
    //   if (response.message === "No existe el contenido") {
    //     this.mensaje = "There are not links of this content yet";
    //     this.presentToast(this.mensaje);
    //   } else {
    //     response.message.forEach(link => {
    //       this.links.push(link);
    //     });
    //     this.showLinks(this.links);
    //   }
    // },
    //   err => {
    //     console.log(err);
    //   });
    this._linkProvider.getLinks(this.token, this.movie["_id"]).subscribe(response => {
      if (response.message === "No existe el contenido") {
        this.mensaje = "There are not links of this content yet";
        this.presentToast(this.mensaje);
      } else {
        this.links = [];
        response.link.forEach(link => {
          this.links.push(link.url);
        });
        this.showLinks(this.links);
      }
    },
      err => {
        console.log(err);
      });
    
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

  showLinks(links: any) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Select the link');

    for (let index = 0; index < this.links.length; index++) {
      alert.addInput({
        type: 'radio',
        label: 'Link ' + index,
        value: links[index]
      });  
    }

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.navCtrl.push(VideoplayerPage, { movie: this.content, video: data });
      }
    });
    alert.present();
  }
}
