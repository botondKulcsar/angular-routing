import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard-list',
  templateUrl: './wizard-list.component.html',
  styleUrls: ['./wizard-list.component.css']
})
export class WizardListComponent implements OnInit {

  wizards: Array<any> = [{name: 'Harry Potter', house: 'Gryffindor'}, {name: 'Ron Weasley', house: 'Gryffindor'},
        {name: 'Hermione Granger', house: 'Gryffindor'}, {name: 'Draco Malfoy', house: 'Slytherin'}];

  constructor() { }

  ngOnInit(): void {
  }

}
