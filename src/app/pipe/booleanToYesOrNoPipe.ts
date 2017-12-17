import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "YesOrNo"
})
export class BooleanToYesOrNoPipe implements PipeTransform{
    transform(value){
        return value ? "Yes" : "No";
    }
}