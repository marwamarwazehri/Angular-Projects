import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from '../../class/employee';
import { MasterService } from '../../services/master.service';
import { AsyncPipe } from '@angular/common';
import { IProject } from '../../model/interface/master';
import { ActivatedRoute } from '@angular/router';

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
  activatedRoute=inject(ActivatedRoute)

  projectForm:FormGroup=new FormGroup({

  });


  constructor(){

    this.initiliazeForm();
    this.employeeList$=this.masterSrv.getAllEmployee(); 
    this.activatedRoute.params.subscribe((res:any)=>{
      console.log(res.id)
      if(res.id!==0){
      this.getProject(res.id);

      }
    })

  }

  

  
  initiliazeForm(data?:IProject){
    this.projectForm=new FormGroup({

      projectId: new FormControl(data? data.projectId: 0),
      projectName: new FormControl(data? data.projectName: ''),
      clientName: new FormControl(data? data.clientName: ''),
      startDate: new FormControl(data? data.startDate: ''),
      leadByEmpId: new FormControl(data? data.leadByEmpId: 0),
      contactPerson: new FormControl(data? data.contactPerson: ''),
      contactNo: new FormControl(data? data.contactNo: ''),
     emailId: new FormControl(data? data.emailId: ''),



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

    getProject(id:number){

      
      this.masterSrv.getProjectById(id).subscribe((res:IProject)=>{
        this.initiliazeForm(res);
        this.projectForm.reset();
      }, error=>{
       alert('API error')
      })
    }

    updateProject(){
      const formValue=this.projectForm.value;
      this.masterSrv.updateProject(formValue).subscribe((res:IProject)=>{
        alert("project updated");
        this.projectForm.reset();
      }, error=>{
       alert('API error')
      })
    }

}
