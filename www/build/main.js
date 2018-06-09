webpackJsonp([14],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movie; });
var Movie = (function () {
    function Movie(_id, title, description, genre, category, year, creator, duration, poster, URI, uploadat, userUp) {
    }
    return Movie;
}());

//# sourceMappingURL=movie.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(229);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("content"),
        __metadata("design:type", Object)
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\chat\chat.html"*/'<!-- Cabecera de la pantalla donde pondremos el título, y el nombre de usuario que se ha conectado -->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Chat Online\n\n      <ion-input placeholder="¿Quién eres?" [(ngModel)]="userName"></ion-input>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- En el contenido de la página, crearemos un "card" con el nombre de usuario y el mensaje enviado con un \n\nbucle for -->\n\n<ion-content #content padding>\n\n  <ion-card *ngFor="let message of messagesArray">\n\n    <ion-card-header>\n\n      <!-- En el header del card ponemos el nombre del usuario -->\n\n      {{message.nombre}}: <!-- Sacamos el contenido de la carpeta "nombre" (nombre de la carpeta guardada\n\n        en el repositorio), que se encuentra guardada en la variable "message", declarada en el archivo \n\n        Typescript de esta vista  -->\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <!-- En el contenido del card ponemos el mensaje del usuario -->\n\n      {{message.mensaje}}\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <!-- Este div sirve para saber en que posición se encuentra el último mensaje enviado -->\n\n  <div id="content-end"></div>\n\n</ion-content>\n\n\n\n<!-- En el footer ponemos un input donde escribir y un botón que envía lo escrito en el input -->\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <!-- Lo escrito en el input lo guardamos en la variable "message" usando ngModel (jQuery) -->\n\n    <ion-input placeholder="Escribir mensaje" [(ngModel)]="message"></ion-input>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only clear (click)="sendMessage()">\n\n        Enviar\n\n        <ion-icon name="send"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoplayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_links_link_provider__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoplayerPage = (function () {
    function VideoplayerPage(navCtrl, navParams, sanitizer, _linkProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this._linkProvider = _linkProvider;
        this.status = 'play';
        this.icono = 'ios-play-outline';
        this.movie = navParams.data['movie'];
        this.video = navParams.data['video'];
        this.token = localStorage.getItem('token');
    }
    VideoplayerPage.prototype.ngOnInit = function () {
        var _this = this;
        this._linkProvider.getContent(this.token, this.video).subscribe(function (res) {
            alert('we are ready');
            _this.file = new Blob([res], { type: 'video/mp4' });
            _this.fileURL = URL.createObjectURL(_this.file);
            _this.trustedUrl = _this.sanitizer.bypassSecurityTrustUrl(_this.fileURL);
            console.log(_this.trustedUrl);
        }, function (err) {
            console.log(err);
        });
    };
    VideoplayerPage.prototype.toggleVideo = function (event) {
        if (this.status == 'play') {
            this.videoOut = false;
            this.playPause();
            this.status = 'pause';
        }
        else {
            this.playPause();
            this.status = 'play';
        }
    };
    VideoplayerPage.prototype.playPause = function () {
        if (this.status === 'play') {
            this.videoplayer.nativeElement.play();
            if (this.videoplayer.nativeElement.requestFullscreen) {
                this.videoplayer.nativeElement.requestFullscreen();
            }
            else if (this.videoplayer.nativeElement.mozRequestFullScreen) {
                this.videoplayer.nativeElement.nativeElement.mozRequestFullScreen();
            }
            else if (this.videoplayer.nativeElement.webkitRequestFullScreen) {
                this.videoplayer.nativeElement.webkitRequestFullScreen();
            }
        }
        else {
            this.videoplayer.nativeElement.pause();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('videoplayer'),
        __metadata("design:type", Object)
    ], VideoplayerPage.prototype, "videoplayer", void 0);
    VideoplayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-videoplayer',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\videoplayer\videoplayer.html"*/'<ion-content>\n\n  <div id="coverPoster"></div>\n\n    <img [src]="movie.poster" id="backPoster" alt="">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <video #videoplayer preload id="videoplayer" hidden>\n\n            <source [src]="trustedUrl" type="video/mp4">\n\n          </video>\n\n          <button (click)="toggleVideo()" id="myBtn"><img src="assets/imgs/play.svg" alt=""></button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row id="infoPelicula">\n\n        <ion-col col>\n\n          <h2>{{movie.title}}</h2>\n\n          <hr><br>\n\n          <p>\n\n            {{movie.description}}\n\n          </p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\videoplayer\videoplayer.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_links_link_provider__["a" /* LinkProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3__providers_links_link_provider__["a" /* LinkProvider */]])
    ], VideoplayerPage);
    return VideoplayerPage;
}());

//# sourceMappingURL=videoplayer.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info_info__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_serie_serie_provider__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_serie_serie__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { PerfilPage } from '../perfil/perfil';
//import { InicioPage } from '../inicio/inicio';



var SeriesPage = (function () {
    function SeriesPage(navCtrl, loadingCtrl, navParams, alertCtrl, toastCtrl, contenedorFilms, _serieProvider) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.contenedorFilms = contenedorFilms;
        this._serieProvider = _serieProvider;
        this.structure = { lower: 1990, upper: 2018 };
        this.filter = false;
        this.genre = 'Genre: All';
        this.videoLanguage = 'Video Language: All';
        this.subtitleLanguage = 'Subtitle Language: All';
        this.page = 1;
        this.isSearchbarOpened = false;
        this.iconoIOS1 = 'ios-arrow-dropdown';
        this.iconoAndroid1 = 'md-arrow-dropdown';
        this.iconoIOS = 'ios-arrow-dropdown';
        this.iconoAndroid = 'md-arrow-dropdown';
        this.serie = new __WEBPACK_IMPORTED_MODULE_5__providers_serie_serie__["a" /* Serie */]('', '', '', '', '', '', '', '', '', '', '');
        this.token = localStorage.getItem('token');
    }
    SeriesPage.prototype.ngOnInit = function () {
        var _this = this;
        this._serieProvider.getAllSeries(localStorage.getItem('token'), this.page).subscribe(function (response) {
            _this.listSerie = [];
            if (_this.page === 1 && response.message.length === 0) {
                _this.mensajeVacio = 'Aún no hay series';
            }
            else {
                response.message.forEach(function (eleSerie) {
                    _this.listSerie.push(eleSerie);
                });
                console.log(_this.listSerie);
            }
        }, function (error) {
            console.log(error);
        });
    };
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
    SeriesPage.prototype.goToInfo = function (p) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__info_info__["a" /* InfoPage */], {
            contenido: p,
            tipo: 'serie'
        });
    };
    SeriesPage.prototype.filterType = function () {
        this.filter = true;
    };
    SeriesPage.prototype.filterType2 = function () {
        this.filter = false;
    };
    SeriesPage.prototype.loginLoading = function () {
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
    SeriesPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this._serieProvider.getAllSeries(localStorage.getItem('token'), this.page).subscribe(function (response) {
            _this.listSerie = [];
            response.message.forEach(function (eleSerie) {
                _this.listSerie.push(eleSerie);
            });
            refresher.complete();
        });
    };
    SeriesPage.prototype.cambiarIconoSeen = function (fab, serieId) {
        var _this = this;
        this._serieProvider.viewSerie(this.token, serieId).subscribe(function (response) {
            _this.iconoIOS = 'ios-eye-off';
            _this.iconoAndroid = 'md-eye-off';
            fab.close();
            _this.mensaje = 'This film has been added to "Seen Group"';
            _this.presentToast(_this.mensaje);
        }, function (err) {
            console.log(err);
        });
    };
    SeriesPage.prototype.cambiarIconoLike = function (fab) {
        this.iconoIOS = 'ios-heart';
        this.iconoAndroid = 'md-heart';
        fab.close();
        this.mensaje = 'This film has been added to "Favourite Group"';
        this.presentToast(this.mensaje);
    };
    SeriesPage.prototype.cambiarIconoRemove = function (fab) {
        this.iconoIOS = 'ios-arrow-dropdown';
        this.iconoAndroid = 'md-arrow-dropdown';
        fab.close();
        this.mensaje = 'This film has been removed of his old group';
        this.presentToast(this.mensaje);
    };
    SeriesPage.prototype.presentToast = function (mensaje) {
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
    SeriesPage.prototype.moreSeries = function () {
        var _this = this;
        console.log('Array de peliculas1: ', this.listSerie.length);
        this.contador = this.listSerie.length;
        this.page = this.page + 1;
        this._serieProvider.getAllSeries(localStorage.getItem('token'), this.page).subscribe(function (response) {
            response.message.forEach(function (eleMovie) {
                _this.listSerie.push(eleMovie);
            });
            if (response.message.length === 0) {
                _this.alert();
            }
        });
        console.log('Array de peliculas2: ', this.listSerie.length);
        console.log('Contenido que trae el server: ', this.contador);
        /*if (this.listSerie.length == this.contador) {
          this.alert();
        }*/
    };
    SeriesPage.prototype.alert = function () {
        this.alertCtrl.create({
            title: 'There was a problem!',
            subTitle: 'There are not more series in our Database',
            buttons: ['OK']
        }).present();
    };
    SeriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-peliculas',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\series\series.html"*/'<page-header></page-header>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-card>\n\n    <ion-row>\n\n      <ion-col col-12 class="center">\n\n        <ion-buttons padding-bottom>\n\n          <button ion-button icon-only outline *ngIf="!filter" (click)="filterType()" col-5>\n\n            Show Filters\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-card *ngIf="filter">\n\n\n\n      <ion-item>\n\n        <ion-label>Year: </ion-label>\n\n        <ion-range dualKnobs="true" pin="true" min="1900" max="2020" step="5" snaps="true" [(ngModel)]="structure">\n\n          <ion-icon range-left small ios="ios-time" md="md-time"></ion-icon>\n\n          <ion-icon range-right ios="ios-time" md="md-time"></ion-icon>\n\n        </ion-range>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Films Genre: </ion-label>\n\n        <ion-select [(ngModel)]="genre" interface="popover">\n\n          <ion-option value="Genre: All" selected="true">All</ion-option>\n\n          <ion-option value="Genre: Action and adventure">Action and adventure</ion-option>\n\n          <ion-option value="Genre: Cartoon">Cartoon</ion-option>\n\n          <ion-option value="Genre: Comedy">Comedy</ion-option>\n\n          <ion-option value="Genre: Crime">Crime</ion-option>\n\n          <ion-option value="Genre: Documentary film">Documentary film</ion-option>\n\n          <ion-option value="Genre: Drama">Drama</ion-option>\n\n          <ion-option value="Genre: Fantasy">Fantasy</ion-option>\n\n          <ion-option value="Genre: Mistery">Mistery</ion-option>\n\n          <ion-option value="Genre: Science fiction">Science fiction</ion-option>\n\n          <ion-option value="Genre: Sports">Sports</ion-option>\n\n          <ion-option value="Genre: Terror">Terror</ion-option>\n\n          <ion-option value="Genre: Thriller">Thriller</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Video Language: </ion-label>\n\n        <ion-select [(ngModel)]="videoLanguage" interface="popover">\n\n          <ion-option value="Video Language: All" selected="true">All</ion-option>\n\n          <ion-option value="Video Language: English">English</ion-option>\n\n          <ion-option value="Video Language: French">French</ion-option>\n\n          <ion-option value="Video Language: German">German</ion-option>\n\n          <ion-option value="Video Language: Greek">Greek</ion-option>\n\n          <ion-option value="Video Language: Italian">Italian</ion-option>\n\n          <ion-option value="Video Language: Portuguese">Portuguese</ion-option>\n\n          <ion-option value="Video Language: Russian">Russian</ion-option>\n\n          <ion-option value="Video Language: Spanish">Spanish</ion-option>\n\n          <ion-option value="Video Language: Others">Others</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Subtitle Language: </ion-label>\n\n        <ion-select [(ngModel)]="subtitleLanguage" interface="popover">\n\n          <ion-option value="Subtitle Language: All" selected="true">All</ion-option>\n\n          <ion-option value="Subtitle Language: English">English</ion-option>\n\n          <ion-option value="Subtitle Language: French">French</ion-option>\n\n          <ion-option value="Subtitle Language: German">German</ion-option>\n\n          <ion-option value="Subtitle Language: Greek">Greek</ion-option>\n\n          <ion-option value="Subtitle Language: Italian">Italian</ion-option>\n\n          <ion-option value="Subtitle Language: Portuguese">Portuguese</ion-option>\n\n          <ion-option value="Subtitle Language: Russian">Russian</ion-option>\n\n          <ion-option value="Subtitle Language: Spanish">Spanish</ion-option>\n\n          <ion-option value="Subtitle Language: Others">Others</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-row>\n\n        <ion-col col-12 class="center">\n\n          <ion-buttons>\n\n            <button ion-button icon-only outline class="center" *ngIf="filter" (click)="loginLoading()" col-5>\n\n              Accept\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-12 class="center">\n\n          <ion-buttons>\n\n            <button ion-button icon-only outline class="center" *ngIf="filter" (click)="filterType2()" col-5>\n\n              Hide Filters\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </ion-card>\n\n    <ion-row>\n\n      <ion-col col-12 class="center" padding-bottom *ngIf="mensajeVacio">\n\n        <h4>{{mensajeVacio}}</h4>\n\n      </ion-col>\n\n      \n\n      <ion-col col-6 class="center" *ngFor="let s of listSerie">\n\n        <ion-thumbnail item-start col-12>\n\n          <button (click)="goToInfo(p)" class="fotoPelicula" no-padding>\n\n            <img [src]="s.poster">\n\n          </button>\n\n          <h5 class="center">\n\n            {{ s.title }}\n\n            <ion-fab top right edge col-4 #fab>\n\n              <button ion-fab mini class="background">\n\n                <ion-icon [ios]="iconoIOS1" [md]="iconoAndroid1"></ion-icon>\n\n              </button>\n\n              <ion-fab-list>\n\n                <button ion-fab (click)="cambiarIconoSeen(fab, s._id)">\n\n                  <ion-icon ios="ios-eye-off" md="md-eye-off"></ion-icon>\n\n                </button>\n\n                <button ion-fab>\n\n                  <ion-icon ios="ios-heart" md="md-heart" (click)="cambiarIconoLike(fab)"></ion-icon>\n\n                </button>\n\n              </ion-fab-list>\n\n            </ion-fab>\n\n          </h5>\n\n        </ion-thumbnail>\n\n      </ion-col>\n\n      <ion-col col-12 class="center" id="moreButton" padding-bottom *ngIf="!mensajeVacio">\n\n        <button ion-button outline (click)="moreSeries()" col-auto>More</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\series\series.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_serie_serie_provider__["a" /* SerieProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_serie_serie_provider__["a" /* SerieProvider */]])
    ], SeriesPage);
    return SeriesPage;
}());

