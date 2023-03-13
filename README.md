# Emulating Associated Value Enums in TypeScript

This project is an example of how to emulate Swift Associated Value Enums in TypeScript/JavaScript.

Swift allows you to define Associated Value Enums that can contain other types within them. TypeScript does not support this natively, but it can be emulated using Interfaces and Type Unions.

## Code Example

THe code example creates a Barcode object that contains two methods: upc and qrCode. Both of these methods create a new barcode object with the specified values. It also includes two methods, isUPC and isQRCode, to check if a given barcode is a UPC or QRCode.

The `switch` method returns a new `BarcodeSwitchBuilder` object that allows you to build a switch statement based on the barcode type.

## Running the Tests

This project includes a Mocha test to ensure that the BarcodeSwitchBuilder works as expected.

To run the tests, simply run the following command in your terminal:

    npm test

## Conclusion

Emulating Associated Value Enums in TypeScript can be done using Interfaces and Type Unions. The example provided in this project shows one way to do this.
