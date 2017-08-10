# 01 Angular 2 End to end - 01 Setting up Blog System - 03 Creating the Blog Service

- Adding JavaScript files in blog-admin.service.ts

```javascript
import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { Blog } from "../adminShared/blog";
```

Adding the functionalities in service page
```javascript
@Injectable()
export class BlogAdminService {
  createPost(post: Blog) {
    let storageRef = firebase.storage().ref();
    storageRef
      .child("images/${post.imageTitle}")
      .putString(post.img, "base64")
      .then(snapshot => {
        let url = snapshot.metadata.downloadURLs[0];
        let dbRef = firebase.database().ref("blogPosts/");
        let newPost = dbRef.push();

        newPost.set({
          title: post.title,
          content: post.content,
          imageTitle: post.imgTitle,
          img: url,
          id: newPost.key
        });
      })
      .catch(error => {
        alert("failed upload: ${error}");
      });
  }
}
```