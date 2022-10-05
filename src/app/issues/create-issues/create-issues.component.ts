import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { issueCreationDTO } from '../issues.module';

@Component({
  selector: 'app-create-issues',
  templateUrl: './create-issues.component.html',
  styleUrls: ['./create-issues.component.css']
})
export class CreateIssuesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  saveChanges(issueCreationDTO: issueCreationDTO) {
    console.log(issueCreationDTO);
    this.router.navigate(['/issuse']);
  }

}
