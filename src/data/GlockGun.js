import GlockGun from "../assets/images/glockbg.png";
import GlockGun01 from "../../assets/GlockGun/GlockGun01.jpg";
import GlockGun02 from "../../assets/GlockGun/GlockGun02.jpg";
import GlockGun03 from "../../assets/GlockGun/GlockGun03.jpg";
import GlockGun04 from "../../assets/GlockGun/GlockGun04.png";



export const dataGlockGun = [
  {
    name: "Glock Gun",
    image: GlockGun,
    category:"GlockGun",

  }];


export const mockGrillGlockGun= [
  {
    name: "Firearm Toy Gun Pistol 01",
    image: GlockGun01,
    category:"GlockGun",
    id: "_1",
    price: 80,
    delivery_time: "10 Days",
    rating: 1,
    popular: "Deals",
  },
  {
    name: "Firearm Toy Gun Pistol 02",
    image: GlockGun02,
    category:"GlockGun",
    id: "_2",
    price: 80,
    delivery_time: "10 Days",
    rating: 1,
    popular: "Deals",
  },
{
    name: "Firearm Toy Gun Pistol 03",
    image: GlockGun03,
    category:"GlockGun",
    id: "_3",
    price: 80,
    delivery_time: "10 Days",
    rating: 1,
    popular: "Deals",
  },
{
    name: "Firearm Toy Gun Pistol 04",
    image: GlockGun04,
    category:"GlockGun",
    id: "_4",
    price: 80,
    delivery_time: "10 Days",
    rating: 1,
    popular: "Deals",
  },

]

export function getProducts() {
  return mockGrillGlockGun;
}

export function getProduct(id) {
  return mockGrillGlockGun.find((product) => product.id == id);
}




