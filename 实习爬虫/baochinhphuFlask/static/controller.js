let contentStart=0
let contentEnd=20
let dataLength=0
let page=1
let date=new Date
let Year=date.getFullYear()
let Country=$('#target').parent().attr('id')
let DBlength=0

console.log((new Date).getTime())

function yearsInit(){
    $.ajax({
        url:'/get_dbLength',
        type:'post',
        data:{'Country':JSON.stringify(Country)},
        success:function(data){
            DBlength=data['data']
            if(data['data']!=0){
                for (var i = 0; i < data['data']; i++) {
                    let $table_data = $('<div class="year">'+(Year-i)+'</div>')
                    $('#Year').append($table_data)
                }
            }
        },
        error:function(){
        }
    })
}
function init(data,dataLength) {
    var empty=0
    if(Country=='yuenanDB'){
        $('tbody').empty()
        empty=0
        for (var i = contentStart; i < contentEnd; i++) {
            if(data['data']['href'][i]){
                if(data['data']['title'][i]!='') {
                    let $table_data = $('<tr class="singleInfo" id="' + i + '">' +
                        '<td class="list1">' + data['data']['date'][i] + '</td>' +
                        '<td class="list2"><a class="link" target="_blank" href="https://cn.baochinhphu.vn' + data['data']['href'][i] + '">' + data['data']['title'][i] + '</a></td>' +
                        '</tr>')
                    $('tbody').append($table_data)
                }
                else if(data['data']['title'][i]==''){
                    contentEnd+=1
                    empty++
                }
            }
        }
        $('#page').html('第' + page + '/' + Math.ceil(dataLength / 20) + '页')
    }
    else if(Country=='yuenanDB1'){
        $('tbody').empty()
        empty=0
        for (var i = contentStart; i < contentEnd; i++) {
            if(data['data']['href'][i]){
                if(data['data']['title'][i]!='') {
                    let $table_data = $('<tr class="singleInfo" id="' + i + '">' +
                        '<td class="list1">' + data['data']['date'][i] + '</td>' +
                        '<td class="list2"><a class="link" target="_blank" href="https://baochinhphu.vn' + data['data']['href'][i] + '">' + data['data']['title'][i] + '</a></td>' +
                        '</tr>')
                    $('tbody').append($table_data)
                }
                else if(data['data']['title'][i]==''){
                    contentEnd+=1
                    empty++
                }
            }
        }
        $('#page').html('第' + page + '/' + Math.ceil(dataLength / 20) + '页')
    }
    else if(Country=='pakistanDB'){
        $('tbody').empty()
        empty=0
        for (var i = contentStart; i < contentEnd;i++ ) {
            if(data['data']['href'][i]){
                if(data['data']['title'][i]!='') {
                    let $table_data = $('<tr class="singleInfo" id="' + i + '">' +
                        '<td class="list1">' + data['data']['date'][i] + '</td>' +
                        '<td class="list2"><a class="link" target="_blank" href="' + data['data']['href'][i] + '">' + data['data']['title'][i] + '</a></td>' +
                        '</tr>')
                    $('tbody').append($table_data)
                }
                else if(data['data']['title'][i]==''){
                    contentEnd+=1
                    empty++
                }
            }
        }
        contentEnd=contentEnd-empty
        $('#page').html('第' + page + '/' + Math.ceil(dataLength / 20) + '页')
    }
    else if(Country=='yinduDB'){
        $('tbody').empty()
        empty=0
        for (var i = contentStart; i < contentEnd;i++ ) {
            if(data['data']['href'][i]){
                if(data['data']['title'][i]!='') {
                    let $table_data = $('<tr class="singleInfo" id="' + i + '">' +
                        '<td class="list1">' + data['data']['date'][i] + '</td>' +
                        '<td class="list2"><a class="link" target="_blank" href="https://timesofindia.indiatimes.com' + data['data']['href'][i] + '">' + data['data']['title'][i] + '</a></td>' +
                        '</tr>')
                    $('tbody').append($table_data)
                }
                else if(data['data']['title'][i]==''){
                    contentEnd+=1
                    empty++
                }
            }
        }
        contentEnd=contentEnd-empty
        $('#page').html('第' + page + '/' + Math.ceil(dataLength / 20) + '页')
    }
    else if(Country=='pakistanDB2'){
        $('tbody').empty()
        empty=0
        for (var i = contentStart; i < contentEnd;i++ ) {
            if(data['data']['href'][i]){
                if(data['data']['title'][i]!='') {
                    let $table_data = $('<tr class="singleInfo" id="' + i + '">' +
                        '<td class="list1">' + data['data']['date'][i] + '</td>' +
                        '<td class="list2"><a class="link" target="_blank" href="' + data['data']['href'][i] + '">' + data['data']['title'][i] + '</a></td>' +
                        '</tr>')
                    $('tbody').append($table_data)
                }
                else if(data['data']['title'][i]==''){
                    contentEnd+=1
                    empty++
                }
            }
        }
        contentEnd=contentEnd-empty
        $('#page').html('第' + page + '/' + Math.ceil(dataLength / 20) + '页')
    }
}
function pageFunction(data,dataLength){
    $('#pagenumber').on('click', '#next', function () {
        page += 1
        if (page == Math.ceil(dataLength / 20)) {
            $('#next').attr('disabled', true)
            $('#previous').attr('disabled', false)
        } else {
            $('#next').attr('disabled', false)
            $('#previous').attr('disabled', false)
        }
        contentStart += 20
        contentEnd += 20
        $('tbody').empty()
        init(data,dataLength)
    })
    $('#pagenumber').on('click', '#previous', function () {
        page -= 1
        if (page == 1) {
            $('#previous').attr('disabled', true)
            $('#next').attr('disabled', false)
        } else {
            $('#previous').attr('disabled', false)
            $('#next').attr('disabled', false)
        }
        contentStart -= 20
        contentEnd -= 20
        $('tbody').empty()
        init(data,dataLength)
    })
}
function pageInit(page,dataLength){
    if (page == Math.ceil(dataLength / 20)) {
        $('#next').attr('disabled', true)
    }
    else{
        $('#next').attr('disabled', false)
    }
    if (page == 1) {
        $('#previous').attr('disabled', true)
    }
    else{
        $('#previous').attr('disabled', false)
    }
}

