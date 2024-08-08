import { Component } from '@angular/core';

@Component({
  selector: 'app-program-details',
  standalone: true,
  imports: [],
  templateUrl: './program-details.component.html',
  styleUrl: './program-details.component.css'
})
export class ProgramDetailsComponent {

  fees = [
    {
      name: "Tuition fee",
      moreInfo: "$15,000 per year",
      img: "../../../assets/heart.svg"
    },
    {
      name: "Application starts",
      moreInfo: "1 Feb 2023",
      img: "../../../assets/heart.svg"
    },
    {
      name: "Application deadline",
      moreInfo: "20 Dec 2023 (EST)",
      img: "../../../assets/heart.svg"
    },
    {
      name: "Languages",
      moreInfo: "English, Spanish",
      img: "../../../assets/heart.svg"
    },
  ]
}
