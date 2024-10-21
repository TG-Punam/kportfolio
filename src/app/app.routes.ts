import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LiveComponent } from './pages/live/live.component';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { HistoryComponent } from './pages/history/history.component';
import { EraListComponent } from './pages/era-list/era-list.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { Project2Component } from './pages/project2/project2.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ABoutUsComponent } from './pages/about-us/about-us.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

export const routes: Routes = [
    {
        path: '',
        component: WelcomePageComponent,
        title: 'Welcome | MyInfo',
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home | MyInformer',
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        title: 'My Projects',
    },
    {
        path: 'history',
        component: HistoryComponent,
        title: 'Match History | HistoryInformer',
    },
    {
        path: 'live',
        component: LiveComponent,
        title: 'Live Matches | LiveInformer '
    },
    {
        path: 'point-table',
        component: PointTableComponent,
        title: 'Point Table'
    },
    {
        path: 'era-list',
        component: EraListComponent,
        title: 'Live | Era Gaming',
    },
    {
        path: 'project2',
        component: Project2Component,
        title: 'My Projects2',
    },
    {
        path: 'contactus',
        component: ContactUsComponent,
        title: 'ContactUs',
    },
    {
        path: 'aboutus',
        component: ABoutUsComponent,
        title: 'AboutUs',
    },
];
