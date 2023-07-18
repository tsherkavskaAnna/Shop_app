import { Injectable } from '@angular/core';
import { IArticle } from '../app/models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articles: IArticle[] = [
    {codart : '014600301', description : 'BARILLA FARINA 1 KG', un : 'PZ', quantity : 24, weight : 1, price : 1.09, active: true, date: new Date(), image: "/assets/image/farina.jpg"},
    {codart : '014600301', description : 'BARILLA PASTA PENNE RIGATE CG.500 N.55', un : 'PZ', quantity : 27, weight : 0.5, price : 1.3, active: true, date: new Date(), image: "/assets/image/penneRigate.jpg"},
    {codart : "013500121", description : "BARILLA PASTA GR.500 N.70 1/2 PENNE", un : "PZ", quantity : 30, weight : 0.5, price : 1.3, active: true, date: new Date(),  image: "/assets/image/mezzePenne.jpg"},
    {codart : "007686402", description : "FINDUS FIOR DI NASELLO 300 GR", un : "PZ", quantity : 8, weight : 0.3, price : 6.46, active: true, date: new Date(), image: "/assets/image/nasello.jpg"},
    {codart : "057549001", description : "FINDUS CROCCOLE 400 GR", un : "PZ", quantity : 12, weight : 0.4, price : 5.97, active: true, date: new Date(),image: "/assets/image/croccole.jpg"}
  ]

  constructor() { }

  getArticles = () : IArticle[] => this.articles;

  getArticleByCode = (codArt: string) : IArticle => {
    const index = this.articles.findIndex(art => art.codart === codArt);
    return this.articles[index]

  }
  
}
