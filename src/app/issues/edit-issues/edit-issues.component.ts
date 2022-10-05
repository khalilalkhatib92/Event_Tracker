import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { issueCreationDTO } from '../issues.module';

@Component({
  selector: 'app-edit-issues',
  templateUrl: './edit-issues.component.html',
  styleUrls: ['./edit-issues.component.css']
})
export class EditIssuesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: issueCreationDTO = {name:'RMS slow'};
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params =>{
    //   alert(params['id']);
    // })
  }

  saveChanges(issueCreationDTO: issueCreationDTO){

  }

}
