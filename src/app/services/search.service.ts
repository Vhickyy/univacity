import { Injectable } from '@angular/core';
import { Course, FilterOptions } from '../models/types';
import { BehaviorSubject, map } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })

export class SearchService {
  

  constructor() { }

  showFilter = true;

  toggleFilter () {
    console.log("heui",this.showFilter);
    
    this.showFilter = !this.showFilter
  }

  courses : Course[] = [
    {
      id: "1",
      university: "University of Ibadan",
      country: {
        flag: "../../../assets/nigeria.svg",
        name: "Nigeria"
      },
      isFav: false,
      official:true,
      courseTitle: "Illustration Design",
      date: "18th June, 2023",
      learn: "E-Learning",
      level: "Undergraduate",
      duration: {
        type: "Full time",
        year: "4 years"
      },
      language: [
        {
          abbr: "ENG",
          name: "England",
          img: "../../../assets/england.svg"  
        }
      ]
    },
    {
      id: "2",
      university: "European Institute of Inno...",
      country: {
        flag: "../../../assets/spain.svg",
        name: "Spain"
      },
      isFav: false,
      official:false,
      courseTitle: "Illustration Design",
      date: "18th June, 2023",
      learn: "Hybrid",
      level: "Masters",
      duration: {
        type: "Full time",
        year: "4 years"
      },
      language: [
        {
          abbr: "ENG",
          img: "../../../assets/england.svg" ,
          name: "England",
        }
      ]
    },
    {
      id: "3",
      university: "Harvard University",
      country: {
        flag: "../../../assets/england.svg",
        name: "UNITED STATES"
      },
      isFav: true,
      official:true,
      courseTitle: "Illustration Design",
      date: "18th June, 2023",
      learn: "E-Learning",
      level: "Undergraduate",
      duration: {
        type: "Full time",
        year: "4 years"
      },
      language: [
        {
          abbr: "ENG",
          img: "../../../assets/england.svg",
          name: "England",
        }
      ]
    },
    {
      id: "4",
      university: "European Institute of Inno...",
      country: {
        flag: "../../../assets/spain.svg",
        name: "Spain"
      },
      isFav: false,
      official:false,
      courseTitle: "Illustration Design",
      date: "18th June, 2023",
      learn: "Hybrid",
      level: "Masters",
      duration: {
        type: "Full time",
        year: "4 years"
      },
      language: [
        {
          abbr: "ENG",
          img: "../../../assets/england.svg" ,
          name: "England",
        },
        {
          abbr: "ESP",
          img: "../../../assets/spain.svg" ,
          name: "England",
        },
      ]
    },
    {
      id: "5",
      university: "University of Ibadan",
      country: {
        flag: "../../../assets/nigeria.svg",
        name: "Nigeria"
      },
      isFav: false,
      official:true,
      courseTitle: "Illustration Design",
      date: "18th June, 2023",
      learn: "Hybrid",
      level: "Undergraduate",
      duration: {
        type: "Part time",
        year: "4 years"
      },
      language: [
        {
          abbr: "ENG",
          img: "../../../assets/usa.svg",
          name: "English",
        },
        {
          abbr: "NGN",
          img: "../../../assets/nigeria.svg",
          name: "English",
        },
      ]
    },
    {
      id: "6",
      university: "European Institute of Inno...",
      country: {
        flag: "../../../assets/spain.svg",
        name: "Spain"
      },
      isFav: true,
      official:false,
      courseTitle: "Illustration Design",
      date: "18th June, 2023",
      learn: "Hybrid",
      level: "Masters",
      duration: {
        type: "Part time",
        year: "4 years"
      },
      language: [
        {
          abbr: "ENG",
          img: "../../../assets/usa.svg" ,
          name: "England",
        }
      ]
    },
    {
      id: "7",
      university: "University of Ibadan",
      country: {
        flag: "../../../assets/nigeria.svg",
        name: "Nigeria"
      },
      isFav: false,
      official:true,
      courseTitle: "Illustration Design",
      date: "18th June, 2023",
      learn: "On Campus",
      level: "Undergraduate",
      duration: {
        type: "Part time",
        year: "4 years"
      },
      language: [
        {
          abbr: "ENG",
          name: "England",
          img: "../../../assets/usa.svg"  
        }
      ]
    },
    {
      id: "8",
      university: "Harvard University",
      country: {
        flag: "../../../assets/usa.svg",
        name: "UNITED STATES"
      },
      isFav: true,
      official: true,
      courseTitle: "Illustration Design",
      date: "18th June, 2023",
      learn: "E-Learning",
      level: "Undergraduate",
      duration: {
        type: "Full time",
        year: "4 years"
      },
      language: [
        {
          abbr: "ENG",
          img: "../../../assets/usa.svg",
          name: "England",
        }
      ]
    },
    {
      id: "9",
      university: "Tai Wong",
      country: {
        flag: "../../../assets/china.svg",
        name: "China"
      },
      isFav: true,
      official: true,
      courseTitle: "Graphic Design",
      date: "10th July, 2023",
      learn: "On Campus",
      level: "PhD",
      duration: {
        type: "Full time",
        year: "5 years"
      },
      language: [
        {
          abbr: "ENG",
          img: "../../../assets/usa.svg",
          name: "England",
        },
        {
          abbr: "NGN",
          img: "../../../assets/nigeria.svg",
          name: "English",
        },
      ]
    },
    {
      id: "10",
      university: "Massachusetts Institute of Technology",
      country: {
        flag: "../../../assets/usa.svg",
        name: "UNITED STATES"
      },
      isFav: true,
      official: true,
      courseTitle: "Artificial Intelligence",
      date: "25th December, 2023",
      learn: "On Campus",
      level: "PhD",
      duration: {
        type: "Full time",
        year: "5 years"
      },
      language: [
        {
          abbr: "ENG",
          img: "../../../assets/england.svg",
          name: "China",
        },
        {
          abbr: "ESP",
          img: "../../../assets/spain.svg",
          name: "China",
        },
      ]
    },
    {
      id: "11",
      university: "University of Ibadan",
      country: {
        flag: "../../../assets/nigeria.svg",
        name: "Nigeria"
      },
      isFav: false,
      official: true,
      courseTitle: "Illustration Design",
      date: "18th June, 2023",
      learn: "E-Learning",
      level: "Undergraduate",
      duration: {
        type: "Full time",
        year: "4 years"
      },
      language: [
        {
          abbr: "ENG",
          name: "England",
          img: "../../../assets/usa.svg"  
        }
      ]
    },
    {
      id: "12",
      university: "European Institute of Inno...",
      country: {
        flag: "../../../assets/spain.svg",
        name: "Spain"
      },
      isFav: false,
      official: false,
      courseTitle: "Illustration Design",
      date: "18th June, 2023",
      learn: "Hybrid",
      level: "Masters",
      duration: {
        type: "Full time",
        year: "4 years"
      },
      language: [
        {
          abbr: "ENG",
          img: "../../../assets/usa.svg" ,
          name: "England",
        },
        {
          abbr: "NGN",
          img: "../../../assets/nigeria.svg",
          name: "English",
        },
      ]
    },
    {
      id: "13",
      university: "Harvard University",
      country: {
        flag: "../../../assets/usa.svg",
        name: "UNITED STATES"
      },
      isFav: true,
      official: true,
      courseTitle: "Illustration Design",
      date: "18th June, 2023",
      learn: "E-Learning",
      level: "Undergraduate",
      duration: {
        type: "Full time",
        year: "4 years"
      },
      language: [
        {
          abbr: "ENG",
          img: "../../../assets/usa.svg",
          name: "England",
        },
        {
          abbr: "CHN",
          img: "../../../assets/china.svg",
          name: "English",
        },
      ]
    },
    {
      id: "14",
      university: "Tai Wong",
      country: {
        flag: "../../../assets/china.svg",
        name: "China"
      },
      isFav: true,
      official: true,
      courseTitle: "Graphic Design",
      date: "10th July, 2023",
      learn: "On Campus",
      level: "PhD",
      duration: {
        type: "Full time",
        year: "5 years"
      },
      language: [
        {
          abbr: "CHN",
          img: "../../../assets/china.svg",
          name: "England",
        },
        {
          abbr: "ENG",
          img: "../../../assets/spain.svg",
          name: "Spain",
        },
      ]
    },
    {
      id: "15",
      university: "University of Uyp",
      country: {
        flag: "../../../assets/nigeria.svg",
        name: "Nigeria"
      },
      isFav: false,
      official: false,
      courseTitle: "Digital Media",
      date: "1st August, 2023",
      learn: "E-Learning",
      level: "Masters",
      duration: {
        type: "Part time",
        year: "3 years"
      },
      language: [
        {
          abbr: "CHN",
          img: "../../../assets/china.svg",
          name: "Japanese",
        },
        {
          abbr: "NGN",
          img: "../../../assets/nigeria.svg",
          name: "English",
        },
      ]
    },
    {
      id: "16",
      university: "Stanford University",
      country: {
        flag: "../../../assets/usa.svg",
        name: "UNITED STATES"
      },
      isFav: true,
      official: true,
      courseTitle: "Computer Science",
      date: "20th September, 2023",
      learn: "Hybrid",
      level: "Undergraduate",
      duration: {
        type: "Full time",
        year: "4 years"
      },
      language: [
        {
          abbr: "ENG",
          img: "../../../assets/usa.svg",
          name: "English",
        }
      ]
    },
    {
      id: "17",
      university: "University of Cambridge",
      country: {
        flag: "../../../assets/china.svg",
        name: "China"
      },
      isFav: false,
      official: false,
      courseTitle: "Mechanical Engineering",
      date: "15th October, 2023",
      learn: "On Campus",
      level: "PhD",
      duration: {
        type: "Full time",
        year: "5 years"
      },
      language: [
        {
          abbr: "ENG",
          img: "../../../assets/usa.svg",
          name: "England",
        }
      ]
    },
  ]
  // filters = {
  //   type: ""
  // }

