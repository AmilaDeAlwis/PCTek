import basket_icon from "./basket_icon.png";
import logo from "./logo.png";
import header_img from "./header_img.png";
import search_icon from "./search_icon.png";

// Menu items images
import menu_1 from "./menu_1.png";
import menu_2 from "./menu_2.png";
import menu_3 from "./menu_3.png";
import menu_4 from "./menu_4.png";
import menu_5 from "./menu_5.png";
import menu_6 from "./menu_6.png";
import menu_7 from "./menu_7.png";
import menu_8 from "./menu_8.png";

// Hard-coded items images for the frontent view without the admin view
import item_1 from "./item_1.png";
import item_2 from "./item_2.png";
import item_3 from "./item_3.png";
import item_4 from "./item_4.png";
import item_5 from "./item_5.png";
import item_6 from "./item_6.png";
import item_7 from "./item_7.png";
import item_8 from "./item_8.png";
import item_9 from "./item_9.png";
import item_10 from "./item_10.png";
import item_11 from "./item_11.png";
import item_12 from "./item_12.png";
import item_13 from "./item_13.png";
import item_14 from "./item_14.png";
import item_15 from "./item_15.png";
import item_16 from "./item_16.png";
import item_17 from "./item_17.png";
import item_18 from "./item_18.png";
import item_19 from "./item_19.png";
import item_20 from "./item_20.png";
import item_21 from "./item_21.png";
import item_22 from "./item_22.png";
import item_23 from "./item_23.png";
import item_24 from "./item_24.png";
import item_25 from "./item_25.png";
import item_26 from "./item_26.png";
import item_27 from "./item_27.png";
import item_28 from "./item_28.png";
import item_29 from "./item_29.png";
import item_30 from "./item_30.png";
import item_31 from "./item_31.png";
import item_32 from "./item_32.png";

import add_icon_white from "./add_icon_white.png";
import add_icon_green from "./add_icon_green.png";
import remove_icon_red from "./remove_icon_red.png";
import app_store from "./app_store.png";
import play_store from "./play_store.png";
import linkedin_icon from "./linkedin_icon.png";
import facebook_icon from "./facebook_icon.png";
import twitter_icon from "./twitter_icon.png";
import cross_icon from "./cross_icon.png";
import selector_icon from "./selector_icon.png";
import rating_starts from "./rating_starts.png";
import profile_icon from "./profile_icon.png";
import bag_icon from "./bag_icon.png";
import logout_icon from "./logout_icon.png";
import parcel_icon from "./parcel_icon.png";

export const assets = {
  logo,
  basket_icon,
  header_img,
  search_icon,
  rating_starts,
  add_icon_green,
  add_icon_white,
  remove_icon_red,
  app_store,
  play_store,
  linkedin_icon,
  facebook_icon,
  twitter_icon,
  cross_icon,
  selector_icon,
  profile_icon,
  logout_icon,
  bag_icon,
  parcel_icon,
};

// Menu list
export const menu_list = [
  {
    menu_name: "CPU",
    menu_image: menu_1,
  },
  {
    menu_name: "Motherboard",
    menu_image: menu_2,
  },
  {
    menu_name: "RAM",
    menu_image: menu_3,
  },
  {
    menu_name: "GPU",
    menu_image: menu_4,
  },
  {
    menu_name: "Storage",
    menu_image: menu_5,
  },
  {
    menu_name: "Power Supply",
    menu_image: menu_6,
  },
  {
    menu_name: "Casing",
    menu_image: menu_7,
  },
  {
    menu_name: "Monitor",
    menu_image: menu_8,
  },
];

