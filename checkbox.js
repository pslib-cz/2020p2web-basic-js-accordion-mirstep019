var ham = document.querySelectorAll(".plus-detail-checkbox");
var card = document.getElementsByClassName("detail-vypujcky-container");

for (let i = 0; i < ham.length; i++) {
    let input = ham[i].querySelector("input");
    input.onclick = () => {
        if (input.checked) {
            card[i].style.height = card[i].scrollHeight+"px";
        }
        else{
            card[i].style.height = "0px";
        }
    }
}
