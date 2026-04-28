import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Project } from '../../models/project.model';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
  public translate = inject(TranslateService);

  get title() { return this.translate.currentLang === 'fr' ? this.project.title_fr : this.project.title_en; }
  get categoryLabel() { return this.translate.currentLang === 'fr' ? this.project.categoryLabel_fr : this.project.categoryLabel_en; }
  get shortDescription() { return this.translate.currentLang === 'fr' ? this.project.shortDescription_fr : this.project.shortDescription_en; }
  get location() { return this.translate.currentLang === 'fr' ? this.project.location_fr : this.project.location_en; }
  get role() { return this.translate.currentLang === 'fr' ? this.project.role_fr : this.project.role_en; }
}
