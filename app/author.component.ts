import {Component} from 'angular2/core';
import {AuthorService} from './author.service';

@Component({
    selector : 'authors',
    template : `
        <h2>Authors</h2>
        {{title}}
        <ul>
        <li *ngFor="#author of authors">
        {{author}}
        </li>
        </ul>
    `,
    Providers : [AuthorService]
    
    
})
export class AuthorsComponent{
    title="The title of Author";
    authors;
    construtor(authorService: AuthorService)
    {
        this.authors = authorService.getAuthors();
}
