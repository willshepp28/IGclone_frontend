# Instagram Clone (frontend)


----

**What is this?** 

This is my own version of instagram.

Check out the server side on code at https://github.com/willshepp28/IGclone_backend

---


## Technologies Used

```js
 Bootstrap
 Express
 Angular 6
 Knex/ PostgreSQL
 AWS S3
 
```





## Folder Structure 

```
    frontend
    ├── README.md
    ├── angular.json
    ├── e2e
    ├── package-lock.json
    ├── package.json
    ├── server.js
    ├── src
    │   ├── app
    │   │   ├── app-routing.module.ts
    │   │   ├── app.component.css
    │   │   ├── app.component.html
    │   │   ├── app.component.spec.ts
    │   │   ├── app.component.ts
    │   │   ├── app.module.ts
    │   │   ├── core
    │   │   │   ├── authentication
    │   │   │   │   ├── auth.service.spec.ts
    │   │   │   │   └── auth.service.ts
    │   │   │   ├── guards
    │   │   │   │   └── auth-guard
    │   │   │   │       ├── auth.guard.spec.ts
    │   │   │   │       └── auth.guard.ts
    │   │   │   ├── helper
    │   │   │   │   └── decodeToken
    │   │   │   │       ├── decode-token.service.spec.ts
    │   │   │   │       └── decode-token.service.ts
    │   │   │   ├── interceptors
    │   │   │   │   └── token-interceptor
    │   │   │   │       ├── token-interceptor.service.spec.ts
    │   │   │   │       └── token-interceptor.service.ts
    │   │   │   ├── models
    │   │   │   │   └── User.model.ts
    │   │   │   ├── services
    │   │   │   │   ├── comments
    │   │   │   │   │   ├── comment.service.spec.ts
    │   │   │   │   │   └── comment.service.ts
    │   │   │   │   ├── discover
    │   │   │   │   │   ├── discover.service.spec.ts
    │   │   │   │   │   └── discover.service.ts
    │   │   │   │   ├── follower
    │   │   │   │   │   ├── follower.service.spec.ts
    │   │   │   │   │   └── follower.service.ts
    │   │   │   │   ├── like
    │   │   │   │   │   ├── like.service.spec.ts
    │   │   │   │   │   └── like.service.ts
    │   │   │   │   ├── post
    │   │   │   │   │   ├── post.service.spec.ts
    │   │   │   │   │   └── post.service.ts
    │   │   │   │   ├── saved-post
    │   │   │   │   │   ├── saved-post.service.spec.ts
    │   │   │   │   │   └── saved-post.service.ts
    │   │   │   │   ├── total
    │   │   │   │   │   ├── total.service.spec.ts
    │   │   │   │   │   └── total.service.ts
    │   │   │   │   ├── upload-file-service
    │   │   │   │   │   ├── upload-file.service.spec.ts
    │   │   │   │   │   └── upload-file.service.ts
    │   │   │   │   └── user
    │   │   │   │       ├── user.service.spec.ts
    │   │   │   │       └── user.service.ts
    │   │   │   └── store
    │   │   ├── explore
    │   │   │   ├── explore.component.css
    │   │   │   ├── explore.component.html
    │   │   │   ├── explore.component.spec.ts
    │   │   │   └── explore.component.ts
    │   │   ├── home
    │   │   │   ├── home.component.css
    │   │   │   ├── home.component.html
    │   │   │   ├── home.component.spec.ts
    │   │   │   └── home.component.ts
    │   │   ├── login
    │   │   │   ├── login.component.css
    │   │   │   ├── login.component.html
    │   │   │   ├── login.component.spec.ts
    │   │   │   └── login.component.ts
    │   │   ├── post
    │   │   │   ├── post.component.css
    │   │   │   ├── post.component.html
    │   │   │   ├── post.component.spec.ts
    │   │   │   └── post.component.ts
    │   │   ├── profile
    │   │   │   ├── add-post
    │   │   │   │   ├── add-post.component.css
    │   │   │   │   ├── add-post.component.html
    │   │   │   │   ├── add-post.component.spec.ts
    │   │   │   │   └── add-post.component.ts
    │   │   │   ├── change-profile-pic
    │   │   │   │   ├── change-profile-pic.component.css
    │   │   │   │   ├── change-profile-pic.component.html
    │   │   │   │   ├── change-profile-pic.component.spec.ts
    │   │   │   │   └── change-profile-pic.component.ts
    │   │   │   ├── post
    │   │   │   │   ├── post.component.css
    │   │   │   │   ├── post.component.html
    │   │   │   │   ├── post.component.spec.ts
    │   │   │   │   └── post.component.ts
    │   │   │   ├── profile.component.css
    │   │   │   ├── profile.component.html
    │   │   │   ├── profile.component.spec.ts
    │   │   │   ├── profile.component.ts
    │   │   │   └── saved
    │   │   │       ├── saved.component.css
    │   │   │       ├── saved.component.html
    │   │   │       ├── saved.component.spec.ts
    │   │   │       └── saved.component.ts
    │   │   ├── shared
    │   │   │   └── shared.module.ts
    │   │   └── signup
    │   │       ├── signup.component.css
    │   │       ├── signup.component.html
    │   │       ├── signup.component.spec.ts
    │   │       └── signup.component.ts
    │   ├── assets
    │   ├── browserslist
    │   ├── environments
    │   ├── index.html
    │   ├── karma.conf.js
    │   ├── main.ts
    │   ├── polyfills.ts
    │   ├── styles.css
    │   ├── test.ts
    │   ├── tsconfig.app.json
    │   ├── tsconfig.spec.json
    │   └── tslint.json
    ├── tsconfig.json
    └── tslint.json


```




