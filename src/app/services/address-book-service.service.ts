import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressBookServiceService {

  constructor(private http: HttpClient) { }

  createContact(data: any) {
    return this.http.post('http://localhost:8080/addressbook', data);
  }

  getEmployee(id: any) {
    return this.http.get('http://localhost:8080/addressbook/' + id);
  }

  getEmployeeList() {
    return this.http.get('http://localhost:8080/addressbook');
  }

  deleteEmployee(id: any) {
    return this.http.delete('http://localhost:8080/addressbook/' + id);
  }

  updateEmployee(data: any, id: any) {
    return this.http.put('http://localhost:8080/addressbook/' + id, data);
  }
}
