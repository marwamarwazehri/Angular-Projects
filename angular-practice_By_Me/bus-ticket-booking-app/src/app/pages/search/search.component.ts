import { Component, inject } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';  
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe,RouterLink],  
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  locations$: Observable<any[]> = new Observable<any[]>();
  masterSrv = inject(MasterService);

  searchObj: any = {
    fromLocation: '',
    toLocation: '',
    travelDate: ''
  };

  busList: any[] = [];

  ngOnInit() {
    this.getAllLocation();
  }

  getAllLocation() {
    this.locations$ = this.masterSrv.getLocations();
  }

  onSearch() {
    const { fromLocation, toLocation, travelDate } = this.searchObj;  
    this.masterSrv.searchBus(fromLocation, toLocation, travelDate).subscribe((res: any) => {
      this.busList = res;
      console.log(this.busList);
    });
  }
}
