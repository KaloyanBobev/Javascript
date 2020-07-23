

import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {


  heroes: Hero[];

  selectedHero: Hero;

  constructor(private HeroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes() {
    this.HeroService.getHeroes().subscribe(heroes => this.heroes = this.heroes);
  }
}
