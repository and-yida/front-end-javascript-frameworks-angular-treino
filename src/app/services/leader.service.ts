import { Injectable } from '@angular/core';
import { Leader } from '../menu/shared/leader';
import { LEADERS } from '../menu/shared/leaders';
import { firstValueFrom, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders(): Promise<Leader[]> {
    return firstValueFrom(of(LEADERS).pipe(delay(2000)));
  }

  getLeader(id: string): Promise<Leader> {
    return firstValueFrom(of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2000)));
  }

  getFeaturedLeader(): Promise<Leader> {
    return firstValueFrom(of(LEADERS.filter((leader) => (leader.featured))[0]).pipe(delay(2000)));
  }

  constructor() { }
}
