import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { ArrowRightCircle, Menu, Send, Phone, MessageCircle } from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  ArrowRightCircle,
  Menu,
  Send,
  Phone,
  MessageCircle
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
