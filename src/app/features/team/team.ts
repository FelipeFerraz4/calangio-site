import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './team.html',
  styleUrl: './team.css'
})
export class Team implements OnInit {
  readonly translationService = inject(TranslationService);
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    const lang = this.translationService.currentLang();
    this.seoService.updateMetadata({
      title: 'Nossa Equipe | Calang.io — UFCA',
      description: 'Conheça a equipe de diretores, líderes e desenvolvedores da Calang.io.',
      url: `https://calangio.com.br/${lang}/equipe`
    });
  }
}
