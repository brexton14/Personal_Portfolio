import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-eth-chart',
  templateUrl: './eth-chart.component.html',
  styleUrls: ['./eth-chart.component.css']
})
export class EthChartComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const container = this.elementRef.nativeElement.querySelector('#tradingview_eth');

    if (container) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.async = true;
      script.innerHTML = `
      {
        "autosize": false,
        "width": "100%",
        "height": "500",
        "symbol": "COINBASE:ETHUSD",
        "interval": "30",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "0",
        "locale": "en",
        "allow_symbol_change": true,
        "support_host": "https://www.tradingview.com"
      }`;

      container.appendChild(script);
    }
  }
}
