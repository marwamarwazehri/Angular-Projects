import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  scheduleId:number=0;
  scheduleData:any;

  seatArray:number[]=[];
  bookedSeatsArray:number[]=[];

  userSelectedSeatArray:number[]=[];

  constructor(private activatedRoute:ActivatedRoute, private masterSrv:MasterService){
    this.activatedRoute.params.subscribe((res:any)=>{
      this.scheduleId=res.id;
      this.getScheduleDetailsById();


    })
  }


  getScheduleDetailsById(){
    this.masterSrv.getScheduleId(this.scheduleId).subscribe((res:any)=>{
      this.scheduleData=res;

      for(let index=1; index < this.scheduleData.totalSeats; index++){
        this.seatArray.push(index);
      }
    })
  }

  getBookedSeats(){
    this.masterSrv.getBookedSeats(this.scheduleId).subscribe((res:any)=>{
      this.scheduleData=res;

      
    })
  }

  checkIfSeatBooked(seatNumber:number){
    return this.bookedSeatsArray.indexOf(seatNumber);
  }

  selectSeat(seatNumber:number){
 this.userSelectedSeatArray.push(seatNumber);
  }

  checkIsSeatSelected(seatNumber:number){
    return this.bookedSeatsArray.indexOf(seatNumber)
  }

}
