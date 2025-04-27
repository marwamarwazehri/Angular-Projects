import { Component, inject } from '@angular/core';
import { EventService } from '../../services/event.service';
import { IAPIResponse, IEvent } from '../../model/model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  eventService=inject(EventService);

  eventList:IEvent[]=[];

  ngOnInit(){
    this.getEvents();
  }

  getEvents(){
    this.eventService.getAllEvents().subscribe((res:IAPIResponse)=>{
      
      console.log(res.data);
      this.eventList=res.data;
      

    })
  }

}
