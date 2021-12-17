const myLinks = [
"https://www.hsk.help/dictionary/%E7%88%B1/1",
"https://www.hsk.help/dictionary/%E5%85%AB/2",
"https://www.hsk.help/dictionary/%E7%88%B8%E7%88%B8/3",
"https://www.hsk.help/dictionary/%E5%8C%97%E4%BA%AC/5",
"https://www.hsk.help/dictionary/%E6%9D%AF%E5%AD%90/4",
"https://www.hsk.help/dictionary/%E6%9C%AC/6",
"https://www.hsk.help/dictionary/%E4%B8%8D/8",
"https://www.hsk.help/dictionary/%E4%B8%8D%E5%AE%A2%E6%B0%94/7",
"https://www.hsk.help/dictionary/%E8%8F%9C/9",
"https://www.hsk.help/dictionary/%E8%8C%B6/10",
"https://www.hsk.help/dictionary/%E5%90%83/11",
"https://www.hsk.help/dictionary/%E5%87%BA%E7%A7%9F%E8%BD%A6/12",
"https://www.hsk.help/dictionary/%E5%A4%A7/14",
"https://www.hsk.help/dictionary/%E6%89%93%E7%94%B5%E8%AF%9D/13",
"https://www.hsk.help/dictionary/%E7%9A%84/15",
"https://www.hsk.help/dictionary/%E7%82%B9/16",
"https://www.hsk.help/dictionary/%E7%94%B5%E8%84%91/17",
"https://www.hsk.help/dictionary/%E7%94%B5%E8%A7%86/18",
"https://www.hsk.help/dictionary/%E7%94%B5%E5%BD%B1/19",
"https://www.hsk.help/dictionary/%E4%B8%9C%E8%A5%BF/20",
"https://www.hsk.help/dictionary/%E9%83%BD/21",
"https://www.hsk.help/dictionary/%E8%AF%BB/22",
"https://www.hsk.help/dictionary/%E5%AF%B9%E4%B8%8D%E8%B5%B7/23",
"https://www.hsk.help/dictionary/%E5%A4%9A/24",
"https://www.hsk.help/dictionary/%E5%A4%9A%E5%B0%91/25",
"https://www.hsk.help/dictionary/%E4%BA%8C/27",
"https://www.hsk.help/dictionary/%E5%84%BF%E5%AD%90/26",
"https://www.hsk.help/dictionary/%E9%A5%AD%E5%BA%97/28",
"https://www.hsk.help/dictionary/%E9%A3%9E%E6%9C%BA/29",
"https://www.hsk.help/dictionary/%E5%88%86%E9%92%9F/30",
"https://www.hsk.help/dictionary/%E9%AB%98%E5%85%B4/31",
"https://www.hsk.help/dictionary/%E4%B8%AA/32",
"https://www.hsk.help/dictionary/%E5%B7%A5%E4%BD%9C/33",
"https://www.hsk.help/dictionary/%E7%8B%97/34",
"https://www.hsk.help/dictionary/%E6%B1%89%E8%AF%AD/35",
"https://www.hsk.help/dictionary/%E5%A5%BD/36",
"https://www.hsk.help/dictionary/%E5%8F%B7/37",
"https://www.hsk.help/dictionary/%E5%96%9D/38",
"https://www.hsk.help/dictionary/%E5%92%8C/39",
"https://www.hsk.help/dictionary/%E5%BE%88/40",
"https://www.hsk.help/dictionary/%E5%90%8E%E9%9D%A2/41",
"https://www.hsk.help/dictionary/%E5%9B%9E/42",
"https://www.hsk.help/dictionary/%E4%BC%9A/43",
"https://www.hsk.help/dictionary/%E5%87%A0/44",
"https://www.hsk.help/dictionary/%E5%AE%B6/45",
"https://www.hsk.help/dictionary/%E5%8F%AB/46",
"https://www.hsk.help/dictionary/%E4%BB%8A%E5%A4%A9/47",
"https://www.hsk.help/dictionary/%E4%B9%9D/48",
"https://www.hsk.help/dictionary/%E5%BC%80/49",
"https://www.hsk.help/dictionary/%E7%9C%8B/50",
"https://www.hsk.help/dictionary/%E7%9C%8B%E8%A7%81/51",
"https://www.hsk.help/dictionary/%E5%9D%97/52",
"https://www.hsk.help/dictionary/%E6%9D%A5/53",
"https://www.hsk.help/dictionary/%E8%80%81%E5%B8%88/54",
"https://www.hsk.help/dictionary/%E4%BA%86/55",
"https://www.hsk.help/dictionary/%E5%86%B7/56",
"https://www.hsk.help/dictionary/%E9%87%8C/57",
"https://www.hsk.help/dictionary/%E5%85%AD/58",
"https://www.hsk.help/dictionary/%E5%90%97/60",
"https://www.hsk.help/dictionary/%E4%B9%B0/61",
"https://www.hsk.help/dictionary/%E5%A6%88%E5%A6%88/59",
"https://www.hsk.help/dictionary/%E7%8C%AB/62",
"https://www.hsk.help/dictionary/%E6%B2%A1%E5%85%B3%E7%B3%BB/63",
"https://www.hsk.help/dictionary/%E6%B2%A1%E6%9C%89/64",
"https://www.hsk.help/dictionary/%E7%B1%B3%E9%A5%AD/65",
"https://www.hsk.help/dictionary/%E6%98%8E%E5%A4%A9/66",
"https://www.hsk.help/dictionary/%E5%90%8D%E5%AD%97/67",
"https://www.hsk.help/dictionary/%E5%93%AA/68",
"https://www.hsk.help/dictionary/%E9%82%A3/70",
"https://www.hsk.help/dictionary/%E5%93%AA%E5%84%BF/69",
"https://www.hsk.help/dictionary/%E5%91%A2/71",
"https://www.hsk.help/dictionary/%E8%83%BD/72",
"https://www.hsk.help/dictionary/%E4%BD%A0/73",
"https://www.hsk.help/dictionary/%E5%B9%B4/74",
"https://www.hsk.help/dictionary/%E5%A5%B3%E5%84%BF/75",
"https://www.hsk.help/dictionary/%E6%9C%8B%E5%8F%8B/76",
"https://www.hsk.help/dictionary/%E6%BC%82%E4%BA%AE/77",
"https://www.hsk.help/dictionary/%E8%8B%B9%E6%9E%9C/78",
"https://www.hsk.help/dictionary/%E4%B8%83/79",
"https://www.hsk.help/dictionary/%E9%92%B1/80",
"https://www.hsk.help/dictionary/%E5%89%8D%E9%9D%A2/81",
"https://www.hsk.help/dictionary/%E8%AF%B7/82",
"https://www.hsk.help/dictionary/%E5%8E%BB/83",
"https://www.hsk.help/dictionary/%E7%83%AD/84",
"https://www.hsk.help/dictionary/%E4%BA%BA/85",
"https://www.hsk.help/dictionary/%E8%AE%A4%E8%AF%86/86",
"https://www.hsk.help/dictionary/%E4%B8%89/87",
"https://www.hsk.help/dictionary/%E4%B8%8A/89",
"https://www.hsk.help/dictionary/%E5%95%86%E5%BA%97/88",
"https://www.hsk.help/dictionary/%E4%B8%8A%E5%8D%88/90",
"https://www.hsk.help/dictionary/%E5%B0%91/91",
"https://www.hsk.help/dictionary/%E8%B0%81/92",
"https://www.hsk.help/dictionary/%E4%BB%80%E4%B9%88/93",
"https://www.hsk.help/dictionary/%E5%8D%81/94",
"https://www.hsk.help/dictionary/%E6%98%AF/96",
"https://www.hsk.help/dictionary/%E6%97%B6%E5%80%99/95",
"https://www.hsk.help/dictionary/%E4%B9%A6/97",
"https://www.hsk.help/dictionary/%E6%B0%B4/98",
"https://www.hsk.help/dictionary/%E7%9D%A1%E8%A7%89/100",
"https://www.hsk.help/dictionary/%E6%B0%B4%E6%9E%9C/99",
"https://www.hsk.help/dictionary/%E8%AF%B4/101",
"https://www.hsk.help/dictionary/%E5%9B%9B/102",
"https://www.hsk.help/dictionary/%E5%B2%81/103",
"https://www.hsk.help/dictionary/%E4%BB%96/104",
"https://www.hsk.help/dictionary/%E5%A5%B9/105",
"https://www.hsk.help/dictionary/%E5%A4%AA/106",
"https://www.hsk.help/dictionary/%E5%A4%A9%E6%B0%94/107",
"https://www.hsk.help/dictionary/%E5%90%AC/108",
"https://www.hsk.help/dictionary/%E5%90%8C%E5%AD%A6/109",
"https://www.hsk.help/dictionary/%E5%96%82/110",
"https://www.hsk.help/dictionary/%E6%88%91/111",
"https://www.hsk.help/dictionary/%E6%88%91%E4%BB%AC/112",
"https://www.hsk.help/dictionary/%E4%BA%94/113",
"https://www.hsk.help/dictionary/%E4%B8%8B/115",
"https://www.hsk.help/dictionary/%E6%83%B3/120",
"https://www.hsk.help/dictionary/%E5%85%88%E7%94%9F/118",
"https://www.hsk.help/dictionary/%E7%8E%B0%E5%9C%A8/119",
"https://www.hsk.help/dictionary/%E5%B0%8F/121",
"https://www.hsk.help/dictionary/%E5%B0%8F%E5%A7%90/122",
"https://www.hsk.help/dictionary/%E4%B8%8B%E5%8D%88/116",
"https://www.hsk.help/dictionary/%E4%B8%8B%E9%9B%A8/117",
"https://www.hsk.help/dictionary/%E4%BA%9B/123",
"https://www.hsk.help/dictionary/%E5%86%99/124",
"https://www.hsk.help/dictionary/%E8%B0%A2%E8%B0%A2/125",
"https://www.hsk.help/dictionary/%E5%96%9C%E6%AC%A2/114",
"https://www.hsk.help/dictionary/%E6%98%9F%E6%9C%9F/126",
"https://www.hsk.help/dictionary/%E5%AD%A6%E7%94%9F/127",
"https://www.hsk.help/dictionary/%E5%AD%A6%E4%B9%A0/128",
"https://www.hsk.help/dictionary/%E5%AD%A6%E6%A0%A1/129",
"https://www.hsk.help/dictionary/%E4%B8%80/130",
"https://www.hsk.help/dictionary/%E4%B8%80%E7%82%B9%E5%84%BF/135",
"https://www.hsk.help/dictionary/%E8%A1%A3%E6%9C%8D/131",
"https://www.hsk.help/dictionary/%E5%8C%BB%E7%94%9F/132",
"https://www.hsk.help/dictionary/%E5%8C%BB%E9%99%A2/133",
"https://www.hsk.help/dictionary/%E6%A4%85%E5%AD%90/134",
"https://www.hsk.help/dictionary/%E6%9C%89/136",
"https://www.hsk.help/dictionary/%E6%9C%88/137",
"https://www.hsk.help/dictionary/%E5%9C%A8/138",
"https://www.hsk.help/dictionary/%E5%86%8D%E8%A7%81/139",
"https://www.hsk.help/dictionary/%E6%80%8E%E4%B9%88/140",
"https://www.hsk.help/dictionary/%E6%80%8E%E4%B9%88%E6%A0%B7/141",
"https://www.hsk.help/dictionary/%E8%BF%99/142",
"https://www.hsk.help/dictionary/%E4%B8%AD%E5%9B%BD/143",
"https://www.hsk.help/dictionary/%E4%B8%AD%E5%8D%88/144",
"https://www.hsk.help/dictionary/%E4%BD%8F/145",
"https://www.hsk.help/dictionary/%E6%A1%8C%E5%AD%90/146",
"https://www.hsk.help/dictionary/%E5%AD%97/147",
"https://www.hsk.help/dictionary/%E5%81%9A/149",
"https://www.hsk.help/dictionary/%E5%9D%90/150",
"https://www.hsk.help/dictionary/%E6%98%A8%E5%A4%A9/148"
]