// Hard-coded items list for the frontent view without the admin view
export const item_list = [
  {
    _id: "1",
    name: "Intel i9 14900K",
    image: item_1,
    price: 490,
    description: "36M Cache, up to 6.00 GHz",
    category: "CPU",
  },
  {
    _id: "2",
    name: "Intel i7 14700K",
    image: item_2,
    price: 380,
    description: "33M Cache, up to 5.60 GHz",
    category: "CPU",
  },
  {
    _id: "3",
    name: "Ryzen 9 7950X3D",
    image: item_3,
    price: 420,
    description: "16-cores, 64MB 3D V-Cache",
    category: "CPU",
  },
  {
    _id: "4",
    name: "Ryzen 5 7600X",
    image: item_4,
    price: 240,
    description: "6-cores 12-threads, 38M Cache",
    category: "CPU",
  },
  {
    _id: "5",
    name: "ASUS ROG",
    image: item_5,
    price: 240,
    description:
      "MAXIMUS Z790 DARK HERO Intel® Core™ 14th & 13th Gen Processors",
    category: "Motherboard",
  },
  {
    _id: "6",
    name: "ASUS ROG",
    image: item_6,
    price: 120,
    description:
      "STRIX Z790-F GAMING WIFI Intel® Core™ 14th & 13th Gen Processors",
    category: "Motherboard",
  },
  {
    _id: "7",
    name: "ASUS TUF",
    image: item_7,
    price: 200,
    description: "GAMING Z790-PRO WIFI Intel® Core™ 14th & 13th Gen Processors",
    category: "Motherboard",
  },
  {
    _id: "8",
    name: "ASUS PRIME",
    image: item_8,
    price: 150,
    description: "Z790-P CSM DDR5 Intel® Core™ 14th & 13th Gen Processors",
    category: "Motherboard",
  },
  {
    _id: "9",
    name: "Corsair Dominator",
    image: item_9,
    price: 100,
    description: "Titanium RGB AMD 64GB (2X32GB) DDR5 6000MHZ",
    category: "RAM",
  },
  {
    _id: "10",
    name: "Corsair Dominator",
    image: item_10,
    price: 120,
    description: "Titanium RGB AMD 32GB (2X16GB) DDR5 6000MHZ",
    category: "RAM",
  },
  {
    _id: "11",
    name: "Corsair Vengeance",
    image: item_11,
    price: 80,
    description: "Titanium RGB 16GB DDR5 5600MHz",
    category: "RAM",
  },
  {
    _id: "12",
    name: "Corsair Vengeance",
    image: item_12,
    price: 120,
    description: "Titanium RGB 32GB D5 INTEL 5600MHZ",
    category: "RAM",
  },
  {
    _id: "13",
    name: "RTX 4090",
    image: item_13,
    price: 2000,
    description: "ASUS STRIX GAMING GeForce",
    category: "GPU",
  },
  {
    _id: "14",
    name: "RTX 4080 SUPER",
    image: item_14,
    price: 1000,
    description: "ASUS ROG Strix",
    category: "GPU",
  },
  {
    _id: "15",
    name: "RTX 4070 SUPER",
    image: item_15,
    price: 550,
    description: "ASUS ROG Strix",
    category: "GPU",
  },
  {
    _id: "16",
    name: "RTX 4060 Ti",
    image: item_16,
    price: 400,
    description: "ASUS ROG Strix",
    category: "GPU",
  },
  {
    _id: "17",
    name: "SAMSUNG 990 PRO",
    image: item_17,
    price: 150,
    description: "SSD 2TB PCIe 4.0",
    category: "Storage",
  },
  {
    _id: "18",
    name: "TEAM TFORCE",
    image: item_18,
    price: 130,
    description: "A440 LITE M.2 GEN4 2TB",
    category: "Storage",
  },
  {
    _id: "19",
    name: "TEAM TFORCE",
    image: item_19,
    price: 80,
    description: "A440 LITE M.2 GEN4 1TB",
    category: "Storage",
  },
  {
    _id: "20",
    name: "TEAM TFORCE",
    image: item_20,
    price: 15,
    description: "A440 LITE M.2 GEN4 500GB",
    category: "Storage",
  },
  {
    _id: "21",
    name: "Asus ROG THOR",
    image: item_21,
    price: 300,
    description: "1600W Titanium",
    category: "Power Supply",
  },
  {
    _id: "22",
    name: "Asus ROG THOR",
    image: item_22,
    price: 280,
    description: "1200 PLATINUM II",
    category: "Power Supply",
  },
  {
    _id: "23",
    name: "Asus ROG THOR",
    image: item_23,
    price: 250,
    description: "1000 PLATINUM II",
    category: "Power Supply",
  },
  {
    _id: "24",
    name: "ASUS ROG",
    image: item_24,
    price: 260,
    description: "LOKI SFX-L 1000W",
    category: "Power Supply",
  },
  {
    _id: "25",
    name: "ASUS ROG",
    image: item_25,
    price: 300,
    description: "Hyperion GR701",
    category: "Casing",
  },
  {
    _id: "26",
    name: "ASUS ROG",
    image: item_26,
    price: 280,
    description: "Strix Helios RGB Black",
    category: "Casing",
  },
  {
    _id: "27",
    name: "ASUS ROG",
    image: item_27,
    price: 260,
    description: "Z11 Mini-ITX/DTX",
    category: "Casing",
  },
  {
    _id: "28",
    name: "ASUS ROG",
    image: item_28,
    price: 240,
    description: "Strix Helios RGB",
    category: "Casing",
  },
  {
    _id: "29",
    name: "MSI MAG491CQP",
    image: item_29,
    price: 1400,
    description: "49 Inch QD-OLED",
    category: "Monitor",
  },
  {
    _id: "30",
    name: "MSI MAG 271QPX",
    image: item_30,
    price: 820,
    description: "27 Inch QD-OLED",
    category: "Monitor",
  },
  {
    _id: "31",
    name: "MSI MAG 341CQP",
    image: item_31,
    price: 1000,
    description: "34 Inch QD-OLED",
    category: "Monitor",
  },
  {
    _id: "32",
    name: "ASUS ROG XG49VQ ",
    image: item_32,
    price: 1500,
    description: "Super Ultra-Wide",
    category: "Monitor",
  },
];
