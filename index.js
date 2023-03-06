const wrapper=document.querySelector(".WrapperSlider");


const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
  let choosen=products[0];
  const currentProductImg = document.querySelector(".productimg");

  const currentProductTitle = document.querySelector(".producttitle");
  const currentProductPrice = document.querySelector(".productprice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");
  const menuitems=document.querySelectorAll(".menuItem");
menuitems.forEach((items,index)=>{
items.addEventListener('click',()=>{
   wrapper.style.transform=`translateX(${-100*index}vw)`;
   choosen=products[index];
   currentProductTitle.textContent=choosen.title;
   currentProductPrice.textContent="$"+choosen.price;
   currentProductImg.src=choosen.colors[0].img;
 // chage text of cuurent
 currentProductColors.forEach((color,index)=>{
    color.style.backgroundColor=choosen.colors[index].code;
    
 })
})
})
currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
currentProductImg.src=choosen.colors[index].img;
    })
})
currentProductSizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor="white";
      size.style.color="black";
    })
    size.style.backgroundColor="black";
    size.style.color="white";
  })
})
const productbutton=document.querySelector(".paybutton");
const close=document.querySelector(".close");
const payment=document.querySelector(".payment");
console.log(payment);
productbutton.addEventListener("click",()=>{
  payment.style.display="flex";
})
close.addEventListener("click",()=>{
  payment.style.display="none";
})