function table_Data() {
    $.ajax({
        url:'/table_data',
        type:'post',
        data:{'Country':JSON.stringify(Country)},
        success:function(data){
            contentStart=0
            contentEnd=20
            page=1
            dataLength=data['data']['date'].length
            $('#previous').attr('disabled',true)
            init(data,dataLength)
            pageFunction(data,dataLength)
            wordcloud_option.series[0].data=data['wordsData']
            wordcloud.setOption(wordcloud_option)
        },
        error:function(){

        }
    })
}
function get_yearData(){
    $('#category').on('mouseenter','#Year',function (){
        $('.active').css('position','static')
        $(this).css('height','fit-content')
    })
    $('#category').on('mouseleave','#Year',function (){
        $('.active').css('position','absolute')
        $(this).css('height','32px')
    })
    $('#Year').on('click','.year',function (){
        $(this).addClass("active").siblings().removeClass("active")
        $(this).parent().css('height','32px')
        if($(this).text()==='全部'){
            $.ajax({
                url:'/table_data',
                type:'post',
                data:{'Country':JSON.stringify(Country)},
                success:function (data){
                    contentStart=0
                    contentEnd=20
                    page=1
                    dataLength=data['data']['date'].length
                    pageInit(page,dataLength)
                    init(data,dataLength)
                    $('#pagenumber').unbind()
                    pageFunction(data,dataLength)
                    wordcloud_option.series[0].data=data['wordsData']
                    wordcloud.setOption(wordcloud_option)
                },
                error:function (){

                }
            })
        }
        $.ajax({
            url:'/get_yearData',
            type:'post',
            data:{'year':JSON.stringify(String($(this).text())),'Country':JSON.stringify(Country)},
            success:function (data){
                contentStart=0
                contentEnd=20
                page=1
                dataLength=data['data']['date'].length
                pageInit(page,dataLength)
                init(data,dataLength)
                $('#pagenumber').unbind()
                pageFunction(data,dataLength)
                wordcloud_option.series[0].data=data['wordsData']
                wordcloud.setOption(wordcloud_option)
            },
            error:function (){

            }
        })
    })
}

function search_data(){
    $('#search').on('click','#Search',function (){
        searchWord=$('#idSearch').val()
        $('#idSearch').val('')
        $.ajax({
            url:'/table_data',
            type:'post',
            data:{'Country':JSON.stringify(Country)},
            success:function (data){
                searchData={'data':{'date':[],'href':[],'title':[]}}
                for(var info=0;info<data['data']['title'].length;info++){
                    if(data['data']['title'][info].indexOf(searchWord)>=0){
                        searchData['data']['date'].push(data['data']['date'][info])
                        searchData['data']['title'].push(data['data']['title'][info])
                        searchData['data']['href'].push(data['data']['href'][info])
                    }
                }
                contentStart=0
                contentEnd=20
                page=1
                dataLength=searchData['data']['date'].length
                pageInit(page,dataLength)
                init(searchData,dataLength)
                $('#pagenumber').unbind()
                pageFunction(searchData,dataLength)
                $.ajax({
                    url:'/get_searchWords',
                    type:'post',
                    data:{'searchData':JSON.stringify(searchData['data'])},
                    success:function (Data){
                        wordcloud_option.series[0].data=Data['data']
                        wordcloud.setOption(wordcloud_option)
                    },
                    error:function (){

                    }
                })
            },
            error:function (){
            }
        })
    })
    $('#search').on('keypress','#idSearch',function (e){
        if(e.keyCode=='13'){
            $('#Search').trigger('click')
        }
    })
}
function words_Change(){
    $.ajax({
        url:'/words_Change',
        type:'post',
        data:{'Country':JSON.stringify(Country)},
        success:function (data){
            wordsChange_Init()
        },
        error:function (){
        }
    })
}
function mood(){
    $.ajax({
        url:'/get_mood',
        type:'post',
        data:{'Country':JSON.stringify(Country)},
        success:function (data){
            moodOption.xAxis.data=data['data']['date']
            moodOption.series[0].data=data['data']['title']
            moodOption.series[1].data=data['data']['positive']
            moodOption.series[2].data=data['data']['negetive']
            Mood.setOption(moodOption)
        },
        error:function (){
        }
    })
}
function Navigation(){
    var $scrollHeight = 0
    $(window).scroll(function () {
        if ($(this).scrollTop() > $scrollHeight) {
            $('#navigation').css({
                position: 'fixed',
                top: 0,
                left: 0
            })
        } else {
            $('#navigation').css({
                position: 'absolute',
                top: 0,
                left: 0
            })
        }
    })
}

function countryChange(){
    $('#countries').on('click','.country',function(){
        changeCountry=$(this).text()
        window.location.href = "http://127.0.0.1:5555/"+changeCountry
    })
}

yearsInit()
table_Data()
get_yearData()
search_data()
words_Change()
mood()
Navigation()
countryChange()