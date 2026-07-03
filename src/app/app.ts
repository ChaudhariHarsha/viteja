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
  image: ProductImage;
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
    { id: 'cleaning', name: 'Cleaning Product' }
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
      image: {
        src: 'assets/front.png',
        alt: 'Front view of Viteja Ultra Smoothening Shampoo bottle'
      }
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
        { value: '₹200', label: 'Per pack of 5' }
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
      priceDisplay: '₹200',
      pricePerUnit: 200,
      unitPriceLabel: 'per pack of 5',
      totalQuantityLabel: 'Total packs',
      orderUnitName: 'pack',
      orderUnitPlural: 'packs',
      orderNote: 'Only packs of 5 pads are delivered. Viteja team will confirm availability and delivery details on WhatsApp.',
      image: {
        src: 'assets/pads.jpeg',
        alt: 'Viteja Ultra Comfort Sanitary Pads pack'
      }
    },
    {
      id: 'cleaning',
      heroHeading: 'Premium care with Viteja DishSpark Dish Wash Liquid.',
      heroText:
        'Sparkling clean care with a lemon-powered formula for grease-free, shiny utensils. The website now showcases your cleaning line professionally, while keeping ordering simple through WhatsApp with quantity and pricing ready to send.',
      cardCategory: 'Cleaning Product',
      productLabel: 'VITEJA CLEANING CARE',
      productName: 'Viteja DishSpark Dish Wash Liquid',
      productDescription:
        'Removes Tough Grease | Rich Foam Formula | Fresh Lemon Fragrance for spotless utensils.',
      highlights: [
        'Advanced grease-cutting formula for sparkling clean utensils',
        'Rich foam action that removes tough oils and food stains',
        'Gentle on hands and infused with a refreshing lemon fragrance'
      ],
      metrics: [
        { value: '500 ml', label: 'net volume' },
        { value: 'Lemon Formula', label: 'rich foam action' },
        { value: '₹290', label: 'Per pack of 3' }
      ],
      benefits: [
        {
          title: 'Removes Tough Grease',
          description:
            'Formulated to slice through heavy grease, oils, and stubborn burnt food stains easily without extra scrubbing.'
        },
        {
          title: 'Rich Foam Action',
          description:
            'Creates a thick, powerful lather that efficiently lifts away dirt and cleans more utensils with just a few drops.'
        },
        {
          title: 'Fresh Lemon Fragrance',
          description:
            'Infused with a refreshing citrus scent that completely eliminates tough food odors, leaving dishes smelling fresh.'
        }
      ],
      aboutTag: 'About this cleaning product',
      aboutHeading:
        'Powerful dish wash liquid specially formulated to remove tough grease, oil, and food stains from utensils.',
      aboutDescription:
        'VITEJA DishSpark Dish Wash Liquid is positioned as a premium cleaning product for everyday kitchen care. It is designed to target greasy surfaces, lift away stains, and leave utensils sparkling clean while keeping your hands soft and your shopping experience fast and professional.',
      routineTitle: 'How to use',
      routine: [
        {
          title: 'Apply or Mix',
          detail:
            'Add 2–3 drops directly onto a wet scrubber or sponge, OR mix 1 teaspoon of liquid in a small bowl of water.'
        },
        {
          title: 'Scrub',
          detail: 'Work up a rich lather and scrub your utensils thoroughly to lift away grease and food particles.'
        },
        {
          title: 'Rinse completely',
          detail: 'Wash out completely with clean water to leave your utensils residue-free, shiny, and smelling fresh.'
        }
      ],
      priceDisplay: '₹290',
      pricePerUnit: 290,
      unitPriceLabel: 'per pack of 3',
      totalQuantityLabel: 'Total packs',
      orderUnitName: 'pack',
      orderUnitPlural: 'packs',
      orderNote: 'Only packs of 3 bottles are delivered. Viteja team will confirm availability and delivery details on WhatsApp.',
      image: {
        src: 'assets/dishwasher.jpeg',
        alt: 'Viteja DishSpark Dish Wash Liquid pack of 3 bottles'
      }
    }
  ];

  quantity = 1;
  selectedCategoryId: ProductCategoryId = 'cosmetics';

  private readonly currencyFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  });

  get activeProduct(): ProductCatalog {
    return this.products.find((product) => product.id === this.selectedCategoryId) ?? this.products[0];
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
