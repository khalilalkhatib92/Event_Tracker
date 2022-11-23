import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { CreateIssuesComponent } from './issues/create-issues/create-issues.component';
import { EditIssuesComponent } from './issues/edit-issues/edit-issues.component';
import { IndexIssuesComponent } from './issues/index-issues/index-issues.component';
import { IssuesFilterComponent } from './issues/issues-filter/issues-filter.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  // {path:'' , component: LoginComponent},
  // {path:'dashboard' , component:DashboardComponent},

  {path: 'login' , component: LoginComponent},
  {path: '' , component:DashboardComponent},

  //{path: 'event', component:EventComponent},
  //'./event/event.module#EventModule'
  {path: 'event', loadChildren:() => import('./event/event.module').then(x => x.EventModule)},

  {path: 'issuse' , component:IndexIssuesComponent},
  {path: 'issuse/create', component:CreateIssuesComponent},
  {path: 'issuse/edit/:id', component:EditIssuesComponent},
  {path: 'issues/filter', component:IssuesFilterComponent},

  {path: 'post', component:PostsComponent},
  {path:'post/create', component:CreatePostComponent},
  {path: 'post/edit/:id', component:EditPostComponent},

  {path:'login' , component:LogoutComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
