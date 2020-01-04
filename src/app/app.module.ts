import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ContentfulService } from './contentful.service';
import { MdToHtmlPipe } from './md-to-html.pipe';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

import { DevstackComponent } from './devstack/devstack.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path: '', component: AboutComponent, pathMatch: 'full'},

  { path: 'courses', component: CourseListComponent },
  { path: 'course/:id', component: CourseDetailsComponent },

  { path: 'about', component: AboutComponent },
  { path: 'devstack', component: DevstackComponent },
  { path: 'contact', component: ContactComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseDetailsComponent,
    MdToHtmlPipe,
    DevstackComponent,
    ContactComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
