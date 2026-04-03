import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

export interface FilterOption {
  id: string;
  label: string;
}

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.scss'
})
export class FilterBarComponent {
  @Input() activeFilter: string = 'all';
  @Output() filterChange = new EventEmitter<string>();

  filters: FilterOption[] = [
    { id: 'all', label: 'PROJECTS.ALL' },
    { id: 'urban', label: 'PROJECTS.URBAN' },
    { id: 'healthcare', label: 'PROJECTS.HEALTHCARE' },
    { id: 'landuse', label: 'PROJECTS.LANDUSE' },
    { id: 'gis', label: 'PROJECTS.GIS' },
    { id: 'buildings', label: 'PROJECTS.BUILDINGS' }
  ];

  setFilter(id: string): void {
    this.activeFilter = id;
    this.filterChange.emit(id);
  }
}
