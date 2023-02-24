import { expect } from 'chai';
import { Barcode, UPC, QRCode } from '../src/associatedvalue.enum';

  describe('isUPC', () => {
    it('should return true for a UPC object', () => {
      const upc: UPC = { numberSystem: 8, manufacturer: 85909, product: 51226, check: 3 };
      const result = Barcode.isUPC(upc);
      expect(result).to.be.true;
    });

    it('should return false for a QRCode object', () => {
      const qrCode: QRCode = { productCode: 'ABCDEFGHIJKLMNOP' };
      const result = Barcode.isUPC(qrCode);
      expect(result).to.be.false;
    });
  });

  describe('isQRCode', () => {
    it('should return true for a QRCode object', () => {
      const qrCode: QRCode = { productCode: 'ABCDEFGHIJKLMNOP' };
      const result = Barcode.isQRCode(qrCode);
      expect(result).to.be.true;
    });

    it('should return false for a UPC object', () => {
      const upc: UPC = { numberSystem: 8, manufacturer: 85909, product: 51226, check: 3 };
      const result = Barcode.isQRCode(upc);
      expect(result).to.be.false;
    });
  });

  describe('switch', () => {
    it('should execute the correct function for a UPC object', () => {
      const upc: UPC = { numberSystem: 8, manufacturer: 85909, product: 51226, check: 3 };
      let result = '';
      Barcode.switch(upc)
        .caseUps((upc: UPC) => {
          result = `UPC: ${upc.numberSystem}, ${upc.manufacturer}, ${upc.product}, ${upc.check}.`;
        })
        .caseQrCode((qrCode: QRCode) => {
          result = `QR code: ${qrCode.productCode}.`;
        });
      expect(result).to.equal('UPC: 8, 85909, 51226, 3.');
    });

    it('should execute the correct function for a QRCode object', () => {
      const qrCode: QRCode = { productCode: 'ABCDEFGHIJKLMNOP' };
      let result = '';
      Barcode.switch(qrCode)
        .caseUps((upc: UPC) => {
          result = `UPC: ${upc.numberSystem}, ${upc.manufacturer}, ${upc.product}, ${upc.check}.`;
        })
        .caseQrCode((qrCode: QRCode) => {
          result = `QR code: ${qrCode.productCode}.`;
        });
      expect(result).to.equal('QR code: ABCDEFGHIJKLMNOP.');
    });
  });