import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { postDTO } from './post.module';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) { }

  table: postDTO[] = [];
  columnToDisplay = ['id','title','body','userId','action'];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.postService.getAll().subscribe(post => {
      console.log(post);
      this.table = post;
    });
  }

  delete(id: number){// this dosn't working correctly .. (review).
    this.postService.delete(id).subscribe(()=>{
      this.getAll();
    });
  }

}
