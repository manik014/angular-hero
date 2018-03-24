import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import{Hero} from './hero';
import{HEROES} from './herolist';
import { MessageService } from './message.service';
@Injectable()
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroList: fetched heroes');
    return of(HEROES);
  }
  constructor(private messageService: MessageService) { }

}
