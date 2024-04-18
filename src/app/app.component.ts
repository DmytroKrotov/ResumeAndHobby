import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AmazingHobbyComponent } from './amazing-hobby/amazing-hobby.component';
import { ResumeComponent } from './resume/resume.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AmazingHobbyComponent,ResumeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amazingHobby_Resume';
}

