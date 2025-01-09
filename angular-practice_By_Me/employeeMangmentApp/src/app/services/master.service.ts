import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { IAapiResponse, IParentDept, IProject } from '../model/interface/master';
import { Employee } from '../class/employee';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }
  http = inject(HttpClient); /*la meshyet  HttpClient htyna bel app.config.ts bel 
  providers hay provideHttpClient()
   */
  



  getAllDept():Observable<IAapiResponse>{
    return this.http.get<IAapiResponse>('https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment');
    
}


getChiledDeptById(depid:number):Observable<IAapiResponse>{
  return this.http.get<IAapiResponse>('https://projectapi.gerasim.in/api/EmployeeManagement/GetChildDepartmentByParentId?deptId='+depid);
  
}


saveEmp(obj:Employee):Observable<IAapiResponse>{
  return this.http.post<IAapiResponse>('https://projectapi.gerasim.in/api/EmployeeManagement/CreateEmployee',obj);
  
}

getAllEmployee():Observable<Employee[]>{
  return this.http.get<Employee[]>('https://projectapi.gerasim.in/api/EmployeeManagement/GetAllEmployees');
  
}

updateEmp(obj:Employee):Observable<IAapiResponse>{
  return this.http.put<IAapiResponse>('https://projectapi.gerasim.in/api/EmployeeManagement/UpdateEmployee/'+obj.deptId,obj);
  
}

deleteEmp(id:number):Observable<IAapiResponse>{
  return this.http.delete<IAapiResponse>('https://projectapi.gerasim.in/api/EmployeeManagement/DeleteEmployee/'+id);
  
}

saveProject(obj:IProject):Observable<IProject>{
  return this.http.post<IProject>('https://projectapi.gerasim.in/api/EmployeeManagement/CreateProject',obj);
  
}


getAllProjects():Observable<IProject[]>{
  return this.http.get<IProject[]>('https://projectapi.gerasim.in/api/EmployeeManagement/GetAllProjects');
  
}

getProjectById(id:number):Observable<IProject>{
  return this.http.get<IProject>('https://projectapi.gerasim.in/api/EmployeeManagement/GetProject/'+id);
  
}

updateProject(obj:IProject):Observable<IProject>{
  return this.http.put<IProject>('https://projectapi.gerasim.in/api/EmployeeManagement/UpdateProject/'+obj.projectId,obj);
  
}

// getProjectEmp():Observable<IProject[]>{
//   return this.http.get<IProject[]>('https://projectapi.gerasim.in/api/EmployeeManagement/GetAllProjectEmployees');
  
// }






}
