# 🏷️ Emulating Associated Value Enums in TypeScript

This project demonstrates how to emulate Swift's Associated Value Enums in TypeScript.

🍏 Swift allows defining Associated Value Enums that can contain other types within them. While TypeScript doesn't support this natively, it can be emulated using Interfaces and Type Unions.

## 💻 Code Example

The code example creates a `Barcode` object with two methods:

- 📊 `upc`: Creates a new barcode object with UPC values
- 📱 `qrCode`: Creates a new barcode object with QR code values

It also includes two utility methods:

- ✅ `isUPC`: Checks if a given barcode is a UPC
- ✅ `isQRCode`: Checks if a given barcode is a QR code

The `switch` method returns a new `BarcodeSwitchBuilder` object that allows you to build a switch statement based on the barcode type.

## 🧪 Running the Tests

This project includes a Mocha test to ensure that the `BarcodeSwitchBuilder` works as expected.

To run the tests, execute the following command in your terminal:

```
npm test
```

## 🎓 Conclusion

Emulating Associated Value Enums in TypeScript can be achieved using Interfaces and Type Unions. The example provided in this project demonstrates one approach to accomplish this.
