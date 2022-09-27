import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = 'http://openshift-spring-boot-services-git-ftaylor92-dev.apps.sandbox.x8i5.p1.openshiftapps.com/books';

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  addBook(book: Object): Observable<Object> {
    return this.http.post(`${this.url}`, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  }
}
