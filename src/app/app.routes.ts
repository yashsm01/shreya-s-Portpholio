import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: '**', redirectTo: '' }
];
