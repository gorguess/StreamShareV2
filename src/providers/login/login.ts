import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../global/global';

@Injectable()
export class LoginProvider {

    imagen: string;
    identity: any;
    token: any;
    stats: any;
    url: any;
constructor(private http: HttpClient) {
    this.url = GLOBAL.url;
}

  getUsers() {
    return this.http.get(this.url + 'pruebas');
  }

  loginUsers(login: Array<any>) {
    return this.http.post(this.url + 'login',
    { 'emailNick': login[0].emailNick, 'password': login[0].password, 'gettoken': login[0].gettoken });
  }

  registerUsers(register: Array<any>) {
    return this.http.post(this.url + 'register',
      { 'name': register[0].name, 'surname': register[0].surname, 'nickname': register[0].nickname, 'email': register[0].email, 'password': register[0].password});
  }

  //Saber en todo momento el usuario que tenemos en uso 
  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('user'));

    if (identity !== 'undefined') {
        this.identity = identity;
    } else {
        this.identity = null;
    }

    return this.identity;
}

    //Rescatar en cualquier momento nuestro token validado para las peticiones
    getToken() {
        let token = JSON.parse(localStorage.getItem('token'));

        if (token !== 'undefined') {
            this.token = token;
        } else {
            this.token = null;
        }

        return this.token;
    }

    //Actualizacion del estado de las estadisticas
    getStats() {
        let stats = JSON.parse(localStorage.getItem('stats'));

        if (stats !== undefined) {
            this.stats = stats;
        } else {
            this.stats = null;
        }
        return stats;
    }

    //Coger los datos del usuario de la API
    getCounter(token: any, userId = null): Observable<any> {
        let headers = new HttpHeaders().set('Authorization', token).set('Content-type', 'application/json');
        if (userId != null) {
            return this.http.get(this.url + 'counters/' + userId, {headers: headers});
        } else {
            return this.http.get(this.url + 'counters', {headers: headers});
        }
    }

    getAvatar(token, imageId): Observable<Blob> {
        console.log(token + '----' + imageId);
        let headers = new HttpHeaders().set('Authorization', token).set('Content-type', 'application/json');

        return this.http.get(this.url + 'profile-image/' + imageId, {headers: headers, responseType: 'blob'});
            
    }

    getImageAvatar(){
        let imagen = localStorage.getItem('avatar');

        if (imagen !== 'undefined') {
            this.imagen = imagen;
        } else {
            this.imagen = null;
        }
        return this.imagen;
    }
}
