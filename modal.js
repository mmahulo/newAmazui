// var decreaseElement=document.querySelector('.add-cart-btn')
var countElement=document.querySelector("#count");
var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var cartBtns = document.querySelectorAll('.Whilist');
var closeBtns = document.querySelectorAll('.close-btn');

//javascript for quick view button
var popup = function(popupClick){
  popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtn, i) => {
  popupBtn.addEventListener("click", () => {
    popup(i);
  });
});

//javascript for close button
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    popupViews.forEach((popupView) => {
      popupView.classList.remove('active');
    });
  });
});

// popup-btn

let count =0;
cartBtns[0].addEventListener("click",()=>{
  countElement.innerText =count;
console.log(count++);
});
cartBtns[1].addEventListener("click",()=>{
  countElement.innerText =count;
console.log(count++);
});
cartBtns[2].addEventListener("click",()=>{
  countElement.innerText =count;
console.log(count++);
});
cartBtns[3].addEventListener("click",()=>{
  countElement.innerText =count;
console.log(count++);
});
cartBtns[4].addEventListener("click",()=>{
  countElement.innerText =count;
console.log(count++);
});






// popupBtns[0].addEventListener("click",()=>{
//   count--;
//   decreaseElement.inntext=count;
// });


