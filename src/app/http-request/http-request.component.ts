import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Post } from './post.model';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styles: [
    `
      .container {
        margin-top: 30px;
      }

      .row {
        margin: 20px 0;
      }
    `,
  ],
})
export class HttpRequestComponent implements OnInit {
  loadedPosts: Post[] = [];
  isLoading = false

  constructor(private http: HttpClient) {}

  ngOnInit(){
  this.fetchPosts()
  }

  onCreatePost(postData: Post) {
    this.http
      .post(
        'https://ng-complete-guide-386d4-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    this.fetchPosts()
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isLoading = true;
    this.http
      .get<{[key: string]: Post}>(
        'https://ng-complete-guide-386d4-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(map(responseData => {
         const postArray: Post[] = []
         for (const key in responseData) {
           if(responseData.hasOwnProperty(key)) {
            postArray.push({...responseData[key], id: key})
           }
         
         }
         return postArray
      })
      )
      .subscribe((posts) => {
        this.isLoading = false
       this.loadedPosts = posts
      });
  }
}
