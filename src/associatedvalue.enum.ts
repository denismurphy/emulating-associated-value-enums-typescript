export interface UPC {
    numberSystem: number;
    manufacturer: number;
    product: number;
    check: number;
}

export interface QRCode {
    productCode: string;
}

export let Barcode = {
    upc(numberSystem: number, manufacturer: number, product: number, check: number): UPC {
        return { numberSystem: numberSystem, manufacturer: manufacturer, product: product, check: check } as UPC;
    },
    qrCode(productCode: string) {
        return { productCode: productCode } as QRCode;
    },
    isUPC(barcode: Barcode): barcode is UPC {
        return (barcode as UPC).numberSystem !== undefined;
    },
    isQRCode(barcode: Barcode): barcode is QRCode {
        return (barcode as QRCode).productCode !== undefined;
    },
    switch(barcode: Barcode): BarcodeSwitchBuilder {
        return new BarcodeSwitchBuilder(barcode);
    }
}

export type Barcode = UPC | QRCode;
export type UpcFunction = (upc: UPC) => void;
export type QRCodeFunction = (qrCode: QRCode) => void;

export class BarcodeSwitchBuilder {

    barcode: Barcode;
    upcFunction!: UpcFunction;
    qrCodeFunction!: QRCodeFunction;
    hasRan: Boolean = false;

    constructor(barcode: Barcode) {
        this.barcode = barcode;
    }

    // Case statement for UPC value
    caseUps(upcFunction: UpcFunction) {
        if (Barcode.isUPC(this.barcode) && !this.hasRan) {  // check if barcode is of type UPC
            upcFunction(this.barcode as UPC);  // if it is, run the callback function passed in
            this.hasRan = true;
        }
        return this;
    }

    // Case statement for QRCode value
    caseQrCode(qrCodeFunction: QRCodeFunction) {
        if (Barcode.isQRCode(this.barcode) && !this.hasRan) {  // check if barcode is of type QRCode
            qrCodeFunction(this.barcode as QRCode);  // if it is, run the callback function passed in
            this.hasRan = true;
        }
        return this;
    }
}

// Example
let barcode = Barcode.qrCode("Hello World!");

Barcode.switch(barcode)
    .caseQrCode(function (qrCode: QRCode) {  // run callback function for QRCode value
        console.log(`QR code: ${qrCode.productCode}.`);
    })
    .caseUps(function (upc: UPC) {  // run callback function for UPC value
        console.log(`UPC: ${upc.numberSystem}, ${upc.manufacturer}, ${upc.product}, ${upc.check}.`);
    });
