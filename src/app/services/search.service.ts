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






