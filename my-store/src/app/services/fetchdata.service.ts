
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {
  datasel:Array<any>=[]
  constructor(private http: HttpClient) { }

  Fetchdata():Observable<[]>{
    return this.http.get<[]>("./assets/data.json")
  }
}


