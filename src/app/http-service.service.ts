import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpServiceService {

  constructor(private http: HttpClient) { }
  public configUrl = 'http://localhost:8090';
  getData(){
    return this.http.get(this.configUrl).map((res)=>{
      console.log(res);
      return res;
    });
  }

}
