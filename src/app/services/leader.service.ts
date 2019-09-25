import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';  

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders(): Promise<Leader[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(LEADERS);
      }, 2000);
    });
  }

  /*getLeader(id: string): Leader {
    return LEADERS.filter((leader) => (leader.id === id))[0];
  }
 */
  getFeaturedLeader(): Promise<Leader> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(LEADERS.filter((leader) => leader.featured)[0]);
      }, 2000);
    });
  }

  constructor() { }
}
