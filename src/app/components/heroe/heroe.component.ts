import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

}
