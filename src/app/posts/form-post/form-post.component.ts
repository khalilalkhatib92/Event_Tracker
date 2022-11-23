import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { postCreationDTO } from '../post.module';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form!: FormGroup;

  @Input()
  model!: postCreationDTO;
  @Output()
  onSaveChanges: EventEmitter<postCreationDTO> = new EventEmitter<postCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title:'',
      body: '',
      userId: 0
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model)
    }
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

}
