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
      degree: 'EXPERIENCE.EDU_1_DEGREE',
      institution: 'SCET University, India',
      notes: null
    },
    {
      period: '2019 – 2021',
      degree: 'EXPERIENCE.EDU_2_DEGREE',
      institution: 'VNSGU University, India',
      notes: ['EXPERIENCE.EDU_NOTE_1', 'EXPERIENCE.EDU_NOTE_2']
    },
    {
      period: '2023 – 2024',
      degree: 'EXPERIENCE.EDU_3_DEGREE',
      institution: 'University of Maryland, USA',
      notes: null
    },
    {
      period: '2024 – 2025',
      degree: 'EXPERIENCE.EDU_4_DEGREE',
      institution: 'BCIT, Canada',
      notes: null
    },
    {
      period: '2025 – 2026',
      degree: 'EXPERIENCE.EDU_5_DEGREE',
      institution: 'BCIT, Canada',
      notes: null
    }
  ];

  jobs = [
    {
      period: '2025 – Present',
      title: 'EXPERIENCE.JOB_1_TITLE',
      company: 'Canada',
      tags: ['EXPERIENCE.JOB_1_TAG_1', 'PIBC', 'ULI BC'],
      projects: ['Montreal Meditation Retreat Project']
    },
    {
      period: '2021 – 2024',
      title: 'EXPERIENCE.JOB_2_TITLE',
      company: 'A.M.R.D Corporation',
      tags: [],
      projects: ['Surat 2035', '600,000 sq.m Oman Masterplan', 'TOD Frameworks']
    },
    {
      period: '2018 – 2021',
      title: 'EXPERIENCE.JOB_3_TITLE',
      company: 'A.M.R.D Corporation',
      tags: [],
      projects: ['900-bed Medical Campus', '70-storey Tower', '2,100+ COVID Beds']
    },
    {
      period: '2016 – 2018',
      title: 'EXPERIENCE.JOB_4_TITLE',
      company: 'Mamta Shah & Associates',
      tags: [],
      projects: ['GSRTC Bus Depots', 'Sardar Sarovar Public Edge', 'Rural School Campuses']
    }
  ];
}
