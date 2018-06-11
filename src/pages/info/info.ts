import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
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

  gotoreproductor(){
    this.navCtrl.push(VideoplayerPage,{movie: this.content, video: this.video});
  }

  obtenerLinks(movieId) {
    this._movieProvider.getLinks(this.token, movieId).subscribe(response => {
      if (response.message === "No existe el contenido") {
        this.mensaje = "There are not links of this content yet";
        this.presentToast(this.mensaje);
      } else {
        response.message.forEach(link => {
          this.links.push(link);
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
        label: 'Blue',
        value: links[index].value
      });  
    }

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        // this.testRadioOpen = false;
        // this.testRadioResult = data;
      }
    });
    alert.present();
  }
}
