webpackJsonp([10],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatPage = (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userName = ""; //nombre del usuario
        this.message = ""; //mensaje enviado
        this.messagesArray = []; //array que contendrá el nombre de usuario y mensaje que traemos del servidor
        this.getMessages(); //llamamos a esta función siempre que se inicie la vista
    }
    ChatPage.prototype.getMessages = function () {
        var _this = this;
        var messagesRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref().child("mensajes"); //vamos a guardar en esta variable, el 
        //contenido de la carpeta "mensajes" de firebase (nuestro repositorio de datos)
        messagesRef.on("value", function (snap) {
            //"messagesRef", osea que un usuario envie datos nuevos
            var data = snap.val(); //guardamos el valor de "snap" en la variable data
            _this.messagesArray = []; // inicialiamos nuestro array declarado arriba (global para este fichero)
            for (var key in data) {
                _this.messagesArray.push(data[key]); //guarda cada información del contenido de firebase, en una 
                //posición del array. Dicha posición la define el contador del bucle for
            }
            _this.scrollToBottom(); //con esto llamamos a la función para hacer scroll
        });
    };
    ChatPage.prototype.scrollToBottom = function () {
        var contentEnd = document.getElementById("content-end").offsetTop; //sacamos toda la información del 
        //elemento identificado en el HTML con el id "content-end"
        this.content.scrollTo(0, contentEnd, 300); //decimos que nos haga un scroll automático, hasta la 
        //posición del eje Y que tiene nuestro div con id "content-end", y con un retardo de 300 milisegundos
    };
    ChatPage.prototype.sendMessage = function () {
        var messagesRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref().child("mensajes"); //sacamos el contenido de "mensajes",
        //nuestra carpeta en nuestro repositorio firebase, para no pisar su contenido
        messagesRef.push({ mensaje: this.message, nombre: this.userName }); //al contenido obtenido del 
        //repositorio explicado arriba, le añadimos el nombre de usuario y el mensaje que quiere enviar (push 
        //al servidor)
        this.message = ""; //y volvemos a dejar la variable que contenía el mensaje a vacío, para que el 
        //input para volver a escribir un nuevo mensaje aparezca vacío
    };
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("content"),
        __metadata("design:type", Object)
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\chat\chat.html"*/'<!-- Cabecera de la pantalla donde pondremos el título, y el nombre de usuario que se ha conectado -->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Chat Online\n      <ion-input placeholder="¿Quién eres?" [(ngModel)]="userName"></ion-input>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- En el contenido de la página, crearemos un "card" con el nombre de usuario y el mensaje enviado con un \nbucle for -->\n<ion-content #content padding>\n  <ion-card *ngFor="let message of messagesArray">\n    <ion-card-header>\n      <!-- En el header del card ponemos el nombre del usuario -->\n      {{message.nombre}}: <!-- Sacamos el contenido de la carpeta "nombre" (nombre de la carpeta guardada\n        en el repositorio), que se encuentra guardada en la variable "message", declarada en el archivo \n        Typescript de esta vista  -->\n    </ion-card-header>\n    <ion-card-content>\n      <!-- En el contenido del card ponemos el mensaje del usuario -->\n      {{message.mensaje}}\n    </ion-card-content>\n  </ion-card>\n  <!-- Este div sirve para saber en que posición se encuentra el último mensaje enviado -->\n  <div id="content-end"></div>\n</ion-content>\n\n<!-- En el footer ponemos un input donde escribir y un botón que envía lo escrito en el input -->\n<ion-footer>\n  <ion-toolbar>\n    <!-- Lo escrito en el input lo guardamos en la variable "message" usando ngModel (jQuery) -->\n    <ion-input placeholder="Escribir mensaje" [(ngModel)]="message"></ion-input>\n    <ion-buttons end>\n      <button ion-button icon-only clear (click)="sendMessage()">\n        Enviar\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registro_registro__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inicio_inicio__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, navParams, loadingCtrl, fire, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.fire = fire;
        this.alertCtrl = alertCtrl;
    }
    HomePage.prototype.ngOnInit = function () {
        this.formularioUsuario = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
            pass: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/^[a-z0-9_-]{10,18}$/)])
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.goToRegistro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__registro_registro__["a" /* RegistroPage */]);
    };
    HomePage.prototype.alert = function (mensaje) {
        this.alertCtrl.create({
            title: '¡Ha ocurrido un error!',
            subTitle: mensaje,
            buttons: ['OK']
        }).present();
    };
    HomePage.prototype.goToInicio = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.emailAddress.value, this.currentPassword.value)
            .then(function (data) {
            _this.loginLoading();
        })
            .catch(function (error) {
            _this.alert(error.message);
        });
        console.log('would sign in with ', this.emailAddress.value, this.currentPassword.value);
    };
    /**
     * evento que se ejecuta al enviar la informacion, este solo cumple la funcion de mostrar un mensaje de informacion,
     * resetea el formulario y sus validaciones y limpia el parametro datosUsuario para el nuevo ingreso de informacion.
     */
    HomePage.prototype.saveData = function () {
        console.log(this.formularioUsuario.value);
        this.loginLoading();
    };
    HomePage.prototype.loginLoading = function () {
        var _this = this;
        this.ngOnInit();
        var loading = this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 2000,
            dismissOnPageChange: true
        });
        loading.present();
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__inicio_inicio__["a" /* InicioPage */]);
        }, 2000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("emailad"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "emailAddress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "currentPassword", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\home\home.html"*/'<ion-content class="vertical-align-content">\n  <ion-grid>\n  <ion-row>\n    <ion-col col-12>\n      <!-- Creamos una "tarjeta" en la que vendrá diseñado nuestro formulario de inicio de sesión -->\n      <ion-card>\n        <!-- Cabecera -->\n        <ion-card-header>\n          <p class="header">Sign Up</p>\n        </ion-card-header>\n        <!-- Contenido de nuestro formulario -->\n        <ion-card-content>\n          <ion-list>\n            <!-- Creamos nuestra etiqueta para nuestro formulario, asignándole un nombre de grupo (ID) y una llamada \n            a una función de carga mientras comprueba las credenciales (loginLoading)-->\n            <form [formGroup]="formularioUsuario" novalidate>\n              <ion-item>\n                <ion-label floating>Email address</ion-label>\n                <!-- Creamos el input para añadir el usuario, y poniendo un id de formulario para sacar el contenido \n                de éste-->\n                <ion-input type="text" #emailad name="email" formControlName="email"></ion-input>\n              </ion-item>\n              <!-- Control de errores de si está rellenando el campo "Password" y el usuario está vacío indique un error -->\n              <ion-item *ngIf="formularioUsuario.get(\'email\').errors && formularioUsuario.get(\'email\').dirty">\n                <p color="danger" ion-text *ngIf="formularioUsuario.get(\'email\').hasError(\'required\')" class="error">\n                  Email is required.\n                </p>\n                <p color="danger" ion-text *ngIf="formularioUsuario.get(\'email\').hasError(\'pattern\')">\n                  It is not an email\n                </p>\n              </ion-item>\n            \n              <ion-item>\n                <ion-label floating>Password</ion-label>\n                <!-- Creamos el input para la contraseña -->\n                <ion-input type="password" #password name="pass" formControlName="pass"></ion-input>\n              </ion-item>\n              <!-- Control de errores de si está vacío, o tiene menos de 10 caracteres, indique un error -->\n              <ion-item *ngIf="formularioUsuario.get(\'pass\').errors && formularioUsuario.get(\'pass\').dirty">\n                <p color="danger" ion-text *ngIf="formularioUsuario.get(\'pass\').hasError(\'pattern\')" class="error">\n                  It is not a strong password.\n                </p>\n              </ion-item>\n\n\n              <br>\n              <!-- Creamos el botón de inicio de sesión, que permanecerá desactivado, hasta que los campos del formulario\n              estén correctamente rellenos superando el control de errores -->\n              <ion-grid padding-top>\n                <ion-row justify-content-center>\n                  <div class="col-1" align-self-center>\n                    <div>\n                      <button ion-button type="submit" [disabled]="!formularioUsuario.valid" (click)="goToInicio()">Submit</button>\n                    </div>\n                  </div>\n                </ion-row>\n              </ion-grid>\n\n              <ion-grid>\n                <ion-row justify-content-center padding-top>\n                  <div align-self-center>\n                    <div>Or</div>\n                  </div>\n                </ion-row>\n                <ion-row justify-content-center padding-top>\n                  <div align-self-center>\n                    <div>\n                      <!-- <a (click)="goToRegistry()"> -->\n                      <a (click)="goToRegistro()">\n                        <strong>Sign Up Now!</strong>\n                      </a>\n                    </div>\n                  </div>\n                </ion-row>\n              </ion-grid>\n            </form>\n          \n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegistroPage = (function () {
    function RegistroPage(navCtrl, navParams, loadingCtrl, fire) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.fire = fire;
        this.arrayDatos = [];
        this.emailForm = '';
        this.nombreForm = '';
        this.usuarioForm = '';
    }
    RegistroPage.prototype.ngOnInit = function () {
        this.formularioUsuario = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            user: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
            pass: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/^[a-z0-9_-]{10,18}$/)]),
            pass2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, this.equalto('pass')])
        });
    };
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad HomePage');
    // }
    RegistroPage.prototype.gotoHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    RegistroPage.prototype.saveAllData = function () {
        var messagesRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref().child("datosUsuario");
        messagesRef.push({
            email: this.emailForm,
            nombre: this.nombreForm,
            usuario: this.usuarioForm
        });
        this.loginLoading();
    };
    /**
     * evento que se ejecuta al enviar la informacion, este solo cumple la funcion de mostrar un mensaje de informacion,
     * resetea el formulario y sus validaciones y limpia el parametro datosUsuario para el nuevo ingreso de informacion.
     */
    RegistroPage.prototype.saveData = function () {
        var _this = this;
        this.emailForm = this.formularioUsuario.value.email;
        this.nombreForm = this.formularioUsuario.value.name;
        this.usuarioForm = this.formularioUsuario.value.user;
        this.ngOnInit();
        this.fire.auth.createUserWithEmailAndPassword(this.emailAddress.value, this.currentPassword.value)
            .then(function (data) {
            console.log(data);
            _this.saveAllData();
        })
            .catch(function (error) {
            console.log('got an error', error);
        });
    };
    RegistroPage.prototype.equalto = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] == input;
            if (!isValid)
                return { 'equalTo': { isValid: isValid } };
            else
                return null;
        };
    };
    RegistroPage.prototype.loginLoading = function () {
        var _this = this;
        this.ngOnInit();
        var loading = this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 2000,
            dismissOnPageChange: true
        });
        loading.present();
        setTimeout(function () {
            _this.gotoHome();
        }, 2000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("emailad"),
        __metadata("design:type", Object)
    ], RegistroPage.prototype, "emailAddress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("username"),
        __metadata("design:type", Object)
    ], RegistroPage.prototype, "userName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("name"),
        __metadata("design:type", Object)
    ], RegistroPage.prototype, "nombre", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], RegistroPage.prototype, "currentPassword", void 0);
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\registro\registro.html"*/'<ion-content class="vertical-align-content">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <!-- Creamos una "tarjeta" en la que vendrá diseñado nuestro formulario de inicio de sesión -->\n        <ion-card>\n          <!-- Cabecera -->\n          <ion-card-header>\n            <p class="header">Registration</p>\n          </ion-card-header>\n          <!-- Contenido de nuestro formulario -->\n          <ion-card-content>\n            <ion-list>\n              <!-- Creamos nuestra etiqueta para nuestro formulario, asignándole un nombre de grupo (ID) y una llamada \n            a una función de carga mientras comprueba las credenciales (loginLoading)-->\n              <form [formGroup]="formularioUsuario" (ngSubmit)="loginLoading()" novalidate>\n                <ion-item>\n                  <ion-label floating>Name</ion-label>\n                  <ion-input formControlName="name" #name type="text" #name></ion-input>\n                </ion-item>\n                <ion-item *ngIf="formularioUsuario.get(\'name\').errors && formularioUsuario.get(\'name\').dirty">\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'name\').hasError(\'required\')">Your name is required</p>\n                </ion-item>\n                <ion-item>\n                  <ion-label floating>Username</ion-label>\n                  <!-- Creamos el input para añadir el usuario, y poniendo un id de formulario para sacar el contenido \n                            de éste-->\n                  <ion-input type="text" #userame formControlName="user"></ion-input>\n                </ion-item>\n                <!-- Control de errores de si está rellenando el campo "Password" y el usuario está vacío indique un error -->\n                <ion-item *ngIf="formularioUsuario.get(\'user\').errors && formularioUsuario.get(\'user\').dirty">\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'user\').hasError(\'required\')" class="error">\n                    Username is required.\n                  </p>\n                </ion-item>\n                <ion-item>\n                  <ion-label floating>Email address</ion-label>\n                  <!-- Creamos el input para añadir el usuario, y poniendo un id de formulario para sacar el contenido \n                de éste-->\n                  <ion-input type="text" #emailad formControlName="email"></ion-input>\n                </ion-item>\n                <!-- Control de errores de si está rellenando el campo "Password" y el usuario está vacío indique un error -->\n                <ion-item *ngIf="formularioUsuario.get(\'email\').errors && formularioUsuario.get(\'email\').dirty">\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'email\').hasError(\'required\')" class="error">\n                    Email is required.\n                  </p>\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'email\').hasError(\'pattern\')">\n                    It is not an email\n                  </p>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label floating>Password</ion-label>\n                  <!-- Creamos el input para la contraseña -->\n                  <ion-input type="password" name="pass" formControlName="pass"></ion-input>\n                </ion-item>\n                <!-- Control de errores de si está vacío, o tiene menos de 10 caracteres, indique un error -->\n                <ion-item *ngIf="formularioUsuario.get(\'pass\').errors && formularioUsuario.get(\'pass\').dirty">\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'pass\').hasError(\'pattern\')" class="error">\n                    It is not a strong password.\n                  </p>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label floating>Confirm password</ion-label>\n                  <!-- Creamos el input para la contraseña -->\n                  <ion-input type="password" #password formControlName="pass2"></ion-input>\n                </ion-item>\n                <!-- Control de errores de si está vacío, o tiene menos de 10 caracteres, indique un error -->\n                <ion-item *ngIf="(formularioUsuario.get(\'pass2\').hasError(\'equalTo\') || formularioUsuario.get(\'pass2\').hasError(\'required\')) && formularioUsuario.get(\'pass2\').touched">\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'pass2\').hasError(\'required\') && formularioUsuario.get(\'pass2\').touched" class="error">\n                    It is not a strong password.\n                  </p>\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'pass2\').hasError(\'equalTo\') && formularioUsuario.get(\'pass2\').touched" class="error">\n                    Passwords do not match\n                  </p>\n                </ion-item>\n\n                <br>\n                <!-- Creamos el botón de registro, que permanecerá desactivado, hasta que los campos del formulario\n              estén correctamente rellenos superando el control de errores -->\n                <ion-grid padding-top>\n                  <ion-row justify-content-center>\n                    <div class="col-1" align-self-center>\n                      <div>\n                        <button ion-button type="submit" [disabled]="!formularioUsuario.valid" (click)="saveData()">Sign Up</button>\n                      </div>\n                    </div>\n                  </ion-row>\n                </ion-grid>\n\n                <ion-grid>\n                  <ion-row justify-content-center padding-top>\n                    <div align-self-center>\n                      <div>Or</div>\n                    </div>\n                  </ion-row>\n                  <ion-row justify-content-center padding-top>\n                    <div align-self-center>\n                      <div>\n                        <!-- <a (click)="goToRegistry()"> -->\n                        <a (click)="gotoHome()">\n                          <strong>Go to Login Page!</strong>\n                        </a>\n                      </div>\n                    </div>\n                  </ion-row>\n                </ion-grid>\n              </form>\n\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\registro\registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_perfil__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_inicio__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__peliculas_peliculas__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InfoPage = (function () {
    function InfoPage(navCtrl, navParams, streamingMedia) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.streamingMedia = streamingMedia;
        this.portada = navParams.data['foto'];
        this.titulo = navParams.data['nombre'];
        this.usuario = 'Gorguess';
    }
    InfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPage');
    };
    InfoPage.prototype.goToPerfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__perfil_perfil__["a" /* PerfilPage */]);
    };
    InfoPage.prototype.goToInicio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inicio_inicio__["a" /* InicioPage */]);
    };
    InfoPage.prototype.goToPeliculas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__peliculas_peliculas__["a" /* PeliculasPage */]);
    };
    InfoPage.prototype.gotoreproductor = function () {
        var options = {
            successCallback: function () { console.log('Video played'); },
            errorCallback: function (e) { console.log('Error streaming'); },
            orientation: 'landscape'
        };
        this.streamingMedia.playVideo('https://www.youtube.com/watch?v=U6VMFwS2mPk', options);
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\info\info.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n\n    <ion-grid *ngIf="!isSearchbarOpened">\n      <ion-row>\n        <ion-col col-auto>\n          <ion-buttons>\n            <button ion-button icon-only (click)="goToInicio()">\n              Home\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n        <ion-col col-auto (click)="goToPeliculas()">\n          <ion-buttons>\n            <button ion-button icon-only>\n              Films\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n        <ion-col col-auto>\n          <ion-buttons>\n            <button ion-button icon-only (click)="goToSeries()">\n              Series\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n        <ion-col col-auto>\n          <ion-buttons>\n            <button ion-button icon-only (click)="goToPerfil()">\n              {{ usuario }}\n              <ion-icon name="md-contact"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n        <ion-col col-1>\n          <ion-buttons>\n            <button ion-button icon-only (click)="isSearchbarOpened=true">\n              <ion-icon name="search"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n    <ion-searchbar *ngIf="isSearchbarOpened" showCancelButton="true" (ionCancel)="isSearchbarOpened=false" (ionInput)="getItems($event)">\n    </ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-content class="backgroundCard">\n      <ion-row>\n        <ion-col col-8 offset-2>\n          <img [src]="portada">\n        <ion-col col-6 offset-3 style="text-align: center;">\n          <h1>{{ titulo }}</h1>\n        </ion-col>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <button (click)="gotoreproductor()">\n    Hello\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\info\info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__["a" /* StreamingMedia */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 174;

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-event/add-event.module": [
		705,
		9
	],
	"../pages/chat/chat.module": [
		706,
		8
	],
	"../pages/edit-event/edit-event.module": [
		707,
		7
	],
	"../pages/home/home.module": [
		708,
		6
	],
	"../pages/info/info.module": [
		709,
		5
	],
	"../pages/inicio/inicio.module": [
		710,
		4
	],
	"../pages/menu/menu.module": [
		712,
		3
	],
	"../pages/peliculas/peliculas.module": [
		711,
		2
	],
	"../pages/perfil/perfil.module": [
		714,
		1
	],
	"../pages/registro/registro.module": [
		713,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 219;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddEventPage = (function () {
    function AddEventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddEventPage');
    };
    AddEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-event',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\add-event\add-event.html"*/'<!--\n  Generated template for the AddEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>add-event</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\add-event\add-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AddEventPage);
    return AddEventPage;
}());

