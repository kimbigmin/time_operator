
function showTime() {

    // DOM Setting 
    const beforeTimeHour = document.querySelector('#beforeTimeHour').value;
    const afterTimeHour = document.querySelector('#afterTimeHour').value;
    const beforeTimeMin = parseInt(document.querySelector('#beforeTimeMin').value);
    const afterTimeMin = parseInt(document.querySelector('#afterTimeMin').value); 

    // 시간 계산 
    let beforeSum =(beforeTimeHour*60)+beforeTimeMin;
    let afterSum =(afterTimeHour*60)+afterTimeMin;
    let difference = ((afterSum - beforeSum) / beforeSum)*100;
    let differenceInt = Math.round(difference);

    
    // 결과값 도출  
    if (differenceInt > 0) {
        
        document.querySelector('#showResult').innerHTML = 
        `<p class="result_text">이전 시간보다 약 <span style="color:red;">${differenceInt}% <strong style="color:red;">증가</strong></span> 하였습니다!</p>`

        document.querySelector('#newReset').innerHTML =
        `<button onclick="percentResetBtn()" class="reset">Reset</button>`
    } else if(differenceInt <= 0) {
        document.querySelector('#showResult').innerHTML = 
        `<p class="result_text">이전 시간보다 약 <span style="color:blue;">${differenceInt}% <strong style="color:blue;">감소</strong></span> 하였습니다.</p>`

        document.querySelector('#newReset').innerHTML =
        `<button onclick="percentResetBtn()" class="reset">Reset</button>`
    } else {
        document.querySelector('#showResult').innerHTML = 
        `<p class="result_text" style="color:#F6A000; font-weight:bold; margin-left:3rem;">시간이 입력되지 않았습니다. 시간을 정확히 입력해주세요.</p>`

        document.querySelector('#newReset').innerHTML =
        `<button onclick="percentResetBtn()" class="reset">Reset</button>`
    }
}


function percentResetBtn() {
    
    document.getElementById('beforeTimeHour').value = '';
    document.getElementById('afterTimeHour').value = '';
    document.getElementById('beforeTimeMin').value = '';
    document.getElementById('afterTimeMin').value = '';
    
    document.getElementById('beforeTimeHour').focus();

    const result = document.getElementById('showResult');
    const removeReset = document.getElementById('newReset');

    result.innerHTML = '';
    removeReset.innerHTML = '';
}



const daysHour = ['#monHour', '#tueHour', '#wenHour', '#thuHour', '#friHour', '#satHour', '#sunHour'];

const daysMin = ['#monMin', '#tueMin', '#wenMin', '#thuMin', '#friMin', '#satMin', '#sunMin'];



function avgResetBtn() {

    for(i = 0; i < daysHour.length; i++) {
        document.querySelector(daysHour[i]).value = null;
    }

    for(i = 0; i < daysMin.length; i++) {
        document.querySelector(daysMin[i]).value = null;
    }

    // const result = document.getElementById('showResult');
    // const removeReset = document.getElementById('newReset');

    // result.innerHTML = '';
    // removeReset.innerHTML = '';
    document.getElementById('monHour').focus();
    document.getElementById('avgText').style.visibility = "hidden";
    document.getElementById('avgBtn').style.display= "none";
}   



// ------------ 평균 시간 구하기 part ------------ //

function getAverageTime() {

    const daysHour = ['#monHour', '#tueHour', '#wenHour', '#thuHour', '#friHour', '#satHour', '#sunHour'];
    const daysMin = ['#monMin', '#tueMin', '#wenMin', '#thuMin', '#friMin', '#satMin', '#sunMin'];


    // html input box 시간 값 가져와서 합산
    let sumHours = 0;
    let sumMins = 0;

    for(i = 0; i < daysHour.length; i++) {
        let numHour = parseInt(document.querySelector(daysHour[i]).value);
        
        sumHours += numHour;
    }

    for(i = 0; i < daysMin.length; i++) {
        let numMin = parseInt(document.querySelector(daysMin[i]).value);
        
        sumMins += numMin;
    }


    // 구한 값 시간 계산하가
    const minsToHour = parseInt(sumMins / 60);

    let hourToMin = parseInt((sumHours + minsToHour) * 60);
    let minToMin = (sumMins % 60);

    let ResultToOper = ((hourToMin + minToMin) / 60) / 7;
    const resultHour = parseInt(ResultToOper);
    const resultMin = Math.floor(((ResultToOper - resultHour)* 0.6) * 100);
    

    if(isNaN(resultHour) && isNaN(resultMin)) {    

        document.querySelector('#showResult').innerHTML = `<p class="result_text_avg" id="avgText" style="color:#F6A000; margin-left: 6rem; font-weight:bold;">시간이 입력되지 않았습니다. 시간을 정확히 입력해주세요.</p>`

        document.querySelector('#newReset').innerHTML =`<button onclick="avgResetBtn()" class="reset" id="avgBtn">Reset</button>`

    } else {

        document.querySelector('#showResult').innerHTML = `<p class="result_text_avg" id="avgText">평균 취침 & 기상시간은 <strong>${resultHour}시 ${resultMin}분</strong> 입니다.</p>`

        document.querySelector('#newReset').innerHTML =`<button onclick="avgResetBtn()" class="reset" id="avgBtn">Reset</button>`

    }
}




