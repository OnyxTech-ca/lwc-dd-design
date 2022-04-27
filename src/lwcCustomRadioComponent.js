import { LightningElement, api } from 'lwc';

export default class LwcCustomRadioComponent extends LightningElement {

    @api options = [];
    @api name="";
    @api label="";
    @api value="";
    @api uniqueid="";

    selectedValue = "";

    connectedCallback(){
        console.log("console.log(this.value);",this.value);
        this.selectedValue = this.value;
    }

    handleChange(event){
        console.log(event.target.checked);
        // this.selectedValue = event.target.value;
        const selectedEvent = new CustomEvent("valuechange", {
            detail:{
                dataId: this.uniqueid,
                newValue: event.target.value
            }
        });
        this.dispatchEvent(selectedEvent);
    }
    get displayRadioComponent(){
        return this.options.length>0;
    }
}