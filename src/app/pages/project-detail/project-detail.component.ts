import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionHeadingComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private projectService = inject(ProjectService);

  project: Project | undefined;
  isLoading = true;

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
}
