const itemTypes = ["painting", "sculpture", "digital", "custom"];

const items = [
  {
    id: 1,
    title: "Meet me where the wild things grow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    type: "painting",
    image:
      "https://images.unsplash.com/photo-1505440484611-23c171ad6e96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2054&q=80",
    price: 1315,
    artist: "Leanne Graham",
    dateCreated: "2021-10-09T02:00:48.989Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: "2021-10-10T02:00:48.989Z",
    priceSold: 2030,
  },
  {
    id: 2,
    title: "I choose peace",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    type: "sculpture",
    image:
      "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 530,
    artist: "Ervin Howell",
    dateCreated: "2021-10-27T02:00:48.989Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: "2021-10-29T02:00:48.989Z",
    priceSold: 350,
  },
  {
    id: 3,
    title: "Peace Underneath",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    type: "digital",
    image:
      "https://images.unsplash.com/photo-1487452066049-a710f7296400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    price: 495,
    artist: "Clementine Bauch",
    dateCreated: "2021-10-17T02:00:48.989Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2021-10-27T02:00:48.989Z",
    priceSold: 2810,
  },
  {
    id: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1290,
    artist: "Patricia Lebsack",
    dateCreated: "2021-10-24T02:00:48.989Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2021-10-26T02:00:48.989Z",
    priceSold: 4840,
    title: "Fill in the blank",
    type: "custom",
  },
  {
    id: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1619358977696-58722a216a2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1480,
    artist: "Chelsey Dietrich",
    dateCreated: "2021-10-01T02:00:48.989Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2021-10-26T02:00:48.989Z",
    priceSold: 14730,
    title: "Meet me where the wild things grow",
    type: "painting",
  },
  {
    id: 6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1305,
    artist: "Mrs. Dennis Schulist",
    dateCreated: "2021-09-30T02:00:48.989Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: "2021-10-19T02:00:48.989Z",
    priceSold: 2935,
    title: "I choose peace",
    type: "sculpture",
  },
  {
    id: 7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 50,
    artist: "Kurtis Weissnat",
    dateCreated: "2021-10-02T02:00:48.989Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: "2021-10-08T02:00:48.990Z",
    priceSold: 75,
    title: "Peace Underneath",
    type: "digital",
  },
  {
    id: 8,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618207773994-243f4bce78fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1095,
    artist: "Nicholas Runolfsdottir V",
    dateCreated: "2021-10-12T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2021-10-24T02:00:48.990Z",
    priceSold: 3465,
    title: "Fill in the blank",
    type: "custom",
  },
  {
    id: 9,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 600,
    artist: "Glenna Reichert",
    dateCreated: "2021-10-24T02:00:48.990Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: "2021-10-27T02:00:48.990Z",
    priceSold: 4220,
    title: "Meet me where the wild things grow",
    type: "painting",
  },
  {
    id: 10,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1619358977696-58722a216a2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 855,
    artist: "Clementina DuBuque",
    dateCreated: "2021-10-04T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2021-10-28T02:00:48.990Z",
    priceSold: 4540,
    title: "I choose peace",
    type: "sculpture",
  },
  {
    id: 11,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1554058501-f6872d688003?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    price: 670,
    artist: "Leanne Graham",
    dateCreated: "2021-10-13T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2021-10-27T02:00:48.990Z",
    priceSold: 1940,
    title: "Peace Underneath",
    type: "digital",
  },
  {
    id: 12,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618208122329-27e7f10d6d6b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 975,
    artist: "Ervin Howell",
    dateCreated: "2021-10-21T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2021-10-22T02:00:48.990Z",
    priceSold: 1165,
    title: "Fill in the blank",
    type: "custom",
  },
  {
    id: 13,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1480,
    artist: "Clementine Bauch",
    dateCreated: "2021-10-06T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2021-10-27T02:00:48.990Z",
    priceSold: 8270,
    title: "Meet me where the wild things grow",
    type: "painting",
  },
  {
    id: 14,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 995,
    artist: "Patricia Lebsack",
    dateCreated: "2021-10-12T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2021-10-27T02:00:48.990Z",
    priceSold: 6630,
    title: "I choose peace",
    type: "sculpture",
  },
  {
    id: 15,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 810,
    artist: "Chelsey Dietrich",
    dateCreated: "2021-10-02T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2021-10-16T02:00:48.990Z",
    priceSold: 840,
    title: "Peace Underneath",
    type: "digital",
  },
  {
    id: 16,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 570,
    artist: "Mrs. Dennis Schulist",
    dateCreated: "2021-10-19T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2021-10-23T02:00:48.990Z",
    priceSold: 3660,
    title: "Fill in the blank",
    type: "custom",
  },
  {
    id: 17,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 105,
    artist: "Kurtis Weissnat",
    dateCreated: "2021-10-24T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2021-10-26T02:00:48.990Z",
    priceSold: 765,
    title: "Meet me where the wild things grow",
    type: "painting",
  },
  {
    id: 18,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1270,
    artist: "Nicholas Runolfsdottir V",
    dateCreated: "2021-10-24T02:00:48.990Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: "2021-10-26T02:00:48.990Z",
    priceSold: 1500,
    title: "I choose peace",
    type: "sculpture",
  },
  {
    id: 19,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1578301978069-45264734cddc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1050,
    artist: "Glenna Reichert",
    dateCreated: "2021-10-16T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2021-10-23T02:00:48.990Z",
    priceSold: 3675,
    title: "Peace Underneath",
    type: "digital",
  },
  {
    id: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1578301978069-45264734cddc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1430,
    artist: "Clementina DuBuque",
    dateCreated: "2021-10-11T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2021-10-12T02:00:48.990Z",
    priceSold: 1305,
    title: "Fill in the blank",
    type: "custom",
  },
];
