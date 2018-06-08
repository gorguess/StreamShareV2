import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _movieProvider: MovieProvider
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
      this.iconoIOS ='ios-eye-off';
      this.iconoAndroid = 'md-eye-off';
    } else if (this.tipoContenido === 'favorito') {
      this.iconoIOS = 'ios-heart';
      this.iconoAndroid = 'md-heart';
    } else {
      console.log('Ha ocurrido un error');
    }
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
