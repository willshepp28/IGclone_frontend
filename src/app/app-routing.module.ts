import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Components
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ExploreComponent } from "./explore/explore.component";
import { ProfileComponent } from "./profile/profile.component";
import { PostComponent } from "./profile/post/post.component";
import { PostComponent as OnePostComponent } from "./post/post.component";
import { SavedComponent } from "./profile/saved/saved.component";
import { AddPostComponent } from "./profile/add-post/add-post.component";
import { ChangeProfilePicComponent } from "./profile/change-profile-pic/change-profile-pic.component";

// Guards
import { AuthGuard } from "./core/guards/auth-guard/auth.guard";


/**
 *  
 * This is where we define routes in our application
 * 
 */




// Routes
const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent, canActivate: [AuthGuard]},
    { path: "signup", component: SignupComponent},
    { path: "post/:id", component: OnePostComponent },
    { path: "profile/:id", component: ProfileComponent, canActivate: [AuthGuard],
    children: [
        { path: "", redirectTo: 'post', pathMatch: "full"},
        { path: 'post', component: PostComponent},
        { path: 'saved', component: SavedComponent},
        { path: 'addPost', component: AddPostComponent },
        { path: 'changeProfilePic', component: ChangeProfilePicComponent }
    ] },
    { path: "login", component: LoginComponent },
    { path: "explore", component: ExploreComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}