import { Component } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {
  projectDetail:any;

  constructor(public common:CommonService){}

  ngOnInit(){
    this.projectDetail = this.common.GetProjectDetail();
    console.log(this.projectDetail);
    
  }
}
