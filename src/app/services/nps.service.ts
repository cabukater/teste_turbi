import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nps } from '../core/nps.model';
import { Observable } from 'rxjs/Observable';




@Injectable({
  providedIn: 'root'
})
export class NpsService {

  constructor(private http: HttpClient) {}


    listNps() {
      return this.http.get<Nps>('http://www.mocky.io/v2/5c2ca9e62e0000c029e876ea', {
        });
      }

}
