const API_URL = "https://bootcamp-rent-car.herokuapp.com/admin/car/";
const categoryList = [
    {
      value: "2 - 4 orang",
      label: "2 - 4 orang",
    },
    {
      value: "4 - 6 orang",
      label: "4 - 6 orang",
    },
    {
      value: "6 - 8 orang",
      label: "6 - 8 orang",
    },
  ];
  const PriceList = [
    {
      value: "<400000",
      label: "<Rp.400.000",
    },
    {
      value: "400000-600000",
      label: "Rp.400.000 - Rp.600.000",
    },
    {
      value: ">600000",
      label: ">Rp.600.000",
    },
  ];
  const StatusList = [
    {
      value: null,
      label: "Disewa",
    },
  ];
  const Num = new Intl.NumberFormat("de-DE", {
    style: "decimal",
    currency: "IDR",
  });

  export {API_URL, categoryList, PriceList, StatusList, Num }