  languages = [
    { name: 'Arabic', count: 23 },
    { name: 'Chinese', count: 12 },
    { name: 'English', count: 11 },
    { name: 'German', count: 51 },
    { name: 'Spanish', count: 20 }
  ];
  
  levels = [ 'Associate', 'Undergraduate', 'PhD', 'Post Graduate', 'Masters'];
  
  types = ['Full time', 'Part time'];

  attendance = ["On Campus", "E-Learning","Hybrid"]
  
  durations = ['6 - 12 Months', '1 - 3 Years', '3 - 5 Years'];
  
  filters: FilterOptions = {
    attendance: [],
    language: [],
    level: [], 
    type: [],
    duration: []
  };

  private filteredCoursesSubject = new BehaviorSubject<Course[]>(this.courses);
  filteredCourses$ = this.filteredCoursesSubject.asObservable();

  toggleFav (id:string) {
  
    this.courses = this.courses.map(course =>
      course.id === id ? { ...course, isFav: !course.isFav } : course
    );
    
    this.applyFilters();
  }

  onFilterChange(filterType: keyof FilterOptions, filterValue: string): void {
    const filterIndex = this.filters[filterType].indexOf(filterValue);
    if (filterIndex === -1) {
      this.filters[filterType].push(filterValue);
    } else {
      this.filters[filterType].splice(filterIndex, 1);
    }
    this.applyFilters();
  }


