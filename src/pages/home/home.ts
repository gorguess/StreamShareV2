import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { RegistroPage } from '../registro/registro';
import { InicioPage } from '../inicio/inicio';
import { UserLogin } from '../../models/userLogin';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [LoginProvider] 
})
export class HomePage {

  trustedUrl: SafeUrl;
  avatarUrl: any;
  errorDetails: string;
  status: string;
  token;
  formularioUsuario: FormGroup;
  mensaje: any;
  userLogin: UserLogin;

  @ViewChild("emailad") emailAddress;
  @ViewChild("password") currentPassword;
  login: Array <any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private comprobarLogin: LoginProvider,
    private _sanitizer: DomSanitizer
  ) {
    this.userLogin = new UserLogin('', '', '', '');
  }

  ngOnInit() {

    this.formularioUsuario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      pass: new FormControl('', [Validators.pattern(/^[a-z0-9_-]{4,18}$/)])
    });

    this.avatarUrl = this.comprobarLogin.getImageAvatar();
    this.trustedUrl = this._sanitizer.bypassSecurityTrustUrl(this.avatarUrl)
  }

  goToRegistro() {
    this.navCtrl.push(RegistroPage);
  }

  alert(){
    this.alertCtrl.create({
      title: 'There was a problem!',
      subTitle: 'The email/username or password are not correct',
      buttons: ['OK']
    }).present();
  }

  goToInicio() {
    this.login = [{ emailNick: this.emailAddress.value, password: this.currentPassword.value, gettoken: null}];
    this.comprobarLogin.loginUsers(this.login).subscribe(datos => {
      var contenedor = datos["user"];
      //Modificacion LOGIN Persistencia del usuario y recogida del token Parte I
      localStorage.setItem('user', JSON.stringify(contenedor));
      this.getToken(contenedor, this.login);
    }, err => {
      this.alert();
    });
  }

  //Recogemos las estadisticas en cuanto a seguimientos del usuario y la guardamos en LocalStorage para su uso
  getCounter(contenedor) {
    this.comprobarLogin.getCounter(localStorage.getItem('token')).subscribe(response => {
      localStorage.setItem('stats', JSON.stringify(response));
      this.status = 'Success';
      this.errorDetails = 'Login successful, enjoy!!';
      
      this.comprobarLogin.getAvatar(this.token, contenedor.image).subscribe(response => {
        console.log(response);
        var file = new Blob([response], {type: 'image/jpeg'});
        var fileURL = URL.createObjectURL(file);
        localStorage.setItem('avatar', fileURL);
        this.loginLoading(contenedor);
      },
      err => {
          console.log(err);
      });
    },
    error => {
        console.log(error);
    });
}

//Generamos el token del usuario para que pueda ser usado.
getToken(contenedor, login) {
    login[0].gettoken = true;
    console.log(login);
    this.comprobarLogin.loginUsers(this.login).subscribe(response => {
        console.log(response);
        this.token = response["token"];

        if (this.token.length <= 0) {
            this.status = 'error';
            this.errorDetails = 'Error al generar el token';

        } else {
            localStorage.setItem('token', this.token);
            this.getCounter(contenedor);
        }
    },
    error => {
            let errorMessage = <any>error;

            if (errorMessage != null) {
                this.status = 'Error';
                this.errorDetails = 'User/email or password incorrect, try again!';
            }
    });
}

  loginLoading(contenido) {
    this.ngOnInit();
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 2000,
      dismissOnPageChange: true
    });

    loading.present();
    setTimeout(() => {
      this.navCtrl.push(InicioPage, {
        // birthday: contenedor["birthdate"],
        // image: contenedor["image"],
        // name: contenedor["name"],
        // nickname: contenedor["nickname"],
        // role: contenedor["role"],
        // surname: contenedor["surname"],
        data: contenido
      });
    },
      2000);
  }

}
