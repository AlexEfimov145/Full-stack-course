import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../models/product.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
    @Input() public product?: ProductModel;
}
