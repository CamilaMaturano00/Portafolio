import { Component } from '@angular/core';
import { ThemeService } from './Theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portafolio';
  
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    const theme = this.themeService.getTheme();
    document.body.classList.add(theme);
  }
}
