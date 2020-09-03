import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDetalhesPageRoutingModule } from './movie-detalhes-routing.module';

import { MovieDetalhesPage } from './movie-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDetalhesPageRoutingModule
  ],
  declarations: [MovieDetalhesPage]
})
export class MovieDetalhesPageModule {}
