import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProjectService } from '../../services/project.service';
import { Publication } from '../../models/publication.model';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class PublicationsComponent implements OnInit {
  publications: Publication[] = [];
  currentLang: string = 'en';

  constructor(
    private projectService: ProjectService,
    private translate: TranslateService
  ) {
    this.currentLang = this.translate.currentLang || 'en';
    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }

  ngOnInit(): void {
    this.projectService.getPublications().subscribe(data => {
      this.publications = data.sort((a, b) => b.year - a.year);
    });
  }

  getTranslateKey(publication: Publication, key: 'title' | 'description'): string {
    return (publication as any)[`${key}_${this.currentLang}`] || (publication as any)[`${key}_en`];
  }
}
