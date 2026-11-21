import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleCard } from '../../components/article-card/article-card';
import { ArticleService } from '../../services/article-service';

@Component({
  imports: [
    ArticleCard,
  ],
  selector: 'app-main-page',
  styleUrl: './main-page.scss',
  templateUrl: './main-page.html',
})
export class MainPage implements OnInit{
  private readonly articleService = inject(ArticleService);
  private readonly cdr = inject(ChangeDetectorRef);
  public articles: Article[] = [];
  
  public ngOnInit(): void {
    this.articleService.getAllArticles().subscribe((articles)=> {
      this.articles = articles;
      this.cdr.markForCheck(); // változás történt, ellenőrizd a html-t
    })
  }

}
