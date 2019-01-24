import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
