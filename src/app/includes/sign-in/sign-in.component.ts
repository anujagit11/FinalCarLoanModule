import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private fb:FormBuilder,private route:Router,private ss:ServiceService) { }
loginForm:FormGroup
  ngOnInit(): void {
   this.loginForm =this.fb.group({
    username:[],
    password:[]
   })
  }
  login()
  {
    let u=this.loginForm.controls['username'].value
    let p=this.loginForm.controls['password'].value

    this.ss.getAdmin(u,p).subscribe((user:any)=>
    {
      if(user!=null)
      {
       let userJson:string =JSON.stringify(user)
       alert(user.password
       )
       localStorage.setItem('user',userJson)
       console.log(userJson)
       this.route.navigateByUrl('/dash')
      }
      else{
        alert('enter valid login data')
      }
    }
    )
    this.route.navigateByUrl('/dash')
    
}
}
