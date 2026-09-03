import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

export interface SeoData {
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: string;
  keywords?: string;
  author?: string;
  robots?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly defaultSiteName = 'Calang.io';
  private readonly defaultImage = '/assets/images/calangio-logo-oficial.svg';
  private readonly baseUrl = 'https://calangio.com.br';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  updateMetadata(data: SeoData): void {
    const {
      title,
      description,
      image = this.defaultImage,
      url,
      type = 'website',
      keywords = 'Calang.io, Empresa Júnior, UFCA, Desenvolvimento de Software, Sites, Apps, Sistemas',
      author = 'Calang.io',
      robots = 'index, follow'
    } = data;

    const fullTitle = title.includes(this.defaultSiteName)
      ? title
      : `${title} | ${this.defaultSiteName}`;

    // Standard SEO Meta Tags
    this.titleService.setTitle(fullTitle);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'robots', content: robots });
    this.metaService.updateTag({ name: 'author', content: author });
    this.metaService.updateTag({ name: 'keywords', content: keywords });

    // Open Graph Meta Tags
    this.metaService.updateTag({ property: 'og:site_name', content: this.defaultSiteName });
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:image', content: image });
    this.metaService.updateTag({ property: 'og:type', content: type });
    this.metaService.updateTag({ property: 'og:url', content: url });

    // Twitter Card Meta Tags
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
    this.metaService.updateTag({ name: 'twitter:image', content: image });

    // Canonical URL update
    this.updateCanonicalUrl(url);

    // Hreflang Tags for Multilingual SEO
    this.updateHreflangTags(url);
  }

  private updateCanonicalUrl(url: string): void {
    if (isPlatformBrowser(this.platformId)) {
      let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    }
  }

  private updateHreflangTags(currentUrl: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const urlPath = currentUrl.replace(/^https?:\/\/[^\/]+/, '');
      const segments = urlPath.split('/').filter(Boolean);

      if (segments.length > 0 && (segments[0] === 'pt' || segments[0] === 'en')) {
        segments.shift();
      }

      const pathWithoutLang = segments.length > 0 ? '/' + segments.join('/') : '';
      const ptUrl = `${this.baseUrl}/pt${pathWithoutLang}`;
      const enUrl = `${this.baseUrl}/en${pathWithoutLang}`;

      const languages = [
        { lang: 'pt', href: ptUrl },
        { lang: 'en', href: enUrl },
        { lang: 'x-default', href: ptUrl }
      ];

      languages.forEach(({ lang, href }) => {
        let link: HTMLLinkElement | null = document.querySelector(`link[rel='alternate'][hreflang='${lang}']`);
        if (!link) {
          link = document.createElement('link');
          link.setAttribute('rel', 'alternate');
          link.setAttribute('hreflang', lang);
          document.head.appendChild(link);
        }
        link.setAttribute('href', href);
      });
    }
  }
}
