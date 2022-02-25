import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostService } from './posts.service';
import { Subscription } from 'rxjs';

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
export class HttpRequestComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isLoading = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postsService: PostService) {}

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    });

    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content);
    
  }

  onFetchPosts() {
    this.isLoading = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.isLoading = false;
        this.loadedPosts = posts;
      },
      (error) => {
        this.isLoading = false;
        this.error = error.massage;
      }
    );
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  // set error back to null
  onHandleError() {
    this.error = null;
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
