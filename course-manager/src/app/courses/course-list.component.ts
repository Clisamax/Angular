import { Component} from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CorseListComponent implements OnInit {
  courses = Course [] = []
  ngOnInit(): void {
    this.courses = [
      id: 1,
      name: 'Angular',
      imageUrl: string;
      price: number;
      code: string;
      duration: number;
      rating: ;
    ]
  }
}
