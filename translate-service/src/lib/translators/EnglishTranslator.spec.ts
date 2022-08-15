import { EnglishTranslator } from './EnglishTranslator';

const englishTranslator = new EnglishTranslator();

describe('EnglishTranslator tests', () => {
  describe('calculateModulus', () => {
    it('calculateModulus 1 = 1', () => {
      expect(englishTranslator.calculateModulus(1)).toBe(1);
    });
    it('Language should exists and equal en', () => {
      expect(englishTranslator.calculateModulus(12)).toBe(2);
    });
  });

  describe('EnglishTranslator input = 1, output should be: one.', () => {
    it('Check transaltor: 1 = one', () => {
      expect(englishTranslator.translate('1')).toBe('one');
    });
  });

  describe('EnglishTranslator if data is bigger than MAX value should thow an error.', () => {
    it('Test error handling', () => {
      try {
        englishTranslator.translate('9999999999');
      } catch (e) {
        expect(e.message).toBe(
          'EnglishTranslator max number that can be translated is: ' +
            englishTranslator.max,
        );
      }
    });
  });

  describe('EnglishTranslator if data is less than 0 should thow an error.', () => {
    it('Test error handling', () => {
      try {
        englishTranslator.translate('-2');
      } catch (e) {
        expect(e.message).toBe('EnglishTranslator min number is 0.');
      }
    });
  });

  describe('EnglishTranslator input = 20, output should be: twenty.', () => {
    it('20 should be twenty', () => {
      expect(englishTranslator.translate('20')).toBe('twenty');
    });
  });
});
