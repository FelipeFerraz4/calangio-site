import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terms.html',
  styleUrl: './terms.css'
})
export class Terms implements OnInit {
  readonly translationService = inject(TranslationService);
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    const lang = this.translationService.currentLang();
    this.seoService.updateMetadata({
      title: 'Termos de Uso | Calang.io',
      description: 'Termos e Condições de Uso do site da Calang.io.',
      url: `https://calangio.com.br/${lang}/termos`
    });
  }
}
