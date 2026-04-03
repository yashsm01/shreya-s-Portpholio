import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { trigger, transition, animate, style, query, group } from '@angular/animations';

const slideAnimation = trigger('slideAnimation', [
  transition(':increment', [
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ], { optional: true }),
      query(':leave', [
        animate('0.5s ease-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ], { optional: true })
    ])
  ]),
  transition(':decrement', [
    group([
      query(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ], { optional: true }),
      query(':leave', [
        animate('0.5s ease-out', style({ transform: 'translateX(100%)', opacity: 0 }))
      ], { optional: true })
    ])
  ])
]);

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionHeadingComponent, TranslateModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
  animations: [slideAnimation]
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private projectService = inject(ProjectService);
  public translate = inject(TranslateService);

  project: Project | undefined;
  isLoading = true;
  selectedImage: string | null = null;
  currentImageIndex: number = 0;

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

  openLightbox(img: string, index: number) {
    this.selectedImage = img;
    this.currentImageIndex = index;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedImage = null;
    document.body.style.overflow = '';
  }

  prevImage(event: Event) {
    event.stopPropagation();
    if (this.project?.images && this.project.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.project.images.length) % this.project.images.length;
      this.selectedImage = this.project.images[this.currentImageIndex];
    }
  }

  nextImage(event: Event) {
    event.stopPropagation();
    if (this.project?.images && this.project.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
      this.selectedImage = this.project.images[this.currentImageIndex];
    }
  }
}
