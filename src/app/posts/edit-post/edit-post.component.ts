import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { postCreationDTO } from '../post.module';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private router: Router) { }
model: postCreationDTO = {
  title: 'First Post',
  body: 'Here you can edit post',
  userId: 0
}
  ngOnInit(): void {
  }

  saveChanges(post: postCreationDTO){
    this.router.navigate(['/post']);
    console.log(post);
  }
}
