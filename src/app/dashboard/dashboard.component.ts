import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  product=[{"Name":"Picture1","MRP":50,"image":""}]

  constructor() { }
  Designation :string;
  Username:string;
  NoOfTeamMembers:number;
  TotalCostsOfAllProjects:number;
  PendingTasks:number;
  UpcompingProject:number;
  ProjectCost :number;
  CurrentExpenditure:number;
  AvailableFUnds:number;

  ngOnInit() {
    this.Username="deepak";
    this.Designation="Developer";
    this.NoOfTeamMembers=50;
this.TotalCostsOfAllProjects=50000;
this.PendingTasks=10;
this.UpcompingProject=5;
this.ProjectCost=500;
this.CurrentExpenditure=15;
this.AvailableFUnds=420;

  
  }
  checkIt(){
   var editedPrice =prompt("enter edited price");
   console.log('edited Price ',editedPrice);
  }

}
