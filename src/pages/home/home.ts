import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, public userService: UserServiceProvider) {

    }

    users = null;

    ionViewDidLoad(){
        this.userService.getUsers()
            .subscribe(
                (data) => { // Success
                    this.users = data['results'];
                },
                (error) =>{
                    console.error(error);
                }
            )
    }
}
