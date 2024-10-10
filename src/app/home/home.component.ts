import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExpComponent } from '../dilog/exp/exp.component';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public common:CommonService){}
  download(){
    this.common.downloaResume();
  }
}
