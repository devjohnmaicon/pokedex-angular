import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {

  public getAllPokemons: any;
  private setAllPokemons: any;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe((res) => {
      this.getAllPokemons = res.results;
      this.setAllPokemons = this.setAllPokemons;
    });
  }

  getSearch(value: string) {
    console.log(value);
    const filter = this.getAllPokemons.filter(
      (res: any) => !res.name.indexOf(value.toLowerCase())
    );

    this.getAllPokemons = filter;
  }
}
