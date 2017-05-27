/**
 * Created by Linweiwei on 2017/5/27.
 */

import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';
import {enableProdMode} from "@angular/core";

if (process.env.ENV === 'production') {
    enableProdMode();
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);