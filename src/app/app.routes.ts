import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {VictimsrightsComponent} from "./pages/victimsrights/victimsrights.component";
import {FeeComponent} from "./pages/fee/fee.component";
import {OfficeComponent} from "./pages/office/office.component";
import {CivilrightsComponent} from "./pages/civilrights/civilrights.component";
import {NotfoundComponent} from "./pages/notfound/notfound.component";

export const routes: Routes = [
  {path: '', title: 'Alexandre Maat Avocat', component: HomeComponent},
  {path: 'droit-des-victimes', title: 'Alexandre Maat Avocat: Droit des victimes', component: VictimsrightsComponent},
  {path: 'droit-civil', title: 'Alexandre Maat Avocat: Droit civil', component: CivilrightsComponent},
  {path: 'cabinet', title: 'Alexandre Maat Avocat: Cabinet', component: OfficeComponent},
  {path: 'fee', title: 'Alexandre Maat Avocat: Honoraires', component: FeeComponent},
  {path: '**', title: 'Pas non trouvée', component: NotfoundComponent}
];
