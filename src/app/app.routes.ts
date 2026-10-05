import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contactus } from './contactus/contactus';
import { DataBindings } from './data-bindings/data-bindings';
import { AngularDirectives } from './angular-directives/angular-directives';
import { Pipes } from './pipes/pipes';
import { UserCard } from './components/user-card/user-card';
import { Templates } from './templates/templates';
import { LifeCycles } from './life-cycles/life-cycles';
import { Student } from './student/student';
import { Dataservice } from './student/dataservice/dataservice';
import { Countercomponents } from './student/countercomponents/countercomponents';
import { Authservice as AuthserviceComponent } from './auths/authservice/authservice';

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'contactus',
        component: Contactus
    },
    {
        path: 'DataBindings',
        component: DataBindings
    },
    {
        path: 'AngularDirectives',
        component: AngularDirectives
    },
    {
        path: 'pipes',
        component: Pipes
    },
    {
        path: 'UserCard',
        component: UserCard
    },
    {
        path: 'Templates',
        component: Templates
    },
    {
        path: 'LifeCycles',
        component: LifeCycles
    },
    {
        path: 'Student',
        component: Student
    },
    {
        path:'Dataservice',
        component: Dataservice
    },
    {
        path: 'Countercomponents',
        component: Countercomponents
    }, 
    {
        path: 'Authservice',
        component: AuthserviceComponent
    }
];
