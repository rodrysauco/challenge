import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CongressMember } from 'src/app/models/congressMember';

@Component({
  selector: 'app-member-list-item',
  templateUrl: './member-list-item.component.html',
  styleUrls: ['./member-list-item.component.scss']
})
export class MemberListItemComponent implements OnInit {
	@Input() member:CongressMember;
	@Output() select = new EventEmitter();
  constructor() { }

  ngOnInit() {
	}
	
	onClick(){
		this.select.emit(this.member.id);
	}
}
