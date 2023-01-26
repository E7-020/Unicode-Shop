export const products = [
  {
    id: 1,

    name: "MacBook",

    price: 85000,

    image:
      "https://avatars.mds.yandex.net/get-mpic/4509881/img_id4337426857549178299.jpeg/orig",
  },

  {
    id: 2,

    name: "Galaxy",

    price: 80000,

    image:
      "data:image/jpeg;base64,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",
  },

  {
    id: 3,
    name: "Скутер",

    price: 110000,

    image:
      "https://etekbikes.com/wp-content/uploads/2020/12/scout_Grey_NO_ACCESORY_1-2.jpg",
  },

  {
    id: 4,

    name: "Монитор Samsung",

    price: 21000,

    image:
      "https://images.samsung.com/is/image/samsung/tr-sr35-ls27r350fhmxuf-frontblack-229553216?$650_519_PNG$",
  },

  {
    id: 5,

    name: "Респераторная маска",

    price: 1100,

    image:
      "https://cdn11.bigcommerce.com/s-tdvizl1wrj/images/stencil/original/products/808/7737/SOTR_combined_02__53450.1650406905.jpg?c=2",
  },

  {
    id: 6,

    name: "Стиральная машина",

    price: 65999,

    image:
      "https://www.lg.com/in/images/washing-machines/md07540744/gallery/FHM1207BDL-Washing-Machines-Front-View-D-01.jpg",
  },

  {
    id: 7,

    name: "Белый холодильник",

    price: 55600,

    image:
      "https://d15v10x8t3bz3x.cloudfront.net/Immagini/2020/5/15907698/640-1_34004287_15_01_f_ccrn%206180%20w-M.jpg",
  },

  {
    id: 8,

    name: "Колонка",

    price: 7100,

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCyLcBiN1AOJFHDL8cMJvK1TXwwRNx0YJLJA&usqp=CAU",
  },

  {
    id: 9,

    name: "Наушники",

    price: 5400,

    image:
      "https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g733/gallery/g733-lilac-gallery-1.png?v=1",
  },
];
