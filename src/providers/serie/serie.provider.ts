import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { User } from '../models/user';
import { Serie } from './serie';
import { GLOBAL } from '../global/global';

@Injectable()
export class SerieProvider {
    public url: String;
    public identity: any;

    constructor(private _http: HttpClient) {
        this.url = GLOBAL.url;
    }

    getAllSeries(token: any, pagina = null): Observable<any> {
        let headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', token);

        return this._http.get(this.url + 'getallseries/'+pagina,  {headers: headers});
    }
    viewSerie(token: any, serieId): Observable<any> {
        console.log(token);
        let headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', token);

        return this._http.post(this.url + 'viewing/serie/' + serieId, null, {headers: headers});
    }

    getViewedSerie(token:any): Observable<any>{
        let headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', token);

        return this._http.get(this.url + 'getallviewing/serie',  {headers: headers});
    }
    getSerieViewing(token: any, movieId): Observable<any>{
        let headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', token);

        return this._http.get(this.url + 'getallviewing/serie' + movieId,  {headers: headers});
    }
}