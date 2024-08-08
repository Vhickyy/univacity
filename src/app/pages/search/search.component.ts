import { Component, ElementRef, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FilterComponent } from '../../components/filter/filter.component';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../services/search.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Course } from '../../models/types';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FilterComponent,CommonModule,NgxPaginationModule,RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent implements OnInit {

  searchService = inject(SearchService);
  showFilter = false;
  renderer = inject(Renderer2);
  @ViewChild("main") main! : ElementRef;
  totalItems: number = 0;
  itemsPerPage: number = 10;
  currentPage: number = 0;

  ngOnInit(): void {
    this.searchService.filteredCourses$.subscribe(data => {
      this.courses = data;
      this.totalItems = this.courses.length;
      this.currentPage = 1;
    })
  }
  
  courses: Course[] = [];

  toggleFav (id:string) {
    return this.searchService.toggleFav(id);
  }

  toggleFilter () {
    return this.searchService.toggleFilter();
  }

  toggleSideBar(){
    this.showFilter = !this.showFilter;
    if (this.showFilter) {
      this.renderer.removeClass(this.main.nativeElement, 'main2');
      console.log("ssds");
    } else {
      this.renderer.addClass(this.main.nativeElement, 'main2');
      console.log("ssdwqwwaaaaaaaaaas");
    }
  }



}

