

import {Component} from '@angular/core';
import { CoursesService } from './course.service';

@Component ({
    selector: 'courses',
    template : `
    <h2>courses</h2>
    <ul>
    <li *ngFor="let course of courses">
    {{ course }}
    </li>
    </ul>
    `
})
export class CoursesComponent{
    title = "List of Courses";
    courses;

    constructor ( service : CoursesService){
        this.courses = service.getCourse();
    }
}
