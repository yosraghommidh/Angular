import { Component, Input, Output,OnInit , EventEmitter } from '@angular/core';
import {Directive, HostBinding} from '@angular/core';
@Directive({
selector: '[appInscriptionDisabled]'
})
export class InscriptionDisabledDirective {
  @HostBinding('class.link-is-disabled')
  status: boolean = false;
@Input()
set appInscriptionDisabled(value: boolean) {
this.status = value;
}
constructor() { }
}
@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
//name='Formation Web' ;
iscompleted = false;
alignement='right';
couleur='red';
  @Input() session: any;
  @Output() participantsChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  inscrire(){
    console.log('Nouvelle Inscription...');
    this.session.participants = +this.session.participants + 1;
  console.log(this.session.participants + 'Participants');
  this.participantsChange.emit({
    value: this.session.participants
  });
  if (this.session.participants >=20) {this.session.isCompleted=true;}
  }
}