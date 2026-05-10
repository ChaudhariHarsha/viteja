import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Benefit = {
  title: string;
  description: string;
};

type RoutineStep = {
  title: string;
  detail: string;
};

type Category = {
  name: string;
  active: boolean;
};

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly brandName = 'Viteja';
  readonly tagLine = 'Ultra smoothening care with keratin-powered nourishment for frizz-free, shiny hair.';
  readonly productName = 'Ultra Smoothening Shampoo';
  readonly pricePerBottle = 599;
  readonly bottleSize = '200 ml';

  // Replace this with your WhatsApp bot or business link.
  readonly whatsAppBaseUrl = 'https://wa.me/8605873127';

  quantity = 1;

  readonly categories: Category[] = [
    { name: 'Cosmetics', active: true },
    { name: 'Sanitary', active: false },
    { name: 'Cleaning Product', active: false }
  ];

  readonly benefits: Benefit[] = [
    {
      title: 'Frizz-free smoothness',
      description: 'Keratin-enriched care helps tame flyaways and keeps hair looking sleek after every wash.'
    },
    {
      title: 'Strength and shine',
      description: 'Designed to support softer texture, glossy finish, and stronger-looking hair from root to tip.'
    },
    {
      title: 'Sulphate-free formula',
      description: 'A premium everyday shampoo that is sulphate-free and paraben-free for gentle cleansing.'
    }
  ];

  readonly highlights = [
    'Advanced keratin formula for luxurious hair',
    'Sulphate-free and paraben-free',
    'Suitable for everyday use on all hair types'
  ];

  readonly routine: RoutineStep[] = [
    {
      title: 'Apply',
      detail: 'Apply to wet hair and massage into scalp and hair until it works into a rich lather.'
    },
    {
      title: 'Rinse thoroughly',
      detail: 'Wash out completely with water to leave the scalp fresh and the strands smooth.'
    },
    {
      title: 'Use regularly',
      detail: 'For best results, use regularly to maintain shine, reduce frizz, and support daily hair care.'
    }
  ];

  readonly metrics = [
    { value: '200 ml', label: 'net volume' },
    { value: 'Keratin', label: 'powered formula' },
    { value: '₹599', label: 'incl. of taxes' }
  ];

  get totalPrice(): number {
    return this.quantity * this.pricePerBottle;
  }

  get whatsappHref(): string {
    const message = [
      'Hello, I want to place an order.',
      `Product: ${this.productName}`,
      `Quantity: ${this.quantity}`,
      `Price per bottle: Rs. ${this.pricePerBottle}`,
      `Estimated total: Rs. ${this.totalPrice}`
    ].join('\n');

    const separator = this.whatsAppBaseUrl.includes('?') ? '&' : '?';
    return `${this.whatsAppBaseUrl}${separator}text=${encodeURIComponent(message)}`;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }

  increaseQuantity(): void {
    this.quantity += 1;
  }

  normalizeQuantity(): void {
    if (!Number.isFinite(this.quantity) || this.quantity < 1) {
      this.quantity = 1;
      return;
    }

    this.quantity = Math.floor(this.quantity);
  }
}
