import { Component, OnInit } from '@angular/core';
import { Experience } from './experience.module';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [
    {
      company: 'Company One',
      role: 'Software Engineer',
      duration: 'Jan 2020 - Present',
      description: 'Developed web applications using Angular and Node.js.',
      logo: 'data:image/jpeg;base64,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'
    },
    {
      company: 'Company Two',
      role: 'Frontend Developer',
      duration: 'Jun 2018 - Dec 2019',
      description: 'Worked on enhancing user interfaces with React and Redux.',
      logo: 'data:image/jpeg;base64,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'
    },
    {
      company: 'Company Three',
      role: 'Intern',
      duration: 'Jan 2017 - May 2018',
      description: 'Assisted in developing mobile applications using Flutter.',
      logo: 'assets/company3.png'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}