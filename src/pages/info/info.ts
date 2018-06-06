import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { PerfilPage } from '../perfil/perfil';
import { InicioPage } from '../inicio/inicio';
import { PeliculasPage } from '../peliculas/peliculas';
import { Movie } from '../../models/movie';
import { VideoplayerPage } from '../videoplayer/videoplayer';
import { LinkProvider } from '../../providers/links/link.provider'; 
import{ MovieProvider } from '../../providers/movie/movie.provider';
import{ SerieProvider } from '../../providers/serie/serie.provider';
import { Serie } from '../../providers/serie/serie';


const noop = () => {
};

export const RATING_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InfoPage),
  multi: true
};

@IonicPage()
@Component({
  selector: 'page-info',
  styles: [`
    ul.rating li {
      display: inline;
      border: 0px;
      background: none;
      padding: 5px 1px;
    }
    ul.rating li i {
      font-size: 30px;
    }
  `],
  templateUrl: 'info.html',
  providers: [RATING_CONTROL_VALUE_ACCESSOR, LinkProvider, MovieProvider, SerieProvider]
})
export class InfoPage implements ControlValueAccessor, OnInit {

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

  _max: number = 10;
  _readOnly: boolean = false;
  _emptyStarIconName: string = 'star-outline';
  _halfStarIconName: string = 'star-half';
  _starIconName: string = 'star';
  _nullable: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private streamingMedia: StreamingMedia,
    private _linkProvider: LinkProvider,
    private _movieProvider: MovieProvider,
    private _serieProvider: SerieProvider
  ) {
    //this.movie = navParams.data['contenido'];
    this.type = navParams.data['tipo'];
    if(this.type==='movie'){
      this.movie = navParams.data['contenido'];
      this.content = this.movie;
      console.log('hola')
    }else if(this.type==='serie'){
      this.serie = navParams.data['contenido'];
      this.content = this.serie;
    }
    this.token = localStorage.getItem('token');
  }

  @Input()
  get max() {
    return this._max;
  }
  set max(val: any) {
    const newValue = this.getNumberPropertyValue(val);
    if (newValue !== this._max) {
      this._max = newValue;
      this.createStarIndexes();
    }
  }

  @Input()
  get readOnly() {
    return this._readOnly;
  }
  set readOnly(val: any) {
    this._readOnly = this.isTrueProperty(val);
  }

  @Input()
  get emptyStarIconName() {
    return this._emptyStarIconName;
  }
  set emptyStarIconName(val: any) {
    this._emptyStarIconName = val;
  }

  @Input()
  get halfStarIconName() {
    return this._halfStarIconName;
  }
  set halfStarIconName(val: any) {
    this._halfStarIconName = val;
  }

  @Input()
  get starIconName() {
    return this._starIconName;
  }
  set starIconName(val: any) {
    this._starIconName = val;
  }

  @Input()
  get nullable() {
    return this._nullable;
  }
  set nullable(val: any) {
    this._nullable = this.isTrueProperty(val);
  }

  innerValue: any;
  starIndexes: Array<number>;

  onChangeCallback: (_: any) => void = noop;

  ngOnInit() {
    // ngFor needs an array
    this.createStarIndexes();

    this._linkProvider.getLinks(this.token, this.movie["_id"]).subscribe(response=>{
      this.video = response.link[0].url;
    },
    err =>{
      console.log(err);
    });
  }

  createStarIndexes() {
    this.starIndexes = Array(this.max).fill(1).map((x, i) => i);
  }

  getStarIconName(starIndex: number) {
    if (this.value === undefined) {
      return this.emptyStarIconName;
    }

    if (this.value > starIndex) {

      if (this.value < starIndex + 1) {
        return this.halfStarIconName;

      } else {
        return this.starIconName;
      }

    } else {
      return this.emptyStarIconName;
    }
  }

  get value(): any {
    return this.innerValue;
  }

  set value(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
      this.onChangeCallback(value);
    }
  }

  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
  }

  onKeyDown(event: any) {
    if (/(37|38|39|40)/.test(event.which)) {
      event.preventDefault();
      event.stopPropagation();

      let newValue = this.value + ((event.which == 38 || event.which == 39) ? 1 : -1);
      return this.rate(newValue);
    }
  }

  rate(value: number) {
    if (this.readOnly || value < 0 || value > this.max) {
      return;
    }

    if (value === this.value && this.nullable) {
      value = null;
    }

    this.value = value;
  }

  private isTrueProperty(val: any): boolean {
    if (typeof val === 'string') {
      val = val.toLowerCase().trim();
      return (val === 'true' || val === 'on');
    }
    return !!val;
  }

  private getNumberPropertyValue(val: any): number {
    if (typeof val === 'string') {
      return parseInt(val.trim());
    }
    return val;
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

  // goToPeliculas() {
  //   this.navCtrl.push(PeliculasPage, {
  //     data: this.contenedor
  //   });
  // }
  
  gotoreproductor(){
   /*if(this.type==='movie'){
      this._movieProvider.viewMovie(this.token, this.content["_id"]).subscribe(response=>{
      console.log(response);
      },
      err => {
        console.log(err);
      });
    }else if(this.type==='serie'){
      this._serieProvider.viewSerie(this.token, this.content["_id"]).subscribe(response=>{
        console.log(response);
      },
      err => {
        console.log(err);
      });
    }*/
    this.navCtrl.push(VideoplayerPage,{movie: this.content, video: this.video});
  }
}
