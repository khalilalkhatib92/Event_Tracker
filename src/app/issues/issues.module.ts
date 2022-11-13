
export interface issueCreationDTO{
    name:string;
    dateOfIssue:Date;
    projectId:number,
      problemDesc:string,
      problemTracking:string,
      problemSolution:string,
      solutionSide:string,
      problemStatus:number,
      documentedBy:string,
      picture: File,
}
export interface issueDTO{
    name:string;
    dateOfIssue:Date;
    projectId:number,
      problemDesc:string,
      problemTracking:string,
      problemSolution:string,
      solutionSide:string,
      problemStatus:number,
      documentedBy:string,
      picture: string,
}