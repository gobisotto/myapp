import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDetalhesPage } from './movie-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: MovieDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieDetalhesPageRoutingModule {}
