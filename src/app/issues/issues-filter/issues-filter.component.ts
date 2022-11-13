import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-issues-filter',
  templateUrl: './issues-filter.component.html',
  styleUrls: ['./issues-filter.component.css']
})
export class IssuesFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;
  systems = [{id:1, name:'RMS Live'}, {id:2, name:'RMS Test'}, {id:3, name:'Portal Live'}, {id:4, name:'Portal Test'}];
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      systemTargetId: 0,
      probOpend: false,
      probSolved: false,
      probPending: false,
      probInProgress: false,
      probClosed: false
    });
  }

  clearForm(){
    this.form.reset();
  }

}
