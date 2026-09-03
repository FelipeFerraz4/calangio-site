import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit {
  readonly translationService = inject(TranslationService);
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    const lang = this.translationService.currentLang();
    this.seoService.updateMetadata({
      title: 'Sobre a Calang.io | Empresa Júnior de Ciência da Computação UFCA',
      description: 'Conheça a história, missão, visão e valores da Calang.io, a empresa júnior de tecnologia da Universidade Federal do Cariri.',
      url: `https://calangio.com.br/${lang}/sobre`
    });
  }
}
