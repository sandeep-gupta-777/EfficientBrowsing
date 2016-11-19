/**
 * Created by sandeep_gupta on 11/16/2016.
 */
//Use rowDataArray to search for the time for given website in HistoryArray and URLarray
// and plot graph using it
var plotLineArray=[];//this array will contain the data for line graph
var finalPlotArray = [];
var History_array =[]; //{date, websiteName,totalTimeArray }
var dateStringArray = [];
var tempDateString;
function makeArrayWithDateString(){

    finalPlotArray = [];//clear previous data
    for(var i=0;i< plotLineArray.length;++i)
    {

        tempDateString = new Date(plotLineArray[i].date).toDateString();//();//.toString()
        console.log(plotLineArray[i].date);

        var tempobj =   {
                            time: Math.round(plotLineArray[i].time).toString(),
                            date:tempDateString
                        };

        finalPlotArray.push(tempobj);

    }
    //HistoryArray doesnt contain todays usage
    //to get todays usage consult-->rowdata array from options.js line 183
    // var tempobj =   {
    //     time: Math.round(rowDataArray[1]),
    //     date:"Today"
    // };
    // finalPlotArray.push(tempobj);
}

var temp_k = [
    {x: "ggg", value: 20}

];
chrome.storage.sync.get('History_Array_key', function (obj) {

   alert("getting");
    if(obj.History_Array_key != undefined)
    {
        console.log(obj.History_Array_key);
        History_array = obj.History_Array_key;

    }

});
function print_history() {
    console.log(History_array);
}



function findInHistoryArray_draw(str) {

  //  alert(History_array.length);

    for(var i=0;i<History_array.length;++i)
    {

        if(str == History_array[i].website)
        {
            // alert("returning "+i);
            return i;
        }
    }
    return -1;
}
function draw_line_graph() {

    if (findInHistoryArray_draw(rowDataArray[0]) != -1)//found in historyarray
    {
        // alert(findInHistoryArray_draw(rowDataArray[0]));
        // alert(typeof rowDataArray[0]);
        var tempstr = rowDataArray[0];
        var index = findInHistoryArray_draw(tempstr);
        var tempWebsite = History_array[index].website;
        plotLineArray = History_array[index].dateTimeArray;
        //Plot following:
        //Name of graph:Usage of temp website
        //Graph: time vs data

        makeArrayWithDateString();

        //
       // $("#myfirstchart_text").html("Hello World");
        var tempWebsiteName = rowDataArray[0];
        $("#myfirstchart_text").html("Showing Usage for: "+ tempWebsiteName);
       // $('#myfirstchart_text').css('text-align','center');
        $('#myfirstchart_text').css({
                                        'font-size' : '40px',
                                        'text-align' : 'center'
                                    });
        $("#myfirstchart").html("");//to clear previous HTML
        new Morris.Line({
            // ID of the element in which to draw the chart.
            element: 'myfirstchart',
            // // Chart data records -- each entry in this array corresponds to a point on
            // // the chart.
            //data: plotLineArray,
            data: finalPlotArray,
            // // The name of the data record attribute that contains x-values.
            xkey: 'date',
            // // A list of names of data record attributes that contain y-values.
            ykeys: ['time'],
            // // Labels for the ykeys -- will be displayed when you hover over the
            // // chart.
            labels: ['Usage Time(Minutes)']



            // data: temp_k,
            // // The name of the data record attribute that contains x-values.
            // xkey: 'x',
            // // A list of names of data record attributes that contain y-values.
            // ykeys: ['value'],
            // // Labels for the ykeys -- will be displayed when you hover over the
            // // chart.
            // labels: ['Value']
        });
    }
}