  applyFilters() {

    let filteredCourses = [...this.courses];

    if (this.filters.type.length) {
      filteredCourses = filteredCourses.filter(course =>
        this.filters.type.includes(course.duration.type)
      );
    }

    if (this.filters.attendance.length) {
      filteredCourses = filteredCourses.filter(course =>
        this.filters.attendance.includes(course.learn)
      );
    }

    if (this.filters.level.length) {
      filteredCourses = filteredCourses.filter(course =>
        this.filters.level.includes(course.level)
      );
    }

    this.filteredCoursesSubject.next(filteredCourses);

  }

  

}






// import { Injectable } from '@angular/core';
// import { Course, FilterOptions } from '../models/types';

//   @Injectable({
//     providedIn: 'root'
//   })

// export class SearchService {
  

//   constructor() { }

//   courses : Course[] = [
//     {
//       id: "1",
//       university: "University of Ibadan",
//       country: {
//         flag: "../../../assets/nigeria.svg",
//         name: "Nigeria"
//       },
//       isFav: false,
//       official:true,
//       courseTitle: "Illustration Design",
//       date: "18th June, 2023",
//       learn: "E-Learning",
//       level: "Undergraduate",
//       duration: {
//         type: "Full time",
//         year: "4 years"
//       },
//       language: [
//         {
//           abbr: "ENG",
//           name: "England",
//           img: "../../../assets/heart.svg"  
//         }
//       ]
//     },
//     {
//       id: "2",
//       university: "European Institute of Inno...",
//       country: {
//         flag: "../../../assets/spain.svg",
//         name: "Spain"
//       },
//       isFav: false,
//       official:false,
//       courseTitle: "Illustration Design",
//       date: "18th June, 2023",
//       learn: "Hybrid",
//       level: "Masters",
//       duration: {
//         type: "Full time",
//         year: "4 years"
//       },
//       language: [
//         {
//           abbr: "ENG",
//           img: "../../../assets/heart.svg" ,
//           name: "England",
//         }
//       ]
//     },
//     {
//       id: "3",
//       university: "Harvard University",
//       country: {
//         flag: "../../../assets/usa.svg",
//         name: "UNITED STATES"
//       },
//       isFav: true,
//       official:true,
//       courseTitle: "Illustration Design",
//       date: "18th June, 2023",
//       learn: "E-learning",
//       level: "undergraduate",
//       duration: {
//         type: "Full time",
//         year: "4 years"
//       },
//       language: [
//         {
//           abbr: "ENG",
//           img: "../../../assets/heart.svg",
//           name: "England",
//         }
//       ]
//     },
//     {
//       id: "4",
//       university: "European Institute of Inno...",
//       country: {
//         flag: "../../../assets/spain.svg",
//         name: "Spain"
//       },
//       isFav: false,
//       official:false,
//       courseTitle: "Illustration Design",
//       date: "18th June, 2023",
//       learn: "Hybrid",
//       level: "Masters",
//       duration: {
//         type: "Full time",
//         year: "4 years"
//       },
//       language: [
//         {
//           abbr: "ENG",
//           img: "../../../assets/heart.svg" ,
//           name: "England",
//         }
//       ]
//     },
//     {
//       id: "5",
//       university: "University of Ibadan",
//       country: {
//         flag: "../../../assets/nigeria.svg",
//         name: "Nigeria"
//       },
//       isFav: false,
//       official:true,
//       courseTitle: "Illustration Design",
//       date: "18th June, 2023",
//       learn: "Hybrid",
//       level: "undergraduate",
//       duration: {
//         type: "Part time",
//         year: "4 years"
//       },
//       language: [
//         {
//           abbr: "ENG",
//           img: "../../../assets/heart.svg",
//           name: "English",
//         }
//       ]
//     },
//     {
//       id: "2",
//       university: "European Institute of Inno...",
//       country: {
//         flag: "../../../assets/spain.svg",
//         name: "Spain"
//       },
//       isFav: true,
//       official:false,
//       courseTitle: "Illustration Design",
//       date: "18th June, 2023",
//       learn: "Hybrid",
//       level: "Masters",
//       duration: {
//         type: "Part time",
//         year: "4 years"
//       },
//       language: [
//         {
//           abbr: "ENG",
//           img: "../../../assets/heart.svg" ,
//           name: "England",
//         }
//       ]
//     },
//   ]
//   // filters = {
//   //   type: ""
//   // }

