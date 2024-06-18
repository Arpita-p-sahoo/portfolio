import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  data: any;
  constructor(private commonSvc: CommonService) { }

  
  ngOnInit(): void {
    this.commonSvc.getData().subscribe(
      (response) => {
        this.data = response;
        console.log(this.data);
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  projects = [
    {
      image: 'assets/WhatsApp Image 2024-06-04 at 21.55.00.jpeg',
      title: 'Convobuddy',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harta.'
    },
    {
      image: 'assets/Black Gold Minimalist Jewelry Logo.png',
      title: 'Gehna',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harta.'
    },
    // Add more projects as needed
  ];
}
