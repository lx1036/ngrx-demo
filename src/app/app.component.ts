import { Component } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundPageComponent} from './core/containers/not-found-page';
import {AuthGuard} from './auth/services/auth-guard.service';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './reducers';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}





const routes: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
  {
    path: 'books',
    loadChildren: './books/books.module#BooksModule',
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: false}),

    // ngrx.Store
    StoreModule.forRoot(reducers), // [meta-reducers](https://github.com/ngrx/platform/blob/master/docs/store/api.md#meta-reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