//# sourceMappingURL=series.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerTodoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_perfil__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__peliculas_peliculas__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_inicio__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__info_info__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_movie_movie_provider__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_movie_movie__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VerTodoPage = (function () {
    function VerTodoPage(navCtrl, navParams, _movieProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._movieProvider = _movieProvider;
        this.toastCtrl = toastCtrl;
        this.tipoContenido = navParams.data['tipo'];
        this.list = navParams.data['array'];
        // this.contenedor = navParams.data['data'];
        this.movie = new __WEBPACK_IMPORTED_MODULE_7__providers_movie_movie__["a" /* Movie */]('', '', '', '', '', '', '', '', '', '', '', '');
    }
    VerTodoPage.prototype.ionViewDidLoad = function () {
        if (this.tipoContenido === 'visto') {
            // Ponemos por defecto, el icono de visto
            this.iconoIOS = 'ios-eye-off';
            this.iconoAndroid = 'md-eye-off';
            // Ponemos, que la segunda opción sea cambiarla a favoritos
            this.iconoIOS2 = 'ios-heart';
            this.iconoAndroid2 = 'md-heart';
        }
        else if (this.tipoContenido === 'favorito') {
            // Ponemos por defecto, el icono de favoritos
            this.iconoIOS2 = 'ios-heart';
            this.iconoAndroid2 = 'md-heart';
            // Ponemos, que la segunda opción sea cambiarla a visto
            this.iconoIOS = 'ios-eye-off';
            this.iconoAndroid = 'md-eye-off';
        }
        else {
            console.log('Ha ocurrido un error');
        }
    };
    // cambiarIconoSeen(fab, movieId) {
    //   this._movieProvider.viewMovie(this.token, movieId).subscribe(response => {
    //     console.log(response);
    //     this.iconoIOS = 'ios-eye-off';
    //     this.iconoAndroid = 'md-eye-off';
    //     fab.close();
    //     this.mensaje = 'This film has been added to "Seen Group"';
    //     this.presentToast(this.mensaje);
    //   },
    //     err => {
    //       console.log(err);
    //     });
    // }
    // cambiarIconoLike(fab: FabContainer, movieId) {
    //   this._movieProvider.getMovieLiked(this.token, movieId).subscribe(response => {
    //     console.log(response);
    //     this.iconoIOS = 'ios-heart';
    //     this.iconoAndroid = 'md-heart';
    //     fab.close();
    //     this.mensaje = 'This film has been added to "Favourite Group"';
    //     this.presentToast(this.mensaje);
    //   },
    //     err => {
    //       console.log(err);
    //     });
    // }
    VerTodoPage.prototype.cambiarIcono = function (fab, movieId) {
        var _this = this;
        if (this.iconoIOS2 === "ios-eye-off" && this.iconoAndroid2 === "md-eye-off") {
            this._movieProvider.viewMovie(this.token, movieId).subscribe(function (response) {
                console.log(response);
                _this.iconoIOS = 'ios-eye-off';
                _this.iconoAndroid = 'md-eye-off';
                fab.close();
                _this.mensaje = 'This film has been added to "Seen Group"';
                _this.presentToast(_this.mensaje);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this._movieProvider.getMovieLiked(this.token, movieId).subscribe(function (response) {
                console.log(response);
                _this.iconoIOS = 'ios-heart';
                _this.iconoAndroid = 'md-heart';
                fab.close();
                _this.mensaje = 'This film has been added to "Favourite Group"';
                _this.presentToast(_this.mensaje);
            }, function (err) {
                console.log(err);
            });
        }
    };
    VerTodoPage.prototype.cambiarIconoRemove = function (fab, movieId) {
        this.iconoIOS = 'ios-arrow-dropdown';
        this.iconoAndroid = 'md-arrow-dropdown';
        fab.close();
        this.mensaje = 'This film has been removed of his old group';
        this.presentToast(this.mensaje);
    };
    VerTodoPage.prototype.presentToast = function (mensaje) {
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
    VerTodoPage.prototype.goToInfo = function (p) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__info_info__["a" /* InfoPage */], {
            contenido: p,
            data: this.contenedor
        });
    };
    VerTodoPage.prototype.goToPerfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__perfil_perfil__["a" /* PerfilPage */]);
    };
    VerTodoPage.prototype.goToPeliculas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__peliculas_peliculas__["a" /* PeliculasPage */]);
    };
    VerTodoPage.prototype.goToInicio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inicio_inicio__["a" /* InicioPage */]);
    };
    VerTodoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ver-todo',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\ver-todo\ver-todo.html"*/'<page-header></page-header>\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-card>\n\n    <ion-row>\n\n      <ion-col col-6 class="center" *ngFor="let p of list" style="padding-top: 5px">\n\n        <ion-thumbnail item-start col-12>\n\n          <button (click)="goToInfo(p)" class="fotoPelicula" no-padding>\n\n            <img [src]="p.poster">\n\n          </button>\n\n          <h5 class="center">\n\n            {{ p.title }}\n\n            <ion-fab top right col-4 #fab>\n\n              <button ion-fab mini class="background">\n\n                <ion-icon [ios]="iconoIOS" [md]="iconoAndroid"></ion-icon>\n\n              </button>\n\n              <ion-fab-list>\n\n                <button ion-fab>\n\n                  <ion-icon [ios]="iconoIOS2" [md]="iconoAndroid2" (click)="cambiarIcono(fab, p._id)"></ion-icon>\n\n                </button>\n\n                <button ion-fab>\n\n                  <ion-icon ios="ios-trash" md="md-trash" (click)="cambiarIconoRemove(fab, p._id)"></ion-icon>\n\n                </button>\n\n              </ion-fab-list>\n\n            </ion-fab>\n\n          </h5>\n\n        </ion-thumbnail>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\ver-todo\ver-todo.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__providers_movie_movie_provider__["a" /* MovieProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_movie_movie_provider__["a" /* MovieProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _d || Object])
    ], VerTodoPage);
    return VerTodoPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=ver-todo.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(94);
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
    function RegistroPage(navCtrl, navParams, loadingCtrl, alertCtrl, comprobarLogin) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.comprobarLogin = comprobarLogin;
    }
    RegistroPage.prototype.ngOnInit = function () {
        this.formularioUsuario = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            surname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            nickname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
            pass: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/^[a-z0-9_-]{5,18}$/)]),
            pass2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, this.equalto('pass')])
        });
    };
    RegistroPage.prototype.gotoHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
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
    RegistroPage.prototype.alert = function () {
        this.alertCtrl.create({
            title: 'There was a problem!',
            subTitle: 'This user alredy exists',
            buttons: ['OK']
        }).present();
    };
    RegistroPage.prototype.registerUsers = function () {
        var _this = this;
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
        this.comprobarLogin.registerUsers(this.registro).subscribe(function (datos) {
            console.log('Datos: ', datos);
            if (datos['message'] == 'Este usuario ya existe') {
                _this.alert();
            }
            else {
                _this.loginLoading();
            }
        }, function (err) {
            console.log(err["message"]);
        });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("name"),
        __metadata("design:type", Object)
    ], RegistroPage.prototype, "nombre", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("surname"),
        __metadata("design:type", Object)
    ], RegistroPage.prototype, "apellidos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("nickname"),
        __metadata("design:type", Object)
    ], RegistroPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("birthday"),
        __metadata("design:type", Object)
    ], RegistroPage.prototype, "birthday", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("emailad"),
        __metadata("design:type", Object)
    ], RegistroPage.prototype, "emailAddress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], RegistroPage.prototype, "currentPassword", void 0);
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\registro\registro.html"*/'<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-card>\n\n          <ion-card-header>\n\n            <p class="header">Registration</p>\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            <ion-list>\n\n              <form [formGroup]="formularioUsuario" novalidate>\n\n                <ion-item>\n\n                  <ion-label floating>Name *</ion-label>\n\n                  <ion-input formControlName="name" #name type="text"></ion-input>\n\n                </ion-item>\n\n                <ion-item *ngIf="formularioUsuario.get(\'name\').errors && formularioUsuario.get(\'name\').dirty">\n\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'name\').hasError(\'required\')">Your name is required</p>\n\n                </ion-item>\n\n                <ion-item>\n\n                  <ion-label floating>Surname *</ion-label>\n\n                  <ion-input formControlName="surname" #surname type="text"></ion-input>\n\n                </ion-item>\n\n                <ion-item *ngIf="formularioUsuario.get(\'surname\').errors && formularioUsuario.get(\'surname\').dirty">\n\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'surname\').hasError(\'required\')">Your surname is required</p>\n\n                </ion-item>\n\n                <ion-item>\n\n                  <ion-label floating>Nickname *</ion-label>\n\n                  <ion-input type="text" #nickname formControlName="nickname"></ion-input>\n\n                </ion-item>\n\n                <ion-item *ngIf="formularioUsuario.get(\'nickname\').errors && formularioUsuario.get(\'nickname\').dirty">\n\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'nickname\').hasError(\'required\')" class="error">\n\n                    nickname is required.\n\n                  </p>\n\n                </ion-item>\n\n                <ion-item>\n\n                  <ion-label floating>Birthday</ion-label>\n\n                  <ion-datetime #birthday displayFormat="MM/DD/YYYY"></ion-datetime>\n\n                </ion-item>\n\n                <ion-item>\n\n                  <ion-label floating>Email address *</ion-label>\n\n                  <ion-input type="email" #emailad formControlName="email"></ion-input>\n\n                </ion-item>\n\n                <!-- Control de errores de si está rellenando el campo "Password" y el usuario está vacío indique un error -->\n\n                <ion-item *ngIf="formularioUsuario.get(\'email\').errors && formularioUsuario.get(\'email\').dirty">\n\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'email\').hasError(\'required\')" class="error">\n\n                    Email is required.\n\n                  </p>\n\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'email\').hasError(\'pattern\')">\n\n                    It is not an email\n\n                  </p>\n\n                </ion-item>\n\n                <ion-item>\n\n                  <ion-label floating>Password *</ion-label>\n\n                  <!-- Creamos el input para la contraseña -->\n\n                  <ion-input type="password" name="pass" formControlName="pass"></ion-input>\n\n                </ion-item>\n\n                <!-- Control de errores de si está vacío, o tiene menos de 10 caracteres, indique un error -->\n\n                <ion-item *ngIf="formularioUsuario.get(\'pass\').errors && formularioUsuario.get(\'pass\').dirty">\n\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'pass\').hasError(\'pattern\')" class="error">\n\n                    It is not a strong password.\n\n                  </p>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                  <ion-label floating>Confirm password *</ion-label>\n\n                  <!-- Creamos el input para la contraseña -->\n\n                  <ion-input type="password" #password formControlName="pass2"></ion-input>\n\n                </ion-item>\n\n                <!-- Control de errores de si está vacío, o tiene menos de 10 caracteres, indique un error -->\n\n                <ion-item *ngIf="(formularioUsuario.get(\'pass2\').hasError(\'equalTo\') || formularioUsuario.get(\'pass2\').hasError(\'required\')) && formularioUsuario.get(\'pass2\').touched">\n\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'pass2\').hasError(\'required\') && formularioUsuario.get(\'pass2\').touched" class="error">\n\n                    It is not a strong password.\n\n                  </p>\n\n                  <p color="danger" ion-text *ngIf="formularioUsuario.get(\'pass2\').hasError(\'equalTo\') && formularioUsuario.get(\'pass2\').touched" class="error">\n\n                    Passwords do not match\n\n                  </p>\n\n                </ion-item>\n\n\n\n                <br>\n\n                <!-- Creamos el botón de registro, que permanecerá desactivado, hasta que los campos del formulario\n\n              estén correctamente rellenos superando el control de errores -->\n\n                <ion-grid padding-top>\n\n                  <ion-row justify-content-center>\n\n                    <div class="col-1" align-self-center>\n\n                      <div>\n\n                        <button ion-button type="submit" [disabled]="!formularioUsuario.valid" (click)="registerUsers()">Sign Up</button>\n\n                      </div>\n\n                    </div>\n\n                  </ion-row>\n\n                </ion-grid>\n\n\n\n                <ion-grid>\n\n                  <ion-row justify-content-center padding-top>\n\n                    <div align-self-center>\n\n                      <div>Or</div>\n\n                    </div>\n\n                  </ion-row>\n\n                  <ion-row justify-content-center padding-top>\n\n                    <div align-self-center>\n\n                      <div>\n\n                        <!-- <a (click)="goToRegistry()"> -->\n\n                        <a (click)="gotoHome()">\n\n                          <strong>Go to Login Page!</strong>\n\n                        </a>\n\n                      </div>\n\n                    </div>\n\n                  </ion-row>\n\n                </ion-grid>\n\n              </form>\n\n\n\n            </ion-list>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\registro\registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 183:
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
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-event/add-event.module": [
		722,
		13
	],
	"../pages/chat/chat.module": [
		723,
		12
	],
	"../pages/edit-event/edit-event.module": [
		725,
		11
	],
	"../pages/header/header.module": [
		724,
		10
	],
	"../pages/home/home.module": [
		726,
		9
	],
	"../pages/info/info.module": [
		728,
		8
	],
	"../pages/inicio/inicio.module": [
		727,
		7
	],
	"../pages/menu/menu.module": [
		730,
		6
	],
	"../pages/peliculas/peliculas.module": [
		729,
		5
	],
	"../pages/perfil/perfil.module": [
		731,
		4
	],
	"../pages/registro/registro.module": [
		732,
		3
	],
	"../pages/series/series.module": [
		735,
		2
	],
	"../pages/ver-todo/ver-todo.module": [
		733,
		1
	],
	"../pages/videoplayer/videoplayer.module": [
		734,
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
webpackAsyncContext.id = 228;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LinkProvider = (function () {
    function LinkProvider(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__global_global__["a" /* GLOBAL */].url;
    }
    LinkProvider.prototype.getLinks = function (token, idContent) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', token).set('Content-type', 'application/json');
        return this.http.get(this.url + 'get-links/' + idContent, { headers: headers });
    };
    LinkProvider.prototype.getContent = function (token, contentURI) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', token).set('Content-type', 'application/json');
        console.log(this.http.get(this.url + 'get-content/' + contentURI, { headers: headers, responseType: 'blob' }));
        return this.http.get(this.url + 'get-content/' + contentURI, { headers: headers, responseType: 'blob' });
    };
    LinkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LinkProvider);
    return LinkProvider;
}());

