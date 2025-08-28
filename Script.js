
// ! Love Matter

const loveIcon = document.querySelectorAll('.love-count');
let a = 0;
for (const i of loveIcon) {
    i.addEventListener('click', () => {
        document.getElementById("love-number").innerText = ++a;
    })
}

//! Call Matter

const callCount = document.querySelectorAll(".call-count");
let b = 100;
for (const y of callCount) {
    y.addEventListener("click", () => {
        b = b - 20;
        console.log(b);
        if (b >= 0) {
            alert(`📞 Calling Now ... Service Name: , Service Number: ${b} `)
            document.getElementById("star-number").innerText = b;
        } else {
            alert("❌ You haven't sufficient star, minimum you have to need 20 star for call !");
        }

    })
}

//! Copy Button Matter
//number-copy