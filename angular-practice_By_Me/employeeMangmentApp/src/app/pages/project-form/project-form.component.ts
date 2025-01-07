import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from '../../class/employee';
import { MasterService } from '../../services/master.service';
import { AsyncPipe } from '@angular/common';
import { IProject } from '../../model/interface/master';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [ReactiveFormsModule,AsyncPipe],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css'
})
export class ProjectFormComponent {

  employeeList$:Observable<Employee[]>=new Observable<[]>;
  masterSrv=inject(MasterService);

  projectForm:FormGroup=new FormGroup({

  });


  constructor(){

    this.initiliazeForm();
    this.employeeList$=this.masterSrv.getAllEmployee(); //shoufe fekret hay
  }

  

  
  initiliazeForm(){
    this.projectForm=new FormGroup({

      projectId: new FormControl(0),
      projectName: new FormControl(''),
      clientName: new FormControl(''),
      startDate: new FormControl(''),
      leadByEmpId: new FormControl(0),
      contactPerson: new FormControl(''),
      contactNo: new FormControl(''),
     emailId: new FormControl(''),



    });
  }

   
    onSaveProject(){

      const formValue=this.projectForm.value;
      this.masterSrv.saveProject(formValue).subscribe((res:IProject)=>{
        alert("project added");
        this.projectForm.reset();
      }, error=>{
       alert('API error')
      })
    }

}
