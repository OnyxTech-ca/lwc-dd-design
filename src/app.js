import { LightningElement, api, track } from "lwc";

/**
 * Show an item
 */
export default class App extends LightningElement {
  @api
  label = "";

  @track 
  sObjectRecord = {
    Current_City_Neighborhood__c: "TesT",
    Price_Range__c: "test"
  };

    priceRangePicklist = [
        {
            label: "Studio",
            value: "Test"
        },
        {
            label: "1 Bedroom + Den",
            value: "Test"
        },
        {
            label: "2 Bedrooms",
            value: "Test"
        },
        {
            label: "2 Bedrooms + Den",
            value: "Test"
        },
        {
            label: "3 Bedrooms",
            value: "Test"
        },
        {
            label: "3 Bedrooms + Den",
            value: "Test"
        },
        {
            label: "4 Bedrooms",
            value: "Test"
        },
        {
            label: "Condo",
            value: "Test"
        },
        {
            label: "Townhome",
            value: "Test"
        },
        {
            label: "Penthouse",
            value: "Test"
        },
    ];


    handleDataChange(event){        
        let targetId = event.detail.dataId;
        let newValue = event.detail.newValue;
        let fieldName = "";

        switch(targetId){
            case "priceRangeRadio":
                fieldName = "Price_Range__c";
                this.sObjectRecord[fieldName] = newValue;
                this.priceRangePicklist = [{"label":this.sObjectRecord[fieldName], "value": this.sObjectRecord[fieldName],"checked":true}];
                this.showExpandPriceRange = true;
                break;
            case "genderRadio":
                fieldName = "Gender__c";
                this.sObjectRecord[fieldName] = newValue;
                this.genderPicklist = [{"label":this.sObjectRecord[fieldName], "value": this.sObjectRecord[fieldName],"checked":true}];
                this.showExpandGender = true;
                break;
            case "howHearAboutUsRadio":
                fieldName = "How_Did_You_Hear_About_Us__c";
                this.sObjectRecord[fieldName] = newValue;
                this.howHearAboutUsPicklist = [{"label":this.sObjectRecord[fieldName], "value": this.sObjectRecord[fieldName],"checked":true}];
                this.showExpandHowHearAboutUs = true;
                break;
            case "unitTypeRadio":
                fieldName = "Unit_Type__c";
                this.sObjectRecord[fieldName] = newValue;
                this.unitTypePicklist = [{"label":this.sObjectRecord[fieldName], "value": this.sObjectRecord[fieldName],"checked":true}];
                this.showExpandUnitType = true;
                break;
            case "buyerProfileRadio":
                fieldName = "Buyer_s_Profile__c";
                this.sObjectRecord[fieldName] = newValue;
                this.buyerProfilePicklist = [{"label":this.sObjectRecord[fieldName], "value": this.sObjectRecord[fieldName],"checked":true}];
                this.showExpandBuyerProfile = true;
                break;
            case "buyerExperienceRadio":
                fieldName = "Buyer_s_Experience__c";
                this.sObjectRecord[fieldName] = newValue;
                this.buyerExperiencePicklist = [{"label":this.sObjectRecord[fieldName], "value": this.sObjectRecord[fieldName],"checked":true}];
                this.showExpandBuyerExperience = true;
                break;
            case "buyerPatrimonyRadio":
                fieldName = "Buyer_s_Patrimony__c";
                this.sObjectRecord[fieldName] = newValue;
                this.buyerPatrimonyPicklist = [{"label":this.sObjectRecord[fieldName], "value": this.sObjectRecord[fieldName],"checked":true}];
                this.showExpandBuyerPatrimony = true;
                break;
            case "buyerTypeRadio":
                fieldName = "Buyer_s_Type__c";
                this.sObjectRecord[fieldName] = newValue;
                this.buyerTypePicklist = [{"label":this.sObjectRecord[fieldName], "value": this.sObjectRecord[fieldName],"checked":true}];
                this.showExpandBuyerType = true;
                break;
            case "sizeOfHomeRadio":
                fieldName = "Size_of_Home__c";
                this.sObjectRecord[fieldName] = newValue;
                this.sizeOfHomePicklist = [{"label":this.sObjectRecord[fieldName], "value": this.sObjectRecord[fieldName],"checked":true}];
                this.showExpandSizeOfHome = true;
                break;
            case "ageRangeRadio":
                fieldName = "Age_Range__c";
                this.sObjectRecord[fieldName] = newValue;
                this.ageRangePicklist = [{"label":this.sObjectRecord[fieldName], "value": this.sObjectRecord[fieldName],"checked":true}];
                this.showExpandAgeRange = true;
                break;
        }

    }
}
