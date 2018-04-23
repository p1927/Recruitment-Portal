import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'findjob',
  templateUrl: './findjob.component.html',
  styleUrls: ['./findjob.component.css'],

 
})
export class FindjobComponent implements OnInit{
private search_title="Search Results for: ";



private joblist=[{
	companyname:"Google",
	place: "Hawaii islands, USA",
	pitch:"Need 1 year or more experience with minimum qualification and hard working Job Type: Full-time Salary: ₹10,000.00 to ₹15,000.00 /month Required experience",
	postname: "Software Engineer",
	easy_apply: true,
	apply_link: "/",
	logo: "../../assets/images/logos/logo_1.png"


 },{
	companyname:"Samasung",
	place: "Hawaii islands, USA",
	pitch:"Need 1 year or more experience with minimum qualification and hard working Job Type: Full-time Salary: ₹10,000.00 to ₹15,000.00 /month Required experience",
	postname: "Software Engineer",
	easy_apply: false,
	apply_link: "/",
 logo: "../../assets/images/logos/logo_2.png"

 },{
	companyname:"Samasung",
	place: "Hawaii islands, USA",
	pitch:"Need 1 year or more experience with minimum qualification and hard working Job Type: Full-time Salary: ₹10,000.00 to ₹15,000.00 /month Required experience",
	postname: "Software Engineer",
	easy_apply: false,
	apply_link: "/",
 logo: "../../assets/images/logos/logo_1.png"

 },{
	companyname:"Samasung",
	place: "Hawaii islands, USA",
	pitch:"Need 1 year or more experience with minimum qualification and hard working Job Type: Full-time Salary: ₹10,000.00 to ₹15,000.00 /month Required experience",
	postname: "Software Engineer",
	easy_apply: false,
	apply_link: "/",
 logo: "../../assets/images/logos/logo_2.png"

}];

private selected={  
	photo: "../../assets/images/photos/google.jpg",
	company_id:     "abcd",
	jd: "DescriptionNeed 1 year or more experience with minimum qualification and hard working Job Type Full-time Saaslaryas ₹10,000.00 to ₹15,000.00 /monthDescriptionNeed 1 year or more experience with minimum qualification and hard working Job Type Full-time Saaslaryas ₹10,000.00 to ₹15,000.00 /monthDescriptionNeed 1 year or more experience with minimum qualification and hard working Job Type Full-time Saaslaryas ₹10,000.00 to ₹15,000.00 /monthDescriptionNeed 1 year or more experience with minimum qualification and hard working Job Type Full-time Saaslaryas ₹10,000.00 to ₹15,000.00 /month",
	job_qual: 		"QualificationNeed 1 year or more experience with minimum qualification and hard working Job Ty Full-time Salary ₹10,000.00 to ₹15,000.00 /month",
	ctc: 1600000,
	workinghrs: 	"10:00 hrs - 18:00 hrs",
	apply_link: 	"www.google.com",
	selection_process: 		"Need 1 year or more experience with minimum qualification and hard working Job Type Full-time Salary ₹10,000.00 to ₹15,000.00 /month",
	job_type: "Full-time",
	applied: true;
	post_date: "2018-04-20T09:05:05.035Z",
	exp_date:   "2018-04-21T09:05:05.035Z",
	applicant: [1,1,1,33],
	coords: 	[78.5,17.4],
		companyname:"Samsung",
		place: "Hawaii islands, USA",
		pitch:"Need 1 year or more experience with minimum qualification and hard working Job Type: Full-time Salary: ₹10,000.00 to ₹15,000.00 /month Required experience",
		postname: "Software Engineer",
		easy_apply: true



};

private job_option=3;


private search={postdate: Date.now};
private map_url;
private url: string = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDWLe7MtE3P2G5iD2l1BwCOsr7HJLhB2-s&q="+this.selected.coords[1]+","+this.selected.coords[0];

 constructor(private sanitizer: DomSanitizer) { 
 
 this.map_url= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);


 }

  ngOnInit() { 


  }


}