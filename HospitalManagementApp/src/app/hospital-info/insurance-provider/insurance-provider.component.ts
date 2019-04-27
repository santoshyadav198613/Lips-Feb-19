import { Component, OnInit } from '@angular/core';
import { IInsuranceProviders } from './insurance-provider';
@Component({
  selector: 'app-insurance-provider',
  templateUrl: './insurance-provider.component.html',
  styleUrls: ['./insurance-provider.component.css']
})
export class InsuranceProviderComponent implements OnInit {
  providers: Array<IInsuranceProviders> = [
    { name: 'BOI', cashLess: false, dailyLimit: 5000, coverage: .9, activeFrom: new Date('10-Jan-1980') },
    { name: 'Star Health', cashLess: true, dailyLimit: 10000, coverage: .8, activeFrom: new Date('10-Jan-1980')},
    { name: 'HDFC', cashLess: true, dailyLimit: 7000, coverage: .7, activeFrom: new Date('10-Jan-1980') },
    { name: 'UBI', cashLess: true, dailyLimit: 5000, coverage: .7, activeFrom: new Date('10-Jan-1980') },
    { name: 'Kotak', cashLess: true, dailyLimit: 8000, coverage: .8, activeFrom: new Date('10-Jan-1980') }
  ];

  providerName ='';
  constructor() { }

  ngOnInit() {
  }

  trackByFn(index, item) {
    return index;
  }

}
