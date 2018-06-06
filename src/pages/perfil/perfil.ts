import { Component, ViewChild, OnInit, DoCheck } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ChatPage } from '../chat/chat';
import { Subject } from 'rxjs';
import { PeliculasPage } from '../peliculas/peliculas';
import { InicioPage } from '../inicio/inicio';
import { IMobiscroll } from '@mobiscroll/angular/src/js/core/core';
import {
  mobiscroll,
  MbscEventcalendarOptions,
  MbscRangeOptions,
  MbscFormOptions,
  MbscRange,
  MbscEventcalendar
} from '@mobiscroll/angular';
import { LoginProvider } from '../../providers/login/login';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UserProvider } from '../../providers/user.provider';

let now = new Date();

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
  providers: [LoginProvider, UserProvider]
})
export class PerfilPage implements OnInit {
  nuevoName: { name: any; }[];
  trustedUrl: any;
  avatarUrl: any;
  identity: any;
  nuevoUser: Array<any>;
  @ViewChild('mbscRange')
  range: MbscRange;

  @ViewChild('mbscEventCal')
  eventCal: MbscEventcalendar;

  @ViewChild('fecha')
  fecha;

  items;
  nombreUsuario;
  contenedor;
  nombre;
  apellido;
  perfilImg;
  descripcion = false;
  contenidoDescripcion = [];
  
  eventDate: Array<Date> = [now, new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 2)];
  isBusy: string = 'busy';
  eventText: string = '';
  events: Array<any> = [{
    d: new Date(),
    text: 'New chapter of Mr Robot'
  }];

  public event = false;
  public isSearchbarOpened = false;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private comprobarLogin: LoginProvider,
    private sanitizer: DomSanitizer,
    private _userProvider: UserProvider,
    private camera: Camera
  ) {
    // this.contenedor = navParams.data['data'];
    // this.nombreUsuario = this.contenedor['nickname'];
    // this.nombre = this.contenedor['name'];
    // this.apellido = this.contenedor['surname'];
    // this.perfilImg = this.contenedor['image'];
  }

  ngOnInit(){
    this.identity = this.comprobarLogin.getIdentity();
    this.avatarUrl = this.comprobarLogin.getImageAvatar();
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);
    if(!this.identity['image']){
      this.identity['image'] = "assets/imgs/profileNull.png";
    }
    console.log(this.identity);
  }
  
  
    /*ngDoCheck(){
      this.identity = this.comprobarLogin.getIdentity();
      this.avatarUrl = this.comprobarLogin.getImageAvatar();
      this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl)
    }*/

  actionCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      //la imagen va a estar codificada (base64)
      this.perfilImg = 'data:image/png;base64,' + imageData;
    }, (err) => {
      console.log(err);
    })
  }

  accessGallery() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.perfilImg = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  showMethods() {
    let confirm = this.alertCtrl.create({
      title: 'Choose one method',
      message: "Do you want to choose the photo from your mobile's galery or you prefer take a photo?",
      buttons: [
        {
          text: 'Galery',
          handler: () => {
            this.accessGallery();
          }
        },
        {
          text: 'Take a Photo',
          handler: () => {
            this.actionCamera();
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    if (!this.perfilImg) {
      this.perfilImg = "assets/imgs/profileNull.png";
    }
  }

  newEvent() {
    this.event = true;
  }

  eventSettings: MbscEventcalendarOptions = {
    theme: 'material',
    lang: 'en',
    display: 'inline',
    layout: 'liquid',
    view: {
      calendar: { type: 'month' },
      eventList: { type: 'month' }
    }
  };

  formSettings: MbscFormOptions = {
    theme: 'ios'
  };

  addEvent() {
    this.events.push({
      start: new Date(this.fecha.element.value),
      text: this.eventText || 'New Event',
    });
    this.eventText = '';
    this.eventCal.instance.setVal(new Date(this.fecha.element.value));
    this.event = false;
  };

  closeEvent(){
    this.event = false;
  }

  // goToPeliculas() {
  //   this.navCtrl.push(PeliculasPage, {
  //     data: this.contenedor
  //   });
  // }

  // goToInicio() {
  //   this.navCtrl.push(InicioPage, {
  //     data: this.contenedor
  //   });
  // }

  goToChat() {
    this.navCtrl.push(ChatPage);
  }

  descriptionType() {
    let prompt = this.alertCtrl.create({
      title: 'Description',
      message: "Enter a description of yourself to add it to your profile",
      inputs: [
        {
          name: 'Description:',
          placeholder: 'Description'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.descripcion = true;
            this.contenidoDescripcion = [];
            for (var key in data) {
              this.contenidoDescripcion.push(data[key]);
              //this.nuevoUser = [{description: this.contenidoDescripcion}];
              //this.updateUser(this.nuevoUser);
            }
          }
        }
      ]
    });
    prompt.present();
  }
  nameType() {
    let prompt = this.alertCtrl.create({
      title: 'Name',
      message: "Enter your new name to add it to your profile",
      inputs: [
        {
          name: 'Name:',
          placeholder: 'Name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.nombre = [];
            for (var key in data) {
              this.nombre.push(data[key]);
              this.nuevoUser = [{name: this.nombre}];
              this.updateUser(this.nuevoUser);
            }
          }
        }
      ]
    });
    prompt.present();
  }
  userType() {
    let prompt = this.alertCtrl.create({
      title: 'Username',
      message: "Enter your new username to add it to your profile",
      inputs: [
        {
          name: 'Username:',
          placeholder: 'Username'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.nombreUsuario = [];
            for (var key in data) {
              this.nombreUsuario.push(data[key]);
              this.nuevoUser = [{nickname: this.nombreUsuario}];
              this.updateUser(this.nuevoUser);
            }
          }
        }
      ]
    });
    prompt.present();
  }

  updateUser(user: Array<any>){
    console.log(user[0]);
    this._userProvider.updateUser(user[0],localStorage.getItem('token'), this.comprobarLogin.getIdentity()._id)
    .subscribe(response=>{
        console.log(response);
      },
      err=>{
        console.log(err);
    });
  }
}
