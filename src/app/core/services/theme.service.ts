import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  readonly isDark = signal<boolean>(true);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const storedTheme = localStorage.getItem('calangio_theme');
      if (storedTheme) {
        this.isDark.set(storedTheme === 'dark');
      } else {
        // Default to Dark Mode
        this.isDark.set(true);
      }
      this.applyTheme();
    }
  }

  toggleTheme(): void {
    this.isDark.update(val => !val);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('calangio_theme', this.isDark() ? 'dark' : 'light');
      this.applyTheme();
    }
  }

  private applyTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.setAttribute('data-theme', this.isDark() ? 'dark' : 'light');
    }
  }
}
