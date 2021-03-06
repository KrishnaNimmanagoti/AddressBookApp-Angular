import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBookServiceService } from 'src/app/services/address-book-service.service';
import { MatDialog} from '@angular/material/dialog';
import { UpdateContactComponent } from '../update-contact/update-contact.component';


@Component({
  selector: 'app-addressbookhome',
  templateUrl: './addressbookhome.component.html',
  styleUrls: ['./addressbookhome.component.scss']
})
export class AddressbookhomeComponent implements OnInit {

  displayedColumns: string[] = ['fullName', 'mobile', 'email', 'address', 'city', 'state', 'zip', 'id'];
  contacts: any;
  numberOfContacts: any;

  constructor(
    private router: Router,
    private addressService: AddressBookServiceService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.addressService.getEmployeeList().subscribe((response: any) => {
      this.numberOfContacts = response.data.length;
      console.log("Response is ", response.data.length)
      console.log("Response is ", response)
      this.contacts = response.data;
      console.log(this.contacts)
    })
  }

  deleteContact(id: any) {
    console.log(id);
    this.addressService.deleteEmployee(id)
      .subscribe((response: any) => {
        console.log("Response is ", response)
        this.reloadData();
      })
  }

  updateContact(contact: any) {
    console.log(contact);
    const dialogRef = this.dialog.open(UpdateContactComponent, {
      data: {
        contact
      }
    });
  }
}
