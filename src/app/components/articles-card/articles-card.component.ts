import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IArticle } from 'src/app/models/article';

@Component({
  selector: 'app-articles-card',
  templateUrl: './articles-card.component.html',
  styleUrls: ['./articles-card.component.css']
})
export class ArticlesCardComponent {

constructor() {}

  @Input()
  article: IArticle ={
    codart: '',
    description: '',
    un: '',
    quantity: 0,
    weight: 0,
    price: 0,
    active: true,
    date: new Date(),
    image: ''
  };

  @Output()
  delete = new EventEmitter();
  @Output()
  edit = new EventEmitter();

  editArt() {
    this.edit.emit(this.article.codart);
  }

  deleteArt() {
    this.delete.emit(this.article.codart);
  }
}