//# sourceMappingURL=add-event.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EditEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditEventPage = (function () {
    function EditEventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditEventPage');
    };
    EditEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-event',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\edit-event\edit-event.html"*/'<!--\n  Generated template for the EditEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>edit-event</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\edit-event\edit-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EditEventPage);
    return EditEventPage;
}());

//# sourceMappingURL=edit-event.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__peliculas_peliculas__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuPage = (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__["a" /* InicioPage */];
        if (this.destino == "Peliculas") {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__["a" /* InicioPage */];
            this.pages = [
                { title: 'Películas', component: __WEBPACK_IMPORTED_MODULE_3__peliculas_peliculas__["a" /* PeliculasPage */] }
                // { title: 'Series', component: GeneralPage },
                // { title: 'Perfil', component: ClimaPage }
                // { title: 'Monuments', component: MonumentsPage },
                // { title: 'Festivities', component: FestPage },
                // { title: 'Transport', component: TransportPage },
                // { title: 'Typical food', component: FoodPage }
            ];
        }
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\menu\menu.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content right>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(368);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mobiscroll_angular__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_streaming_media__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_registro_registro__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_inicio_inicio__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_menu_menu__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_peliculas_peliculas__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_perfil_perfil__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_chat_chat__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_add_event_add_event__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_edit_event_edit_event__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_info_info__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { CalendarModule } from 'ionic3-calendar';














