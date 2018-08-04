// the root module for the app

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from "./app.component";
import { EntryListComponent, EntryComponent, EntryService } from "./entries";
import { InMemoryEntryService } from './backend';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
    imports: [
        BrowserModule, 
        HttpModule, 
        HttpInMemoryWebApiModule.forRoot(InMemoryEntryService)
        // HttpClientModule, 
        // HttpClientInMemoryWebApiModule.forRoot(InMemoryEntryService)
    ],
    providers: [EntryService],
    declarations: [
        AppComponent, 
        EntryComponent, 
        EntryListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule{

}