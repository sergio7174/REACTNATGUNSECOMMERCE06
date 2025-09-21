import MachineGun from "../assets/images/ak1bg.png";
import ak4701 from "../../assets/MachineGun/ak-4701.jpg";
import ak4702 from "../../assets/MachineGun/ak-4702.jpg";
import ak4703 from "../../assets/MachineGun/ak-4703.jpg";




export const dataMachineGun = [
  {
    name: "Machine Gun",
    image: MachineGun,
    category:"Machine Gun",

  }];


export const mockGrillMachineGun= [
  {
    name: "Ak - 4701",
    image: ak4701,
    category:"Machine Gun",
    id: "_1",
    price: 180,
    delivery_time: "10 Days",
    rating: 1,
    popular: "Deals",
  },
  {
    name: "Ak - 4702",
    image: ak4702,
    category:"Machine Gun",
    id: "_2",
    price: 180,
    delivery_time: "10 Days",
    rating: 1,
    popular: "Deals",
  },
{
    name: "Ak - 4703",
    image: ak4703,
    category:"Machine Gun",
    id: "_3",
    price: 180,
    delivery_time: "10 Days",
    rating: 1,
    popular: "Deals",
  },

]

export function getProducts() {
  return mockGrillMachineGun;
}

export function getProduct(id) {
  return mockGrillMachineGun.find((product) => product.id == id);
}




