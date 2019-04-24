import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() postName: string;
  @Input() postDetails: string;
  @Input() postDate: Date;
  @Input() loveIts: number;

  constructor() { }

  getDislike() {
    this.loveIts--;
    console.log('methode getDisLike :', this.loveIts);
  }

  getLove() {
    this.loveIts++;
    console.log('methode getlove :', this.loveIts);

  }

  ngOnInit() {
  }

  getDetails() {
    return this.postDetails;
  }

}
