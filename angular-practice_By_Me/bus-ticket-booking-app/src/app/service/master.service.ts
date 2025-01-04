import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl:string='https://projectapi.gerasim.in/api/BusBooking/'

  constructor(private http:HttpClient) { } 
  /*private http:HttpClient hon lhttp hye instance of HttpClient class */

  getLocations():Observable<any[]>{
    //console.log(this.http.get<any[]>(this.apiUrl + 'GetBusLocations'))
    return this.http.get<any[]>(this.apiUrl + 'GetBusLocations') /*
    In Angular, HttpClient methods like get, post, put, and delete return Observables. 
    These Observables represent the asynchronous nature of HTTP requests and allow you to subscribe
     to the result once the request completes. When you subscribe to an Observable, it will trigger
      the HTTP request and provide the response once it’s available.
    
    */
  }

  searchBus(from:number,to:number, travelDate:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}searchBus?fromLocation=${from}&toLocation=${to}&travelDate=${travelDate}`) 

  }

  getScheduleId(id:number){
    return this.http.get<any[]>(this.apiUrl + 'GetBusScheduleById?id='+id)

  }

  getBookedSeats(id:number){
    return this.http.get<any[]>(this.apiUrl + 'getBookedSeats?shceduleId='+id)
  }



}


