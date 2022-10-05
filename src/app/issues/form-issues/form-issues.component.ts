import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { issueCreationDTO } from '../issues.module';

@Component({
  selector: 'app-form-issues',
  templateUrl: './form-issues.component.html',
  styleUrls: ['./form-issues.component.css']
})
export class FormIssuesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;

  @Input()
  model!: issueCreationDTO;

  @Output()
  onSaveChanges: EventEmitter<issueCreationDTO> = new EventEmitter<issueCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, Validators.minLength(3), firstLetterUppercase()],
      }]
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
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
