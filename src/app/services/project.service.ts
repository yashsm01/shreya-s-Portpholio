import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private http = inject(HttpClient);
  private dataUrl = 'assets/data/projects.json';

  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(this.dataUrl);
  }

  getById(id: string): Observable<Project | undefined> {
    return this.getAll().pipe(
      map(projects => projects.find(p => p.id === id))
    );
  }

  getByCategory(category: string): Observable<Project[]> {
    if (!category || category === 'all') {
      return this.getAll();
    }
    return this.getAll().pipe(
      map(projects => projects.filter(p => p.category === category))
    );
  }

  getFeatured(): Observable<Project[]> {
    return this.getAll().pipe(
      map(projects => projects.filter(p => p.featured))
    );
  }
}
