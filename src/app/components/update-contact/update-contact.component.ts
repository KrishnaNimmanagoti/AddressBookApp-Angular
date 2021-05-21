import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { AddressBookServiceService } from 'src/app/services/address-book-service.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {

  form: FormGroup;
  fullName;
  phone;
  email;
  address;
  city;
  state;
  zip;

  constructor(public dialogRef : MatDialogRef<UpdateContactComponent>,private router: Router,
    @Inject(MAT_DIALOG_DATA) public data : any,
    private addressbookservice: AddressBookServiceService,
    private formbuilder: FormBuilder) {
      this.form = this.formbuilder.group({
        fullName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern('^[A-Z][a-zA-Z\\s]{2,}$')])],
        phone: ['', Validators.compose([Validators.required, Validators.pattern('^[1-9][0-9]{9}$')])],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        address: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])]
      });
      console.log(data.contact);
      this.fullName = data.contact.fullName;
      this.phone = data.contact.phone;
      this.email = data.contact.email;
      this.address = data.contact.address;
      this.city = data.contact.city;
      this.state = data.contact.state;
      this.zip = data.contact.zip;
     }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.form.valid) {
      let contact = {
        fullName: this.form.value.fullName,
        phone: this.form.value.phone,
        email: this.form.value.email,
        address: this.form.value.address,
        city: this.form.value.city,
        state: this.form.value.state,
        zip: this.form.value.zip
      }
      console.log(contact);
      this.addressbookservice.updateEmployee(contact, this.data.contact.id).subscribe((response) =>{
        console.log("Response : ", response);
        this.dialogRef.close;
        RouterLink:'';
      })
    }
  }

  onClick() {
    this.dialogRef.close();
    RouterLink:'';
  }

  reset() {
    this.form.reset();
  }

}
