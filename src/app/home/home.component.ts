import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  creds:any={
    email:'',
    password:''
  }
  constructor(public authService:AuthService,private router:Router){}
  submit(){
    this.authService.login(this.creds).subscribe({
      next:(data:any)=>{
        localStorage.setItem('token',data['accessToken']);
        localStorage.setItem('role',data['user']['role']);
        this.router.navigate(['/home']);
      },
      error:(error)=>{
        alert("Invalid username or password. Please try again")
      }
    })
    
  }
  imgUrl:string="https://th.bing.com/th/id/R.46eac8d50f82e8fca075b8f26089e126?rik=iH%2b07o73sP2m5Q&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fPhotos-Animation-Download.jpg&ehk=IHOVxmzXRDIRwzF7op11arPLgZWl%2bPmdh1JhvLz%2bc70%3d&risl=1&pid=ImgRaw&r=0"
  // https://v.ftcdn.net/03/02/83/53/240_F_302835383_jfNSp3TUqlLukMyKAyGOxKTkD9P1Wlh5_ST.mp4

  // videoUrl:string="https://v.ftcdn.net/03/02/83/53/700_F_302835383_jfNSp3TUqlLukMyKAyGOxKTkD9P1Wlh5_ST.mp4";
}
