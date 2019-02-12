import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { InfoProductComponent } from './info-product/info-product.component';
import { ButtonComponent } from './button/button.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { TabComponent } from './tab/tab.component';
import { RecommendComponent } from './recommend/recommend.component';
import { PopupChatComponent } from './popup-chat/popup-chat.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { FooterComponent } from './footer/footer.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    InfoProductComponent,
    ButtonComponent,
    SlideShowComponent,
    TabComponent,
    RecommendComponent,
    PopupChatComponent,
    SideNavComponent,
    MessageBoxComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.fisebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
