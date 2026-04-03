import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { FilterBarComponent } from '../../shared/filter-bar/filter-bar.component';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FilterBarComponent, ProjectCardComponent, SectionHeadingComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  private projectService = inject(ProjectService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  projects: Project[] = [];
  activeFilter: string = 'all';

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const filter = params['filter'] || 'all';
      this.activeFilter = filter;
      this.loadProjects(filter);
    });
  }

  loadProjects(category: string) {
    this.projectService.getByCategory(category).subscribe(data => {
      this.projects = data;
    });
  }

  onFilterChange(filterId: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { filter: filterId === 'all' ? null : filterId },
      queryParamsHandling: 'merge'
    });
  }
}
