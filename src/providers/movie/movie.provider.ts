import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { User } from '../models/user';
import { Movie } from '../movie/movie';
import { GLOBAL } from '../global/global';

@Injectable()
export class MovieProvider {
    public url: String;
    public identity: any;

    constructor(private _http: HttpClient) {
        this.url = GLOBAL.url;
    }

    getAllMovies(token: any, pagina = null): Observable<any> {
        let headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', token);

        return this._http.get(this.url + 'getallmovies/'+pagina,  {headers: headers});
    }
    viewMovie(token: any, movieId): Observable<any> {
        
        let headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', token);

        return this._http.post(this.url + 'viewing/movie/' + movieId, null, {headers: headers});
    }

    getViewedMovie(token:any): Observable<any>{
        let headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', token);

        return this._http.get(this.url + 'getallviewing/movie',  {headers: headers});
    }
    getViewedNMovie(token:any): Observable<any>{
        let headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', token);

        return this._http.get(this.url + 'get-n-views/movie/3',  {headers: headers});
    }
    getMovieViewing(token: any, movieId): Observable<any>{
        let headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', token);

        return this._http.get(this.url + 'getallviewing/movie' + movieId,  {headers: headers});
    }

    getLikedMovie(token: any): Observable<any> {
        let headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', token);

        return this._http.get(this.url + 'getlikeds', { headers: headers });
    }

    likedMovie(token, movieId): Observable<any>{
        let headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', token);

        return this._http.post(this.url + 'liked/movie/' + movieId, null, {headers: headers});
    }

    getMovieLiked(token: any, movieId): Observable<any> {
        let headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', token);

        return this._http.post(this.url + 'liked/movie/' + movieId, { headers: headers });
    }
    getSearchedMovie(token: any, title): Observable<any>{
        let headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', token);

        return this._http.get(this.url + 'search-movie/' + title, { headers: headers });
    }
    deleteViewed(token, movieId): Observable<any>{
        let headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', token);

        return this._http.delete(this.url + 'delete-view/' + movieId, { headers: headers });
    }
    dislikeMovie(token, movieId): Observable<any> {
        let headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', token);

        return this._http.delete(this.url + 'dislikeds/' + movieId, { headers: headers });
    }
    getLikedNMovie(token:any): Observable<any>{
        let headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', token);

        return this._http.get(this.url + 'get-n-likes/movie/3',  {headers: headers});
    }
    getMoviesGenre(token: any, genre, yearf, yearl): Observable<any>{
        let headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', token);

        return this._http.get(this.url + 'get-movie-genre/' + genre+'/'+yearf+'/'+yearl,  {headers: headers});
    }
    getMoviesYear(token: any, year): Observable<any>{
        let headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', token);

        return this._http.get(this.url + 'get-movie-year/' + year,  {headers: headers});
    }
    getLinks(token, movieId): Observable<any> {
        let headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', token);

        return this._http.get(this.url + 'get-content/' + movieId, { headers: headers });
    }
}
