# Guia de Integração — Formulário de Contato Calang.io

## Estado Atual
O formulário de contato atual é totalmente funcional na interface (validação visual, seleção de tipo de serviço, orçamento estimado e feedback ao usuário), porém funciona com um envio simulado (mock).

---

## Opções de Integração Futura

### Opção 1: API Backend Própria (Recomendado)
Se você construir uma API backend em Node.js, Python, Java ou outro:
1. Em `src/app/app.config.ts`, adicione `provideHttpClient()` nos `providers`.
2. Crie um serviço `ContactService` em `src/app/core/services/contact.service.ts`:
   ```typescript
   import { Injectable, inject } from '@angular/core';
   import { HttpClient } from '@angular/common/http';
   import { Observable } from 'rxjs';

   export interface ContactFormData {
     name: string;
     email: string;
     phone?: string;
     serviceType: string;
     budget: string;
     message: string;
   }

   @Injectable({ providedIn: 'root' })
   export class ContactService {
     private http = inject(HttpClient);
     private apiUrl = 'https://api.calangio.com.br/v1/contact';

     sendContactForm(data: ContactFormData): Observable<any> {
       return this.http.post(this.apiUrl, data);
     }
   }
   ```
3. No componente `Contact` (`src/app/features/contact/contact.ts`), injete o `ContactService` e chame-o no método `onSubmit()`.

---

### Opção 2: EmailJS / Resend / Formspree (Sem Backend)
Para enviar emails diretamente pelo frontend:
1. Instale o SDK (ex: `@emailjs/browser` ou use `fetch` direto para o Formspree / Resend).
2. Configure as chaves de API em variáveis de ambiente.
3. No método `onSubmit()`, envie os dados para o serviço de email escolhido.

---

### Opção 3: Webhook (Discord / Slack / Telegram)
Ideal para receber notificações instantâneas do site da EJ no canal interno da equipe:
1. Crie um Webhook no Discord/Slack/Telegram.
2. Envie um `POST` com os dados em JSON para a URL do Webhook quando o formulário for enviado.
