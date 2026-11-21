import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { ArticlePage } from './pages/article-page/article-page';

export const routes: Routes = [
    {
        path: 'articles',
        component: MainPage,
    },
    {
        path: 'articles/:id',
        component: ArticlePage,
    },
    {
        path: '**',
        redirectTo: 'articles',
    }
];
