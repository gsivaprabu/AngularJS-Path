import { Injectable } from "@angular/core";
import * as firbase from "firebase";
import { Blog } from "../adminShared/blog";

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
      });
  }
}
