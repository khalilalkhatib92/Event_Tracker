import { Component, OnInit } from '@angular/core';
import { IssuesService } from 'src/app/Services/issues.service';
import { issueDTO } from '../issues.module';

@Component({
  selector: 'app-index-issues',
  templateUrl: './index-issues.component.html',
  styleUrls: ['./index-issues.component.css']
})
export class IndexIssuesComponent implements OnInit {

  //columnToDisplay = ['name','Date'];
  table: issueDTO[] = [];
  columnToDisplay=['name','dateOfIssue','projectId', 'problemStatus', 'action']
  constructor(private issueService: IssuesService) { }

  ngOnInit(): void {
    this.getAllIssues();
  }

  getAllIssues(){
    this.table = this.issueService.issuesTable;
    console.log("All Issues: ", this.table);
  }

}