var firebaseAuth = {
    apiKey: "AIzaSyDk2H5Yzy8mp8Q6OOwDQ8gptAFYYbP7x5Y",
    authDomain: "proyecto-final-cfc6c.firebaseapp.com",
    databaseURL: "https://proyecto-final-cfc6c.firebaseio.com",
    projectId: "proyecto-final-cfc6c",
    storageBucket: "proyecto-final-cfc6c.appspot.com",
    messagingSenderId: "878191344149"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_peliculas_peliculas__["a" /* PeliculasPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_add_event_add_event__["a" /* AddEventPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_edit_event_edit_event__["a" /* EditEventPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_info_info__["a" /* InfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__mobiscroll_angular__["a" /* MbscModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-event/add-event.module#AddEventPageModule', name: 'AddEventPage', segment: 'add-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-event/edit-event.module#EditEventPageModule', name: 'EditEventPage', segment: 'edit-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/peliculas/peliculas.module#PeliculasPageModule', name: 'PeliculasPage', segment: 'peliculas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_peliculas_peliculas__["a" /* PeliculasPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_add_event_add_event__["a" /* AddEventPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_edit_event_edit_event__["a" /* EditEventPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_info_info__["a" /* InfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_streaming_media__["a" /* StreamingMedia */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_perfil__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__peliculas_peliculas__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InicioPage = (function () {
    function InicioPage(navCtrl, modalCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.isSearchbarOpened = false;
        this.peli1 = "assets/imgs/peli1.jpg";
        this.peli2 = "assets/imgs/peli2.jpg";
        this.peli3 = "assets/imgs/peli3.jpg";
        this.serie1 = "assets/imgs/serie1.jpg";
        this.serie2 = "assets/imgs/serie2.jpg";
        this.titulo1 = "Deadpool";
        this.titulo2 = "Avengers 2";
        this.titulo3 = "Hasta el último Hombre";
        this.titulo4 = "Breaking Bad";
        this.titulo5 = "Prison Break";
        this.usuario = "Gorguess";
    }
    InicioPage.prototype.listado = function () {
        this.items = [
            'Amsterdam',
            'Bogota',
            'Buenos Aires',
            'Cairo',
            'Dhaka',
            'Edinburgh',
            'Geneva',
            'Genoa',
            'Glasglow',
            'Hanoi',
            'Hong Kong',
            'Islamabad',
            'Istanbul',
            'Jakarta',
            'Kiel',
            'Kyoto',
            'Le Havre',
            'Lebanon',
            'Lhasa',
            'Lima',
            'London',
            'Los Angeles',
            'Madrid',
            'Manila',
            'New York',
            'Olympia',
            'Oslo',
            'Panama City',
            'Peking',
            'Philadelphia',
            'San Francisco',
            'Seoul',
            'Taipeh',
            'Tel Aviv',
            'Tokio',
            'Uelzen',
            'Washington'
        ];
    };
    InicioPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.listado();
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            return;
        }
    };
    InicioPage.prototype.goToPerfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__perfil_perfil__["a" /* PerfilPage */]);
    };
    InicioPage.prototype.goToPeliculas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__peliculas_peliculas__["a" /* PeliculasPage */]);
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\inicio\inicio.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n\n\n    <ion-grid *ngIf="!isSearchbarOpened">\n\n      <ion-row>\n\n        <ion-col col-auto>\n\n          <ion-buttons>\n\n            <button ion-button icon-only>\n\n              Home\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n\n\n        <ion-col col-auto>\n\n          <ion-buttons>\n\n            <button ion-button icon-only (click)="goToPeliculas()">\n\n              Films\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n\n\n        <ion-col col-auto>\n\n          <ion-buttons>\n\n            <button ion-button icon-only (click)="goToSeries()">\n\n              Series\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n\n\n        <ion-col col-auto>\n\n          <ion-buttons>\n\n            <button ion-button icon-only (click)="goToPerfil()">\n\n              {{ usuario }}\n\n              <ion-icon name="md-contact"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n\n\n        <ion-col col-1>\n\n          <ion-buttons>\n\n            <button ion-button icon-only (click)="isSearchbarOpened=true">\n\n              <ion-icon name="search"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-searchbar *ngIf="isSearchbarOpened" showCancelButton="true" (ionCancel)="isSearchbarOpened=false" (ionInput)="getItems($event)">\n\n    </ion-searchbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list *ngIf="isSearchbarOpened">\n\n    <button ion-item *ngFor="let item of items" (click)="showDetail(item)">\n\n      {{ item }}\n\n    </button>\n\n  </ion-list>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <h1 class="titulo">\n\n               Welcome, {{ usuario }}!\n\n            </h1>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <h3 class="titulo">Movies seen:</h3>\n\n            <a href="" class="alinearDerecha">see all</a>\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-4>\n\n                  <ion-thumbnail item-start>\n\n                    <img [src]="peli1">\n\n                  </ion-thumbnail>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                  <ion-thumbnail item-start>\n\n                    <img [src]="peli2">\n\n                  </ion-thumbnail>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                  <ion-thumbnail item-start>\n\n                    <img [src]="peli3">\n\n                  </ion-thumbnail>\n\n                </ion-col>\n\n              </ion-row>\n\n\n\n              <ion-row>\n\n                <ion-col col-4>\n\n                  <h2 class="center">{{ titulo1 }}</h2>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                  <h2 class="center">{{ titulo2 }}</h2>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                  <h2 class="center">{{ titulo3 }}</h2>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n\n\n            <h3 class="titulo2">Series seen:</h3>\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-4>\n\n                  <ion-thumbnail item-start class="slide-image">\n\n                    <img [src]="serie1">\n\n                  </ion-thumbnail>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                  <ion-thumbnail item-start>\n\n                    <img [src]="serie2" class="slide-image">\n\n                  </ion-thumbnail>\n\n                </ion-col>\n\n              </ion-row>\n\n            \n\n              <ion-row>\n\n                <ion-col col-4>\n\n                  <h2 class="center">{{ titulo4 }}</h2>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                  <h2 class="center">{{ titulo5 }}</h2>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\inicio\inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeliculasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_perfil__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__info_info__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PeliculasPage = (function () {
    function PeliculasPage(navCtrl, loadingCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.structure = { lower: 1990, upper: 2018 };
        this.filter = false;
        this.genre = 'Genre: All';
        this.videoLanguage = 'Video Language: All';
        this.subtitleLanguage = 'Subtitle Language: All';
        this.isSearchbarOpened = false;
        this.usuario = 'Gorguess';
        this.peli1 = "assets/imgs/peli1.jpg";
        this.peli2 = "assets/imgs/peli2.jpg";
        this.titulo1 = 'Deadpool';
        this.titulo2 = 'Avengers 2';
        this.iconoIOS1 = 'ios-arrow-dropdown';
        this.iconoAndroid1 = 'md-arrow-dropdown';
        this.iconoIOS = 'ios-arrow-dropdown';
        this.iconoAndroid = 'md-arrow-dropdown';
    }
    PeliculasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PeliculasPage');
    };
    PeliculasPage.prototype.goToPerfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__perfil_perfil__["a" /* PerfilPage */]);
    };
    PeliculasPage.prototype.goToInicio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inicio_inicio__["a" /* InicioPage */]);
    };
    PeliculasPage.prototype.goToInfo = function (fotoPeli, titulo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__info_info__["a" /* InfoPage */], {
            foto: fotoPeli,
            nombre: titulo
        });
    };
    PeliculasPage.prototype.filterType = function () {
        this.filter = true;
    };
    PeliculasPage.prototype.filterType2 = function () {
        this.filter = false;
    };
    PeliculasPage.prototype.loginLoading = function () {
        this.filter = false;
        var loading = this.loadingCtrl.create({
            content: 'Years between ' + this.structure.lower + ' and ' + this.structure.upper +
                '<br>' + this.genre + '<br>' + this.videoLanguage + '<br>' + this.subtitleLanguage,
            duration: 5000,
            dismissOnPageChange: true
        });
        loading.present();
        setTimeout(function () {
        }, 2000);
    };
    PeliculasPage.prototype.cambiarIconoSeen = function (fab) {
        this.iconoIOS = 'ios-eye-off';
        this.iconoAndroid = 'md-eye-off';
        fab.close();
        this.mensaje = 'This film has been added to "Seen Group"';
        this.presentToast(this.mensaje);
    };
    PeliculasPage.prototype.cambiarIconoLike = function (fab) {
        this.iconoIOS = 'ios-heart';
        this.iconoAndroid = 'md-heart';
        fab.close();
        this.mensaje = 'This film has been added to "Favourite Group"';
        this.presentToast(this.mensaje);
    };
    PeliculasPage.prototype.cambiarIconoRemove = function (fab) {
        this.iconoIOS = 'ios-arrow-dropdown';
        this.iconoAndroid = 'md-arrow-dropdown';
        fab.close();
        this.mensaje = 'This film has been removed of his old group';
        this.presentToast(this.mensaje);
    };
    PeliculasPage.prototype.presentToast = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 4000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PeliculasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-peliculas',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\peliculas\peliculas.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n\n    <ion-grid *ngIf="!isSearchbarOpened">\n      <ion-row>\n        <ion-col col-auto>\n          <ion-buttons>\n            <button ion-button icon-only (click)="goToInicio()">\n              Home\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n        <ion-col col-auto>\n          <ion-buttons>\n            <button ion-button icon-only>\n              Films\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n        <ion-col col-auto>\n          <ion-buttons>\n            <button ion-button icon-only (click)="goToSeries()">\n              Series\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n        <ion-col col-auto>\n          <ion-buttons>\n            <button ion-button icon-only (click)="goToPerfil()">\n              {{ usuario }}\n              <ion-icon name="md-contact"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n        <ion-col col-1>\n          <ion-buttons>\n            <button ion-button icon-only (click)="isSearchbarOpened=true">\n              <ion-icon name="search"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n    <ion-searchbar *ngIf="isSearchbarOpened" showCancelButton="true" (ionCancel)="isSearchbarOpened=false" (ionInput)="getItems($event)">\n    </ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-row>\n      <ion-col col-12 class="center">\n        <ion-buttons padding-bottom>\n          <button ion-button icon-only outline *ngIf="!filter" (click)="filterType()" col-5>\n            Show Filters\n          </button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n\n    <ion-card *ngIf="filter">\n\n      <ion-item>\n        <ion-label>Year: </ion-label>\n        <ion-range dualKnobs="true" pin="true" min="1900" max="2020" step="5" snaps="true" [(ngModel)]="structure">\n          <ion-icon range-left small ios="ios-time" md="md-time"></ion-icon>\n          <ion-icon range-right ios="ios-time" md="md-time"></ion-icon>\n        </ion-range>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label>Films Genre: </ion-label>\n        <ion-select [(ngModel)]="genre" interface="popover">\n          <ion-option value="Genre: All" selected="true">All</ion-option>\n          <ion-option value="Genre: Action and adventure">Action and adventure</ion-option>\n          <ion-option value="Genre: Cartoon">Cartoon</ion-option>\n          <ion-option value="Genre: Comedy">Comedy</ion-option>\n          <ion-option value="Genre: Crime">Crime</ion-option>\n          <ion-option value="Genre: Documentary film">Documentary film</ion-option>\n          <ion-option value="Genre: Drama">Drama</ion-option>\n          <ion-option value="Genre: Fantasy">Fantasy</ion-option>\n          <ion-option value="Genre: Mistery">Mistery</ion-option>\n          <ion-option value="Genre: Science fiction">Science fiction</ion-option>\n          <ion-option value="Genre: Sports">Sports</ion-option>\n          <ion-option value="Genre: Terror">Terror</ion-option>\n          <ion-option value="Genre: Thriller">Thriller</ion-option>\n        </ion-select>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label>Video Language: </ion-label>\n        <ion-select [(ngModel)]="videoLanguage" interface="popover">\n          <ion-option value="Video Language: All" selected="true">All</ion-option>\n          <ion-option value="Video Language: English">English</ion-option>\n          <ion-option value="Video Language: French">French</ion-option>\n          <ion-option value="Video Language: German">German</ion-option>\n          <ion-option value="Video Language: Greek">Greek</ion-option>\n          <ion-option value="Video Language: Italian">Italian</ion-option>\n          <ion-option value="Video Language: Portuguese">Portuguese</ion-option>\n          <ion-option value="Video Language: Russian">Russian</ion-option>\n          <ion-option value="Video Language: Spanish">Spanish</ion-option>\n          <ion-option value="Video Language: Others">Others</ion-option>\n        </ion-select>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label>Subtitle Language: </ion-label>\n        <ion-select [(ngModel)]="subtitleLanguage" interface="popover">\n          <ion-option value="Subtitle Language: All" selected="true">All</ion-option>\n          <ion-option value="Subtitle Language: English">English</ion-option>\n          <ion-option value="Subtitle Language: French">French</ion-option>\n          <ion-option value="Subtitle Language: German">German</ion-option>\n          <ion-option value="Subtitle Language: Greek">Greek</ion-option>\n          <ion-option value="Subtitle Language: Italian">Italian</ion-option>\n          <ion-option value="Subtitle Language: Portuguese">Portuguese</ion-option>\n          <ion-option value="Subtitle Language: Russian">Russian</ion-option>\n          <ion-option value="Subtitle Language: Spanish">Spanish</ion-option>\n          <ion-option value="Subtitle Language: Others">Others</ion-option>\n        </ion-select>\n      </ion-item>\n      \n      <ion-row>\n        <ion-col col-12 class="center">\n          <ion-buttons>\n            <button ion-button icon-only outline class="center" *ngIf="filter" (click)="loginLoading()" col-5>\n              Accept\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12 class="center">\n          <ion-buttons>\n            <button ion-button icon-only outline class="center" *ngIf="filter" (click)="filterType2()" col-5>\n              Hide Filters\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n\n    </ion-card>\n\n    <ion-row>\n      <ion-col col-6 class="center">\n        <ion-thumbnail item-start col-12>\n          <button (click)="goToInfo(peli1, titulo1)" class="fotoPelicula" no-padding>\n            <img [src]="peli1">\n          </button>\n          <h5 class="center">\n            {{ titulo1 }}\n            <ion-fab top right edge col-4 #fab>\n              <button ion-fab mini class="background">\n                <ion-icon [ios]="iconoIOS1" [md]="iconoAndroid1"></ion-icon>\n              </button>\n              <ion-fab-list>\n                <button ion-fab>\n                  <ion-icon ios="ios-eye-off" md="md-eye-off" (click)="cambiarIconoSeen(fab)"></ion-icon>\n                </button>\n                <button ion-fab>\n                  <ion-icon ios="ios-heart" md="md-heart" (click)="cambiarIconoLike(fab)"></ion-icon>\n                </button>\n              </ion-fab-list>\n            </ion-fab>\n          </h5>\n        </ion-thumbnail>\n      </ion-col>\n      <ion-col col-6 class="center">\n        <ion-thumbnail item-start col-12>\n          <button (click)="goToInfo(peli2, titulo2)" class="fotoPelicula" no-padding>\n            <img [src]="peli2">\n          </button>\n          <h5 class="center">\n            {{ titulo2 }}\n            <ion-fab top right edge col-4 #fab>\n              <button ion-fab mini class="background">\n                <ion-icon [ios]="iconoIOS" [md]="iconoAndroid"></ion-icon>\n              </button>\n              <ion-fab-list>\n                <button ion-fab>\n                  <ion-icon ios="ios-eye-off" md="md-eye-off" (click)="cambiarIconoSeen(fab)"></ion-icon>\n                </button>\n                <button ion-fab>\n                  <ion-icon ios="ios-heart" md="md-heart" (click)="cambiarIconoLike(fab)"></ion-icon>\n                </button>\n                <button ion-fab>\n                  <ion-icon ios="ios-trash" md="md-trash" (click)="cambiarIconoRemove(fab)"></ion-icon>\n                </button>\n              </ion-fab-list>\n            </ion-fab>\n          </h5>\n        </ion-thumbnail>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\peliculas\peliculas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], PeliculasPage);
    return PeliculasPage;
}());

