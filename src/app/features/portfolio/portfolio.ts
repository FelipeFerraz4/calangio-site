import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio implements OnInit {
  readonly translationService = inject(TranslationService);
  private readonly seoService = inject(SeoService);

  readonly selectedCategory = signal<string>('all');

  readonly filteredProjects = computed(() => {
    const category = this.selectedCategory();
    const all = this.translationService.currentContent().portfolio.projects;
    if (category === 'all') {
      return all;
    }
    return all.filter(p => p.category === category);
  });

  ngOnInit(): void {
    const lang = this.translationService.currentLang();
    this.seoService.updateMetadata({
      title: 'Portfólio de Projetos | Calang.io',
      description: 'Confira o portfólio completo de sistemas web, aplicativos móveis e websites entregues pela Calang.io.',
      url: `https://calangio.com.br/${lang}/portfolio`
    });
  }

  setCategory(catId: string): void {
    this.selectedCategory.set(catId);
  }
}
