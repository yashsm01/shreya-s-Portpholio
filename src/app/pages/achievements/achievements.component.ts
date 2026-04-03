import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { Achievement } from '../../models/achievement.model';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, TranslateModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss',
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
export class AchievementsComponent implements OnInit {
  private projectService = inject(ProjectService);
  public translate = inject(TranslateService);

  achievements: Achievement[] = [];
  currentLang: string = 'en';

  ngOnInit() {
    this.currentLang = this.translate.currentLang || 'en';
    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });

    this.projectService.getAchievements().subscribe(data => {
      // Sort by year descending
      this.achievements = data.sort((a, b) => b.year - a.year);
    });
  }

  getTranslateKey(achievement: Achievement, key: 'title' | 'description'): string {
    return (achievement as any)[`${key}_${this.currentLang}`] || (achievement as any)[`${key}_en`];
  }
}
