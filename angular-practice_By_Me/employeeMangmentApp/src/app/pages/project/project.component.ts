import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
  changeDetectorRef = inject(ChangeDetectorRef)
  router=inject(Router);

  


  ngOnInit():void{
  this.getProjects()
  }

  getProjects(){
    this.mastersrc.getAllProjects().subscribe((res:IProject[])=>{
      this.projectList=res;
      this.changeDetectorRef.detectChanges(); 

    })
  }

  onEdit(id:number){
  this.router.navigate(['/layout/new-project',id])

  }

  onDelete(id:number){
    

  }

}
