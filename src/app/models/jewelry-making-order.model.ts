import {Metal} from './metal.model';
import {Gem} from './gem.model';
import {Makers} from './makers.model';

export class JewelryMakingOrder {
  jewMDId: number;
  givenDate: Date;
  metal: Metal;
  gem: Gem;
  jewelryMaker: Makers;
  givenMetalWeight: number;
}
