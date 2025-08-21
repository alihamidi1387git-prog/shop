import {changeMode , modeHandler , navBar , pageModeIcon , lightIcon , mobilePageModeIcon ,mobileLightIcon ,darkIcon ,mobileDrkIcon } from './funcs.js'
const menuToggleBtn = document.querySelector(".hamburger-menu")
const mobileMenu = document.querySelector(".mobile-menu") 
const mobileCategoryItem = document.querySelectorAll(".mobile-category__item")
const shoppingCardProductList = document.querySelector(".shoppingcard-product__list")
const allPriceLable = document.querySelector(".allPrice")
const mobileCategorySubmenuItem = document.querySelectorAll(".mobile-category__submenu-item")
const allOldPriceLable = document.querySelector(".allOldPrice")
const discountValue = document.querySelector(".discount-value")
const coursesSlider = document.querySelector(".courses-slider")
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
    breakpoints: {
        490: {
          slidesPerView: 2,
        },
        764: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

menuToggleBtn.addEventListener("click" , function()
{
    menuToggleBtn.classList.toggle("hamburger-menu--toggle")
    mobileMenu.classList.toggle("open-menu--toggle")
})
pageModeIcon.addEventListener("click" , changeMode)
mobilePageModeIcon.addEventListener("click" , changeMode) 
window.addEventListener("load" , modeHandler)

mobileCategoryItem.forEach(item =>
  {
      item.addEventListener("click" , (e) =>
          {
              item.classList.toggle("mobile-category__item--active")
          })
  }
)
mobileCategorySubmenuItem.forEach(item => {
  item.addEventListener("click" , (e) =>
      {
      if(e.target.dataset.id == 0)
      {            
          e.preventDefault()    
      }
      else
      {
          e.target.setAttribute("href" , "famouscourses.html?id="+e.target.dataset.id+"")
      }      
  })
})
let db = null

window.addEventListener("load" , e =>
{
    
    let productDb = indexedDB.open("products" , 8)
    productDb.addEventListener("success" , e =>
        {
            db = e.target.result
            getBasketProductData()
        }
        )  
    productDb.addEventListener("upgradeneeded" , e =>
        {
          db = e.target.result
          if(!db.objectStoreNames.contains("info"))
          {
            db.createObjectStore("info" , {
              keyPath:'id'
            })
          }
        }
    )
}
)
let productData;

function getBasketProductData() 
{
  let lx = db.transaction("info" , "readonly")
  let request = lx.objectStore("info")
  productData = request.getAll()
  productData.addEventListener("success" , e =>
    {
      shoppingCardProductList.innerHTML = ""
      basketCourseHandler(productData)
      sumAllPrice(productData);
      sumAllOldPrice(productData)
      setDiscoutValue(productData)
    }
  )

}

function basketCourseHandler(courseData)
{
  courseData.result.forEach(item =>
    {
      if(item.oldPrice == undefined)
        {
          shoppingCardProductList.insertAdjacentHTML(`beforeend` , `<li data-id='${item.id}' class="shoppingcard-product__list-item flex "><div class="course-img__continer flex"><a href="#"><img class="course-img" src="${item.img}" alt="courses image"></a><div class="course-details"><h3>${item.title}</h3><p>${item.master}</p></div></div><div class="course-left-details flex"><div class="course-price"><div class="new-price flex"><p>${item.newPrice}</p><span>تومان</span></div></div><svg class="delete-icon" width="20px" height="20px" viewBox="0 0 1024 1024" fill="#000" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M32 241.6c-11.2 0-20-8.8-20-20s8.8-20 20-20l940 1.6c11.2 0 20 8.8 20 20s-8.8 20-20 20L32 241.6zM186.4 282.4c0-11.2 8.8-20 20-20s20 8.8 20 20v688.8l585.6-6.4V289.6c0-11.2 8.8-20 20-20s20 8.8 20 20v716.8l-666.4 7.2V282.4z" fill="" /><path d="M682.4 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM367.2 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM524.8 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM655.2 213.6v-48.8c0-17.6-14.4-32-32-32H418.4c-18.4 0-32 14.4-32 32.8V208h-40v-42.4c0-40 32.8-72.8 72.8-72.8H624c40 0 72.8 32.8 72.8 72.8v48.8h-41.6z" fill="" /></svg></div></li>`) 
        }
        else
        {
          shoppingCardProductList.insertAdjacentHTML(`beforeend` , `<li data-id='${item.id}' class="shoppingcard-product__list-item flex "><div class="course-img__continer flex"><a href="#"><img class="course-img" src="${item.img}" alt="courses image"></a><div class="course-details"><h3>${item.title}</h3><p>${item.master}</p></div></div><div class="course-left-details flex"><div class="course-price"><p class="old-price"><del>${item.oldPrice}</del></p><div class="new-price flex"><p>${item.newPrice}</p><span>تومان</span></div></div><svg class="delete-icon" width="20px" height="20px" viewBox="0 0 1024 1024" fill="#000" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M32 241.6c-11.2 0-20-8.8-20-20s8.8-20 20-20l940 1.6c11.2 0 20 8.8 20 20s-8.8 20-20 20L32 241.6zM186.4 282.4c0-11.2 8.8-20 20-20s20 8.8 20 20v688.8l585.6-6.4V289.6c0-11.2 8.8-20 20-20s20 8.8 20 20v716.8l-666.4 7.2V282.4z" fill="" /><path d="M682.4 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM367.2 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM524.8 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM655.2 213.6v-48.8c0-17.6-14.4-32-32-32H418.4c-18.4 0-32 14.4-32 32.8V208h-40v-42.4c0-40 32.8-72.8 72.8-72.8H624c40 0 72.8 32.8 72.8 72.8v48.8h-41.6z" fill="" /></svg></div></li>`) 
        }
      }
  )
}

shoppingCardProductList.addEventListener('click' ,e => deleteBasketProductData(e ))

function deleteBasketProductData(e )
{
  let deleteIcon = e.target.closest(".delete-icon")
  let id = e.target.closest("li").dataset.id
  
  if(deleteIcon)
    {
      let lx = db.transaction("info" , "readwrite")
      let request = lx.objectStore("info")
      let productData = request.delete(+id)
      productData.addEventListener("success" , e =>
      {
        getBasketProductData()
        location.reload()
      }
      )
  }
}
let courseAllNewPrice;
let discountCourseOldPrice;
let discoutCourseNewPrice;
let sumPersian;
function sumAllOldPrice(productData)
{
  let realNumbers = productData.result.map(item =>
  {
      return item.oldPrice + ''
  }
  )
  discountCourseOldPrice = realNumbers.filter(item => {
    if(item != 'undefined')
    {
      return item
    }
  })

  let realNewNumbers = productData.result.map(item =>
    {
        if(item.oldPrice != undefined)
        return item.newPrice + ''
    }
    )
    discoutCourseNewPrice = realNewNumbers.filter(item => {
      if(item != 'undefined')
      {
        return item
      }
    })

}
let englishNumber;
function sumAllPrice(allProduct)
{
  
  let items = allProduct.result
  courseAllNewPrice = items.map(item => 
  {
    return item.newPrice + ''
  })
}
function convertNumbers(arrayNumbers , lable)
{
function persianToEnglishNumber(str) {
  return str.replace(/[\u06F0-\u06F9]/g, d =>
      String.fromCharCode(d.charCodeAt(0) - 1728)
  );
}
function englishToPersianNumber(num) {
  return num.toString().replace(/[0-9]/g, d =>
      String.fromCharCode(d.charCodeAt(0) + 1728)
  )
}
let noCommasPrice = arrayNumbers.map(item => {
  
  return item.replace(/,/g, "");
})
let sum = noCommasPrice.reduce((total, price) => {
  let englishNum = persianToEnglishNumber(price);
  return total + Number(englishNum);
}, 300);
sumPersian = englishToPersianNumber(sum);
// تبدیل ارقام فارسی به انگلیسی
englishNumber = sumPersian.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
// تبدیل رشته به عدد
let number = parseInt(englishNumber, 10);
// دوباره فرمت فارسی با جداکننده
let finallyNewPrice = number.toLocaleString('fa-IR');
lable.innerHTML = finallyNewPrice
finallyNewPrice

}
let calcEnglishNumber ;
let calcEnglishNumber2 ;
let finalyCalc;
setTimeout(() => {
  convertNumbers(courseAllNewPrice, allPriceLable)
  convertNumbers(discoutCourseNewPrice, allOldPriceLable)
  calcEnglishNumber = englishNumber
  
  convertNumbers(discountCourseOldPrice , allOldPriceLable)
  calcEnglishNumber2 = englishNumber

  finalyCalc = calcEnglishNumber2 - calcEnglishNumber
  let persianNumber = finalyCalc.toLocaleString('fa-IR');

   allOldPriceLable.innerHTML = persianNumber
}, 800);

function setDiscoutValue(productData)
{
    let sumDiscoutValue = 0
    productData.result.forEach(item => 
    { 
        if(item.discountValue != undefined)
        {
          sumDiscoutValue +=item.discountValue
        }
    }
    )
    discountValue.innerHTML = sumDiscoutValue.toLocaleString('fa-IR') + '٪'
}

let suggestionCourses = [
        {id:42 , img:"images/discount-course-img1.webp" , title:"آموزش HTML رایگان مقدماتی تا پیشرفته" , caption:"آموزش HTML، اولین قدم شروع طراحی وبسایت است. HTML یه زبان نشانه گذاری هست که با کمک اون میتونی تگ هایی بنویسی تا سایت رو روی اون تگ ها پیاده کنی. همونجوری که هیچ موجودی نمیتونه بدون اسکلت زندگی کنه،", master:"علی حمیدی" , participants:"۱۹۲۰۲" , oldPrice:"۲۰۰,۰۰۰" , price:"۵۰,۰۰۰" , discountValue:75 ,status:"تکمیل شده" , duration:"۶۷" , prerequisites:"علاقه به برنامه نویسی"},
        {id:43 , img:"images/discount-course-img2.webp" , title:"آموزش Css رایگان مقدماتی تا پیشرفته" , caption:"حالا وقتشه که با دوره آموزش CSS به اسکلتی که با html ساختی پوست و گوشت بدی تا تبدیل به یه موجود زیبا بشه. توی دوره مقدماتی تا پیشرفته Css یاد میگیری چطوری به المانای خشک و بی جون HTML زیبایی ببخشی.", master:"سایه حمیدی" , participants:"۳۹۲۱" , oldPrice:"۳,۵۰۰,۰۰۰" , price:"۱۲۰,۰۰۰" , discountValue:60 ,status:"تکمیل شده" , duration:"۹۰" , prerequisites:"علاقه به برنامه نویسی"},
        {id:44 , img:"images/discount-course-img3.webp" , title:"شروع فرانت اند وب + مثال های جامع و زنده" , caption:"اگه میخوای طراحی وب رو اصولی شروع کنی و با اصطلاحات  و مقدمات این حوزه آشنا نیستی ! پس جای درستی اومدی ! زود ثبت نام کن و وارد سکوی پرتاب شو", master:"امیرحسین حمیدی" , participants:"۳۸۳۱" , oldPrice:"۳۰۰,۰۰۰" , price:"۸۰,۰۰۰" , discountValue:55 , status:"تکمیل شده" , duration:"۴۵" , prerequisites:"JS"},
        {id:45 , img:"images/discount-course-img4.webp" , title:"آموزش ۲۰ کتابخانه کاربردی ReactJS برای بازارکار" , caption:"‌کتابخانه‌ها باعث افزایش سرعت کدنویسی میشن. در حدی که تو بازار کار هم از کتابخانه های مختلفی برای توسعه پروژه‌ها استفاده میشه. تو این دوره 20 کتابخانه پرکاربرد و پراستفاده ری‌اکت که تو بازار کار برای توسعه پروژه های مختلفی استفاده میشه ", master:"محمدرضا احمدی" , participants:"۸۲۹" , oldPrice:"۱,۳۰۰,۰۰۰" , price:"۸۳۰,۰۰۰" , discountValue:40 , status:"تکمیل شده" , duration:"۴۲" , prerequisites:"HTML , CSS"},
        {id:46 , img:"images/discount-course-img5.webp" , title:"پروژه های تخصصی با جاوا اسکریپت برای بازار کار" , caption:"هیچ فرقی نمیکنه شما با چه کتابخونه یا فریمورکی کار میکنین. تو این دوره یاد میگیری به عنوان یه برنامه نویس فرانت‌اند چطور یه پروژه بزرگ و واقعی رو منیج کنی. حالا این پروژه میتونه با ویو، ری‌اکت یا حتی جاوا اسکریپت خام باشه.", master:"محمد حمیدی" , participants:"۳۵۹" , oldPrice:"۱,۵۶۰,۰۰۰" , price:"۹۹۰,۰۰۰" , discountValue:30 ,status:"تکمیل شده" , duration:"۸" , prerequisites:"HTML , CSS"},
        {id:47 , img:"images/discount-course-img6.webp" , title:"توسعه افزونه مرورگر با جاوااسکریپت" , caption:"ما در این دوره، توسعه افزونه های مرورگر رو با پیاده سازی پروژه های کاربردی با دانش فرانت اند مون از طریق زبان های HTML CSS JS یاد میگریم", master:"سایه حمیدی" , participants:"۳۲۱", oldPrice:"۲,۱۰۰,۰۰۰" , price:"۱,۰۵۰,۰۰۰" , discountValue:55 , status:"تکمیل شده" , duration:"۴۹" , prerequisites:"علاقه به برنامه نویسی"},
        {id:48, img:"images/discount-course-img7.webp" , title:"توسعه کتابخانه با جاوااسکریپت" , caption:"توسعه کتابخانه، نمونه کاری قوی برای رزومه شما است و این دوره آموزشی یادگیری چنین مهارتی رو با نکات کاربردی…", master:"رضا اسعدی" , participants:"۱۲۹" , oldPrice:"۹۰۰,۰۰۰" , price:"۵۶۰,۰۰۰" , discountValue:35 , status:"تکمیل شده" , duration:"۴۵" , prerequisites:"علاقه به برنامه نویسی"},
        {id:49 , img:"images/discount-course-img8.webp" , title:"آموزش Next.js بصورت پروژه محور" , caption:"نکست یه فریمورک مبتنی بر ری‌اکت هست که امروزه تو بازار کار یکی از مهم‌ترین تکنولوژی‌ها برای توسعه دهنده های ری‌اکت به حساب میاد. نکست رو میشه مکمل ری‌اکت دونست.", master:"سایه حمیدی" , participants:"۷۹۳" , oldPrice:"۴,۳۵۰,۰۰۰" , price:"۱,۲۹۰,۰۰۰" , discountValue:80, status:"تکمیل شده" , duration:"۲۷" , prerequisites:"JS"},
        {id:50 , img:"images/discount-course-img9.webp" , title:"آموزش کاربردی Typescript بصورت پروژه محور" , caption:"تایپ اسکریپت یه زبون برنامه نویسیه که توسط مایکروسافت ارائه شده و یسری قابلیت و فیچر های جدید رو با هدف افزایش پرفورمنس و کاهش احتمال خطا به جاوا اسکریپت اضافه کرده.", master:"محسن محمدپور" , participants:"۲۰۳" , oldPrice:"۱,۹۰۰,۰۰۰" , price:"۱,۶۵۰,۰۰۰" , discountValue:20 , status:"تکمیل شده" , duration:"۱۹" , prerequisites:"HTML , CSS"},
]

suggestionCourses.forEach(item => 
{
    coursesSlider.insertAdjacentHTML(`beforeend` ,  `<li class="swiper-slide discount-swiper-slide discount-courses__list-item"><a href='famouscourses.html?=${item.id}'><img class='discount-courses__img' src='${item.img}' alt='famous ourses image'></img></a><div class='discount-courses__content'><div class='discount-courses__caption'><h3>${item.title}</h3><p>${item.caption}</p></div><div class='discount-courses__master flex'><div class='discount-courses__master-name flex'><svg width='25px' height='25px' viewBox='0 0 24 24' fill='rgb(100 116 139 / 1)' xmlns='http://www.w3.org/2000/svg'><path stroke='rgb(100 116 139 / 1)' stroke-width='1px' fill='#fff' fill-rule='evenodd' clip-rule='evenodd' d='M12.0001 1.25C9.37678 1.25 7.25013 3.37665 7.25013 6C7.25013 8.62335 9.37678 10.75 12.0001 10.75C14.6235 10.75 16.7501 8.62335 16.7501 6C16.7501 3.37665 14.6235 1.25 12.0001 1.25ZM8.75013 6C8.75013 4.20507 10.2052 2.75 12.0001 2.75C13.7951 2.75 15.2501 4.20507 15.2501 6C15.2501 7.79493 13.7951 9.25 12.0001 9.25C10.2052 9.25 8.75013 7.79493 8.75013 6Z'></path> <path stroke='rgb(100 116 139 / 1)' stroke-width='1px' fill='#fff' fill-rule='evenodd' clip-rule='evenodd' d='M12.0001 12.25C9.68658 12.25 7.55506 12.7759 5.97558 13.6643C4.41962 14.5396 3.25013 15.8661 3.25013 17.5L3.25007 17.602C3.24894 18.7638 3.24752 20.222 4.52655 21.2635C5.15602 21.7761 6.03661 22.1406 7.22634 22.3815C8.4194 22.6229 9.97436 22.75 12.0001 22.75C14.0259 22.75 15.5809 22.6229 16.7739 22.3815C17.9637 22.1406 18.8443 21.7761 19.4737 21.2635C20.7527 20.222 20.7513 18.7638 20.7502 17.602L20.7501 17.5C20.7501 15.8661 19.5807 14.5396 18.0247 13.6643C16.4452 12.7759 14.3137 12.25 12.0001 12.25ZM4.75013 17.5C4.75013 16.6487 5.37151 15.7251 6.71098 14.9717C8.02693 14.2315 9.89541 13.75 12.0001 13.75C14.1049 13.75 15.9733 14.2315 17.2893 14.9717C18.6288 15.7251 19.2501 16.6487 19.2501 17.5C19.2501 18.8078 19.2098 19.544 18.5265 20.1004C18.156 20.4022 17.5366 20.6967 16.4763 20.9113C15.4194 21.1252 13.9744 21.25 12.0001 21.25C10.0259 21.25 8.58087 21.1252 7.52393 20.9113C6.46366 20.6967 5.84425 20.4022 5.47372 20.1004C4.79045 19.544 4.75013 18.8078 4.75013 17.5Z'></path></svg><span>${item.master}</span>  </div><div class='discount-courses__score flex'><span>۵.۰</span> <svg width='25px' height='25px' viewBox='0 0 24 24' fill='#F59E0B' xmlns='http://www.w3.org/2000/svg'><path fill='#F59E0B' d='M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z' fill='#1C274C'/> </svg></div> </div><hr><div class='discount-courses__buy-details flex'><div class='discount-courses__student-numbers flex'><svg width='25px' height='25px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z' stroke='#1C274C' stroke-width='1.5'/><path d='M6.04779 10.849L6.28497 10.1375H6.28497L6.04779 10.849ZM8.22309 11.5741L7.98592 12.2856H7.98592L8.22309 11.5741ZM9.01682 13.256L8.31681 12.9868H8.31681L9.01682 13.256ZM7.77003 16.4977L8.47004 16.7669H8.47004L7.77003 16.4977ZM17.9522 10.849L17.715 10.1375H17.715L17.9522 10.849ZM15.7769 11.5741L16.0141 12.2856H16.0141L15.7769 11.5741ZM14.9832 13.256L15.6832 12.9868L14.9832 13.256ZM16.23 16.4977L15.53 16.7669L16.23 16.4977ZM10.4242 17.7574L11.0754 18.1295L10.4242 17.7574ZM12 14.9997L12.6512 14.6276C12.5177 14.394 12.2691 14.2497 12 14.2497C11.7309 14.2497 11.4823 14.394 11.3488 14.6276L12 14.9997ZM17.1465 7.8969L16.9894 7.16355L17.1465 7.8969ZM15.249 8.30353L15.4061 9.03688V9.03688L15.249 8.30353ZM8.75102 8.30353L8.90817 7.57018V7.57018L8.75102 8.30353ZM6.85345 7.89691L6.69631 8.63026L6.85345 7.89691ZM13.5758 17.7574L12.9246 18.1295V18.1295L13.5758 17.7574ZM15.0384 8.34826L14.8865 7.61381L14.8865 7.61381L15.0384 8.34826ZM8.96161 8.34826L8.80969 9.08272L8.80969 9.08272L8.96161 8.34826ZM15.2837 11.7666L15.6777 12.4048L15.2837 11.7666ZM14.8182 12.753L15.5613 12.6514V12.6514L14.8182 12.753ZM8.71625 11.7666L8.3223 12.4048H8.3223L8.71625 11.7666ZM9.18177 12.753L9.92485 12.8546V12.8546L9.18177 12.753ZM5.81062 11.5605L7.98592 12.2856L8.46026 10.8626L6.28497 10.1375L5.81062 11.5605ZM8.31681 12.9868L7.07002 16.2284L8.47004 16.7669L9.71683 13.5252L8.31681 12.9868ZM17.715 10.1375L15.5397 10.8626L16.0141 12.2856L18.1894 11.5605L17.715 10.1375ZM14.2832 13.5252L15.53 16.7669L16.93 16.2284L15.6832 12.9868L14.2832 13.5252ZM11.0754 18.1295L12.6512 15.3718L11.3488 14.6276L9.77299 17.3853L11.0754 18.1295ZM16.9894 7.16355L15.0918 7.57017L15.4061 9.03688L17.3037 8.63026L16.9894 7.16355ZM8.90817 7.57018L7.0106 7.16355L6.69631 8.63026L8.59387 9.03688L8.90817 7.57018ZM11.3488 15.3718L12.9246 18.1295L14.227 17.3853L12.6512 14.6276L11.3488 15.3718ZM15.0918 7.57017C14.9853 7.593 14.9356 7.60366 14.8865 7.61381L15.1903 9.08272C15.2458 9.07123 15.3016 9.05928 15.4061 9.03688L15.0918 7.57017ZM8.59387 9.03688C8.6984 9.05928 8.75416 9.07123 8.80969 9.08272L9.11353 7.61381C9.06443 7.60366 9.01468 7.593 8.90817 7.57018L8.59387 9.03688ZM14.8865 7.61381C12.9823 8.00768 11.0177 8.00768 9.11353 7.61381L8.80969 9.08272C10.9143 9.51805 13.0857 9.51805 15.1903 9.08272L14.8865 7.61381ZM9.14506 19.2497C9.94287 19.2497 10.6795 18.8222 11.0754 18.1295L9.77299 17.3853C9.64422 17.6107 9.40459 17.7497 9.14506 17.7497V19.2497ZM15.53 16.7669C15.7122 17.2406 15.3625 17.7497 14.8549 17.7497V19.2497C16.4152 19.2497 17.4901 17.6846 16.93 16.2284L15.53 16.7669ZM15.5397 10.8626C15.3178 10.9366 15.0816 11.01 14.8898 11.1283L15.6777 12.4048C15.6688 12.4102 15.6763 12.4037 15.7342 12.3818C15.795 12.3588 15.877 12.3313 16.0141 12.2856L15.5397 10.8626ZM15.6832 12.9868C15.6313 12.8519 15.6004 12.7711 15.5795 12.7095C15.5596 12.651 15.5599 12.6411 15.5613 12.6514L14.0751 12.8546C14.1057 13.0779 14.1992 13.3069 14.2832 13.5252L15.6832 12.9868ZM14.8898 11.1283C14.3007 11.492 13.9814 12.1687 14.0751 12.8546L15.5613 12.6514C15.5479 12.5534 15.5935 12.4567 15.6777 12.4048L14.8898 11.1283ZM18.25 9.39526C18.25 9.73202 18.0345 10.031 17.715 10.1375L18.1894 11.5605C19.1214 11.2499 19.75 10.3777 19.75 9.39526H18.25ZM7.07002 16.2284C6.50994 17.6846 7.58484 19.2497 9.14506 19.2497V17.7497C8.63751 17.7497 8.28784 17.2406 8.47004 16.7669L7.07002 16.2284ZM7.98592 12.2856C8.12301 12.3313 8.20501 12.3588 8.26583 12.3818C8.32371 12.4037 8.33115 12.4102 8.3223 12.4048L9.1102 11.1283C8.91842 11.01 8.68219 10.9366 8.46026 10.8626L7.98592 12.2856ZM9.71683 13.5252C9.80081 13.3069 9.89432 13.0779 9.92485 12.8546L8.43868 12.6514C8.44009 12.6411 8.4404 12.6509 8.42051 12.7095C8.3996 12.7711 8.36869 12.8519 8.31681 12.9868L9.71683 13.5252ZM8.3223 12.4048C8.40646 12.4567 8.45208 12.5534 8.43868 12.6514L9.92485 12.8546C10.0186 12.1687 9.69929 11.492 9.1102 11.1283L8.3223 12.4048ZM4.25 9.39526C4.25 10.3777 4.87863 11.2499 5.81062 11.5605L6.28497 10.1375C5.96549 10.031 5.75 9.73202 5.75 9.39526H4.25ZM5.75 9.39526C5.75 8.89717 6.20927 8.52589 6.69631 8.63026L7.0106 7.16355C5.58979 6.8591 4.25 7.9422 4.25 9.39526H5.75ZM12.9246 18.1295C13.3205 18.8222 14.0571 19.2497 14.8549 19.2497V17.7497C14.5954 17.7497 14.3558 17.6107 14.227 17.3853L12.9246 18.1295ZM19.75 9.39526C19.75 7.9422 18.4102 6.85909 16.9894 7.16355L17.3037 8.63026C17.7907 8.52589 18.25 8.89717 18.25 9.39526H19.75Z' fill='#1C274C'/>                                        <path d='M19.4537 14.5C21.0372 15.2961 22 16.3475 22 17.5C22 19.9853 17.5228 22 12 22C6.47715 22 2 19.9853 2 17.5C2 16.3475 2.96285 15.2961 4.54631 14.5' stroke='#1C274C' stroke-width='1.5' stroke-linecap='round'/></svg><span>${item.participants}</span></div><div class='discount-courses__price flex'><div class="discount-number flex">${(item.discountValue).toLocaleString('fa-IR')}٪</div><div class="discount-courses__price-details flex"><del>${item.oldPrice}</del><div class="flex"><span>${item.price}</span><img class="toman-icon" src='images/toman_icon.png' alt='toman image'></div></div></div></div></li>`)
}
)