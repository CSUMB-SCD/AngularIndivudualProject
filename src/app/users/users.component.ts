import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-15px)'}),
          stagger('50ms',
          animate('55ms ease-out',
          style({ opacity: 1, transform: 'translateY(0px)'})))
        ], {optional: true}),
        query(':leave', animate('55ms ease-out',
          style({ opacity: 1, transform: 'translateY(0px)'}))
          , {optional: true})
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {

users$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe( data => this.users$ = data);
  }


}