function logSubmit(event) {
    var _day = document.getElementById ("dayta").value; //`Form Submitted! Time stamp: ${event.timeStamp}`;

    count += (_day -1) * 10;

    log.textContent = count;
    //console.log ("hi");

    modal.style.display = 'none';
    //showNext();
    event.preventDefault();

    SRLCheck (_day);
  }
  
const form = document.getElementById('dayForm');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);
  

var count = -1;
var itemList = [];

const modal = document.getElementById ('overlay'); 
const doneScreen = document.getElementById ('done');



function SRLCheck (_day) {
    //count = -1;
    console.log (itemList);
    pushTo (0);
    if (_day > 1) {
        pushTo (1);
        if (_day > 7) {
            pushTo (7);
            if (_day > 31) {
                pushTo (31);
            }
        }
    }
    

    console.log (itemList);
    count = -1;
    showNext();
}

function pushTo (_modifier) {
    _modifier = _modifier * 10;
    for (let _i = 0; _i < 10; _i++) {
        itemList.push(count +1 + _i - _modifier);
    }
}

function showAll () {
    
    //document.getElementById('mList').innerHTML += "<iframe src="+ myLinks[0] +"></iframe>";

    myLinks.forEach(element => {
        //document.getElementById('mList').innerHTML += "<h1>"+ element +"</h1>";
        
        document.getElementById('mList').innerHTML += "<iframe src="+ element +"></iframe>";

    });
}

function showPrev () {
    if (count > 0) {
        count--;
        var findLink = document.getElementById('myFrame');
        findLink.src = myLinks[itemList[count]];
        console.log (count);
    }
}

function showNext () {
    count++;
    if (count >= itemList.length) {
        doneScreen.style.display = "flex";
    } else {
        var findLink = document.getElementById('myFrame');
        findLink.src = myLinks[itemList[count]];
        console.log (count);
    }
}