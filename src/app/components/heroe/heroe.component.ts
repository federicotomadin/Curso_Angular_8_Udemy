import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

 heroe: any = {};

  constructor(private activateRoute: ActivatedRoute, private _heroesService: HeroesService) {

  this.activateRoute.params.subscribe( params => {
    this.heroe = this._heroesService.getHeroe(params ['id'] );
  });

  }

  ngOnInit() {
  }

}
