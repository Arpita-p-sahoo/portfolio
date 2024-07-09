import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThemeService } from 'services/theme.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  currentTheme = 'light-theme';
  // themeService!: ThemeService;
  
  private themeSubject: BehaviorSubject<string> = new BehaviorSubject<string>('light-theme'); // Default theme
  theme$: Observable<string> = this.themeSubject.asObservable();

  constructor(private http:HttpClient) { }
  private url = 'https://v1.nocodeapi.com/arpita/medium/lDpkExdsptxWGvqO';
  
  getData():Observable<any>{
    return this.http.get<any>(this.url);
  }


 
  setTheme(theme: string) {
    this.themeSubject.next(theme);
  }

}
