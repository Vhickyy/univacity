import { Component, inject, Input } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { FilterOptions } from '../../models/types';
import { CommonModule } from '@angular/common';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule,NgxSliderModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  searchService = inject(SearchService);
  filters = this.searchService.filters;
  @Input() showFilter!: boolean;
  languages = this.searchService.languages;
  attendance = this.searchService.attendance;
  studyType = this.searchService.types;
  levels = this.searchService.levels;

  minValue: number = 4500;
  maxValue: number = 7000;

  options: Options = {
    floor: 4500,
    ceil: 7000,
    step: 1,
    translate: (value: number): string => {
      return '$' + value;
    }
  };

  onFilterChange(filterType: keyof FilterOptions, filterValue: string){
    console.log("hey");
    
    this.searchService.onFilterChange(filterType,filterValue);
  }

}
