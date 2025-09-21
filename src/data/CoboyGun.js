import CowboyGun from "../assets/images/coboygun.jpg";
import IsolatedAntiqueRevolver from "../../assets/CoboyGun/IsolatedAntiqueRevolver.jpg";
import GleamingRevolver from "../../assets/CoboyGun/GleamingRevolver.jpg";
import OldCowBoyPistol from "../../assets/CoboyGun/OldCowBoyPistol.jpg";
import LuxureEngravedRevolver from "../../assets/CoboyGun/LuxureEngravedRevolver.jpg";


export const dataCowboyGun = [
  {
    name: "Cowboy Gun",
    image: CowboyGun,
    category:"CowboyGun",

  }];


export const mockGrillCowboyGun= [
  {
    name: "Isolated Antique Revolver",
    image: IsolatedAntiqueRevolver,
    category:"CowboyGun",
    id: "_1",
    price: 80,
    delivery_time: "10 Days",
    rating: 1,
    popular: "Deals",
  },
  {
    name: "Gleaming Revolver of Cowboy",
    image: GleamingRevolver,
    category:"CowboyGun",
    id: "_2",
    price: 95,
    delivery_time: "10 Days",
    rating: 1,
    popular: "Deals",
  },
{
    name: "Old Cowboy Pistol",
    image: OldCowBoyPistol,
    category:"CowboyGun",
    id: "_3",
    price: 95,
    delivery_time: "10 Days",
    rating: 1,
    popular: "Deals",
  },
{
    name: "Luxury engraved revolver",
    image: LuxureEngravedRevolver,
    category:"CowboyGun",
    id: "_4",
    price: 105,
    delivery_time: "10 Days",
    rating: 1,
    popular: "Deals",
  },

]

export function getProducts() {
  return mockGrillCowboyGun;
}

export function getProduct(id) {
  return mockGrillCowboyGun.find((product) => product.id == id);
}




