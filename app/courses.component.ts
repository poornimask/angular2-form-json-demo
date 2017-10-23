
import {Component} from 'angular2/core';
import {CourseService} from './course.service';

@Component ({
    selector: 'courses',
    template : `
        <h2>Courses</h2>
        {{title}}
        <ul>
        <li *ngFor="#course of courses">
        {{course}}
        <li>
        </ul>
    `,
    Providers : [CourseService]
})

export class CoursesComponent{
    title = "the title of course page";
    courses;
    constructor (courseSerice : CourseService){
        this.courses = courseService.getCourses();
}
