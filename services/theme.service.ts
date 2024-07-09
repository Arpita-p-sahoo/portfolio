import { Injectable, Signal, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themeSubject: BehaviorSubject<string> = new BehaviorSubject<string>('light-theme'); // Default theme
  theme$: Observable<string> = this.themeSubject.asObservable();

  setTheme(theme: string) {
    this.themeSubject.next(theme);
  }
}
