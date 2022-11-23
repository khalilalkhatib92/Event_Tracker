import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { postCreationDTO, postDTO } from '../posts/post.module';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  apiUrl = environment.jsonApiURL +'/posts'
  getAll(): Observable<postDTO[]>{
    return this.http.get<postDTO[]>(this.apiUrl)
  }

  create(post: postCreationDTO){
    return this.http.post(this.apiUrl, post);
  }

  delete(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
