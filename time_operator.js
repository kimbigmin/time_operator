
function showTime() {

    const beforeTimeHour = document.querySelector('#beforeTimeHour').value;
    const afterTimeHour = document.querySelector('#afterTimeHour').value;
    const beforeTimeMin = parseInt(document.querySelector('#beforeTimeMin').value);
    const afterTimeMin = parseInt(document.querySelector('#afterTimeMin').value); 

    
    let beforeSum =(beforeTimeHour*60)+beforeTimeMin;
    let afterSum =(afterTimeHour*60)+afterTimeMin;
    let difference = ((afterSum - beforeSum) / beforeSum)*100;
    let differenceInt = Math.round(difference);


    document.querySelector('#showResult').innerHTML = `<p class="result_text">이전 기준과 현재 기준의 시간 퍼센트 차이는 약 <span>${differenceInt}%</span> 입니다.</p>`

    document.querySelector('#newReset').innerHTML =`<button onclick="resetBtn()" class="reset">Reset</button>`
    
}

function resetBtn() {

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
