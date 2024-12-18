import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  //@Input({ required: false }) user: Partial<IUser> = { };
  @Input({ required: true}) user: IUser = {} as IUser;


/*  formatUserStatus(status: boolean){
    return status ? 'Ativo' : 'Inativo';
  }*/
}


