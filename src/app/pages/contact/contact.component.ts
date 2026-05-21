import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public translate = inject(TranslateService);

  contacts = [
    {
      type: 'whatsapp',
      label: 'WhatsApp',
      value: '+1 236 868 6649',
      href: 'https://wa.me/12368686649',
      icon: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 4l-1.5 6.5Z'
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/srushtimodi',
      href: 'https://www.linkedin.com/in/srushtimodi',
      icon: null
    },
    {
      type: 'instagram',
      label: 'Instagram',
      value: '@srushti_surti_modi',
      href: 'https://www.instagram.com/srushti_surti_modi',
      icon: null
    },
    {
      type: 'behance',
      label: 'Behance',
      value: 'behance.net/srushtimodi',
      href: 'https://behance.net',
      icon: null
    }
  ];
}
