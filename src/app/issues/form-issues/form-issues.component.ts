import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { issueCreationDTO, issueDTO } from '../issues.module';

@Component({
  selector: 'app-form-issues',
  templateUrl: './form-issues.component.html',
  styleUrls: ['./form-issues.component.css']
})
export class FormIssuesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;
  projects = [{id:1, name:'RMS Live'}, {id:2, name:'RMS Test'}, {id:3, name:'Portal Live'}, {id:4, name:'Portal Test'}];
  probStatuses = [{id:1, name:'Opened'},{id:2, name:'Solved'}, {id:3, name:'Pending'},{id:4, name:'In Porgress'}, {id:5, name: 'Closed'}];

  @Input()
  model!: issueDTO;

  //model!: issueCreationDTO;

  @Output()
  onSaveChanges: EventEmitter<issueCreationDTO> = new EventEmitter<issueCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, Validators.minLength(3), firstLetterUppercase()],
      }],
      dateOfIssue: '',
      projectId:0,
      problemDesc:'',
      problemTracking:'',
      problemSolution:'',
      solutionSide:'',
      problemStatus:0,
      documentedBy:'',
      picture:'',
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

  onImageSelected(image:any){
    this.form.get('picture')?.setValue(image);
  }

  getErrorMessageFieldName() {
    const field = this.form.get('name');

    if (field?.hasError('required')) {
      return 'The Name field is Required';
    }

    if (field?.hasError('minlength')) {
      return 'The minimum length must be 3';
    }

    if (field?.hasError('firstLetterUppercase')) {
      return field.getError('firstLetterUppercase').message;
    }
    return '';
  }

}
