import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProject } from '../../model/interface/master';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  projectList:IProject[]=[]
  mastersrc=inject(MasterService)

  ngOnInit():void{
  this.getProjects()
  }

  getProjects(){
    this.mastersrc.getAllProjects().subscribe((res:IProject[])=>{
      this.projectList=res;

    })
  }

}
