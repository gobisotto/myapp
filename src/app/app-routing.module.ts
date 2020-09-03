import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'tabs',
    loadChildren: './tabs/tabs.module#TabsPageModule'
  },
  {
    path: 'movie-detalhes',
    loadChildren: () => import('./movie-detalhes/movie-detalhes.module').then( m => m.MovieDetalhesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
