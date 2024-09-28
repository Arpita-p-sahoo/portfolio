import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThemeService } from 'services/theme.service';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  currentTheme = 'light-theme';
  // themeService!: ThemeService;

  private themeSubject: BehaviorSubject<string> = new BehaviorSubject<string>('light-theme'); // Default theme
  theme$: Observable<string> = this.themeSubject.asObservable();
  project = Project;
  constructor(private http: HttpClient) { }
  private url = 'https://v1.nocodeapi.com/arpita/medium/lDpkExdsptxWGvqO';

  getData(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  setTheme(theme: string) {
    this.themeSubject.next(theme);
  }


  public ProjectDetail = {
    ProectName: '',
    projectDescription: '',
  }

  SetProjectDetail = (name: string) => {

    if (name === this.project.ConvoBuddy) {
      this.ProjectDetail.ProectName = this.ConvoBuddyDescription.name;
      this.ProjectDetail.projectDescription = this.ConvoBuddyDescription.description;
    }

    if (name === this.project.techHub) {
      this.ProjectDetail.ProectName = this.techHubDescription.name;
      this.ProjectDetail.projectDescription = this.techHubDescription.description;
    }
  }

  GetProjectDetail = () => {
    return this.ProjectDetail
  }
  // description

  // Convo Buddy

  public ConvoBuddyDescription = {
    name: 'Convo Buddy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat unde a minima voluptas, adipisci quos alias quo ea iste quis error id amet perferendis provident consectetur? Aperiam blanditiis quasi excepturi.'
  }
  public techHubDescription = {
    name: ' The techHub',
    description: 'The description about tech hub'
  }

}
