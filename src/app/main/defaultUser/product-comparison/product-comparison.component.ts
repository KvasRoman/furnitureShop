
import { Component, OnInit } from "@angular/core";
import { crumbBarTypes } from "src/app/models/user-state.models";
import { UserStateService } from "src/app/services/user-state.service";


var data = [
    {
        general: {
            salesPackage: '1 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRH1S2232',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion',
        },
        product: {
            fillingMaterial: 'Foam',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm'
        },
        waranty: {
            warrantySummary: '1 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '1 Year'
        }

    },
    {
        general: {
            salesPackage: '1 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS12223',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion',
        },
        product: {
            fillingMaterial: 'Foam',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm'
        },
        waranty: {
            warrantySummary: '1 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '1 Year'
        }

    },
    {
        general: {
            salesPackage: '1 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS2232',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion',
        },
        product: {
            fillingMaterial: 'Foam',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm'
        },
        waranty: {
            warrantySummary: '1 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '1 Year'
        }

    },
    {
        general: {
            salesPackage: '1 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS2223',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion',
        },
        product: {
            fillingMaterial: 'Foam',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm'
        },
        waranty: {
            warrantySummary: '1 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '1 Year'
        }

    },
    {
        general: {
            salesPackage: '1 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS2224',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion',
        },
        product: {
            fillingMaterial: 'Foam',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm'
        },
        waranty: {
            warrantySummary: '1 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '1 Year'
        }

    },
    {
        general: {
            salesPackage: '1 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion',
        },
        product: {
            fillingMaterial: 'Foam',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm'
        },
        waranty: {
            warrantySummary: '1 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '1 Year'
        }

    }
]

@Component({
    selector: 'app-product-comparison',
    templateUrl: 'product-comparison.component.html',
    styleUrls: ['../../../icons.scss', 'product-comparison.component.scss']
})

export class ProductComparisonComponent implements OnInit {

    rating: number = 4.7;
    displaySections: string[] = [];
    displayColumns: string[] = [];
    inputColumns: any = {};
    displayData: any[] = [];
    data: any[] = [];
    constructor(private userStateService: UserStateService) {
        userStateService.updateMain({
            crumbBar: crumbBarTypes.big,
            crumbBarContent: {
                crumbs: [{ label: "Home", link: '' }],
                lastCrumb: "Product Comparison"
            },
            warrantyBar: true
        })
    }
    ngOnInit(): void {
        this.displayColumns = ['0'].concat(data.map(e => e.general.modelNumber));
        this.displaySections = Object.keys(data[0]);
        for(let section of this.displaySections){
            this.inputColumns[section] = Object.keys(data[0][section as keyof typeof data[0]])
        }
        this.displayData;
        for(let section of this.displaySections){
            this.displayData.push(this.formatInputRow(section, ''))
            for(let row of this.inputColumns[section]){
                this.displayData.push(this.formatInputRow(section, row))
            }
        }
        this.data = data;
        console.log(this.displayData);
    }

    formatInputRow(section: string, row: string) {
        const output: any = {};

        output['0'] = row
        if(row != '')
        for (let i = 0; i < data.length; ++i) {
            let rowSection = data[i][section as keyof typeof data[0]];
            output[data[i].general.modelNumber] = rowSection[row as keyof typeof rowSection];
        }
        else{
            output['0'] = `<section>${section}`;
            for (let i = 0; i < data.length; ++i) {
            
                output[data[i].general.modelNumber] = '';
            }
        }
        
        return output;
    }
    isSection(value: string): boolean{
        return value.includes('<section>')
    }
}