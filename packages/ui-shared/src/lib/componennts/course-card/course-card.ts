import { Component, Input } from '@angular/core';
import { Course } from '@monorepo-angular-21/utils-common';

@Component({
  selector: 'lib-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent {
  @Input({ required: true }) course!: Course;
  @Input() showActions = true;
}
