import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
// import {MatButtonModule} from '@angular/material/button';
// import {MatCardModule} from '@angular/material/card';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatIconModule} from '@angular/material/icon'
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { EventComponent } from './event/event.component';

import {MaterialModule} from './material/material.module';
import {ReactiveFormsModule} from '@angular/forms'

import { LogoutComponent } from './logout/logout.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { IndexIssuesComponent } from './issues/index-issues/index-issues.component';
import { CreateIssuesComponent } from './issues/create-issues/create-issues.component';
import { EditIssuesComponent } from './issues/edit-issues/edit-issues.component';
import { FormIssuesComponent } from './issues/form-issues/form-issues.component';
import {IssuesFilterComponent} from './issues/issues-filter/issues-filter.component';
import { InputImgComponent } from './utilities/input-img/input-img.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    FooterComponent,
    DashboardComponent,
    //EventComponent,
    LogoutComponent,
    GenericListComponent,
    NewsListComponent,
    ProjectsListComponent,
    IndexIssuesComponent,
    CreateIssuesComponent,
    EditIssuesComponent,
    FormIssuesComponent,
    IssuesFilterComponent,
    InputImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatButtonModule,
    // MatCardModule,
    // MatToolbarModule,
    // MatIconModule,

    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
