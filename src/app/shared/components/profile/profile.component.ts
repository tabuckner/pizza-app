import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() name: string;
  @Input() bio: string;
  @Input() stores: number;
  @Input() avatar: string;
  avatarPlaceholder = 'http://kiwilandingpad.com/wp-content/uploads/2014/05/avatar-placeholder.png';

  constructor() { }

  ngOnInit() {
    !this.avatar ? this.avatar = this.avatarPlaceholder : this.avatar;
  }

}
