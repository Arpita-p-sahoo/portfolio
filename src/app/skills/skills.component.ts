import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  constructor(public common:CommonService) { }
}
