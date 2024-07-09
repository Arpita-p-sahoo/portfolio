import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from 'services/theme.service';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'portfolio';
  currentTheme!: string;
  themeSubscription!: Subscription;
  constructor(private commonSvc:CommonService) { }
  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.themeSubscription = this.commonSvc.theme$.subscribe(theme => {
      this.currentTheme = theme;
      document.body.className = theme; // Apply theme class to body
    });
  }



}
