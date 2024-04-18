import { Component } from '@angular/core';
import { ResumePerson } from '../../models/resumePerson';
import { CertificatesComponent } from '../certificates/certificates.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CertificatesComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  DominicResumeData:ResumePerson=new ResumePerson("Dominic","Toretto","../../assets/Dom_screenshot.JPG","+12131111111","dom@email.com","Los Angeles, California",["An assistant mechanic in his father's workshop","Participated in licensed car races","Illegal work for government agencies"],["raser","mechanic"],["https://en.wikipedia.org/wiki/Dominic_Toretto"]);

}
