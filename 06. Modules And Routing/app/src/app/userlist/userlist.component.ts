import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Users, ApiResponse } from '../app.interfaces';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})

export class UserlistComponent implements OnInit {


  users:any
  constructor(private userServise: UserServiceService) {
  }
  ngOnInit(): void {
    this.userServise.getAllUsers().subscribe((data: any) => {

      this.users = data.results;
    })

  }
}
