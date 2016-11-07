'use strict';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

export * from './src/service/lightbox.service';
export * from './src/component/lightbox.component';
export * from './src/model/image.model';

import { Lightbox } from './src/component/lightbox.component';
import { LightboxService } from './src/service/lightbox.service';
import { Image } from './src/model/image.model';

export default {
  providers : [LightboxService],
  directives: [Lightbox]
};

@NgModule({
  imports: [ CommonModule ],
  declarations: [ Lightbox, Image ],
  providers: [ LightboxService ],
  exports: [ Lightbox, Image ]
})
export class Angular2Photoswipe {
  static forRoot(): ModuleWithProviders {
        return {
            ngModule: Angular2Photoswipe,
            providers: [LightboxService]
        };
    }
}