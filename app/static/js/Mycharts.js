// console.log(dataset);
var datas = {};
$.ajax({
  type: "POST",
  url: "/getdataset",
  datatype: "json",
  async: false,
  success: function (req) {
    // console.log("111222");
    datas = req;
  },
});
console.log(datas);
var labelSetting = {
  normal: {
    show: true,
    position: "right",
    offset: [10, 2], //文字偏移量
    textStyle: {
      fontSize: 20,
    },
  },
};
var maxData = 150;
// var datas = {
//   source: [
//     [87, "王安"],
//     [89, "赵"],
//     [74, "前"],
//     [89, "孙"],
//     [68, "李"],
//     [50, "停停停"],
//     [19, "呃呃呃"],
//     [10, "棒棒棒"],
//     [32, "啊啊啊"],
//   ],
// };
var option = {
  // title: {
  // text: "爬虫数量提交排行榜",
  // },
  dataset: datas,
  grid: { containLabel: true },
  xAxis: {
    // name: "amount",
    splitLine: { show: false },
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { show: false },
  },
  yAxis: {
    type: "category",
    axisTick: { show: false },
    axisLine: { show: false },
    inverse: false,
    axisLabel: {
      margin: 10,
      textStyle: {
        color: "black",
        fontSize: 25,
      },
    },
  },

  series: [
    {
      type: "pictorialBar",
      label: labelSetting,
      symbol: "rect",
      itemStyle: {
        normal: {
          color: "#007eb1",
        },
      },
      encode: {
        // Map the "amount" column to X axis.
        x: "amount",
        // Map the "product" column to Y axis
        y: "product",
      },
      z: 10,
    },
    {
      // full data
      type: "pictorialBar",
      itemStyle: {
        normal: {
          color: "#7dbad2",
          opacity: 0.2,
        },
      },
      /* symbolRepeat: 'fixed',*/
      /*        symbolMargin: '5%',
       */ symbol: "rect",
      /*        symbolSize: 30,*/
      symbolBoundingData: maxData,
      encode: {
        // Map the "amount" column to X axis.
        x: "amount",
        // Map the "product" column to Y axis
        y: "product",
      },
      z: 5,
    },
  ],
};
