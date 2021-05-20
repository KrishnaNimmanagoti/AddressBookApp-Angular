import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressBookServiceService } from 'src/app/services/address-book-service.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  id: any;
  a: boolean = false;
  submitted = false;
  contactDetails!: FormGroup;
  isEdit: Boolean = false;
  contacts: any;

  constructor(
    private router: Router,
    private addressService: AddressBookServiceService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contactDetails = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern('^[A-Z][a-zA-Z\\s]{2,}$')])],
      mobile: ['', Validators.compose([Validators.required, Validators.pattern('^[1-9][0-9]{9}$')])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])]
    })
  }
  onSubmit() {
    this.submitted = true;
    this.register();
  }

  register() {
    if (!this.isFormValid())
      return;
    var addressDto = {
      'fullName': this.contactDetails.controls['name'].value,
      'phone': this.contactDetails.controls['mobile'].value,
      'email': this.contactDetails.controls['email'].value,
      'address': this.contactDetails.controls['address'].value,
      'city': this.contactDetails.controls['city'].value,
      'state': this.contactDetails.controls['state'].value,
      'zip': this.contactDetails.controls['zip'].value
    };
    console.log("address dto in Register()", addressDto)
    this.addressService.createContact(addressDto).subscribe((response: any) => {
      this.router.navigate([""]);
      console.log("Response is ====> " + response);
    })
  }

  isFormValid(): boolean {
    if (
      this.contactDetails.controls['name'].valid &&
      this.contactDetails.controls['mobile'].valid &&
      this.contactDetails.controls['email'].valid &&
      this.contactDetails.controls['address'].valid &&
      this.contactDetails.controls['city'].valid &&
      this.contactDetails.controls['state'].valid &&
      this.contactDetails.controls['zip'].valid)
      return true;
    this.contactDetails.markAllAsTouched();
    console.log("Form validation is false");
    return false;
  }

  reset() {
    this.contactDetails.reset();
  }
}
