import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css'],
})
export class UserSingleComponent implements OnInit {
  @Input() users: User[] = [];
  @Output() deleted = new EventEmitter<User>();

  constructor() {}

  ngOnInit(): void {}

  deleteUser(user: User) {
    this.deleted.emit(user);
  }
}
