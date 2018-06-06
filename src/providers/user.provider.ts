import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { GLOBAL } from './global/global';

@Injectable()
export class UserProvider {

    imagen: string;
    identity: any;
    token: any;
    stats: any;
    url: any;
constructor(private http: HttpClient) {
    this.url = GLOBAL.url;
}
    updateUser(userUp: Array<any>, token, id): Observable<any>{
        let headers = new HttpHeaders().set('Authorization', token).set('Content-type', 'application/json');
        console.log(userUp);
        return this.http.put(this.url + 'update-user/' + id, userUp, {headers: headers});
    }
}