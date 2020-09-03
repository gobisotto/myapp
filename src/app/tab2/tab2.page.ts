import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie-service/movie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [ MovieService ] 
})
export class Tab2Page {
  
  public lista_filmes = new Array<any>();
  public page=1;

  public infiniteScroll;
  public refresher;
  public isRefreshing;

  constructor(
    private router: Router,
    private movieService: MovieService
    ) {}

  carregarFilmes(newpage:boolean=false){
    this.movieService.getPopularMovies(this.page).subscribe(
      data =>{
        const retorno = (data as any);

        if(newpage){
          this.lista_filmes=this.lista_filmes.concat(retorno.results);
          console.log(this.lista_filmes);
          this.infiniteScroll.target.complete();
        }else{
          this.lista_filmes=retorno.results;
        }
        
        if(this.isRefreshing){
          this.refresher.target.complete();
          this.isRefreshing=false;
        }

      },error=>{
        console.log(error);
        if(this.isRefreshing){
          this.refresher.target.complete();
          this.isRefreshing=false;
        }
      }
    )
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing=true;

    this.carregarFilmes();
  }

  ionViewWillEnter(){
    this.carregarFilmes();
  }

  doInfinite(infiniteScroll){
    this.page++;
    this.infiniteScroll=infiniteScroll;

    this.carregarFilmes(true);
  }

  abrirDetalhes(){
    this.router.navigateByUrl('/movie-detalhes');
  }

}
