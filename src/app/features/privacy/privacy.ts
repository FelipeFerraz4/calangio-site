import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css'
})
export class Privacy implements OnInit {
  readonly translationService = inject(TranslationService);
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    const lang = this.translationService.currentLang();
    this.seoService.updateMetadata({
      title: 'Política de Privacidade | Calang.io',
      description: 'Política de Privacidade e Proteção de Dados (LGPD) da Calang.io.',
      url: `https://calangio.com.br/${lang}/privacidade`
    });
  }
}
