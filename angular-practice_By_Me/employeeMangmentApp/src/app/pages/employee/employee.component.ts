import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IAapiResponse, IChildDept, IParentDept } from '../../model/interface/master';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../class/employee';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  providers: [], 
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  masterService = inject(MasterService);

  isFormVisible=signal<boolean>(false);
  parentDeptList=signal<IParentDept[]>([]);

  paretntDepartmentId:number=0;

  ChildDeptList=signal<IChildDept[]>([]);

  employeeObj=inject(Employee);

  employeeList=signal<Employee[]>([]);


  ngOnInit():void{
    
   this.getParentDeptList();
    this.getEmployee()


  }


  getParentDeptList(){
    this.masterService.getAllDept().subscribe((res:IAapiResponse)=>{

      this.parentDeptList.set(res.data);

    })

  }

  onParentDeptChange(){
    this.masterService.getChiledDeptById(this.paretntDepartmentId).subscribe((res:IAapiResponse)=>{
     console.log(res.data)
      this.ChildDeptList.set(res.data);
    })

  }

  onSave(){
    this.masterService.saveEmp(this.employeeObj).subscribe((res:IAapiResponse)=>{
      alert("employee created")
    }, error=>{
     alert('API error')
    })
  }

  getEmployee(){
    this.masterService.getAllEmployee().subscribe((res:Employee[])=>{

      this.employeeList.set(res);

    })
  }

  onEdit(data:Employee){
    this.employeeObj=data;
    this.isFormVisible.set(true);
  }

  onDelete(id:number){
    const isDelete=confirm("Are you sure you want to delte");
    if(isDelete){
      
      this.masterService.deleteEmp(id).subscribe((res:IAapiResponse)=>{
        alert("employee deleted")
      }, error=>{
       alert('API error')
      })
    }
  }


  onUpdate(){
   
      this.masterService.updateEmp(this.employeeObj).subscribe((res:IAapiResponse)=>{
        alert("employee updated")
      }, error=>{
       alert('API error')
      })
  
  }

  
}