//# sourceMappingURL=link.provider.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Serie; });
var Serie = (function () {
    function Serie(_id, title, description, genre, category, year, creator, duration, poster, uploadat, userUp) {
    }
    return Serie;
}());

//# sourceMappingURL=serie.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-event',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\add-event\add-event.html"*/'<!--\n\n  Generated template for the AddEventPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>add-event</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\add-event\add-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AddEventPage);
    return AddEventPage;
}());

//# sourceMappingURL=add-event.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_perfil__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__peliculas_peliculas__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__series_series__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inicio_inicio__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { MovieProvider } from '../../providers/movie/movie.provider';
// import { SerieProvider } from '../../providers/serie/serie.provider';
var HeaderPage = (function () {
    function HeaderPage(navCtrl, navParams, comprobarLogin, sanitizer
        // private _movieProvider: MovieProvider,
        // private _serieProvider: SerieProvider
    ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comprobarLogin = comprobarLogin;
        this.sanitizer = sanitizer;
        this.list = false;
    }
    HeaderPage.prototype.ngOnInit = function () {
        this.identity = this.comprobarLogin.getIdentity();
        this.avatarUrl = this.comprobarLogin.getImageAvatar();
        this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);
    };
    HeaderPage.prototype.ngDoCheck = function () {
        this.identity = this.comprobarLogin.getIdentity();
        this.avatarUrl = this.comprobarLogin.getImageAvatar();
        this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);
    };
    HeaderPage.prototype.listado = function () {
        this.items = this.items1;
    };
    HeaderPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.listado();
            console.log(this.items);
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            }, console.log(this.items));
        }
        else {
            return;
        }
    };
    HeaderPage.prototype.goToPerfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__perfil_perfil__["a" /* PerfilPage */]);
    };
    HeaderPage.prototype.goToPeliculas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__peliculas_peliculas__["a" /* PeliculasPage */]);
    };
    HeaderPage.prototype.goToInicio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__inicio_inicio__["a" /* InicioPage */]);
    };
    HeaderPage.prototype.goToSeries = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__series_series__["a" /* SeriesPage */]);
    };
    HeaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-header',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\header\header.html"*/'<ion-header *ngIf="identity" class="vista">\n\n  <ion-navbar hideBackButton="true">\n\n\n\n    <ion-grid *ngIf="!isSearchbarOpened">\n\n      <ion-row>\n\n        <ion-col col-auto>\n\n          <ion-buttons>\n\n            <button ion-button icon-only (click)="goToInicio()">\n\n              Home\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n\n\n        <ion-col col-auto>\n\n          <ion-buttons>\n\n            <button ion-button icon-only (click)="goToPeliculas()">\n\n              Films\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n\n\n        <ion-col col-auto>\n\n          <ion-buttons>\n\n            <button ion-button icon-only (click)="goToSeries()">\n\n              Series\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n\n\n        <ion-col col-auto>\n\n          <ion-buttons>\n\n            <button ion-button icon-only (click)="goToPerfil()">\n\n              {{ identity.nickname }}\n\n              <ion-avatar item-start>\n\n                <img class="userAvatar" [src]="trustedUrl">\n\n              </ion-avatar>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n\n\n        <ion-col col-1>\n\n          <ion-buttons>\n\n            <button ion-button icon-only (click)="isSearchbarOpened=true">\n\n              <ion-icon name="search"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-searchbar *ngIf="isSearchbarOpened" showCancelButton="true" (ionCancel)="isSearchbarOpened=false" (ionInput)="getItems($event)">\n\n    </ion-searchbar>\n\n    <ion-list *ngIf="isSearchbarOpened">\n\n      <button ion-item *ngFor="let item of items" (click)="showDetail(item)">\n\n        {{ item }}\n\n      </button>\n\n    </ion-list>\n\n  </ion-navbar>\n\n</ion-header>'/*ion-inline-end:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\header\header.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object])
    ], HeaderPage);
    return HeaderPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-edit-event',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\edit-event\edit-event.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>edit-event</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\edit-event\edit-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EditEventPage);
    return EditEventPage;
}());

