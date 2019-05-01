import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavfooterComponent } from './navfooter/navfooter.component';
import { FindjobComponent } from './findjob/findjob.component';

import { SizerDirective } from './directive/sizer/sizer.directive';
import { CompanyReviewComponent } from './company-review/company-review.component';
import { TrainingComponent, Para,Person } from './training/training.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SizerDirective,
    NavfooterComponent,
    FindjobComponent,
    CompanyReviewComponent,
    TrainingComponent,
    Para, Person

  ],
  imports: [
    BrowserModule,
    FormsModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
