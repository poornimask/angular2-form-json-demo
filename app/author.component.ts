import {Component} from 'angular2/core';

@Component ({
    selector : 'authors',
    template : `
    <h1>Authors</h1>
    {{ title }}
    <ul>
    <li *ngFor = "#author of authors">
    {{author}}
    </li>
    </ul>
    `
})
export class AuthorComponent
{
    title = "Author of the course";
    authours = ["author1","author2","author3"];
}
