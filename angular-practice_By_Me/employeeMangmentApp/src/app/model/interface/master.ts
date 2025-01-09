import { Interface } from "readline";

export interface IAapiResponse{

    message:string;
    result:boolean;
    data:any;

}

export interface IParentDept{

    departmentId:number,
    departmentName:string,
    departmentLogo:string;

}

export interface IChildDept{

    childDeptId:number,
    departmentName:string,
     parentDeptId:number;

}

export interface IProject{
    projectId:number,
    projectName:string,
    clientName:string,
    startDate:string,
    leadByEmpId:number,
    contactPerson:string,
    contactNo:string,
    emailId:string,
}



