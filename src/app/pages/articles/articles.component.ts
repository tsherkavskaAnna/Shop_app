import { Component, OnInit } from '@angular/core';
import { IArticle } from '../../models/article';
import { ArticlesService } from 'src/service/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: IArticle[] = []

  constructor( private articleServise : ArticlesService) {}

  ngOnInit(): void {
    this.articles = this.articleServise.getArticles();
  }

 
}
