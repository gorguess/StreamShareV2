import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { Ionic2RatingModule } from 'ionic2-rating';
import { HttpClientModule } from '@angular/common/http';
import { MovieProvider } from '../providers/movie/movie.provider';
// import { CalendarModule } from 'ionic3-calendar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';

import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';
import { InicioPage } from '../pages/inicio/inicio';
import { MenuPage } from '../pages/menu/menu';
import { VerTodoPage } from '../pages/ver-todo/ver-todo';
import { PeliculasPage } from '../pages/peliculas/peliculas';
import { PerfilPage } from '../pages/perfil/perfil';
import { ChatPage } from '../pages/chat/chat';
import { AddEventPage } from '../pages/add-event/add-event';
import { EditEventPage } from '../pages/edit-event/edit-event';
import { InfoPage } from '../pages/info/info';
import { SeriesPage } from '../pages/series/series';
import { LoginProvider } from '../providers/login/login';
import { HeaderPage } from '../pages/header/header';
import { VideoplayerPage } from '../pages/videoplayer/videoplayer';
import { ListPage } from '../pages/list/list';
import { FullvideoPage } from '../pages/fullvideo/fullvideo';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

const firebaseAuth = {
  apiKey: "AIzaSyDk2H5Yzy8mp8Q6OOwDQ8gptAFYYbP7x5Y",
  authDomain: "proyecto-final-cfc6c.firebaseapp.com",
  databaseURL: "https://proyecto-final-cfc6c.firebaseio.com",
  projectId: "proyecto-final-cfc6c",
  storageBucket: "proyecto-final-cfc6c.appspot.com",
  messagingSenderId: "878191344149"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage,
    InicioPage,
    MenuPage,
    PeliculasPage,
    SeriesPage,
    PerfilPage,
    ChatPage,
    AddEventPage,
    EditEventPage,
    InfoPage,
    VerTodoPage,
    HeaderPage,
    VideoplayerPage,
    ListPage,
    FullvideoPage
  ],
  imports: [ 
    MbscModule, 
    FormsModule, 
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    Ionic2RatingModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistroPage,
    InicioPage,
    MenuPage,
    PeliculasPage,
    SeriesPage,
    PerfilPage,
    ChatPage,
    AddEventPage,
    EditEventPage,
    InfoPage,
    VerTodoPage,
    HeaderPage,
    VideoplayerPage,
    ListPage,
    FullvideoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    StreamingMedia,
    LoginProvider,
    MovieProvider,
    ScreenOrientation
  ]
})
export class AppModule {}
