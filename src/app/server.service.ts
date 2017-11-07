import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';
import 'rxjs/Rx';
import { Response } from '@angular/http';


@Injectable()
export class ServerService {
  constructor(private http: Http) {

  }

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http-465f0.firebaseio.com/data.json',
    //   servers,
    //   {headers:headers});
    return this.http.put('https://udemy-ng-http-465f0.firebaseio.com/data.json',
      servers,
      {headers:headers});
  }

  getServers(){
    return this.http.get('https://udemy-ng-http-465f0.firebaseio.com/data.json')
      .map((response:Response) =>{
            const data = response.json();
            return data ;
      }) ;
  }
}
