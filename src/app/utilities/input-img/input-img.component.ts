import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../utils';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  @Input()
  urlCurrentImage!: string;
  @Output()
  onImageSelected = new EventEmitter<File>();

  imageBase64!: string;
  constructor() { }

  ngOnInit(): void {
  }

  change(event: any) : void{
    if(event.target.files.length > 0){
      const file : File = event.target.files[0];
      toBase64(file).then((value: string | any)=> this.imageBase64 = value);
      this.onImageSelected.emit(file);
      this.urlCurrentImage = '';
    }
  }
}
