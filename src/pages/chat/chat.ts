import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  @ViewChild("content") content: any; //variable para saber la posición del ultimo mensaje enviado
  userName: string = ""; //nombre del usuario
  message: string = ""; //mensaje enviado
  messagesArray = []; //array que contendrá el nombre de usuario y mensaje que traemos del servidor

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getMessages(); //llamamos a esta función siempre que se inicie la vista
  }
  getMessages() {
    var messagesRef = firebase.database().ref().child("mensajes"); //vamos a guardar en esta variable, el 
    //contenido de la carpeta "mensajes" de firebase (nuestro repositorio de datos)

    messagesRef.on("value", (snap) => { //cada vez que haya un cambio en el contenido de la variable 
      //"messagesRef", osea que un usuario envie datos nuevos

      var data = snap.val(); //guardamos el valor de "snap" en la variable data
      this.messagesArray = []; // inicialiamos nuestro array declarado arriba (global para este fichero)
      for(var key in data){ //creamos un bucle for para guardar en el array, todo el contenido de firebase
        this.messagesArray.push(data[key]); //guarda cada información del contenido de firebase, en una 
        //posición del array. Dicha posición la define el contador del bucle for
      }
      this.scrollToBottom(); //con esto llamamos a la función para hacer scroll
    })
  }
  scrollToBottom(){
    var contentEnd = document.getElementById("content-end").offsetTop; //sacamos toda la información del 
    //elemento identificado en el HTML con el id "content-end"
    this.content.scrollTo(0, contentEnd, 300); //decimos que nos haga un scroll automático, hasta la 
    //posición del eje Y que tiene nuestro div con id "content-end", y con un retardo de 300 milisegundos
  }
  sendMessage(){ //función para enviar mensajes
    var messagesRef = firebase.database().ref().child("mensajes"); //sacamos el contenido de "mensajes",
    //nuestra carpeta en nuestro repositorio firebase, para no pisar su contenido
    messagesRef.push({ mensaje: this.message, nombre: this.userName }); //al contenido obtenido del 
    //repositorio explicado arriba, le añadimos el nombre de usuario y el mensaje que quiere enviar (push 
    //al servidor)
    this.message = ""; //y volvemos a dejar la variable que contenía el mensaje a vacío, para que el 
    //input para volver a escribir un nuevo mensaje aparezca vacío
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
