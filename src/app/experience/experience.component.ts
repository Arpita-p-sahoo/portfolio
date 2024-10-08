import { Component, OnInit, inject } from '@angular/core';
import { Experience } from './experience.module';
import { MatDialog } from '@angular/material/dialog';
import { ExpComponent } from '../dilog/exp/exp.component';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      "company": "Vis Networks",
      "role": "Software Developer",
      "duration": "July 2022 - Present",
      "description": "Developed web applications using Angular and Node.js.",
      "logo": "../../assets/download.jpeg",
      "technologies": ["Angular", "Node.js", "JavaScript", "HTML", "CSS"]
    },
    
    {
      company: 'Zebaq web',
      role: 'Frontend Developer',
      duration: 'March 2022 - May 2022',
      description: 'Worked on enhancing user interfaces with React and Redux.',
      logo: '../../assets/zebaq.jpeg',
      "technologies": ["Wordpress", "JavaScript", "HTML", "CSS"]
    },
    
  ];

  readonly dialog = inject(MatDialog);
  constructor(public common:CommonService){}


  openDialog(name:any) {
    this.common.setExperience(name);
    this.dialog.open(ExpComponent);
  }

  ngOnInit(): void { }
}