//   languages = [
//     { name: 'Arabic', count: 23 },
//     { name: 'Chinese', count: 12 },
//     { name: 'English', count: 11 },
//     { name: 'German', count: 51 },
//     { name: 'Spanish', count: 20 }
//   ];
  
//   levels = [
//     { name: 'Associate', count: 50 },
//     { name: 'Undergraduate', count: 20 },
//     { name: 'Post Graduate', count: 120 },
//     { name: 'Masters', count: 32 },
//     { name: 'PHD', count: 61 }
//   ];
  
//   types = ['Full time', 'Part time'];

//   attendance = ["On Campus", "E-Learning","Hybrid"]
  
//   durations = ['6 - 12 Months', '1 - 3 Years', '3 - 5 Years'];
  
//   filters: FilterOptions = {
//     attendance: [],
//     language: [],
//     level: [], 
//     type: [],
//     duration: []
//   };

//   // calculateAmount (name:string) {
//   //   this.courses.filter
//   // }

//   filteredCourses = this.courses;

//   toggleFav (id:string) {
//     this.filteredCourses.map(course => course.id == id ? course.isFav = !course.isFav : course);
//   }

//   onFilterChange(filterType: keyof FilterOptions, filterValue: string): void {
//     const filterIndex = this.filters[filterType].indexOf(filterValue);
//     if (filterIndex === -1) {
//       this.filters[filterType].push(filterValue);
//     } else {
//       this.filters[filterType].splice(filterIndex, 1);
//     }
//     this.applyFilters();
//   }


