import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { issueCreationDTO, issueDTO } from '../issues.module';

@Component({
  selector: 'app-edit-issues',
  templateUrl: './edit-issues.component.html',
  styleUrls: ['./edit-issues.component.css']
})
export class EditIssuesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: issueDTO = {
    name: 'RMS slow',
    dateOfIssue: new Date(),
    projectId: 1,
    problemDesc: 'A very Slowness in RMS Performance',
    problemTracking: 'assign to Bissan employee',
    problemSolution: 'restart RMS Live server',
    solutionSide: 'Bissan',
    problemStatus: 2,
    documentedBy: 'Khalil',
    picture: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  };
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params =>{
    //   alert(params['id']);
    // })
  }

  saveChanges(issueCreationDTO: issueCreationDTO){
    console.log(issueCreationDTO);
  }

}
