import { Component, Input } from '@angular/core';
import { Article } from '../../models/article.model';
import { RouterLink } from '@angular/router';

@Component({
  imports: [
    RouterLink,
  ],
  selector: 'app-article-card',
  styleUrl: './article-card.scss',
  templateUrl: './article-card.html',
})
export class ArticleCard {
  @Input ({required:true})  // ez angular sajátosság
  public article!: Article;
}
