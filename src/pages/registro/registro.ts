import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { OnInit } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage implements OnInit {

  formularioUsuario: FormGroup;
  @ViewChild("name") nombre;
  @ViewChild("surname") apellidos;
  @ViewChild("nickname") username;
  @ViewChild("birthday") birthday;
  @ViewChild("emailad") emailAddress;
  @ViewChild("password") currentPassword;
  registro: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public comprobarLogin: LoginProvider
  ) {
  }

  ngOnInit() {

    this.formularioUsuario = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      nickname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      pass: new FormControl('', [Validators.pattern(/^[a-z0-9_-]{5,18}$/)]),
      pass2: new FormControl('', [Validators.required, this.equalto('pass')])
    });
  }

  gotoHome() {
    this.navCtrl.push(HomePage);
  }

  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

      let input = control.value;

      let isValid = control.root.value[field_name] == input
      if (!isValid)
        return { 'equalTo': { isValid } }
      else
        return null;
    };
  }

  alert() {
    this.alertCtrl.create({
      title: 'There was a problem!',
      subTitle: 'This user alredy exists',
      buttons: ['OK']
    }).present();
  }

  registerUsers() {
    this.registro = [{ 
      name: this.nombre.value, 
      surname: this.apellidos.value, 
      nickname: this.username.value, 
      email: this.emailAddress.value, 
      birthdate: this.birthday.value["day"] +
       '/' + this.birthday.value["month"] + 
       '/' + this.birthday.value["year"], 
      password: this.currentPassword.value
    }];
    this.comprobarLogin.registerUsers(this.registro).subscribe((datos) => {
      console.log('Datos: ', datos);
      if (datos['message'] == 'Este usuario ya existe') {
        this.alert();
      } else {
        this.loginLoading();
      }
    }, (err) => {
      console.log(err["message"]);
    });
  }

  loginLoading() {
    this.ngOnInit();
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 2000,
      dismissOnPageChange: true
    });

    loading.present();
    setTimeout(() => {
      this.gotoHome();
    },
      2000);
  }

}
