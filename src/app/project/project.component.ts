import { Component, OnInit, inject } from '@angular/core';
import { CommonService } from '../common.service';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailComponent } from '../dilog/project-detail/project-detail.component';
import { Project } from '../project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  data: any;
  project = Project;
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
      title: this.project.ConvoBuddy,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harta.'
    },
    {
      image: 'assets/Pink Minimal Typography Logo .png',
      title: this.project.techHub,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harta.'
    },
    // Add more projects as needed
  ];

  Talks = [
    {
      topic:'GitHub introduction and Live Session',
      location:'Silicon College',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat unde a minima voluptas, adipisci quos alias quo ea iste quis error id amet perferendis provident consectetur? Aperiam blanditiis quasi excepturi.',
      mode:'Online'
    },
    {
      topic:'Angular Introduction and Framework benifits on current tech era',
      location:'CV Raman University',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat unde a minima voluptas, adipisci quos alias quo ea iste quis error id amet perferendis provident consectetur? Aperiam blanditiis quasi excepturi.',
      mode:'Offline'
    },
    {
      topic:'GitHub introduction and live session',
      location:'Trident College',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat unde a minima voluptas, adipisci quos alias quo ea iste quis error id amet perferendis provident consectetur? Aperiam blanditiis quasi excepturi.',
      mode:'Offline'
    },
   
  ]

  readonly dialog = inject(MatDialog);

  openDialog(projectName:string) {
    this.commonSvc.SetProjectDetail(projectName);
    const dialogRef = this.dialog.open(ProjectDetailComponent);

  }
 
}
