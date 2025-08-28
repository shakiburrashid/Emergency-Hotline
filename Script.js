
// ! Love Section
{
const loveIcon = document.querySelectorAll('.love-count');
let a = 0;
for (const i of loveIcon) {
    i.addEventListener('click', () => {
        document.getElementById("love-number").innerText = ++a;
    })
}



}


//! Call Section
{
const serviceName = document.querySelectorAll('.service-name');
const listofservice = [];
for (const serviceNameList of serviceName) {
    listofservice.push(serviceNameList.innerHTML)
}

const numberCopy = document.querySelectorAll('.number-copy');
const listofnumber = [];
for (const numberlist of numberCopy) {
    listofnumber.push(numberlist.innerHTML)
}

let b = 100;
function callOne() {
    b = b - 20;
    if (b >= 0) {
        alert(`📞 Calling Now ... Service Name: ${listofservice[0]} , Service Number: ${listofnumber[0]} `)
        document.getElementById("star-number").innerText = b;
    } else {
        alert("❌ You haven't sufficient star, minimum you have to need 20 star for call !");
    }
}

function callTwo() {
    b = b - 20;
    if (b >= 0) {
        alert(`📞 Calling Now ... Service Name: ${listofservice[1]} , Service Number: ${listofnumber[1]} `)
        document.getElementById("star-number").innerText = b;
    } else {
        alert("❌ You haven't sufficient star, minimum you have to need 20 star for call !");
    }
}
function callThree() {
    b = b - 20;
    if (b >= 0) {
        alert(`📞 Calling Now... Service Name: ${listofservice[2]} , Service Number: ${listofnumber[2]} `)
        document.getElementById("star-number").innerText = b;
    } else {
        alert("❌ You haven't sufficient star, minimum you have to need 20 star for call !");
    }
}
function callFour() {
    b = b - 20;
    if (b >= 0) {
        alert(`📞 Calling Now ... Service Name: ${listofservice[3]} , Service Number: ${listofnumber[3]} `)
        document.getElementById("star-number").innerText = b;
    } else {
        alert("❌ You haven't sufficient star, minimum you have to need 20 star for call !");
    }
}
function callFive() {
    b = b - 20;
    if (b >= 0) {
        alert(`📞 Calling Now ... Service Name: ${listofservice[4]} , Service Number: ${listofnumber[4]} `)
        document.getElementById("star-number").innerText = b;
    } else {
        alert("❌ You haven't sufficient star, minimum you have to need 20 star for call !");
    }
}
function callSix() {
    b = b - 20;
    if (b >= 0) {
        alert(`📞 Calling Now ... Service Name: ${listofservice[5]} , Service Number: ${listofnumber[5]} `)
        document.getElementById("star-number").innerText = b;
    } else {
        alert("❌ You haven't sufficient star, minimum you have to need 20 star for call !");
    }
}
function callSeven() {
    b = b - 20;
    if (b >= 0) {
        alert(`📞 Calling Now ... Service Name: ${listofservice[6]} , Service Number: ${listofnumber[6]} `)
        document.getElementById("star-number").innerText = b;
    } else {
        alert("❌ You haven't sufficient star, minimum you have to need 20 star for call !");
    }
}
function callEight() {
    b = b - 20;
    if (b >= 0) {
        alert(`📞 Calling Now ... Service Name: ${listofservice[7]} , Service Number: ${listofnumber[7]} `)
        document.getElementById("star-number").innerText = b;
    } else {
        alert("❌ You haven't sufficient star, minimum you have to need 20 star for call !");
    }
}
function callNine() {
    b = b - 20;
    if (b >= 0) {
        alert(`📞 Calling Now ... Service Name: ${listofservice[8]} , Service Number: ${listofnumber[8]} `)
        document.getElementById("star-number").innerText = b;
    } else {
        alert("❌ You haven't sufficient star, minimum you have to need 20 star for call !");
    }
}

}


//! Copy Button Matter
//number-copy