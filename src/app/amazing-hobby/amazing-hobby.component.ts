import { Component } from '@angular/core';
import { Hobby } from '../../models/amazingHobby';
import { Person } from '../../models/person';

@Component({
  selector: 'app-amazing-hobby',
  standalone: true,
  imports: [],
  templateUrl: './amazing-hobby.component.html',
  styleUrl: './amazing-hobby.component.css'
})
export class AmazingHobbyComponent {
  descriptionValue:string="DRESSED (French dresser - straighten, start, from Lat. dirigo - straighten) - completely straight molded and further secured in creatures of these and other beginnings.";
  public amazingHobby=new Hobby("Training of pigeons",this.descriptionValue,"../../assets/bird.jpeg",new Person("Mike","Tyson","../../assets/30.jpg"));
}
