import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslationService } from '../../../core/services/translation.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  readonly translationService = inject(TranslationService);
  readonly themeService = inject(ThemeService);

  readonly isMobileMenuOpen = signal<boolean>(false);
  readonly isScrolled = signal<boolean>(false);
  readonly showLoginToast = signal<boolean>(false);

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (typeof window !== 'undefined') {
      this.isScrolled.set(window.scrollY > 20);
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleLang(): void {
    this.translationService.toggleLanguage();
  }

  onLoginClick(): void {
    this.showLoginToast.set(true);
    setTimeout(() => {
      this.showLoginToast.set(false);
    }, 4000);
  }
}
