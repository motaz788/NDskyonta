import { Component } from '@angular/core';
import { RouterLink, RouterOutlet ,RouterLinkActive} from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPlane, faHotel,  } from '@fortawesome/free-solid-svg-icons';
import { HomeComponent } from "./features/home/home.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SkyOnta Tours';
}
