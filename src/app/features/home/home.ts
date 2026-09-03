import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  readonly translationService = inject(TranslationService);
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    const lang = this.translationService.currentLang();
    this.seoService.updateMetadata({
      title: 'Calang.io | Empresa Júnior de Desenvolvimento de Software — UFCA',
      description: 'Desenvolvimento de sites, aplicativos e sistemas sob medida com a qualidade da EJ de Ciência da Computação da UFCA.',
      url: `https://calangio.com.br/${lang}`
    });
  }
}
