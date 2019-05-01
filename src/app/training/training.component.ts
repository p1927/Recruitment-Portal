import { Component, ViewChildren, ContentChildren Element, AfterViewInit } from '@angular/core';

@Component({
  selector: 'training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})



export class TrainingComponent implements AfterViewInit {

 constructor() { }

  ngAfterViewInit() {

  }

}

@Component ({
	selector: 'Person',
	template: '<p> Person:  <ng-content></ng-content> </p>'
})

export class Person {
	


}



@Component ({
	selector: 'Paragraph',
	template: '<p> <ng-content></ng-content> </p>	<p *ngIf="people">	{{people.length}}</p> '
})

export class Para implements AfterViewInit{
		@ContentChildren(Person) people;

ngAfterViewInit(){
	


}
}