import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionHeadingComponent, TranslateModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private projectService = inject(ProjectService);
  public translate = inject(TranslateService);

  project: Project | undefined;
  isLoading = true;
  selectedImage: string | null = null;

  get title() { return this.translate.currentLang === 'fr' ? this.project?.title_fr : this.project?.title_en; }
  get categoryLabel() { return this.translate.currentLang === 'fr' ? this.project?.categoryLabel_fr : this.project?.categoryLabel_en; }
  get description() { return this.translate.currentLang === 'fr' ? this.project?.description_fr : this.project?.description_en; }
  get location() { return this.translate.currentLang === 'fr' ? (this.project?.location_fr || this.project?.location_en) : this.project?.location_en; }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadProject(id);
      } else {
        this.router.navigate(['/projects']);
      }
    });
  }

  loadProject(id: string) {
    this.isLoading = true;
    this.projectService.getById(id).subscribe(data => {
      if (data) {
        this.project = data;
        // Scroll to top when loading new project
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        this.router.navigate(['/projects']);
      }
      this.isLoading = false;
    });
  }

  openLightbox(img: string) {
    this.selectedImage = img;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedImage = null;
    document.body.style.overflow = '';
  }
}
