import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repairs-form',
  templateUrl: './repairs-form.component.html',
  styleUrls: ['./repairs-form.component.css']
})
export class RepairsFormComponent implements OnInit {
  selected: string;
  states: string[] = [
    'electrical sockets',
    'doors',
    'windows',
    'electrical faults'
  ];

  constructor() { }

  ngOnInit() {
  }

}