## Site Layout

### Mobile Layout


 Sign Up            |  Login
:-------------------------:|:-------------------------:
<img height="350px" src="https://s3.us-east-2.amazonaws.com/ig-clone2019/assets/mobile/mobile-signup.png">  |  <img height="350px" src="https://s3.us-east-2.amazonaws.com/ig-clone2019/assets/mobile/mobile-login.png"> 

 Home           |  Profile
:-------------------------:|:-------------------------:
<img height="350px" src="https://s3.us-east-2.amazonaws.com/ig-clone2019/assets/mobile/mobile-home.png"> |  <img height="350px" src="https://s3.us-east-2.amazonaws.com/ig-clone2019/assets/mobile/mobile-profile.png"> 


 Explore         |  Post/:id
:-------------------------:|:-------------------------:
<img height="350px" src="https://s3.us-east-2.amazonaws.com/ig-clone2019/assets/mobile/mobile-explore.png"> |  <img height="350px" src="https://s3.us-east-2.amazonaws.com/ig-clone2019/assets/mobile/mobile-post%3Aid.png"> 

### Tablet Layout

 Sign Up            |  Login
:-------------------------:|:-------------------------:
<img height="350px" src="https://s3.us-east-2.amazonaws.com/ig-clone2019/assets/tablet/tablet-signup.png">  |  <img height="350px" src="https://s3.us-east-2.amazonaws.com/ig-clone2019/assets/tablet/tablet-login.png"> 

 Home           |  Profile
:-------------------------:|:-------------------------:
<img height="350px" src="https://s3.us-east-2.amazonaws.com/ig-clone2019/assets/tablet/tablet-home.png"> |  <img height="350px" src="https://s3.us-east-2.amazonaws.com/ig-clone2019/assets/tablet/tablet-profile.png"> 


 Explore         |  Post/:id
:-------------------------:|:-------------------------:
<img height="350px" src="https://s3.us-east-2.amazonaws.com/ig-clone2019/assets/tablet/tablet-explore.png">   |  <img height="350px" src="https://s3.us-east-2.amazonaws.com/ig-clone2019/assets/tablet/tablet-post%3Aid.png"> 

 ### Desktop Layout

 Sign Up            |  Login
:-------------------------:|:-------------------------:
<img height="350px" src="https://s3.us-east-2.amazonaws.com/ig-clone2019/assets/desktop/desktop-signup.png"> |  <img height="350px" src="https://s3.us-east-2.amazonaws.com/ig-clone2019/assets/desktop/desktop-login.png">

 Home           |  Profile
:-------------------------:|:-------------------------:
<img height="350px" src="https://s3.us-east-2.amazonaws.com/ig-clone2019/assets/desktop/desktop-home.png"> |  <img height="350px" src="https://s3.us-east-2.amazonaws.com/ig-clone2019/assets/desktop/desktop-profile.png">


 Explore         |  Post/:id
:-------------------------:|:-------------------------:
<img height="350px" src="https://s3.us-east-2.amazonaws.com/ig-clone2019/assets/desktop/desktop-explore.png"> |  <img height="350px" src="https://s3.us-east-2.amazonaws.com/ig-clone2019/assets/desktop/desktop-profile%3Aid.png">





## Features

  * Upload/ Delete Media (photos)
  * Registration
  * Send Direct Messages
  * Search
  * News Feed
  * Ability to Follow/ Unfollow
  * Like Content
  * Search & Iterate for Location, Users, Hashtags


  ## Requirements

  - [X] User should be able to register
  - [X] User should be able to login
  - [X] User should be able to post content
  - User should only be able to see the posts of users that they are following
  - [X] Users should be able to see their own profile page
  - [X] Users should be able to see the profile pictures of others users
  - Users should can go see other profile pictures, but wont be able to actually see the posts of users they arent following.
  - Users should be able to search for content associated with certain tags
  - [X]  Users should be able to like post
  - [X] Users should be able to unlike posts
  - [X]  Users should only get be able to like one time per post
  - [X]  Users should be able to comment on posts