//   applyFilters() {

//     // const lang = this.languages.map(item => item.name);
//     // console.log(lang,this.filters.language);
    
//     this.filteredCourses = this.courses
    
//     if(this.filters.type.length){
//       this.filteredCourses = this.filteredCourses.filter(course => {
//         console.log({course},this.filters.type,course.duration.type);
        
//         return this.filters.type.includes(course.duration.type)
//         // course.language.map(item => item.name);
//         // lang.includes(course.language.name)
//       })
//     }


//     // this.filteredCourses = this.courses.filter(course => {
//     //   // const matchAttendance = this.filters.attendance.length 
//     //   //   ? this.filters.attendance.includes(course.learn) 
//     //   //   : true;
//     //   const matchLanguage = this.filters.language.length 
//     //     ? this.filters.language.some(lang => course.language.map(l => l.name).includes(lang)) 
//     //     : true;
  
        
//     //   const matchLevel = this.filters.level.length 
//     //     ? this.filters.level.includes(course.level) 
//     //     : true;
//     //   const matchType = this.filters.type.length 
//     //     ? this.filters.type.includes(course.duration.type) 
//     //     : true;
//     //   const matchDuration = this.filters.duration.length 
//     //     ? this.filters.duration.includes(course.duration.year) 
//     //     : true;

//     //   return  matchLanguage && matchLevel && matchType && matchDuration;
//     // });

//     console.log({fil:this.filteredCourses});

//     return this.filteredCourses;

//   }

  

