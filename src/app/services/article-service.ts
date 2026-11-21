import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';

@Service()
export class ArticleService {

        // DI
        // api hívások küldése erre az url-re
        private readonly httpClient = inject(HttpClient);
        private readonly apiUrl = 'http://localhost:3000';

    // get / articles - összes cikk tartalom nélkül
    // listázó végpontba nem teszünk be mindent // content? ezért van        

    public getAllArticles(): Observable<Article[]> {
        return this.httpClient.get<Article[]>(`${this.apiUrl}/articles`);
    }

    // get / articles/id - egy cikk tartalommal együtt
    public getArticleById(id:string) : Observable<Article> {
        return this.httpClient.get<Article>(`${this.apiUrl}/articles/${id}`);
    }
}
