import { Component } from '@angular/core';
import { TemplateService } from './services/template.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TemplateService]
})
export class AppComponent {
  title = 'app'
  
  constructor(
      public templateService: TemplateService
){}
}
