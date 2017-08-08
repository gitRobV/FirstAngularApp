import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    emailList = [{
        email: 'rob@rob.com',
        priority: 'high',
        subject: 'This is an email',
        content: 'Sup?'
    },{
        email: 'rob@rob.com',
        priority: 'high',
        subject: 'This is an email',
        content: 'Sup?'
    },{
        email: 'rob@rob.com',
        priority: 'high',
        subject: 'This is an email',
        content: 'Sup?'
    }]
    title = 'Welcome To Email List';
}
