
import {Component} from 'angular2/core'

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
    `
})

export class CoursesComponent{
    title="the title of course page";
    courses = ["Course1","Course2","Course3"];
}