//# sourceMappingURL=edit-event.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__peliculas_peliculas__ = __webpack_require__(68);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\menu\menu.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content right>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(384);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mobiscroll_angular__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_streaming_media__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic2_rating__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_movie_movie_provider__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_registro_registro__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_inicio_inicio__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_menu_menu__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_ver_todo_ver_todo__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_peliculas_peliculas__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_perfil_perfil__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_chat_chat__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_add_event_add_event__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_edit_event_edit_event__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_info_info__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_series_series__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_header_header__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_videoplayer_videoplayer__ = __webpack_require__(167);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_peliculas_peliculas__["a" /* PeliculasPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_series_series__["a" /* SeriesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_add_event_add_event__["a" /* AddEventPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_edit_event_edit_event__["a" /* EditEventPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_ver_todo_ver_todo__["a" /* VerTodoPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_header_header__["a" /* HeaderPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_videoplayer_videoplayer__["a" /* VideoplayerPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__mobiscroll_angular__["b" /* MbscModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-event/add-event.module#AddEventPageModule', name: 'AddEventPage', segment: 'add-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/header/header.module#HeaderPageModule', name: 'HeaderPage', segment: 'header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-event/edit-event.module#EditEventPageModule', name: 'EditEventPage', segment: 'edit-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/peliculas/peliculas.module#PeliculasPageModule', name: 'PeliculasPage', segment: 'peliculas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-todo/ver-todo.module#VerTodoPageModule', name: 'VerTodoPage', segment: 'ver-todo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/videoplayer/videoplayer.module#VideoplayerPageModule', name: 'VideoplayerPage', segment: 'videoplayer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/series/series.module#SeriesPageModule', name: 'SeriesPage', segment: 'series', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_9_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_peliculas_peliculas__["a" /* PeliculasPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_series_series__["a" /* SeriesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_add_event_add_event__["a" /* AddEventPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_edit_event_edit_event__["a" /* EditEventPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_ver_todo_ver_todo__["a" /* VerTodoPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_header_header__["a" /* HeaderPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_videoplayer_videoplayer__["a" /* VideoplayerPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_streaming_media__["a" /* StreamingMedia */],
                __WEBPACK_IMPORTED_MODULE_28__providers_login_login__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_movie_movie_provider__["a" /* MovieProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProvider = (function () {
    function UserProvider(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__global_global__["a" /* GLOBAL */].url;
    }
    UserProvider.prototype.updateUser = function (userUp, token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', token).set('Content-type', 'application/json');
        console.log(userUp);
        return this.http.put(this.url + 'update-user/' + id, userUp, { headers: headers });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.provider.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginProvider = (function () {
    function LoginProvider(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__global_global__["a" /* GLOBAL */].url;
    }
    LoginProvider.prototype.getUsers = function () {
        return this.http.get(this.url + 'pruebas');
    };
    LoginProvider.prototype.loginUsers = function (login) {
        return this.http.post(this.url + 'login', { 'emailNick': login[0].emailNick, 'password': login[0].password, 'gettoken': login[0].gettoken });
    };
    LoginProvider.prototype.registerUsers = function (register) {
        return this.http.post(this.url + 'register', { 'name': register[0].name, 'surname': register[0].surname, 'nickname': register[0].nickname, 'email': register[0].email, 'password': register[0].password });
    };
    //Saber en todo momento el usuario que tenemos en uso 
    LoginProvider.prototype.getIdentity = function () {
        var identity = JSON.parse(localStorage.getItem('user'));
        if (identity !== 'undefined') {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    };
    //Rescatar en cualquier momento nuestro token validado para las peticiones
    LoginProvider.prototype.getToken = function () {
        var token = JSON.parse(localStorage.getItem('token'));
        if (token !== 'undefined') {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    };
    //Actualizacion del estado de las estadisticas
    LoginProvider.prototype.getStats = function () {
        var stats = JSON.parse(localStorage.getItem('stats'));
        if (stats !== undefined) {
            this.stats = stats;
        }
        else {
            this.stats = null;
        }
        return stats;
    };
    //Coger los datos del usuario de la API
    LoginProvider.prototype.getCounter = function (token, userId) {
        if (userId === void 0) { userId = null; }
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', token).set('Content-type', 'application/json');
        if (userId != null) {
            return this.http.get(this.url + 'counters/' + userId, { headers: headers });
        }
        else {
            return this.http.get(this.url + 'counters', { headers: headers });
        }
    };
    LoginProvider.prototype.getAvatar = function (token, imageId) {
        console.log(token + '----' + imageId);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', token).set('Content-type', 'application/json');
        return this.http.get(this.url + 'profile-image/' + imageId, { headers: headers, responseType: 'blob' });
    };
    LoginProvider.prototype.getImageAvatar = function () {
        var imagen = localStorage.getItem('avatar');
        if (imagen !== 'undefined') {
            this.imagen = imagen;
        }
        else {
            this.imagen = null;
        }
        return this.imagen;
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLogin; });
var UserLogin = (function () {
    function UserLogin(_id, emailNick, password, gettoken) {
        this._id = _id;
        this.emailNick = emailNick;
        this.password = password;
        this.gettoken = gettoken;
    }
    return UserLogin;
}());

//# sourceMappingURL=userLogin.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { InicioPage } from '../pages/inicio/inicio';
//import { ChatPage } from '../pages/chat/chat';
//import { VerTodoPage } from '../pages/ver-todo/ver-todo';
//import { VideoplayerPage } from '../pages/videoplayer/videoplayer';
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.initializeApp(config);
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieProvider = (function () {
    function MovieProvider(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__global_global__["a" /* GLOBAL */].url;
    }
    MovieProvider.prototype.getAllMovies = function (token, pagina) {
        if (pagina === void 0) { pagina = null; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-type', 'application/json').set('Authorization', token);
        return this._http.get(this.url + 'getallmovies/' + pagina, { headers: headers });
    };
    MovieProvider.prototype.viewMovie = function (token, movieId) {
        console.log(token);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-type', 'application/json').set('Authorization', token);
        return this._http.post(this.url + 'viewing/movie/' + movieId, null, { headers: headers });
    };
    MovieProvider.prototype.getViewedMovie = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-type', 'application/json').set('Authorization', token);
        return this._http.get(this.url + 'getallviewing/movie', { headers: headers });
    };
    MovieProvider.prototype.getMovieViewing = function (token, movieId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-type', 'application/json').set('Authorization', token);
        return this._http.get(this.url + 'getallviewing/movie' + movieId, { headers: headers });
    };
    MovieProvider.prototype.getLikedMovie = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-type', 'application/json').set('Authorization', token);
        return this._http.get(this.url + 'getlikeds', { headers: headers });
    };
    MovieProvider.prototype.getMovieLiked = function (token, movieId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-type', 'application/json').set('Authorization', token);
        return this._http.post(this.url + 'liked/movie/' + movieId, { headers: headers });
    };
    MovieProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MovieProvider);
    return MovieProvider;
}());

//# sourceMappingURL=movie.provider.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RATING_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__videoplayer_videoplayer__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_links_link_provider__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_movie_movie_provider__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_serie_serie_provider__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var noop = function () {
};
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* forwardRef */])(function () { return InfoPage; }),
    multi: true
};
var InfoPage = (function () {
    function InfoPage(navCtrl, navParams, streamingMedia, _linkProvider, _movieProvider, _serieProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.streamingMedia = streamingMedia;
        this._linkProvider = _linkProvider;
        this._movieProvider = _movieProvider;
        this._serieProvider = _serieProvider;
        this._max = 10;
        this._readOnly = false;
        this._emptyStarIconName = 'star-outline';
        this._halfStarIconName = 'star-half';
        this._starIconName = 'star';
        this._nullable = false;
        this.onChangeCallback = noop;
        //this.movie = navParams.data['contenido'];
        this.type = navParams.data['tipo'];
        if (this.type === 'movie') {
            this.movie = navParams.data['contenido'];
            this.content = this.movie;
            console.log('hola');
        }
        else if (this.type === 'serie') {
            this.serie = navParams.data['contenido'];
            this.content = this.serie;
        }
        this.token = localStorage.getItem('token');
    }
    Object.defineProperty(InfoPage.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (val) {
            var newValue = this.getNumberPropertyValue(val);
            if (newValue !== this._max) {
                this._max = newValue;
                this.createStarIndexes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfoPage.prototype, "readOnly", {
        get: function () {
            return this._readOnly;
        },
        set: function (val) {
            this._readOnly = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfoPage.prototype, "emptyStarIconName", {
        get: function () {
            return this._emptyStarIconName;
        },
        set: function (val) {
            this._emptyStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfoPage.prototype, "halfStarIconName", {
        get: function () {
            return this._halfStarIconName;
        },
        set: function (val) {
            this._halfStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfoPage.prototype, "starIconName", {
        get: function () {
            return this._starIconName;
        },
        set: function (val) {
            this._starIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfoPage.prototype, "nullable", {
        get: function () {
            return this._nullable;
        },
        set: function (val) {
            this._nullable = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    InfoPage.prototype.ngOnInit = function () {
        var _this = this;
        // ngFor needs an array
        this.createStarIndexes();
        this._linkProvider.getLinks(this.token, this.movie["_id"]).subscribe(function (response) {
            _this.video = response.link[0].url;
        }, function (err) {
            console.log(err);
        });
    };
    InfoPage.prototype.createStarIndexes = function () {
        this.starIndexes = Array(this.max).fill(1).map(function (x, i) { return i; });
    };
    InfoPage.prototype.getStarIconName = function (starIndex) {
        if (this.value === undefined) {
            return this.emptyStarIconName;
        }
        if (this.value > starIndex) {
            if (this.value < starIndex + 1) {
                return this.halfStarIconName;
            }
            else {
                return this.starIconName;
            }
        }
        else {
            return this.emptyStarIconName;
        }
    };
    Object.defineProperty(InfoPage.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            if (value !== this.innerValue) {
                this.innerValue = value;
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    InfoPage.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    InfoPage.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    InfoPage.prototype.registerOnTouched = function (fn) {
    };
    InfoPage.prototype.onKeyDown = function (event) {
        if (/(37|38|39|40)/.test(event.which)) {
            event.preventDefault();
            event.stopPropagation();
            var newValue = this.value + ((event.which == 38 || event.which == 39) ? 1 : -1);
            return this.rate(newValue);
        }
    };
    InfoPage.prototype.rate = function (value) {
        if (this.readOnly || value < 0 || value > this.max) {
            return;
        }
        if (value === this.value && this.nullable) {
            value = null;
        }
        this.value = value;
    };
    InfoPage.prototype.isTrueProperty = function (val) {
        if (typeof val === 'string') {
            val = val.toLowerCase().trim();
            return (val === 'true' || val === 'on');
        }
        return !!val;
    };
    InfoPage.prototype.getNumberPropertyValue = function (val) {
        if (typeof val === 'string') {
            return parseInt(val.trim());
        }
        return val;
    };
    InfoPage.prototype.ionViewDidLoad = function () {
        if (this.movie['genre'] == 'N/A') {
            this.movie['genre'] = 'Not available';
        }
        if (this.movie['year'] == 'N/A') {
            this.movie['year'] = 'Not available';
        }
        if (this.movie['description'] == 'N/A') {
            this.movie['description'] = 'Not available';
        }
    };
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
    InfoPage.prototype.gotoreproductor = function () {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__videoplayer_videoplayer__["a" /* VideoplayerPage */], { movie: this.content, video: this.video });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InfoPage.prototype, "max", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InfoPage.prototype, "readOnly", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InfoPage.prototype, "emptyStarIconName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InfoPage.prototype, "halfStarIconName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InfoPage.prototype, "starIconName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InfoPage.prototype, "nullable", null);
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-info',
            styles: ["\n    ul.rating li {\n      display: inline;\n      border: 0px;\n      background: none;\n      padding: 5px 1px;\n    }\n    ul.rating li i {\n      font-size: 30px;\n    }\n  "],template:/*ion-inline-start:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\info\info.html"*/'<page-header></page-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-card-content class="backgroundCard">\n\n      <ion-row class="center">\n\n        <ion-col col-8 offset-2>\n\n          <img [src]="movie.poster">\n\n        </ion-col>\n\n        <ion-col col-6 offset-3 style="text-align: center;">\n\n          <h1>{{ movie.title }}</h1>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n          <ul class="rating" (keydown)="onKeyDown($event)">\n\n            <li *ngFor="let starIndex of starIndexes" tappable (click)="rate(starIndex + 1)">\n\n              <ion-icon [name]="getStarIconName(starIndex)">\n\n              </ion-icon>\n\n            </li>\n\n          </ul>\n\n        </ion-col>\n\n        <ion-col col-6 offset-3>\n\n          <ion-buttons>\n\n            <button ion-button icon-only outline col-12 class="center" (click)="gotoreproductor()">\n\n              Watch Trailer\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n        <ion-col col-6 style="text-align: center;">\n\n          <ion-label class="titulo">GENRE: </ion-label>\n\n          <h3>{{ movie.genre }}</h3>\n\n        </ion-col>\n\n        <ion-col col-6 style="text-align: center;">\n\n          <ion-label class="titulo">YEAR: </ion-label>\n\n          <h3>{{ movie.year }}</h3>\n\n        </ion-col>\n\n        <ion-col col-12 style="text-align: center;">\n\n          <ion-label class="titulo">DESCRIPTION: </ion-label>\n\n          <h3>{{ movie.description }}</h3>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\info\info.html"*/,
            providers: [RATING_CONTROL_VALUE_ACCESSOR, __WEBPACK_IMPORTED_MODULE_5__providers_links_link_provider__["a" /* LinkProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_movie_movie_provider__["a" /* MovieProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_serie_serie_provider__["a" /* SerieProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_5__providers_links_link_provider__["a" /* LinkProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_movie_movie_provider__["a" /* MovieProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_serie_serie_provider__["a" /* SerieProvider */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ver_todo_ver_todo__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__info_info__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_movie_movie_provider__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_movie_movie__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_serie_serie_provider__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_serie_serie__ = __webpack_require__(240);
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
    function InicioPage(navCtrl, modalCtrl, navParams, menuCtrl, comprobarLogin, sanitizer, _movieProvider, _serieProvider) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.comprobarLogin = comprobarLogin;
        this.sanitizer = sanitizer;
        this._movieProvider = _movieProvider;
        this._serieProvider = _serieProvider;
        this.contMovies = 0;
        this.contSeries = 0;
        this.seeAllMovies = false;
        this.seeAllSeries = false;
        this.mensajeSeries = false;
        this.mensajePeliculas = false;
        this.mensajeViewP = 'There are not films in this group';
        this.mensajeViewS = 'There are not series in this group';
        this.mensajeViewPS = 'There are not films and series in this group';
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
        //this.contenedor = navParams.data['data'];
        this.token = localStorage.getItem('token');
        this.movie = new __WEBPACK_IMPORTED_MODULE_7__providers_movie_movie__["a" /* Movie */]('', '', '', '', '', '', '', '', '', '', '', '');
        this.serie = new __WEBPACK_IMPORTED_MODULE_9__providers_serie_serie__["a" /* Serie */]('', '', '', '', '', '', '', '', '', '', '');
    }
    InicioPage.prototype.goToInfo = function (p) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__info_info__["a" /* InfoPage */], {
            contenido: p,
        });
    };
    InicioPage.prototype.goToSeeAll = function (contenido, lista) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ver_todo_ver_todo__["a" /* VerTodoPage */], {
            tipo: contenido,
            array: lista
        });
    };
    InicioPage.prototype.ionViewDidLoad = function () {
        this.identity = this.comprobarLogin.getIdentity();
        this.avatarUrl = this.comprobarLogin.getImageAvatar();
        this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);
    };
    InicioPage.prototype.ngOnInit = function () {
        var _this = this;
        this.identity = this.comprobarLogin.getIdentity();
        this.avatarUrl = this.comprobarLogin.getImageAvatar();
        this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);
        this._movieProvider.getViewedMovie(this.token).subscribe(function (response) {
            _this.listMovieVieweds = [];
            response.views.forEach(function (eleMovie) {
                if (eleMovie.movieViewed) {
                    _this.movie = eleMovie.movieViewed;
                    _this.listMovieVieweds.push(_this.movie);
                }
            });
            if (_this.listMovieVieweds.length > 0) {
                if (_this.listMovieVieweds.length > 3) {
                    _this.mostrarPeliculas = [];
                    for (var index = 0; index < 3; index++) {
                        _this.mostrarPeliculas.push(_this.listMovieVieweds[index]);
                    }
                    _this.seeAllMovies = true;
                }
                else {
                    _this.mostrarPeliculas = [];
                    for (var index = 0; index < _this.listMovieVieweds.length; index++) {
                        _this.mostrarPeliculas.push(_this.listMovieVieweds[index]);
                    }
                }
            }
            else {
                _this.mensajePeliculas = true;
            }
        }, function (err) {
            console.log(err);
        });
        this._serieProvider.getViewedSerie(this.token).subscribe(function (response) {
            _this.listSerieVieweds = [];
            response.views.forEach(function (eleSerie) {
                if (eleSerie.chapter) {
                    _this.serie = eleSerie.chapter;
                    _this.listSerieVieweds.push(_this.serie);
                }
            });
            if (_this.listSerieVieweds.length > 0) {
                if (_this.listSerieVieweds.length > 3) {
                    _this.mostrarSeries = [];
                    for (var index = 0; index < 3; index++) {
                        _this.mostrarSeries.push(_this.listSerieVieweds[index]);
                    }
                    _this.seeAllSeries = true;
                }
                else {
                    _this.mostrarSeries = [];
                    for (var index = 0; index < _this.listSerieVieweds.length; index++) {
                        _this.mostrarSeries.push(_this.listSerieVieweds[index]);
                    }
                }
            }
            else {
                _this.mensajeSeries = true;
            }
        }, function (err) {
            console.log(err);
        });
        this._movieProvider.getLikedMovie(this.token).subscribe(function (response) {
            console.log(response);
            if (response.message) {
                _this.mensajeF = true;
            }
            else {
                _this.listMovieLikeds = [];
                response.views.forEach(function (eleMovie) {
                    if (eleMovie) {
                        _this.movie = eleMovie.chapter;
                        _this.listMovieLikeds.push(_this.movie);
                    }
                });
                if (_this.listMovieLikeds.length > 0) {
                    if (_this.listMovieLikeds.length > 3) {
                        _this.mostrarPeliculasF = [];
                        for (var index = 0; index < 3; index++) {
                            _this.mostrarPeliculasF.push(_this.listMovieLikeds[index]);
                        }
                        _this.seeAllF = true;
                    }
                    else {
                        _this.mostrarPeliculasF = [];
                        for (var index = 0; index < _this.listMovieLikeds.length; index++) {
                            _this.mostrarPeliculasF.push(_this.listMovieLikeds[index]);
                        }
                    }
                }
                else {
                    _this.mensajeF = true;
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    InicioPage.prototype.ngDoCheck = function () {
        this.identity = this.comprobarLogin.getIdentity();
        this.avatarUrl = this.comprobarLogin.getImageAvatar();
        this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\inicio\inicio.html"*/'<page-header></page-header>\n\n<ion-content>\n\n  <ion-list *ngIf="isSearchbarOpened">\n\n    <button ion-item *ngFor="let item of items" (click)="showDetail(item)">\n\n      {{ item }}\n\n    </button>\n\n  </ion-list>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <h1 class="titulo">\n\n               Welcome, {{ identity.nickname }}!\n\n            </h1>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <h3 class="titulo">Movies seen:</h3>\n\n            <a *ngIf="seeAllMovies" class="alinearDerecha" (click)="goToSeeAll(\'visto\', listMovieVieweds)">see all</a>\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-4 *ngFor="let p of mostrarPeliculas">\n\n                <ion-row>\n\n                    \n\n                        <button (click)="goToInfo(p)" class="fotoPelicula" no-padding>\n\n                          <ion-thumbnail item-start>\n\n                            <img [src]="p.poster">\n\n                          </ion-thumbnail>\n\n                        </button>\n\n                      \n\n                </ion-row>\n\n                <ion-row>\n\n                        <h2 class="center">{{ p.title }}</h2>\n\n                </ion-row>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row *ngIf="mensajePeliculas">\n\n                <ion-col>\n\n                  <h2 class="center">{{ mensajeViewP }}</h2>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n\n\n            <h3 class="titulo2">Series seen:</h3>\n\n            <a *ngIf="seeAllSeries" class="alinearDerecha" (click)="goToSeeAll(\'visto\', listSerieVieweds)">see all</a>\n\n            <ion-grid>\n\n                <ion-row>\n\n                  <ion-col col-4 *ngFor="let s of mostrarSeries">\n\n                  <ion-row>\n\n                      \n\n                          <button (click)="goToInfo(s)" class="fotoPelicula" no-padding>\n\n                            <ion-thumbnail item-start>\n\n                              <img [src]="s.poster">\n\n                            </ion-thumbnail>\n\n                          </button>\n\n                        \n\n                  </ion-row>\n\n                  <ion-row>\n\n                          <h2 class="center">{{ s.title }}</h2>\n\n                  </ion-row>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row *ngIf="mensajeSeries">\n\n                  <ion-col>\n\n                    <h2 class="center">{{ mensajeViewS }}</h2>\n\n                  </ion-col>\n\n                </ion-row>\n\n  \n\n              </ion-grid>\n\n          \n\n          <h3 class="titulo2">Favourites films and series:</h3>\n\n          <a *ngIf="seeAllF" class="alinearDerecha" (click)="goToSeeAll(\'favorito\', listSerieVieweds)">see all</a>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-4 *ngFor="let p of mostrarPeliculasF">\n\n                <ion-row>\n\n          \n\n                  <button (click)="goToInfo(p)" class="fotoPelicula" no-padding>\n\n                    <ion-thumbnail item-start>\n\n                      <img [src]="p.poster">\n\n                    </ion-thumbnail>\n\n                  </button>\n\n          \n\n                </ion-row>\n\n                <ion-row>\n\n                  <h2 class="center">{{ p.title }}</h2>\n\n                </ion-row>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row *ngIf="mensajeF">\n\n              <ion-col>\n\n                <h2 class="center">{{ mensajeViewPS }}</h2>\n\n              </ion-col>\n\n            </ion-row>\n\n          \n\n          </ion-grid>\n\n  \n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\inicio\inicio.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_movie_movie_provider__["a" /* MovieProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_serie_serie_provider__["a" /* SerieProvider */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__providers_movie_movie_provider__["a" /* MovieProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_movie_movie_provider__["a" /* MovieProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__providers_serie_serie_provider__["a" /* SerieProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_serie_serie_provider__["a" /* SerieProvider */]) === "function" && _h || Object])
    ], InicioPage);
    return InicioPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GLOBAL; });
var GLOBAL = {
    url: 'http://ec2-18-217-133-241.us-east-2.compute.amazonaws.com:9000/api/'
};
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeliculasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info_info__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_movie_movie_provider__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_movie_movie__ = __webpack_require__(131);
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
    function PeliculasPage(navCtrl, loadingCtrl, navParams, alertCtrl, toastCtrl, contenedorFilms, _movieProvider) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.contenedorFilms = contenedorFilms;
        this._movieProvider = _movieProvider;
        this.structure = { lower: 1990, upper: 2018 };
        this.filter = false;
        this.genre = 'Genre: All';
        this.videoLanguage = 'Video Language: All';
        this.subtitleLanguage = 'Subtitle Language: All';
        this.page = 1;
        this.isSearchbarOpened = false;
        this.iconoIOS1 = 'ios-arrow-dropdown';
        this.iconoAndroid1 = 'md-arrow-dropdown';
        this.iconoIOS = 'ios-arrow-dropdown';
        this.iconoAndroid = 'md-arrow-dropdown';
        this.movie = new __WEBPACK_IMPORTED_MODULE_5__providers_movie_movie__["a" /* Movie */]('', '', '', '', '', '', '', '', '', '', '', '');
        this.token = localStorage.getItem('token');
    }
    PeliculasPage.prototype.ngOnInit = function () {
        var _this = this;
        this._movieProvider.getAllMovies(localStorage.getItem('token'), this.page).subscribe(function (response) {
            _this.listMovie = [];
            if (response.message.length === 0) {
                _this.mensajeVacio = 'No hay peliculas aún';
            }
            else {
                response.message.forEach(function (eleMovie) {
                    _this.listMovie.push(eleMovie);
                });
                console.log(_this.listMovie);
            }
        }, function (error) {
            console.log(error);
        });
    };
    PeliculasPage.prototype.goToInfo = function (p) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__info_info__["a" /* InfoPage */], {
            contenido: p,
            tipo: 'movie'
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
    PeliculasPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this._movieProvider.getAllMovies(localStorage.getItem('token'), this.page).subscribe(function (response) {
            _this.listMovie = [];
            response.message.forEach(function (eleMovie) {
                _this.listMovie.push(eleMovie);
            });
            refresher.complete();
        });
    };
    PeliculasPage.prototype.cambiarIconoSeen = function (fab, movieId) {
        var _this = this;
        this._movieProvider.viewMovie(this.token, movieId).subscribe(function (response) {
            console.log(response);
            _this.iconoIOS = 'ios-eye-off';
            _this.iconoAndroid = 'md-eye-off';
            fab.close();
            _this.mensaje = 'This film has been added to "Seen Group"';
            _this.presentToast(_this.mensaje);
        }, function (err) {
            console.log(err);
        });
    };
    PeliculasPage.prototype.cambiarIconoLike = function (fab, movieId) {
        var _this = this;
        this._movieProvider.getMovieLiked(this.token, movieId).subscribe(function (response) {
            console.log(response);
            _this.iconoIOS = 'ios-heart';
            _this.iconoAndroid = 'md-heart';
            fab.close();
            _this.mensaje = 'This film has been added to "Favourite Group"';
            _this.presentToast(_this.mensaje);
        }, function (err) {
            console.log(err);
        });
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
    PeliculasPage.prototype.moreFilms = function () {
        var _this = this;
        console.log('Array de peliculas1: ', this.listMovie.length);
        this.page = this.page + 1;
        this._movieProvider.getAllMovies(localStorage.getItem('token'), this.page).subscribe(function (response) {
            response.message.forEach(function (eleMovie) {
                _this.listMovie.push(eleMovie);
            });
            if (response.message.length === 0) {
                _this.alert();
            }
        });
        console.log('Array de peliculas2: ', this.listMovie.length);
        console.log('Contenido que trae el server: ', this.contador);
        /*if(this.listMovie.length == this.contador){
          this.alert();
        }*/
    };
    PeliculasPage.prototype.alert = function () {
        this.alertCtrl.create({
            title: 'There was a problem!',
            subTitle: 'There are not more films in our Database',
            buttons: ['OK']
        }).present();
    };
    PeliculasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-peliculas',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\peliculas\peliculas.html"*/'<page-header></page-header>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-card >\n\n    <ion-row>\n\n      <ion-col col-12 class="center">\n\n        <ion-buttons padding-bottom>\n\n          <button ion-button icon-only outline *ngIf="!filter" (click)="filterType()" col-5>\n\n            Show Filters\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-card *ngIf="filter">\n\n\n\n      <ion-item>\n\n        <ion-label>Year: </ion-label>\n\n        <ion-range dualKnobs="true" pin="true" min="1900" max="2020" step="5" snaps="true" [(ngModel)]="structure">\n\n          <ion-icon range-left small ios="ios-time" md="md-time"></ion-icon>\n\n          <ion-icon range-right ios="ios-time" md="md-time"></ion-icon>\n\n        </ion-range>\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n        <ion-label>Films Genre: </ion-label>\n\n        <ion-select [(ngModel)]="genre" interface="popover">\n\n          <ion-option value="Genre: All" selected="true">All</ion-option>\n\n          <ion-option value="Genre: Action and adventure">Action and adventure</ion-option>\n\n          <ion-option value="Genre: Cartoon">Cartoon</ion-option>\n\n          <ion-option value="Genre: Comedy">Comedy</ion-option>\n\n          <ion-option value="Genre: Crime">Crime</ion-option>\n\n          <ion-option value="Genre: Documentary film">Documentary film</ion-option>\n\n          <ion-option value="Genre: Drama">Drama</ion-option>\n\n          <ion-option value="Genre: Fantasy">Fantasy</ion-option>\n\n          <ion-option value="Genre: Mistery">Mistery</ion-option>\n\n          <ion-option value="Genre: Science fiction">Science fiction</ion-option>\n\n          <ion-option value="Genre: Sports">Sports</ion-option>\n\n          <ion-option value="Genre: Terror">Terror</ion-option>\n\n          <ion-option value="Genre: Thriller">Thriller</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n        <ion-label>Video Language: </ion-label>\n\n        <ion-select [(ngModel)]="videoLanguage" interface="popover">\n\n          <ion-option value="Video Language: All" selected="true">All</ion-option>\n\n          <ion-option value="Video Language: English">English</ion-option>\n\n          <ion-option value="Video Language: French">French</ion-option>\n\n          <ion-option value="Video Language: German">German</ion-option>\n\n          <ion-option value="Video Language: Greek">Greek</ion-option>\n\n          <ion-option value="Video Language: Italian">Italian</ion-option>\n\n          <ion-option value="Video Language: Portuguese">Portuguese</ion-option>\n\n          <ion-option value="Video Language: Russian">Russian</ion-option>\n\n          <ion-option value="Video Language: Spanish">Spanish</ion-option>\n\n          <ion-option value="Video Language: Others">Others</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n        <ion-label>Subtitle Language: </ion-label>\n\n        <ion-select [(ngModel)]="subtitleLanguage" interface="popover">\n\n          <ion-option value="Subtitle Language: All" selected="true">All</ion-option>\n\n          <ion-option value="Subtitle Language: English">English</ion-option>\n\n          <ion-option value="Subtitle Language: French">French</ion-option>\n\n          <ion-option value="Subtitle Language: German">German</ion-option>\n\n          <ion-option value="Subtitle Language: Greek">Greek</ion-option>\n\n          <ion-option value="Subtitle Language: Italian">Italian</ion-option>\n\n          <ion-option value="Subtitle Language: Portuguese">Portuguese</ion-option>\n\n          <ion-option value="Subtitle Language: Russian">Russian</ion-option>\n\n          <ion-option value="Subtitle Language: Spanish">Spanish</ion-option>\n\n          <ion-option value="Subtitle Language: Others">Others</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      \n\n      <ion-row>\n\n        <ion-col col-12 class="center">\n\n          <ion-buttons>\n\n            <button ion-button icon-only outline class="center" *ngIf="filter" (click)="loginLoading()" col-5>\n\n              Accept\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-12 class="center">\n\n          <ion-buttons>\n\n            <button ion-button icon-only outline class="center" *ngIf="filter" (click)="filterType2()" col-5>\n\n              Hide Filters\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </ion-card>\n\n    <ion-row>\n\n        <ion-col col-12 class="center" padding-bottom *ngIf="mensajeVacio">\n\n          <h4>{{mensajeVacio}}</h4>\n\n        </ion-col>\n\n      <ion-col col-6 class="center" *ngFor="let p of listMovie">\n\n        <ion-thumbnail item-start col-12>\n\n          <button (click)="goToInfo(p)" class="fotoPelicula" no-padding>\n\n            <img [src]="p.poster">\n\n          </button>\n\n          <h5 class="center">\n\n            {{ p.title }}\n\n            <ion-fab top right edge col-4 #fab>\n\n              <button ion-fab mini class="background">\n\n                <ion-icon [ios]="iconoIOS1" [md]="iconoAndroid1"></ion-icon>\n\n              </button>\n\n              <ion-fab-list>\n\n                <button ion-fab (click)="cambiarIconoSeen(fab, p._id)">\n\n                  <ion-icon ios="ios-eye-off" md="md-eye-off"></ion-icon>\n\n                </button>\n\n                <button ion-fab (click)="cambiarIconoLike(fab, p._id)">\n\n                  <ion-icon ios="ios-heart" md="md-heart"></ion-icon>\n\n                </button>\n\n              </ion-fab-list>\n\n            </ion-fab>\n\n          </h5>\n\n        </ion-thumbnail>\n\n      </ion-col>\n\n      <ion-col col-12 class="center" id="moreButton" *ngIf="!mensajeVacio">\n\n        <button ion-button outline (click)="moreFilms()" col-auto>More</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\peliculas\peliculas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_movie_movie_provider__["a" /* MovieProvider */]])
    ], PeliculasPage);
    return PeliculasPage;
}());

//# sourceMappingURL=peliculas.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerieProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SerieProvider = (function () {
    function SerieProvider(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__global_global__["a" /* GLOBAL */].url;
    }
    SerieProvider.prototype.getAllSeries = function (token, pagina) {
        if (pagina === void 0) { pagina = null; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-type', 'application/json').set('Authorization', token);
        return this._http.get(this.url + 'getallseries/' + pagina, { headers: headers });
    };
    SerieProvider.prototype.viewSerie = function (token, serieId) {
        console.log(token);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-type', 'application/json').set('Authorization', token);
        return this._http.post(this.url + 'viewing/serie/' + serieId, null, { headers: headers });
    };
    SerieProvider.prototype.getViewedSerie = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-type', 'application/json').set('Authorization', token);
        return this._http.get(this.url + 'getallviewing/serie', { headers: headers });
    };
    SerieProvider.prototype.getSerieViewing = function (token, movieId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-type', 'application/json').set('Authorization', token);
        return this._http.get(this.url + 'getallviewing/serie' + movieId, { headers: headers });
    };
    SerieProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SerieProvider);
    return SerieProvider;
}());

//# sourceMappingURL=serie.provider.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mobiscroll_angular__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_provider__ = __webpack_require__(419);
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
    function PerfilPage(navCtrl, navParams, alertCtrl, comprobarLogin, sanitizer, _userProvider, toastCtrl, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.comprobarLogin = comprobarLogin;
        this.sanitizer = sanitizer;
        this._userProvider = _userProvider;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.descripcion = false;
        this.contenidoDescripcion = [];
        this.eventDate = [now, new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 2)];
        this.isBusy = 'busy';
        this.eventText = '';
        this.events = [{
                d: new Date(),
                text: 'New chapter of Mr Robot'
            }];
        this.event = false;
        this.isSearchbarOpened = false;
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
        this.formSettings = {
            theme: 'ios'
        };
    }
    PerfilPage.prototype.ngOnInit = function () {
        this.identity = this.comprobarLogin.getIdentity();
        this.avatarUrl = this.comprobarLogin.getImageAvatar();
        this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.avatarUrl);
    };
    PerfilPage.prototype.actionCamera = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            //la imagen va a estar codificada (base64)
            _this.perfilImg = 'data:image/png;base64,' + imageData;
            _this.trustedUrl = _this.sanitizer.bypassSecurityTrustUrl(_this.perfilImg);
        }, function (err) {
            console.log(err);
        });
    };
    PerfilPage.prototype.accessGallery = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then(function (imageData) {
            _this.perfilImg = 'data:image/jpeg;base64,' + imageData;
            _this.trustedUrl = _this.sanitizer.bypassSecurityTrustUrl(_this.perfilImg);
        }, function (err) {
            console.log(err);
        });
    };
    PerfilPage.prototype.showMethods = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Choose one method',
            message: "Do you want to choose the photo from your mobile's galery or you prefer take a photo?",
            buttons: [
                {
                    text: 'Galery',
                    handler: function () {
                        _this.accessGallery();
                    }
                },
                {
                    text: 'Take a Photo',
                    handler: function () {
                        _this.actionCamera();
                    }
                }
            ]
        });
        confirm.present();
    };
    PerfilPage.prototype.ionViewDidLoad = function () {
        if (!this.perfilImg) {
            this.perfilImg = "assets/imgs/profileNull.png";
        }
    };
    PerfilPage.prototype.newEvent = function () {
        this.event = true;
    };
    PerfilPage.prototype.addEvent = function () {
        this.events.push({
            start: new Date(this.fecha.element.value),
            text: this.eventText || 'New Event',
        });
        this.eventText = '';
        this.eventCal.instance.setVal(new Date(this.fecha.element.value));
        this.event = false;
    };
    ;
    PerfilPage.prototype.closeEvent = function () {
        this.event = false;
    };
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
    PerfilPage.prototype.goToChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
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
                            //this.nuevoUser = [{description: this.contenidoDescripcion}];
                            //this.updateUser(this.nuevoUser);
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
                            _this.nuevoUser = [{ name: _this.nombre }];
                            _this.updateUser(_this.nuevoUser);
                        }
                        var mensaje = 'Your name will be updated when you login in our APP again';
                        _this.presentToast(mensaje);
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
                        _this.nombreUsuario = [];
                        for (var key in data) {
                            _this.nombreUsuario.push(data[key]);
                            _this.nuevoUser = [{ nickname: _this.nombreUsuario }];
                            _this.updateUser(_this.nuevoUser);
                        }
                        var mensaje = 'Your nickname will be updated when you login in our APP again';
                        _this.presentToast(mensaje);
                    }
                }
            ]
        });
        prompt.present();
    };
    PerfilPage.prototype.updateUser = function (user) {
        console.log(user[0]);
        this._userProvider.updateUser(user[0], localStorage.getItem('token'), this.comprobarLogin.getIdentity()._id)
            .subscribe(function (response) {
            console.log(response);
        }, function (err) {
            console.log(err);
        });
    };
    PerfilPage.prototype.presentToast = function (mensaje) {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('mbscRange'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__mobiscroll_angular__["c" /* MbscRange */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__mobiscroll_angular__["c" /* MbscRange */]) === "function" && _a || Object)
    ], PerfilPage.prototype, "range", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('mbscEventCal'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__mobiscroll_angular__["a" /* MbscEventcalendar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__mobiscroll_angular__["a" /* MbscEventcalendar */]) === "function" && _b || Object)
    ], PerfilPage.prototype, "eventCal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('fecha'),
        __metadata("design:type", Object)
    ], PerfilPage.prototype, "fecha", void 0);
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\perfil\perfil.html"*/'<page-header></page-header>\n\n<ion-content>\n\n  <ion-list *ngIf="isSearchbarOpened">\n\n    <button ion-item *ngFor="let item of items" (click)="showDetail(item)">\n\n      {{ item }}\n\n    </button>\n\n  </ion-list>\n\n\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12 *ngIf="trustedUrl">\n\n            <ion-thumbnail item-start>  \n\n              <img  [src]="trustedUrl">\n\n              <ion-fab top right col-3 #fab (click)="showMethods()">\n\n                <button ion-fab mini class="background">\n\n                  <ion-icon ios="ios-camera" md="md-camera"></ion-icon>\n\n                </button>\n\n              </ion-fab>\n\n            </ion-thumbnail>\n\n          </ion-col>\n\n        </ion-row>\n\n        \n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-grid class="center">\n\n              <ion-row>\n\n                <ion-col col-auto>\n\n                  <h2 class="bold">Name: </h2>\n\n                </ion-col>\n\n                <ion-col col-auto>\n\n                  <h2>{{ identity.name }} {{ identity.surname }}</h2>\n\n                </ion-col>\n\n                <ion-col col-auto>\n\n                  <a (click)="nameType()">\n\n                    <ion-icon ios="ios-create" md="md-create"></ion-icon>\n\n                  </a>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-grid class="center">\n\n              <ion-row>\n\n                <ion-col col-auto>\n\n                  <h2 class="bold">Username: </h2>\n\n                </ion-col>\n\n                <ion-col col-auto>\n\n                  <h2>{{ identity.nickname }}</h2>\n\n                </ion-col>\n\n                <ion-col col-auto>\n\n                  <a (click)="userType()">\n\n                    <ion-icon ios="ios-create" md="md-create"></ion-icon>\n\n                  </a>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col col-12 class="center">\n\n            <ion-buttons>\n\n              <button ion-button icon-only clear class="center" *ngIf="!descripcion" (click)="descriptionType()">\n\n                Type your description\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row  *ngIf="descripcion">\n\n          <ion-col col-12>\n\n            <ion-grid class="center">\n\n              <ion-row>\n\n                <ion-col col-auto>\n\n                  <h2 class="center">{{ contenidoDescripcion }}</h2>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      </ion-grid>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card id="bottom">\n\n    <mbsc-eventcalendar [data]="events" [options]="eventSettings" #mbscEventCal="mobiscroll"></mbsc-eventcalendar>\n\n    <ion-row class="center">\n\n      <ion-col col-12 *ngIf="!event">\n\n        <ion-buttons>\n\n          <button ion-button outline (click)="newEvent()">\n\n            New Event\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="event" col-12>\n\n      <mbsc-form [options]="formSettings">\n\n        <div class="mbsc-form-group">\n\n          <ion-item class="label">\n\n            <ion-label>Title of the event</ion-label>\n\n            <ion-input [(ngModel)]="eventText">Title</ion-input>\n\n          </ion-item>\n\n          <ion-item class="label2">\n\n            <mbsc-datetime #fecha id="startDate">Date</mbsc-datetime>\n\n            <div [(ngModel)]="eventDate" mbsc-range [mbsc-options]="rangeSettings" #mbscRange="mobiscroll"></div>\n\n          </ion-item>\n\n        </div>\n\n      </mbsc-form>\n\n      <ion-col col-auto offset-2>\n\n        <ion-buttons>\n\n          <button ion-button outline (click)="addEvent()">\n\n            Add Event\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-col>\n\n      <ion-col col-auto>\n\n        <ion-buttons>\n\n          <button ion-button outline (click)="addEvent()">\n\n            Cancel\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\perfil\perfil.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_login_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_user_provider__["a" /* UserProvider */]]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_login_login__["a" /* LoginProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_login_login__["a" /* LoginProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__providers_user_provider__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_user_provider__["a" /* UserProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]) === "function" && _k || Object])
    ], PerfilPage);
    return PerfilPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registro_registro__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inicio_inicio__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_userLogin__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(24);
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
    function HomePage(navCtrl, navParams, loadingCtrl, alertCtrl, comprobarLogin, _sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.comprobarLogin = comprobarLogin;
        this._sanitizer = _sanitizer;
        this.userLogin = new __WEBPACK_IMPORTED_MODULE_6__models_userLogin__["a" /* UserLogin */]('', '', '', '');
    }
    HomePage.prototype.ngOnInit = function () {
        this.formularioUsuario = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
            pass: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/^[a-zA-Z0-9_-]{4,18}$/)])
        });
        this.avatarUrl = this.comprobarLogin.getImageAvatar();
        this.trustedUrl = this._sanitizer.bypassSecurityTrustUrl(this.avatarUrl);
    };
    HomePage.prototype.goToRegistro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__registro_registro__["a" /* RegistroPage */]);
    };
    HomePage.prototype.alert = function () {
        this.alertCtrl.create({
            title: 'There was a problem!',
            subTitle: 'The email/username or password are not correct',
            buttons: ['OK']
        }).present();
    };
    HomePage.prototype.goToInicio = function () {
        var _this = this;
        this.login = [{ emailNick: this.emailAddress.value, password: this.currentPassword.value, gettoken: null }];
        this.comprobarLogin.loginUsers(this.login).subscribe(function (datos) {
            var contenedor = datos["user"];
            //Modificacion LOGIN Persistencia del usuario y recogida del token Parte I
            localStorage.setItem('user', JSON.stringify(contenedor));
            _this.getToken(contenedor, _this.login);
        }, function (err) {
            _this.alert();
        });
    };
    //Recogemos las estadisticas en cuanto a seguimientos del usuario y la guardamos en LocalStorage para su uso
    HomePage.prototype.getCounter = function (contenedor) {
        var _this = this;
        this.comprobarLogin.getCounter(localStorage.getItem('token')).subscribe(function (response) {
            localStorage.setItem('stats', JSON.stringify(response));
            _this.status = 'Success';
            _this.errorDetails = 'Login successful, enjoy!!';
            _this.comprobarLogin.getAvatar(_this.token, contenedor.image).subscribe(function (response) {
                console.log(response);
                var file = new Blob([response], { type: 'image' });
                var fileURL = URL.createObjectURL(file);
                localStorage.setItem('avatar', fileURL);
                _this.loginLoading(contenedor);
            }, function (err) {
                console.log(err);
            });
        }, function (error) {
            console.log(error);
        });
    };
    //Generamos el token del usuario para que pueda ser usado.
    HomePage.prototype.getToken = function (contenedor, login) {
        var _this = this;
        login[0].gettoken = true;
        console.log(login);
        this.comprobarLogin.loginUsers(this.login).subscribe(function (response) {
            console.log(response);
            _this.token = response["token"];
            if (_this.token.length <= 0) {
                _this.status = 'error';
                _this.errorDetails = 'Error al generar el token';
            }
            else {
                localStorage.setItem('token', _this.token);
                _this.getCounter(contenedor);
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'Error';
                _this.errorDetails = 'User/email or password incorrect, try again!';
            }
        });
    };
    HomePage.prototype.loginLoading = function (contenido) {
        var _this = this;
        this.ngOnInit();
        var loading = this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 2000,
            dismissOnPageChange: true
        });
        loading.present();
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__inicio_inicio__["a" /* InicioPage */], {
                // birthday: contenedor["birthdate"],
                // image: contenedor["image"],
                // name: contenedor["name"],
                // nickname: contenedor["nickname"],
                // role: contenedor["role"],
                // surname: contenedor["surname"],
                data: contenido
            });
        }, 2000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("emailad"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "emailAddress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "currentPassword", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\home\home.html"*/'<ion-content class="vertical-align-content">\n\n  <ion-grid>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n      <!-- Creamos una "tarjeta" en la que vendrá diseñado nuestro formulario de inicio de sesión -->\n\n      <ion-card>\n\n        <!-- Cabecera -->\n\n        <ion-card-header>\n\n          <p class="header">Sign Up</p>\n\n        </ion-card-header>\n\n        <!-- Contenido de nuestro formulario -->\n\n        <ion-card-content>\n\n          <ion-list>\n\n            <!-- Creamos nuestra etiqueta para nuestro formulario, asignándole un nombre de grupo (ID) y una llamada \n\n            a una función de carga mientras comprueba las credenciales (loginLoading)-->\n\n            <form [formGroup]="formularioUsuario" novalidate>\n\n              <ion-item>\n\n                <ion-label floating>Email address</ion-label>\n\n                <!-- Creamos el input para añadir el usuario, y poniendo un id de formulario para sacar el contenido \n\n                de éste-->\n\n                <ion-input type="text" #emailad [(ngModel)]="userLogin.emailNick" name="emailNick" formControlName="email"></ion-input>\n\n              </ion-item>\n\n              <!-- Control de errores de si está rellenando el campo "Password" y el usuario está vacío indique un error -->\n\n              <ion-item *ngIf="formularioUsuario.get(\'email\').errors && formularioUsuario.get(\'email\').dirty">\n\n                <p color="danger" ion-text *ngIf="formularioUsuario.get(\'email\').hasError(\'required\')" class="error">\n\n                  Email is required.\n\n                </p>\n\n                <p color="danger" ion-text *ngIf="formularioUsuario.get(\'email\').hasError(\'pattern\')">\n\n                  It is not an email\n\n                </p>\n\n              </ion-item>\n\n            \n\n              <ion-item>\n\n                <ion-label floating>Password</ion-label>\n\n                <!-- Creamos el input para la contraseña -->\n\n                <ion-input type="password" #password [(ngModel)]="userLogin.password" name="password" formControlName="pass"></ion-input>\n\n              </ion-item>\n\n              <!-- Control de errores de si está vacío, o tiene menos de 10 caracteres, indique un error -->\n\n              <ion-item *ngIf="formularioUsuario.get(\'pass\').errors && formularioUsuario.get(\'pass\').dirty">\n\n                <p color="danger" ion-text *ngIf="formularioUsuario.get(\'pass\').hasError(\'pattern\')" class="error">\n\n                  It is not a strong password.\n\n                </p>\n\n              </ion-item>\n\n\n\n\n\n              <br>\n\n              <!-- Creamos el botón de inicio de sesión, que permanecerá desactivado, hasta que los campos del formulario\n\n              estén correctamente rellenos superando el control de errores -->\n\n              <ion-grid padding-top>\n\n                <ion-row justify-content-center>\n\n                  <div class="col-1" align-self-center>\n\n                    <div>\n\n                      <button ion-button type="submit" [disabled]="!formularioUsuario.valid" (click)="goToInicio()">Submit</button>\n\n                    </div>\n\n                  </div>\n\n                </ion-row>\n\n              </ion-grid>\n\n\n\n              <ion-grid>\n\n                <ion-row justify-content-center padding-top>\n\n                  <div align-self-center>\n\n                    <div>Or</div>\n\n                  </div>\n\n                </ion-row>\n\n                <ion-row justify-content-center padding-top>\n\n                  <div align-self-center>\n\n                    <div>\n\n                      <!-- <a (click)="goToRegistry()"> -->\n\n                      <a (click)="goToRegistro()">\n\n                        <strong>Sign Up Now!</strong>\n\n                      </a>\n\n                    </div>\n\n                  </div>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </form>\n\n          \n\n          </ion-list>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\ProyectoFinalv5\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[379]);
//# sourceMappingURL=main.js.map