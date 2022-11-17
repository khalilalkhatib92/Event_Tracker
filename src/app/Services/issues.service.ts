import { Injectable } from '@angular/core';
import { issueDTO } from '../issues/issues.module';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  issuesTable: issueDTO[] = [
    {
      name: 'RMS Slowness',
      dateOfIssue: new Date(),
      projectId: 1,
      problemDesc: 'string',
      problemTracking: 'string',
      problemSolution: 'string',
      solutionSide: 'string',
      problemStatus: 2,
      documentedBy: 'string',
      picture: 'string'
    },
    {
      name: 'RMS Interupption',
      dateOfIssue: new Date(),
      projectId: 2,
      problemDesc: 'string',
      problemTracking: 'string',
      problemSolution: 'string',
      solutionSide: 'string',
      problemStatus: 4,
      documentedBy: 'string',
      picture: 'string'
    },
  ];

  constructor() { }

  getAllIssues() {

  }
}
