import {checkNumber} from "./number.service";

describe('Number Service', () => {
  it('should test if even or odd', () => {
       expect(checkNumber(2)).toBeTruthy();
  });
});
