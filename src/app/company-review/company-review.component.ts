import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'review',
  templateUrl: './company-review.component.html',
  styleUrls: ['./company-review.component.css']
})



export class CompanyReviewComponent implements OnInit {
@Input() size;

  constructor() { }
  
  ngOnInit() {
  }

}
