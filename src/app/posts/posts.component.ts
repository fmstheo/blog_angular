import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() postName: string;
  @Input() postDetails: string;

  posts = [
    {
      name: 'Mon premier post',
      details: 'Détails de mon premier post'
    },
    {
      name: 'Mon deuxième post',
      details: 'Détails de mon deuxième post'
    },
    {
      name: 'Mon troisième post',
      details: 'Détails de mon troisième post'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  datePost = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  getDetails() {
    return this.postDetails;
  }

}
