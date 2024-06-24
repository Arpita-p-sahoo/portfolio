import { Component, OnInit, inject } from '@angular/core';
import { Experience } from './experience.module';
import { MatDialog } from '@angular/material/dialog';
import { ExpComponent } from '../dilog/exp/exp.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [
    {
      company: 'Vis Networks',
      role: 'Software Developer',
      duration: 'July 2022 - Present',
      description: 'Developed web applications using Angular and Node.js.',
      logo: '../../assets/download.jpeg'},
    {
      company: 'Zebaq web',
      role: 'Frontend Developer',
      duration: 'March 2022 - May 2022',
      description: 'Worked on enhancing user interfaces with React and Redux.',
      logo: '../../assets/zebaq.jpeg'
    },
    
  ];

  readonly dialog = inject(MatDialog);
  constructor() { }

  openDialog() {
    this.dialog.open(ExpComponent);
  }

  ngOnInit(): void { }
}
