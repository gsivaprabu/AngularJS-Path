import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BlogAdminService } from "../adminShared/blog-admin.services";
import { Blog } from "../adminShared/blog";

@Component({
  selector: "add-menu",
  templateUrl: "./blog-addComponent.html"
})
export class BlogAddComponent {
  imgTitle: string;
  imageSRC: string;
  postTitle: string;
  content: string;
  post: Blog;
}
