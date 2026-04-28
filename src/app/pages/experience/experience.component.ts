import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslateModule, SectionHeadingComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  public translate = inject(TranslateService);

  education = [
    {
      period: '2013 – 2018',
      degree: 'Bachelor of Architecture & Planning',
      institution: 'SCET University, India',
      notes: null
    },
    {
      period: '2019 – 2021',
      degree: 'Master of Urban & Regional Planning',
      institution: 'VNSGU University, India',
      notes: ['COA National Gold Medal (Thesis)', 'University Medal']
    },
    {
      period: '2023 – 2024',
      degree: 'Project Management Foundations',
      institution: 'University of Maryland, USA',
      notes: null
    },
    {
      period: '2024 – 2025',
      degree: 'Land Use Planning & Development Certificate',
      institution: 'BCIT, Canada',
      notes: null
    },
    {
      period: '2025 – 2026',
      degree: 'Advanced Certificate – Geographic Information Systems (GIS)',
      institution: 'BCIT, Canada',
      notes: null
    }
  ];

  jobs = [
    {
      period: '2025 – Present',
      title: 'Planning & Design Practice',
      company: 'Canada',
      tags: ['Vancouver-based', 'PIBC', 'ULI BC'],
      projects: ['Montreal Meditation Retreat Project']
    },
    {
      period: '2021 – 2024',
      title: 'Urban Planner & GIS Analyst',
      company: 'A.M.R.D Corporation',
      tags: [],
      projects: ['Surat 2035', '600,000 sq.m Oman Masterplan', 'TOD Frameworks']
    },
    {
      period: '2018 – 2021',
      title: 'Architect',
      company: 'A.M.R.D Corporation',
      tags: [],
      projects: ['900-bed Medical Campus', '70-storey Tower', '2,100+ COVID Beds']
    },
    {
      period: '2016 – 2018',
      title: 'Architectural Intern',
      company: 'Mamta Shah & Associates',
      tags: [],
      projects: ['GSRTC Bus Depots', 'Sardar Sarovar Public Edge', 'Rural School Campuses']
    }
  ];
}
