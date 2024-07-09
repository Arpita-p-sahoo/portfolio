import { Component, Renderer2 } from '@angular/core';
import { CommonService } from '../common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  currentTheme!: string;
  themeSubscription!: Subscription;
  constructor(private renderer: Renderer2,private common:CommonService) { }
  isMobileMenuOpen = false;
  isProfileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.common.setTheme(newTheme);
  }

}
