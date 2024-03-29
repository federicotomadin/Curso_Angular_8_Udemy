import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe [] = [];
  constructor( private _heroesservice: HeroesService,
               private router: Router ) {
  }

  ngOnInit() {
    this.heroes = this._heroesservice.getHeroes();
    console.log(this.heroes);

  }

  verHeroe(idx: number) {
   this.router.navigate(['/heroe', idx]);
  }

}
