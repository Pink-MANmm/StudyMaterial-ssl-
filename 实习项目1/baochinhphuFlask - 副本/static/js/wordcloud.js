let wordcloud = echarts.init(document.getElementById('wordcloud'))
let wordcloud_option = {
    // backgroundColor: '#515151',
    title: {
        text: "新闻热词",
        textStyle: {
            color: 'rgba(255,255,255,0.75)',
        },
        left: 'left'
    },
    tooltip: {
        show: false
    },
    series: [{
        type: 'wordCloud',
        // drawOutOfBound:true,
        gridSize: 1,
        sizeRange: [12, 55],
        rotationRange: [-45, 0, 45, 90],
        // maskImage: maskImage,

        //这是让词云图的颜色随机
        textStyle: {
            normal: {
                color: function () {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            }
        },
        // left: 'center',
        // top: 'center',
        // // width: '96%',
        // // height: '100%',
        right: null,
        bottom: null,
        // width: 300,
        // height: 200,
        // top: 20,
        data: []
    }]
}
wordcloud.setOption(wordcloud_option)