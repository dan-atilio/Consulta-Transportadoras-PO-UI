import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ViewComponent } from './components/view/view.component';

export const routes: Routes = [
    {path: 'about',      title: 'Sobre o Projeto',     component: AboutComponent},
    {path: 'view',       title: 'Visualização do Cadastro',  component: ViewComponent}
];
