import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bio } from '../model/bio';

@Injectable({
  providedIn: 'root'
})
export class BioService {

  constructor(private http: HttpClient) { }

  getBio():Observable<Bio[]> {
    return this.http.get<Bio[]>('assets/json/bio.json');
   }
}
