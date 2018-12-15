export const PAYMENT_METHODS = [
  {
    supportedMethods: 'basic-card',
    data: {
      supportedNetworks: ['amex', 'mastercard', 'visa']
    }
  },
  {
    supportedMethods: 'https://apple.com/apple-pay',
    data: {
      version: 3,
      countryCode: 'DE',
      supportedNetworks: ['amex', 'visa', 'mastercard'],
      merchantIdentifier: 'merchant.com.thinktecture.pwademo',
      merchantCapabilities: ['supports3DS']
    }
  }, {
    supportedMethods: 'https://google.com/pay',
    data: {
      apiVersion: 1,
      environment: 'TEST',
      paymentMethodTokenizationParameters: {
        tokenizationType: 'DIRECT',
        parameters: {
          publicKey: 'BBrqrgVWcoPqUukIwHRzLojjUWFmvq3Ysd8/+p/d+V97sB8e2GtqgIL1aG3cM+UhI/g3QZss2R6pE8JZEoLgg10='
        }
      },
      allowedPaymentMethods: ['CARD', 'TOKENIZED_CARD'],
      cardRequirements: {
        allowedCardNetworks: ['AMEX', 'MASTERCARD', 'VISA']
      }
    }
  }
];
