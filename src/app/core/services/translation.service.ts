import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { homeContent as homePt } from '../content/pt/home';
import { servicesContent as servicesPt } from '../content/pt/services';
import { portfolioContent as portfolioPt } from '../content/pt/portfolio';
import { aboutContent as aboutPt } from '../content/pt/about';
import { teamContent as teamPt } from '../content/pt/team';
import { contactContent as contactPt } from '../content/pt/contact';
import { privacyContent as privacyPt } from '../content/pt/privacy';
import { termsContent as termsPt } from '../content/pt/terms';
import { footerContent as footerPt } from '../content/pt/footer';

import { homeContent as homeEn } from '../content/en/home';
import { servicesContent as servicesEn } from '../content/en/services';
import { portfolioContent as portfolioEn } from '../content/en/portfolio';
import { aboutContent as aboutEn } from '../content/en/about';
import { teamContent as teamEn } from '../content/en/team';
import { contactContent as contactEn } from '../content/en/contact';
import { privacyContent as privacyEn } from '../content/en/privacy';
import { termsContent as termsEn } from '../content/en/terms';
import { footerContent as footerEn } from '../content/en/footer';

export type Language = 'pt' | 'en';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly location = inject(Location);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly currentLang = signal<Language>('pt');

  private readonly dictionary = {
    pt: {
      nav: {
        home: 'Início',
        services: 'Serviços',
        portfolio: 'Portfólio',
        about: 'Sobre Nós',
        team: 'Equipe',
        contact: 'Contato',
        login: 'Entrar',
        toastTitle: 'Área de Membros em Breve!',
        toastDesc: 'A integração com Keycloak para autenticação de clientes e membros será lançada em breve.'
      },
      footer: footerPt,
      home: homePt,
      services: servicesPt,
      portfolio: portfolioPt,
      about: aboutPt,
      team: teamPt,
      contact: contactPt,
      privacy: privacyPt,
      terms: termsPt
    },
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        portfolio: 'Portfolio',
        about: 'About Us',
        team: 'Team',
        contact: 'Contact',
        login: 'Login',
        toastTitle: 'Members Area Coming Soon!',
        toastDesc: 'Keycloak integration for clients and members authentication will be launched soon.'
      },
      footer: footerEn,
      home: homeEn,
      services: servicesEn,
      portfolio: portfolioEn,
      about: aboutEn,
      team: teamEn,
      contact: contactEn,
      privacy: privacyEn,
      terms: termsEn
    }
  };

  readonly currentContent = computed(() => {
    return this.dictionary[this.currentLang()];
  });

  constructor() {
    this.syncLanguageFromUrl(this.location.path());

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.syncLanguageFromUrl(event.urlAfterRedirects || event.url);
    });
  }

  private syncLanguageFromUrl(path: string): void {
    const segments = path.split('/').filter(Boolean);
    if (segments.length > 0) {
      const firstSegment = segments[0];
      if (firstSegment === 'pt' || firstSegment === 'en') {
        if (this.currentLang() !== firstSegment) {
          this.currentLang.set(firstSegment as Language);
        }
      }
    }
  }

  setLanguage(lang: Language): void {
    const currentUrl = this.router.url;
    const segments = currentUrl.split('/').filter(Boolean);

    if (segments.length > 0 && (segments[0] === 'pt' || segments[0] === 'en')) {
      segments[0] = lang;
    } else {
      segments.unshift(lang);
    }

    const newUrl = '/' + segments.join('/');
    this.currentLang.set(lang);
    if (this.isBrowser) {
      localStorage.setItem('calangio_lang', lang);
    }
    this.router.navigateByUrl(newUrl);
  }

  toggleLanguage(): void {
    this.setLanguage(this.currentLang() === 'pt' ? 'en' : 'pt');
  }
}
