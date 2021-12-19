import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnquiryserviceService {

  constructor(private http: HttpClient) { }

  public covid(){
   return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  public fetch(){
    // return this.http.get("http://10.126.239.168/EnquiryService/fetch?date1=01-Aug-21&date2=02-Aug-21&table=TrxTransaction");
    return this.http.get("./assets/data.json");
  }
}
