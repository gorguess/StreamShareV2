import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../global/global';

@Injectable()
export class LinkProvider {
    url: any;
constructor(private http: HttpClient) {
    this.url = GLOBAL.url;
}
    getLinks(token, idContent): Observable<any> {
        let headers = new HttpHeaders().set('Authorization', token).set('Content-type', 'application/json');

        return this.http.get(this.url + 'get-links/' + idContent, {headers: headers});
    }

    getContent(token, contentURI): Observable<Blob>{
        let headers = new HttpHeaders().set('Authorization', token).set('Content-type', 'application/json');
        console.log(this.http.get(this.url + 'get-content/' + contentURI, {headers: headers, responseType: 'blob'}))
        return this.http.get(this.url + 'get-content/' + contentURI, {headers: headers, responseType: 'blob'});
    }
}