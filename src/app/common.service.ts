import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  currentTheme = 'default';
  constructor(private http:HttpClient) { }
  private url = 'https://v1.nocodeapi.com/arpita/medium/lDpkExdsptxWGvqO';
  
  getData():Observable<any>{
    return this.http.get<any>(this.url);
  }


}
