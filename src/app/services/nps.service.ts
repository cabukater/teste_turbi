import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nps } from './../models/nps/nps.model';
import { Observable } from 'rxjs/Observable';




@Injectable({
  providedIn: 'root'
})
export class NpsService {
  private readonly API = 'http://www.mocky.io/v2/5c2ca9e62e0000c029e876ea';
  constructor(private http: HttpClient) {}

  listNps(): Observable<Nps>  {
    return this.http.get<Nps>(this.API);

    }
    listMdfe() {
      return this.http.get<Nps>(this.API, {
        });
      }

}
