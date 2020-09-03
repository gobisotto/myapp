import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { MovieDetalhesPage } from '../movie-detalhes/movie-detalhes.page';

const routes: Routes = [

  {
    path: '',
    component: Tab2Page
  },
  {
    path: 'movie-detalhes',
    component:MovieDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
