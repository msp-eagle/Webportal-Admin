import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';



export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const token = localStorage.getItem('isLoggedIn')
  if(token){
    console.log(token)
    return true;
  }
  
  else{
    router.navigate(['/login'])
    return false;
  }
  
}