// }
// <section class="filter">
//     <h2>Filter by</h2>
//     <aside>
//         <div class="sub-filter">
//             <h3>Attendance</h3>
//             <img src="../../../assets/arrow-down.svg" alt="arrow-down">
//         </div>
//         <div>
//             @for(studyVia of attendance; track studyVia;){
//                 <!-- (change)="onFilterChange('language', language.name)" -->
//                 <div class="check">
//                     <input type="checkbox" [id]="" name="studyVia" (change)="onFilterChange('attendance', studyVia)">
//                     <label [for]="studyVia">{{studyVia}}</label>
//                 </div>
//             }
//         </div>
//     </aside>
//     <aside>
//         <div class="sub-filter">
//             <h3>Attendance</h3>
//             <img src="../../../assets/arrow-down.svg" alt="arrow-down">
//         </div>
//         <div>
//             <div class="check">
//                 <input type="checkbox" id="arabic" name="arabic">
//                 <label for="arabic">Arabic</label>
//             </div>
//             <div class="check">
//                 <input type="checkbox" id="arabic" name="arabic">
//                 <label for="arabic">Arabic</label>
//             </div>
//             <div class="check">
//                 <input type="checkbox" id="arabic" name="arabic">
//                 <label for="arabic">Arabic</label>
//             </div>
//             <div class="check">
//                 <input type="checkbox" id="arabic" name="arabic">
//                 <label for="arabic">Arabic</label>
//             </div>
//         </div>
//     </aside>
//     <aside>
//         <div class="sub-filter">
//             <h3>Languages</h3>
//             <img src="../../../assets/arrow-down.svg" alt="arrow-down">
//         </div>
//         <div>
//             <input type="text" placeholder="Search Language">
//         </div>
//         <div>
//             @for(language of languages; track language.name;){
//                 <!-- (change)="onFilterChange('language', language.name)" -->
//                 <div class="check">
//                     <input type="checkbox" [id]="language.name" name="language" (change)="onFilterChange('language', language.name)">
//                     <label [for]="language.name">{{language.name}} ({{language.count}})</label>
//                 </div>
//             }
//         </div>
//     </aside>
//     <aside>
//         <div class="sub-filter">
//             <h3>Level</h3>
//             <img src="../../../assets/arrow-down.svg" alt="arrow-down">
//         </div>
//         <div>
//             <div class="check">
//                 <input type="checkbox" id="arabic" name="arabic">
//                 <label for="arabic">Associate (50)</label>
//             </div>
//             <div class="check">
//                 <input type="checkbox" id="arabic" name="arabic">
//                 <label for="arabic">Undergraduate (20)</label>
//             </div>
//             <div class="check">
//                 <input type="checkbox" id="arabic" name="arabic">
//                 <label for="arabic">Post Graduate (120)</label>
//             </div>
//             <div class="check">
//                 <input type="checkbox" id="arabic" name="arabic">
//                 <label for="arabic">Masters (32)</label>
//             </div>
//             <div class="check">
//                 <input type="checkbox" id="arabic" name="arabic">
//                 <label for="arabic">PHD (61)</label>
//             </div>
//         </div>
//     </aside>

//     <aside>
//         <div class="sub-filter">
//             <h3>Type</h3>
//             <img src="../../../assets/arrow-down.svg" alt="arrow-down">
//         </div>
//         <div>
//             @for(type of studyType; track type;){
//                 <div class="check">
//                     <input type="checkbox" [id]="" name="type" (change)="onFilterChange('type', type)">
//                     <label [for]="type">{{type}}</label>
//                 </div>
//             }
//         </div>
//     </aside>

//     <aside>
//         <div class="sub-filter">
//             <h3>Duration</h3>
//             <img src="../../../assets/arrow-down.svg" alt="arrow-down">
//         </div>
//         <div>
//             <div class="check">
//                 <input type="checkbox" id="arabic" name="arabic">
//                 <label for="arabic">6 - 12 Months (20)</label>
//             </div>
//             <div class="check">
//                 <input type="checkbox" id="arabic" name="arabic">
//                 <label for="arabic">1 - 3 Years (61)</label>
//             </div>
//             <div class="check">
//                 <input type="checkbox" id="arabic" name="arabic">
//                 <label for="arabic">3 - 5 Years (182)</label>
//             </div>
//         </div>
//     </aside>

// </section>import { Component, inject } from '@angular/core';
// import { SearchService } from '../../services/search.service';
// import { FilterOptions } from '../../models/types';

// @Component({
//   selector: 'app-filter',
//   standalone: true,
//   imports: [],
//   templateUrl: './filter.component.html',
//   styleUrl: './filter.component.css'
// })
// export class FilterComponent {

//   searchService = inject(SearchService);
//   filters = this.searchService.filters;

//   languages = this.searchService.languages;

//   attendance = this.searchService.attendance;

//   studyType = this.searchService.types;

//   onFilterChange(filterType: keyof FilterOptions, filterValue: string){
//     this.searchService.onFilterChange(filterType,filterValue);
//   }

// }