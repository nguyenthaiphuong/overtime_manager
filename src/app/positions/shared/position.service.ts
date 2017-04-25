import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class PositionService {

  private url: string = 'http://localhost:3000/positions';

  constructor(private http: Http) { }
  getPositions(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getPosition(id){
    return  this.http.get(this.url + '/' + id)
      .map(res => res.json());
  }

  addPosition(position){
    return this.http.post(this.url, {'position': position})
      .map(res => res.json());
  }

  updatePosition(position){
    return this.http.put(this.url + '/' + position.id, {'position': position})
      .map(res => res.json());
  }

  deletePosition(id){
    return this.http.delete(this.url + '/' + id)
      .map(res => res.json());
  }
}
