import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PAYMENT_METHODS } from './payment.methods';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {
  public response: PaymentResponse;

  private readonly paymentDetails: PaymentDetailsInit = {
    displayItems: [
      {label: 'Todo Premium', amount: {value: '0.92', currency: 'EUR'}},
      {label: '19% MwSt.', amount: {value: '0.17', currency: 'EUR'}}
    ],
    total: {label: 'Summe', amount: {value: '1.09', currency: 'EUR'}}
  };

  constructor(private readonly httpClient: HttpClient) {
  }

  async buy() {
    if (!('PaymentRequest' in window)) {
      return alert('Die Payment Request API steht auf diesem Gerät nicht zur Verfügung.');
    }

    const paymentRequest = new PaymentRequest(PAYMENT_METHODS, this.paymentDetails, {requestPayerEmail: true});

    if (!paymentRequest.canMakePayment()) {
      return alert('Auf diesem Gerät ist keine Zahlung mit der Payment Request API möglich.');
    }

    paymentRequest.addEventListener('merchantvalidation', (evt: any) =>
      this.httpClient.post('https://applepaydemo.azurewebsites.net', evt.validationURL).subscribe(res => evt.complete(res)));

    try {
      const response = await paymentRequest.show();
      this.response = response.toJSON();
      // TODO: Talk to backend. Was the payment successfully processed?
      return response.complete('success');
    } catch (err) {
      // Cancelled
    }
  }
}
