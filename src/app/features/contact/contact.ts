import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {
  readonly translationService = inject(TranslationService);
  private readonly seoService = inject(SeoService);

  formData = {
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    budget: '',
    message: ''
  };

  readonly isSubmitting = signal<boolean>(false);
  readonly isSubmitted = signal<boolean>(false);

  ngOnInit(): void {
    const lang = this.translationService.currentLang();
    this.seoService.updateMetadata({
      title: 'Contato & Orçamento | Calang.io — UFCA',
      description: 'Entre em contato com a Calang.io e solicite um orçamento sem compromisso para o seu projeto de software.',
      url: `https://calangio.com.br/${lang}/contato`
    });
  }

  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }

    this.isSubmitting.set(true);

    // Simulate form submission delay
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);

      // Reset form fields
      this.formData = {
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        budget: '',
        message: ''
      };
    }, 1200);
  }
}
