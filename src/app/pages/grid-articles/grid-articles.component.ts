import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/article';
import { ArticlesService } from 'src/service/articles.service';

@Component({
  selector: 'app-grid-articles',
  templateUrl: './grid-articles.component.html',
  styleUrls: ['./grid-articles.component.css']
})
export class GridArticlesComponent  implements OnInit {

  articles$ : IArticle[] = [];

  constructor(private articleService: ArticlesService) {}

  ngOnInit(): void {
    this.articles$ = this.articleService.getArticles();
    console.log(this.articles$);
  }

    handleDelete = (codart: string) => {
      console.log("Click button per eliminare articolo" + codart);
      this.articles$.splice(this.articles$.findIndex(x => x.codart === codart), 1);
      console.log(this.articles$);
    }

    handleEdit = (codart: string) => {
      console.log("Click button per modificare del codice" + codart);   
}
    
 

}