// 시간 더하기 
function getSumTime() {

    const daysHour = ['#monHour', '#tueHour', '#wenHour', '#thuHour', '#friHour', '#satHour', '#sunHour'];

    const daysMin = ['#monMin', '#tueMin', '#wenMin', '#thuMin', '#friMin', '#satMin', '#sunMin'];


    // html input box 시간 값 가져와서 합산
    let sumHours = 0;
    let sumMins = 0;

    for(i = 0; i < daysHour.length; i++) {
        let numHour = parseInt(document.querySelector(daysHour[i]).value);
        
        sumHours += numHour;
    }

    for(i = 0; i < daysMin.length; i++) {
        let numMin = parseInt(document.querySelector(daysMin[i]).value);
        
        sumMins += numMin;
    }


    // 구한 값 시간 계산하가
    const minsToHour = parseInt(sumMins / 60);

    let resultHour = parseInt(sumHours + minsToHour);
    let resultMin = (sumMins % 60);
    

    if(isNaN(resultHour) && isNaN(resultMin)) {

        document.querySelector('#showResult').innerHTML = `<p class="result_text_avg" id="avgText" style="color:#F6A000; margin-left: 6rem; font-weight:bold;">시간이 입력되지 않았습니다. 시간을 정확히 입력해주세요.</p>`

        document.querySelector('#newReset').innerHTML =`<button onclick="avgResetBtn()" class="reset" id="avgBtn">Reset</button>`

    } else {

        document.querySelector('#showResult').innerHTML = `<p class="result_text_avg" id="avgText">총합 시간은 <strong>${resultHour}시간 ${resultMin}분</strong> 입니다.</p>`

        document.querySelector('#newReset').innerHTML =`<button onclick="avgResetBtn()" class="reset" id="avgBtn">Reset</button>`
        
    }
}




// 메뉴바 만들기
const menubar = document.querySelector("#menubar");

const menuBox = document.createElement('div');
const menuList = document.createElement('ul');
const percentPage = document.createElement('li');
const averagePage = document.createElement('li');
const weeklyPage = document.createElement('li');

const menuStatus = false;


const openMenubar = function() {

    // 메뉴바 박스 DOM
    menuBox.id = 'menuBox';
    menuBox.className = 'menuBox';
    document.body.appendChild(menuBox);

    // 메뉴바 ul DOM   
    menuList.id = 'menuList'
    menuList.className = 'menuList'
    document.querySelector("#menuBox").appendChild(menuList);

    // 메뉴바 li DOM
    percentPage.className = 'menubar-page';
    percentPage.innerHTML = '<a href="./time_operator.html">시간 퍼센트 구하기</a>';
    document.querySelector("#menuList").appendChild(percentPage);

    averagePage.className = 'menubar-page';
    averagePage.innerHTML = '<a href="./avg_operator.html">평균시간 구하기</a>';
    document.querySelector("#menuList").appendChild(averagePage);

    weeklyPage.className = 'menubar-page';
    weeklyPage.innerHTML = '<a href="./week_operator.html">일주일 시간합계 구하기</a>';
    document.querySelector("#menuList").appendChild(weeklyPage);

};

const menubarClose = function() {
    
    menuBox.style.transitionProperty = 'width';
    menuBox.style.transitionDuration = '0.5s';
    menuBox.style.width = '-300px';
    
};


const toggleClick = function() {

    if(menuStatus) {
        menubarClose();
        menuStatus = false;
    } else {
        openMenubar();
        menuStatus = true;
    };

}

menubar.addEventListener('click', toggleClick);