import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = 'https://springboot-webservice-simplest-git-ftaylor92-dev.apps.sandbox.x8i5.p1.openshiftapps.com/books';

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<any> {
    return this.http.get(this.url, {headers: headers});
  }

  addBook(book: Object): Observable<Object> {
    return this.http.post(this.url, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id, {headers: headers, responseType: 'text'});
  }
}