//# sourceMappingURL=peliculas.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__peliculas_peliculas__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_inicio__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var now = new Date();
var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.descripcion = false;
        this.contenidoDescripcion = [];
        this.isSearchbarOpened = false;
        this.events = [{
                d: new Date(now.getFullYear(), now.getMonth(), 7, 14, 0),
                text: 'New Chapter of Prison Break',
                color: '#6e7f29'
            }];
        this.eventSettings = {
            theme: 'material',
            lang: 'en',
            display: 'inline',
            layout: 'liquid',
            view: {
                calendar: { type: 'month' },
                eventList: { type: 'month' }
            }
        };
        this.nombre = "Jorge Sánchez";
        this.usuario = "Gorguess";
        this.perfilImg = "assets/imgs/profile.png";
    }
    PerfilPage.prototype.goToPeliculas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__peliculas_peliculas__["a" /* PeliculasPage */]);
    };
    PerfilPage.prototype.goToInicio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inicio_inicio__["a" /* InicioPage */]);
    };
    PerfilPage.prototype.listado = function () {
        this.items = [
            'Amsterdam',
            'Bogota',
            'Buenos Aires',
            'Cairo',
            'Dhaka',
            'Edinburgh',
            'Geneva',
            'Genoa',
            'Glasglow',
            'Hanoi',
            'Hong Kong',
            'Islamabad',
            'Istanbul',
            'Jakarta',
            'Kiel',
            'Kyoto',
            'Le Havre',
            'Lebanon',
            'Lhasa',
            'Lima',
            'London',
            'Los Angeles',
            'Madrid',
            'Manila',
            'New York',
            'Olympia',
            'Oslo',
            'Panama City',
            'Peking',
            'Philadelphia',
            'San Francisco',
            'Seoul',
            'Taipeh',
            'Tel Aviv',
            'Tokio',
            'Uelzen',
            'Washington'
        ];
    };
    PerfilPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.listado();
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            return;
        }
    };
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage.prototype.goToChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */]);
    };
    PerfilPage.prototype.descriptionType = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.descripcion = true;
                        _this.contenidoDescripcion = [];
                        for (var key in data) {
                            _this.contenidoDescripcion.push(data[key]);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    PerfilPage.prototype.nameType = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.nombre = [];
                        for (var key in data) {
                            _this.nombre.push(data[key]);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    PerfilPage.prototype.userType = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.usuario = [];
                        for (var key in data) {
                            _this.usuario.push(data[key]);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\perfil\perfil.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n\n    <ion-grid *ngIf="!isSearchbarOpened">\n      <ion-row>\n        <ion-col col-auto>\n          <ion-buttons>\n            <button ion-button icon-only (click)="goToInicio()">\n              Home\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n        <ion-col col-auto>\n          <ion-buttons>\n            <button ion-button icon-only (click)="goToPeliculas()">\n              Films\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n        <ion-col col-auto>\n          <ion-buttons>\n            <button ion-button icon-only (click)="goToSeries()">\n              Series\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n        <ion-col col-auto>\n          <ion-buttons>\n            <button ion-button icon-only>\n              {{ usuario }}\n              <ion-icon name="md-contact"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n        <ion-col col-1>\n          <ion-buttons>\n            <button ion-button icon-only (click)="isSearchbarOpened=true">\n              <ion-icon name="search"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n    <ion-searchbar *ngIf="isSearchbarOpened" showCancelButton="true" (ionCancel)="isSearchbarOpened=false" (ionInput)="getItems($event)">\n    </ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list *ngIf="isSearchbarOpened">\n    <button ion-item *ngFor="let item of items" (click)="showDetail(item)">\n      {{ item }}\n    </button>\n  </ion-list>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n            <ion-thumbnail item-start>\n              <img [src]="perfilImg">\n            </ion-thumbnail>\n          </ion-col>\n        </ion-row>\n        \n        <ion-row>\n          <ion-col col-12>\n            <ion-grid class="center">\n              <ion-row>\n                <ion-col col-auto>\n                  <h2 class="bold">Name: </h2>\n                </ion-col>\n                <ion-col col-auto>\n                  <h2>{{ nombre }}</h2>\n                </ion-col>\n                <ion-col col-auto>\n                  <a (click)="nameType()">\n                    <ion-icon ios="ios-create" md="md-create"></ion-icon>\n                  </a>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12>\n            <ion-grid class="center">\n              <ion-row>\n                <ion-col col-auto>\n                  <h2 class="bold">Username: </h2>\n                </ion-col>\n                <ion-col col-auto>\n                  <h2>{{ usuario }}</h2>\n                </ion-col>\n                <ion-col col-auto>\n                  <a (click)="userType()">\n                    <ion-icon ios="ios-create" md="md-create"></ion-icon>\n                  </a>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12 class="center">\n            <ion-buttons>\n              <button ion-button icon-only clear class="center" *ngIf="!descripcion" (click)="descriptionType()">\n                Type your description\n              </button>\n            </ion-buttons>\n          </ion-col>\n        </ion-row>\n\n        <ion-row  *ngIf="descripcion">\n          <ion-col col-12>\n            <ion-grid class="center">\n              <ion-row>\n                <ion-col col-auto>\n                  <h2 class="center">{{ contenidoDescripcion }}</h2>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <mbsc-eventcalendar [data]="events" [options]="eventSettings"></mbsc-eventcalendar>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_peliculas_peliculas__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var config = {
    apiKey: "AIzaSyDk2H5Yzy8mp8Q6OOwDQ8gptAFYYbP7x5Y",
    authDomain: "proyecto-final-cfc6c.firebaseapp.com",
    databaseURL: "https://proyecto-final-cfc6c.firebaseio.com",
    projectId: "proyecto-final-cfc6c",
    storageBucket: "proyecto-final-cfc6c.appspot.com",
    messagingSenderId: "878191344149"
};
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_peliculas_peliculas__["a" /* PeliculasPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.initializeApp(config);
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\PROYECTO FINAL\Proyecto\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[363]);
//# sourceMappingURL=main.js.map