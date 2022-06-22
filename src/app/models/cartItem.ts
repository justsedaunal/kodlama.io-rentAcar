import { AdditionalService } from 'src/app/models/additionalService';
import { Car } from "./car";

export class CartItem {
  car: Car;
  additionalService: AdditionalService[];
  totalPrice: number;
}
