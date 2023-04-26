import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/Theme.service';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.scss']
})
export class NavBarComponent implements OnInit {

  isLightTheme = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.toggleTheme();
    this.darkMode();
  }

  darkMode(){
    const btnSwitch = document.querySelector('#switch');

    if (btnSwitch) {
      btnSwitch.addEventListener('click', () =>{
        btnSwitch.classList.toggle('active')
      })
    }
  }

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme;

    const theme = this.isLightTheme ? 'light-theme' : 'dark-theme'  ;
    this.themeService.setTheme(theme);

    document.body.classList.remove(this.isLightTheme ? 'dark-theme' : 'light-theme') ;
    document.body.classList.add(theme);
  }
}
