import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()
export class PlatformService {
    public isWidescreenDevice: boolean;

    constructor(platform: Platform) {
        if (platform.is('tablet') || platform.is('plablet') || platform.is('core')) this.isWidescreenDevice = true;
        else this.isWidescreenDevice = false;
    }

}