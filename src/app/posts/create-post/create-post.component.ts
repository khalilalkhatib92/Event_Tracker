import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/Services/post.service';
import { postCreationDTO } from '../post.module';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private router: Router, private postService: PostService) { }


  ngOnInit(): void {

  }
  saveChanges(post: postCreationDTO) {
    this.postService.create(post).subscribe(() => {
      this.router.navigate(['/post']);
      console.log(post);
    }
    );

  }

}
