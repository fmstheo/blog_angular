import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postDate = new Promise((resolve, reject) => {
  const date = new Date();
  setTimeout(
    () => {
      resolve(date);
    }, 2000
  );
});
  posts = [
    {
      title: 'Mon premier post',
      content: 'Détails de mon premier post',
      loveIts: 0,
      created_at: this.postDate
    },
    {
      title: 'Mon deuxième post',
      content: 'Détails de mon deuxième post',
      loveIts: 0,
      created_at: this.postDate
    },
    {
      title: 'Mon troisième post',
      content: 'Détails de mon troisième post',
      loveIts: 0,
      created_at: this.postDate
    }
  ];



  constructor() {
  }
}
