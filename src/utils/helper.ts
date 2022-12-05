import zero from '../assets/regular_1.png'
import one from '../assets/regular_1.png'
import oneHalf from '../assets/regular_1_half.png'
import two from '../assets/regular_2.png'
import twoHalf from '../assets/regular_2_half.png'
import three from '../assets/regular_3.png'
import threeHalf from '../assets/regular_3_half.png'
import four from '../assets/regular_4.png'
import fourHalf from '../assets/regular_4_half.png'
import five from '../assets/regular_5.png'

export const getYelpRatingImage = (rating: number) => {
  switch(rating) {
    case 5: return five;
    case 4.5: return fourHalf;
    case 4: return four;
    case 3.5: return threeHalf;
    case 3: return three;
    case 2.5: return twoHalf;
    case 2: return two;
    case 1.5: return oneHalf;
    case 1: return one;
    case 0: 
    default: 
    return zero;
  }
}