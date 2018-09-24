import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ExploreComponent } from './explore/explore.component';
import { PostComponent as OnePostComponent } from "./post/post.component";


import { AuthService } from './core/authentication/auth.service';
import { AuthGuard } from './core/guards/auth-guard/auth.guard';
import { TokenInterceptorService } from './core/interceptors/token-interceptor/token-interceptor.service';
import { LikeService } from './core/services/like/like.service';
import { CommentService } from './core/services/comments/comment.service';
import { FollowerService } from './core/services/follower/follower.service';
import { SavedPostService } from './core/services/saved-post/saved-post.service';
import { PostComponent } from './profile/post/post.component';
import { SavedComponent } from './profile/saved/saved.component';
import { PostService } from './core/services/post/post.service';
import { AddPostComponent } from './profile/add-post/add-post.component';
import { ChangeProfilePicComponent } from './profile/change-profile-pic/change-profile-pic.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    ExploreComponent,
    PostComponent,
    SavedComponent,
    OnePostComponent,
    AddPostComponent,
    ChangeProfilePicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, LikeService, CommentService, FollowerService, SavedPostService, PostService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
