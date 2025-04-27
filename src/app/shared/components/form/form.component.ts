import { Component, EventEmitter, inject, input, Output} from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  // @Output() send = new EventEmitter<User>();
  // product = input<User | null >(null);
  form! : FormGroup;

  // ngOnInit(): void {
  //   this.form = new FormGroup(
  //     {
  //         title : new FormControl<string>(this.product()?.title ?? '',{
  //         nonNullable : true,
  //         validators: Validators.required}),
  //     }
  //   ); 
  // }

  onSubmit(){
    // const userData = this.form.value as User;
    // this.send.emit(product)
  }
}
