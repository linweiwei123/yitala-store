import {Directive, HostListener, Input} from "@angular/core";
import {FormControl} from "@angular/forms";
/**
 * Created by yitala on 2017/7/29.
 */
@Directive({
    selector: '[validateOnBlur]',
})

export class ValidateOnBlurDirective {

    @Input('validateFormControl')
    validateFormControl:FormControl;

    constructor() { }
    @HostListener('focus', ['$event.target'])
    onFocus(target:any) {
        this.validateFormControl.markAsUntouched();
    }
    @HostListener('focusout', ['$event.target'])
    onFocusout(target:any) {
        this.validateFormControl.markAsTouched();
    }
}