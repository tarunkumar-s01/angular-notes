import { Routes } from '@angular/router';
import { DatabindngComponent } from './databindng/databindng.component';
import { MypipesComponent } from './mypipes/mypipes.component';
import { AngformComponent } from './forms/angform/angform.component';
import { RtfComponent } from './forms/rtf/rtf.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { UtdfComponent } from './forms/utdf/utdf.component';
import { MaindashboardComponent } from './layout/maindashboard/maindashboard.component';
import { MultipleimgComponent } from './task/multipleimg/multipleimg.component';
import { SwitchtaskComponent } from './task/switchtask/switchtask.component';
import { ParentComponent } from './parent/parent.component';
import { ItemComponent } from './item/item.component';
import { ProductdashComponent } from './crud/productdash/productdash.component';
import { ProductaddComponent } from './crud/productadd/productadd.component';
import { ProducteddComponent } from './crud/productedd/productedd.component';
import { authGuard } from './shared/custguard/auth.guard';
import path from 'path';
import { LoginComponent } from './layout/login/login.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    
    {path:'multi',component:MultipleimgComponent},
    {path:'switch',component:SwitchtaskComponent},
    {path:'item',component:ItemComponent},
    { path: "", redirectTo: "databinding", pathMatch: "full" },
    {
        path: 'maindashboard', component: MaindashboardComponent,canActivate:[authGuard], children: [
            { path: 'databinding', component: DatabindngComponent },
            { path: "mypipe/:id", component: MypipesComponent },
            {path:'parent',component: ParentComponent},
            {path:'productdash',component:ProductdashComponent},
            {path:'productadd/:id',component:ProductaddComponent},
            {path:'productedd',component:ProducteddComponent},
            {
                path: 'angform', component: AngformComponent, children: [
                    { path: 'rtf', component: RtfComponent },
                    { path: 'utdf', component: UtdfComponent }
                ]
            },

        ]
    },

    
    { path: '**', component: PagenotfoundComponent }
];
