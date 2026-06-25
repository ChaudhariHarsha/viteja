import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ProductCategoryId = 'cosmetics' | 'sanitary' | 'cleaning';

type Benefit = {
  title: string;
  description: string;
};

type RoutineStep = {
  title: string;
  detail: string;
};

type Category = {
  id: ProductCategoryId;
  name: string;
  disabled?: boolean;
};

type Metric = {
  value: string;
  label: string;
};

type ProductImage = {
  src: string;
  alt: string;
  label: string;
  ariaLabel: string;
};

type ProductCatalog = {
  id: ProductCategoryId;
  heroHeading: string;
  heroText: string;
  cardCategory: string;
  productLabel: string;
  productName: string;
  productDescription: string;
  highlights: string[];
  metrics: Metric[];
  benefits: Benefit[];
  aboutTag: string;
  aboutHeading: string;
  aboutDescription: string;
  routineTitle: string;
  routine: RoutineStep[];
  priceDisplay: string;
  pricePerUnit: number | null;
  unitPriceLabel: string;
  totalQuantityLabel: string;
  orderUnitName: string;
  orderUnitPlural: string;
  orderNote: string;
  images: ProductImage[];
  visual: 'images' | 'sanitary-pack';
};

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly brandName = 'Viteja';

  // Replace this with your WhatsApp bot or business link.
  readonly whatsAppBaseUrl = 'https://wa.me/7276073127';

  readonly categories: Category[] = [
    { id: 'cosmetics', name: 'Cosmetics' },
    { id: 'sanitary', name: 'Sanitary' },
    { id: 'cleaning', name: 'Cleaning Product', disabled: true }
  ];

  readonly products: ProductCatalog[] = [
    {
      id: 'cosmetics',
      heroHeading: 'Premium care with Viteja Ultra Smoothening Shampoo.',
      heroText:
        'Ultra smoothening care with keratin-powered nourishment for frizz-free, shiny hair. The website now showcases your cosmetics line professionally, while keeping ordering simple through WhatsApp with quantity and pricing ready to send.',
      cardCategory: 'Cosmetics',
      productLabel: 'Viteja Hair Care',
      productName: 'Ultra Smoothening Shampoo',
      productDescription:
        'Frizz-Free Smoothness | Strength & Shine with an advanced keratin formula for luxurious hair.',
      highlights: [
        'Advanced keratin formula for luxurious hair',
        'Sulphate-free and paraben-free',
        'Suitable for everyday use on all hair types'
      ],
      metrics: [
        { value: '200 ml', label: 'net volume' },
        { value: 'Keratin', label: 'powered formula' },
        { value: '₹599', label: 'incl. of taxes' }
      ],
      benefits: [
        {
          title: 'Frizz-free smoothness',
          description:
            'Keratin-enriched care helps tame flyaways and keeps hair looking sleek after every wash.'
        },
        {
          title: 'Strength and shine',
          description:
            'Designed to support softer texture, glossy finish, and stronger-looking hair from root to tip.'
        },
        {
          title: 'Sulphate-free formula',
          description:
            'A premium everyday shampoo that is sulphate-free and paraben-free for gentle cleansing.'
        }
      ],
      aboutTag: 'About this cosmetic product',
      aboutHeading:
        'Keratin-enriched shampoo designed to nourish hair, reduce frizz, and restore smooth shine.',
      aboutDescription:
        'VITEJA UltraSmooth Shampoo is positioned as a premium cosmetic product for everyday hair care. It is designed to repair damage, smoothen hair, and strengthen from root to tip while keeping the shopping experience fast and professional.',
      routineTitle: 'How to use',
      routine: [
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
          detail:
            'For best results, use regularly to maintain shine, reduce frizz, and support daily hair care.'
        }
      ],
      priceDisplay: '₹599',
      pricePerUnit: 599,
      unitPriceLabel: 'per bottle',
      totalQuantityLabel: 'Total bottles',
      orderUnitName: 'bottle',
      orderUnitPlural: 'bottles',
      orderNote: 'Viteja team will confirm availability and delivery details on WhatsApp.',
      images: [
        {
          src: 'assets/front.jpeg',
          alt: 'Front view of Viteja Ultra Smoothening Shampoo bottle',
          label: 'Front view',
          ariaLabel: 'Show front view'
        },
        {
          src: 'assets/back.jpeg',
          alt: 'Back view of Viteja Ultra Smoothening Shampoo bottle',
          label: 'Back view',
          ariaLabel: 'Show back view'
        }
      ],
      visual: 'images'
    },
    {
      id: 'sanitary',
      heroHeading: 'Comfort, Confidence & Protection with Viteja Sanitary Pads',
      heroText:
        'Experience superior comfort with Viteja sanitary pads. Designed for reliable leak protection, fast absorption, and all-day freshness so you can stay active and confident throughout your period.',
      cardCategory: "Women's Hygiene",
      productLabel: "Viteja Women's Hygiene",
      productName: 'Viteja Ultra Comfort Sanitary Pads',
      productDescription: 'Reliable Protection | Maximum Comfort | Everyday Confidence',
      highlights: [
        'Fast-absorbing core for instant dryness',
        'Leak-lock technology for extra protection',
        'Soft cottony surface for all-day comfort'
      ],
      metrics: [
        { value: '290 mm', label: 'Extra-long protection' },
        { value: 'Cotton Soft', label: 'Comfortable top layer' },
        { value: '₹XX', label: 'Per Pack' }
      ],
      benefits: [
        {
          title: 'Superior Absorption',
          description:
            'Advanced absorbent core quickly locks in fluid and helps keep you feeling dry and comfortable.'
        },
        {
          title: 'Leak Protection',
          description:
            'Extra-long design with secure coverage helps prevent side leaks during day and night use.'
        },
        {
          title: 'Soft & Comfortable',
          description:
            'Cotton-soft top sheet reduces irritation and provides gentle comfort for sensitive skin.'
        }
      ],
      aboutTag: "About this women's hygiene product",
      aboutHeading:
        'Cotton-soft sanitary pads designed to provide comfort, protection, and confidence throughout your period.',
      aboutDescription:
        'Viteja Sanitary Pads are specially designed for women seeking reliable menstrual protection. The ultra-absorbent core helps lock in moisture, while the soft cottony top layer ensures maximum comfort. Whether at school, work, or home, Viteja keeps you protected and confident all day long.',
      routineTitle: 'How to use',
      routine: [
        {
          title: 'Apply',
          detail:
            'Remove the release paper and place the pad firmly in the center of your underwear. Press gently to secure it properly.'
        },
        {
          title: 'Replace Regularly',
          detail: 'Change the pad every 4-6 hours or as needed to maintain hygiene and comfort.'
        },
        {
          title: 'Dispose Safely',
          detail: 'Wrap the used pad in paper and dispose of it in a dustbin. Do not flush in toilets.'
        }
      ],
      priceDisplay: '₹XX',
      pricePerUnit: null,
      unitPriceLabel: 'per pack',
      totalQuantityLabel: 'Total packs',
      orderUnitName: 'pack',
      orderUnitPlural: 'packs',
      orderNote: 'Viteja team will confirm the final pack price, availability, and delivery details on WhatsApp.',
      images: [],
      visual: 'sanitary-pack'
    }
  ];

  quantity = 1;
  selectedCategoryId: ProductCategoryId = 'cosmetics';
  activeProductImageIndex = 0;

  private readonly fallbackProductImage: ProductImage = {
    src: '',
    alt: '',
    label: '',
    ariaLabel: ''
  };

  private readonly currencyFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  });

  get activeProduct(): ProductCatalog {
    return this.products.find((product) => product.id === this.selectedCategoryId) ?? this.products[0];
  }

  get activeProductImages(): ProductImage[] {
    return this.activeProduct.images;
  }

  get activeProductImage(): ProductImage {
    return this.activeProductImages[this.activeProductImageIndex] ?? this.fallbackProductImage;
  }

  get quantityUnitLabel(): string {
    return this.quantity === 1 ? this.activeProduct.orderUnitName : this.activeProduct.orderUnitPlural;
  }

  get estimatedTotalDisplay(): string {
    if (this.activeProduct.pricePerUnit === null) {
      return this.activeProduct.priceDisplay;
    }

    return this.currencyFormatter.format(this.quantity * this.activeProduct.pricePerUnit);
  }

  get whatsappHref(): string {
    const message = [
      'Hello, I want to place an order.',
      'Product: ' + this.activeProduct.productName,
      'Quantity: ' + this.quantity + ' ' + this.quantityUnitLabel,
      'Price ' + this.activeProduct.unitPriceLabel + ': ' + this.activeProduct.priceDisplay,
      'Estimated total: ' + this.estimatedTotalDisplay
    ].join('\n');

    const separator = this.whatsAppBaseUrl.includes('?') ? '&' : '?';
    return this.whatsAppBaseUrl + separator + 'text=' + encodeURIComponent(message);
  }

  selectCategory(categoryId: ProductCategoryId): void {
    const category = this.categories.find((item) => item.id === categoryId);

    if (!category || category.disabled) {
      return;
    }

    this.selectedCategoryId = categoryId;
    this.quantity = 1;
    this.activeProductImageIndex = 0;
  }

  showProductImage(index: number): void {
    if (index >= 0 && index < this.activeProductImages.length) {
      this.activeProductImageIndex = index;
    }
  }

  showPreviousProductImage(): void {
    if (this.activeProductImages.length === 0) {
      return;
    }

    this.activeProductImageIndex =
      (this.activeProductImageIndex + this.activeProductImages.length - 1) %
      this.activeProductImages.length;
  }

  showNextProductImage(): void {
    if (this.activeProductImages.length === 0) {
      return;
    }

    this.activeProductImageIndex =
      (this.activeProductImageIndex + 1) % this.activeProductImages.length;
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
