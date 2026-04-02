import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FilterOption {
  id: string;
  label: string;
}

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.scss'
})
export class FilterBarComponent {
  @Input() activeFilter: string = 'all';
  @Output() filterChange = new EventEmitter<string>();

  filters: FilterOption[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'urban', label: 'Urban Design' },
    { id: 'healthcare', label: 'Healthcare Architecture' },
    { id: 'landuse', label: 'Landuse Planning' },
    { id: 'gis', label: 'GIS Analysis' },
    { id: 'buildings', label: 'Residential & Commercial' }
  ];

  setFilter(id: string): void {
    this.activeFilter = id;
    this.filterChange.emit(id);
  }
}
