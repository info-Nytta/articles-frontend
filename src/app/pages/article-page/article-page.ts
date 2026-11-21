import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article-service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article.model';

@Component({
  imports: [],
  selector: 'app-article-page',
  styleUrl: './article-page.scss',
  templateUrl: './article-page.html',
})
export class ArticlePage implements OnInit{
  private readonly articleService = inject(ArticleService);
  private readonly activatedRoute = inject(ActivatedRoute); // információ a jelenlegi route-ról
  private readonly cdr = inject(ChangeDetectorRef); // változásfigyelő

  private readonly articleId: string | null = this.activatedRoute.snapshot.params['id'] ?? null; // elvileg nem fordulhat elő most a null
  public article?: Article; // azért opcionális, mert alapból nem kap kezdeti értéket, de lehet, hogy soha nem lesz értéke, ha valaki nem létező id-t ad meg.

  public ngOnInit(): void {
    if (this.articleId) { // ha létezik (nem null érték)
      this.articleService.getArticleById(this.articleId).subscribe((article) => {
        this.article = article;
        this.cdr.markForCheck();
      })
    }
  }
}
