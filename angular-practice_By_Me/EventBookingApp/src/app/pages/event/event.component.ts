import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

  activatedRoute=inject(ActivatedRoute);
  eventService=inject(EventService);

  constructor(){
    this.activatedRoute.params.subscribe((res:any)=>{

    })
  }

  getEventDetails(id:number){
    this.eventService.getAllEventById(id).subscribe((res:any)=>{
      
    })

  }

}
