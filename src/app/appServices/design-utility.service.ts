import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }


  print22(val, containerId) {
    let el22 = document.createElement('li');
    el22.innerText = val;

    document.getElementById(containerId)
      .appendChild(el22);
  }
}
