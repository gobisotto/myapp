import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseApiPath = "https://api.themoviedb.org/3";
  private apiKey = "22629b81e39334ed1142105becf2778f";

  constructor(private httpClient: HttpClient) {
  }

  getPopularMovies(page = 1){
    return this.httpClient.get(this.baseApiPath+'/movie/popular?page='+page+'&api_key='+ this.apiKey);
  }

  getLatestMovies(){
    return this.httpClient.get(this.baseApiPath+'/movie/latest?api_key='+ this.apiKey);
  }

  getMovieDetails(filmeid){
    return this.httpClient.get(this.baseApiPath+'/movie/'+filmeid+'?api_key='+ this.apiKey);
  }
}
