import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  constructor() {
  }
}
