import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LuxorComponent } from './features/destinations/marsaAlam/luxor/luxor.component';
import { CairoComponent } from './features/destinations/marsaAlam/cairo/cairo.component';
import { QusierComponent } from './features/destinations/marsaAlam/qusier/qusier.component';
import { PortoComponent } from './features/destinations/marsaAlam/porto/porto.component';
import { SupersafariComponent } from './features/destinations/marsaAlam/supersafari/supersafari.component';
import { TaxiComponent } from './features/taxi/taxi.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },

    { path: 'luxor', component: LuxorComponent },
    { path: 'cairo', component: CairoComponent },

    { path: 'porto', component: PortoComponent },
    { path: 'taxi', component: TaxiComponent },
    { path: 'aboutus', component: ContactComponent },

    { path: 'safari', component: SupersafariComponent },
    { path: 'qusier', component: QusierComponent },
    {path: '**', redirectTo: '' , pathMatch: 'full'}




];
