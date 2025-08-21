// /* <!-- 💕 به نام خداند روزی ده رهنمای 💕 -->
// <!-- 💕 Thanks For Merciful God 💕 -->
// <!-- 💕 كل ما أملكه يأتي من الله 💕 --> */
import {changeMode , modeHandler , navBar , pageModeIcon , lightIcon , mobilePageModeIcon ,mobileLightIcon ,darkIcon ,mobileDrkIcon} from "./funcs.js"
const loaderContainer = document.querySelector(".loader-container")
const body = document.body
const menuToggleBtn = document.querySelector(".hamburger-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const cover = document.querySelector(".cover")
const famousCoursesItem = document.querySelectorAll(".famous-courses__item")
const famousCoursesList = document.querySelector(".famous-courses__list")
const famousCoursesCategoryItem = document.querySelectorAll(".famous-courses__item")
const categoryLink = document.querySelectorAll(".category a")
const categoryItem = document.querySelectorAll(".category-item")
const articlesList = document.querySelector(".articles__list")
const mobileCategoryItem = document.querySelectorAll(".mobile-category__item")
const mobileCategorySubmenuItem = document.querySelectorAll(".mobile-category__submenu-item")
const discountCoursesList = document.querySelector(".discount-courses__list")

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView:1,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
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
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });
let Swiper2 = new Swiper(".message-mySwiper", {
    effect:'cards',
    grabCursor: true,
    autoplay: {
        delay: 2500,
         disableOnInteraction: false,
      },
      allowTouchMove: false,
      on: {
        slideChange: function () {
          let current = this.activeIndex;
          let total = this.slides.length;

          if (current === total - 2) {
            this.slideTo(0);
          }
        }
      }
});
let swiper3 = new Swiper(".mySwiper", {
    freeMode:true,
    grabCursor: true,
    spaceBetween:30,
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
  });
pageModeIcon.addEventListener("click" , changeMode)
mobilePageModeIcon.addEventListener("click" , changeMode)
window.addEventListener("load" , modeHandler)
//
mobileCategoryItem.forEach(item =>
    {
        item.addEventListener("click" , (e) =>
            {
                item.classList.toggle("mobile-category__item--active")
            })
    }
)
const typingText = document.getElementById('typing-text');
const texts = [
    "آکادمی برنامه نویسی متالی لرن",
    "برترین دوره های برنامه نویسی",
    "مجرب ترین اساتید برنامه نویسی"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100; // سرعت تایپ (کمتر = سریعتر)
let deleteSpeed = 50;  // سرعت پاک کردن (کمتر = سریعتر)
let pauseBetween = 1500; // مکث بین متن‌ها
function typeEffect() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        // حالت پاک‌کردن
        typingText.innerHTML = currentText.substring(0, charIndex - 1) + '<span class="cursor"></span>';
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeEffect, typingSpeed);
        } else {
            setTimeout(typeEffect, deleteSpeed);
        }
    } else {
        // حالت تایپ کردن
        typingText.innerHTML = currentText.substring(0, charIndex + 1) + '<span class="cursor"></span>';
        charIndex++;
        
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, pauseBetween);
        } else {
            setTimeout(typeEffect, typingSpeed);
        }
    }
}
typeEffect()
function animateCounters() {
    const counterElements = document.querySelectorAll('.header-details__item h2');
    const speed = 3000; // مدت زمان کل انیمیشن (میلی‌ثانیه)
    let started = false;
    if (started) return;
    started = true;
    // تابع تبدیل اعداد فارسی به انگلیسی
    const toEnglishNum = (num) => {
        return num.replace(/[^0-9۰-۹]/g, '').replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    };
    // محاسبه زمان برای هر شمارنده بر اساس نسبت مقدار نهایی
    const targets = Array.from(counterElements).map(counter => {
        const originalText = counter.innerText;
        const target = +toEnglishNum(originalText);
        return { counter, target, originalText };
    }).filter(item => !isNaN(item.target));
    if (targets.length === 0) return;
    const maxTarget = Math.max(...targets.map(item => item.target));
    const startTime = performance.now();
    const updateCounters = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / speed, 1); // پیشرفت از 0 تا 1
        targets.forEach(({ counter, target }) => {
            const currentValue = Math.floor(progress * target);
            counter.innerText = new Intl.NumberFormat('fa-IR').format(currentValue);
        });
        if (progress < 1) {
            requestAnimationFrame(updateCounters);
        } else {
            // اطمینان از رسیدن به مقادیر دقیق نهایی
            targets.forEach(({ counter, target }) => {
                counter.innerText = new Intl.NumberFormat('fa-IR').format(target);
            });
        }
    };
    requestAnimationFrame(updateCounters);
}
// ایجاد Intersection Observer برای تشخیص نمایش المان‌ها
function setupCounterObserver() {
    const observerOptions = {
        root: null, // مشاهده نسبت به viewport
        rootMargin: '0px', // حاشیه اضافی ندارد
        threshold: 0.5 // وقتی 50% المان دیده شد
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target); // دیگر نیاز به مشاهده نیست
            }
        });
    }, observerOptions);
    // مشاهده تمام المان‌های شمارنده
    document.querySelectorAll('.header-details__item h2').forEach(counter => {
        observer.observe(counter);
    });
}
// شروع پس از لود صفحه
window.addEventListener('load', setupCounterObserver);
// تاگل همبرگر منو
menuToggleBtn.addEventListener("click" , function()
{
    menuToggleBtn.classList.toggle("hamburger-menu--toggle")
    mobileMenu.classList.toggle("open-menu--toggle")
})
// کد های بخش پرطرفدار ترین دوره ها
famousCoursesItem.forEach(function(item)
{
    item.addEventListener("click" , function(e)
    {
        document.querySelector(".famous-courses__item--active").classList.remove("famous-courses__item--active")
        e.target.classList.add("famous-courses__item--active")
    })
})
let famousCoursesListItems = [
    {id:1 , category:"front-end" , img:"images/famous-course-img2.webp" , title:"آموزش انیمیشن سازی برای فرانت‌اند با GSAP و Three.js" , caption:"دوره Three.js سبزلرن به شما یاد می‌دهد چطور گرافیک‌های سه‌بعدی جذاب با استفاده از این کتابخانه بسازید. این دوره به شما کمک می‌کند به سادگی انیمیشن‌ها و طراحی‌های تعاملی ایجاد کنید." , master:"علی حمیدی" , participants:"۲۵۴" , price:"۱,۴۰۰,۰۰۰"},
    {id:2 , category:"hack-security" , img:"images/famous-course-img14.webp" , title:"آموزش جاوااسکریپت با گرایش امنیت | جاوااسکریپت سیاه" , caption:"جاوااسکریپت همواره در لیست محبوب ترین زبان های برنامه نویسی برای هکرها و امنیت کارهاست ! و من در این دوره جذاب قصد دارم که آموزش جاوااسکریپت رو از صفر با دیدگاه یک هکر. برای شما دوستان عزیز ارائه بدم ! اگر اماده اشنایی با نیمه تاریک" , master:"معین حمیدی" , participants:"۳۷۸۵۳" , price:"۲۰۰,۰۰۰"},
    {id:3 , category:"back-end" , img:"images/famous-course-img8.webp" , title:"آموزش جنگو به صورت پروژه محور" , caption:"از ویژگی های مهم دوره آموزش جنگو میتونیم به توضیح کامل مفاهیم پایه و ساختاری، کامل بودن و توجه به جزئیات، بررسی روش های مختلف حل مسئله و انتخاب بهترین روش ممکن، رعایت اصول کدنویسی، توجه به داکیومنت خوانی" , master:"محمد احمدی" , participants:"۱۱۴۰" , price:"۴,۳۰۰,۰۰۰"},
    {id:4 , category:"front-end" , img:"images/famous-course-img3.webp" , title:"نمایش نقشه‌های تعاملی با Leaflet.js" , caption:"دوره Leaflet.JS به شما یاد می‌دهد چگونه نقشه‌های تعاملی سبک و جذاب بسازید. این دوره پروژه‌محور است و از مبتدی تا پیشرفته، شما را با تمامی ویژگی‌های این کتابخانه کاربردی آشنا می‌کند" , master:"علی حمیدی" , participants:"۱۳۶" , price:"۹۰۰,۰۰۰"},
    {id:5 , category:"soft-skill" , img:"images/famous-course-img18.webp" , title:"تکنیک های قرارداد نویسی برای برنامه نویسان" , caption:"دوره تکنیک‌های قرارداد نویسی سبزلرن، مهارت‌های تنظیم قراردادهای حرفه‌ای را به برنامه‌نویسان و فریلنسرها آموزش می‌دهد تا شرایط همکاری را به‌طور شفاف و حرفه‌ای مشخص کنند." , master:"سایه حمیدی" , participants:"۱۶۸" , price:"۸۰۰,۰۰۰"},
    {id:6 , category:"python" , img:"images/famous-course-img22.webp" , title:"Data Visualization با پایتون" , caption:"ما تو دنیایی زندگی میکنیم که همه چیز به سمت سریع تر شدن حرکت میکنه. برای ذهن انسان درک اشکال خیلی راحت تر از اعداد و ارقام هست چون ذهن برای درک اعداد به پردازش بیشتری نسبت به اشکال نیاز داره." , master:"محسن رضایی" , participants:"۵۲۳" , price:"۸۰۰,۰۰۰"},
    {id:7 , category:"back-end" , img:"images/famous-course-img9.webp" , title:"ساخت ربات تلگرام با NodeJS" , caption:"دوره ربات تلگرام با Nodejs یه فرصت فوق‌العاده برای یادگیری نحوه‌ی ساخت ربات‌های تلگرامی با استفاده از یکی از قدرتمندترین فریم‌ورک‌های جاوااسکریپت، یعنی Node.js هست." , master:"زهرا حمیدی" , participants:"۶۹۳" , price:"۱,۴۵۰,۰۰۰"},
    {id:8 , category:"front-end" , img:"images/famous-course-img4.webp" , title:"پیاده سازی داشبورد های حرفه ای با CSS و JS" , caption:"این دوره فرصتی فوق‌العاده برای ارتقاء مهارت‌های فرانت اند شماست. با یادگیری از جدیدترین تکنیک‌ها، انیمیشن‌ها ، ابزارهای پیشرفته و کتابخونه ها، به دنیای داشبوردهای شگفت‌آور با HTML، CSS و JavaScript" , master:"امیرحسین حمیدی" , participants:"۵۶۷" , price:"۱,۸۰۰,۰۰۰"},
    {id:9, category:"front-end" , img:"images/famous-course-img5.webp" , title:"آموزش جامع و پروژه محور Tailwind Css + دیزاین فروشگاه قهوه" , caption:"tailwind css یک فریمورک Utility First هست، این فریمورک متشکل از یکسری کلاس های آماده ای هست که شما برای پیاده سازی هرگونه دیزاینی میتونید ازش بهره ببرید. توجه کنید که tailwind css هیچ کامپوننت اماده ای در خود ندارد." , master:"رضا حسینی" , participants:"۲۶۵۸" , price:"۱,۲۰۰,۰۰۰"},
    {id:10 , category:"soft-skill" , img:"images/famous-course-img21.webp" , title:"تجربیات طلایی من در کار تیمی" , caption:"در ساده ترین حالت شما اگه تو یک شرکت برنامه نویسی استخدام بشین، وارد تیم اون شرکت میشین و باید مهارت هایی رو در زمینه کار تیمی داشته باشین تا دچار یسری اذیت‌ها و مشکلات نشین." , master:"علی حمیدی" , participants:"۴۳۰" , price:"۵۰۰,۰۰۰"},
    {id:11 , category:"system" , img:"images/famous-course-img16.webp" , title:"آموزش جامع لینوکس برای برنامه نویسان" , caption:"لینوکس یک سیستم‌عامل قدرتمند، امن و متن‌باز است که در سرورها، توسعه نرم‌افزار، امنیت سایبری و سرویس‌های ابری به‌طور گسترده‌ای کاربرد دارد. بنابراین همه برنامه‌نویسان و کسانی‌که می‌خواهند در حوزه IT سرعت پیشرفت خود را افزایش دهند" , master:"مهدی حمیدی" , participants:"۱۵۱" , price:"۲,۱۴۰,۰۰۰"},
    {id:12 , category:"back-end" , img:"images/famous-course-img10.webp" , title:"آموزش ساخت ربات تلگرام با PHP" , caption:"توی دوره فوق‌العاده جذاب و کاربردی ساخت ربات تلگرام با php، به دنیای عجیب و جذاب ربات نویسی به طرز کاملا متفاوتی وارد میشین؛ این دوره با ارائه سرفصل‌های جذاب و پروژه‌های عملی، منتظر شماست!" , master:"الناز حمیدی" , participants:"۵۳۱" , price:"۱,۱۰۰,۰۰۰"},
    {id:13 , category:"python" , img:"images/famous-course-img23.webp" , title:"بهینه نویسی کد ها در پایتون" , caption:"همه میدونیم که زبان برنامه نویسی پایتون یه زبان خیلی جذاب، راحت و همینطور کاربردیه.  قبل از اینکه بخواین این دوره رو ببینید اگر دوره آموزش پایتون رو ندیدین حتما دوره رو ببینید که خیلی خیلی بهتون کمک خواهد کرد " , master:"علی حمیدی" , participants:"۹۹۹" , price:"۷۰۰,۰۰۰"},
    {id:14 , category:"hack-security" , img:"images/famous-course-img15.webp" , title:"آموزش پایتون با گرایش امنیت | پایتون سیاه" , caption:"زبان برنامه نویسی پایتون بخاطر سادگی. قدرت. و جامعه اماری بالایی که داره تونسته جز محبوب ترین زبان های برنامه نویسی هکرها قرار بگیره.و تا به امروز ابزار های قدرتمندی در زمینه هک و امنیت با پایتون توسعه داده شده" , master:"مهدی رضایی" , participants:"۱۷۹۰" , price:"۱,۱۵۰,۰۰۰"},
    {id:15 ,category:"front-end" , img:"images/famous-course-img7.webp" , title:"آموزش جاوا اسکریپت مقدماتی تا پیشرفته + مینی پروژه" , caption:"آموزش جاوا اسکریپت برای تمامی افرادی ک قصد ورود به زبان برنامه نویسی دارند مناسب می باشد . خصوصا برای علاقه مندان به حوزه فرانت همان طور که می دانید جاوا اسکریپت یکی از زبان های برنامه نویسی محبوب و پر طرفدار است" , master:"علی حمیدی" , participants:"۹۲۳" , price:"۳,۲۰۰,۰۰۰"},
    {id:16 , category:"python" , img:"images/famous-course-img24.webp" , title:"پروژه های کاربردی با پایتون" , caption:"قبل از اینکه بخواین این دوره رو ببینید اگر دوره آموزش پایتون رو ندیدین حتما دوره رو ببینید که خیلی خیلی بهتون کمک خواهد کرد یکی از مهم ترین کار هایی که باید برا یادگیری و تسلط بیشتر به یک زبان برنامه نویسی انجام بشه،" , master:"محسن رضایی" , participants:"۱۷۸۹" , price:"۹۰۰,۰۰۰"},
    {id:17 , category:"back-end" , img:"images/famous-course-img11.webp" , title:"دوره پروژه محور لایووایر (Livewire Master)" , caption:"دوره لایووایر مستر (Livewire Master) یک دوره‌ی تمام عیار برای فول‌استک فریمورکِ لایووایر است که هدف آن آموزش قدم به قدم، عمیق و مفهومی (Conceptional) تکنولوژی لایووایر می‌باشد." , master:"سایه حمیدی" , participants:"۹۳" , price:"۹۰۰,۰۰۰"},
    {id:18 ,category:"front-end" , img:"images/famous-course-img6.webp" , title:"آموزش حرفه ای طراحی قالب با Html Css FlexBox از صفر" , caption:"بعد از یادگیری Html,Css  افراد با یک چالش بزرگی رو به رو میشن، اونم اینه که نمیتونن توسط دانشی که یادگرفتن یک طرحی رو از صفر به کد تبدیل کنن و وبسایتی رو پیاده سازی کنن، توی این دوره به شما از صفر اصول طراحی قالب " , master:"علی حمیدی" , participants:"۲۹۸۱" , price:"۱,۵۰۰,۰۰۰"},
    {id:19 , category:"soft-skill" , img:"images/famous-course-img20.webp" , title:"تکنیک های قیمت گذاری پروژه های فریلنسری" , caption:"تو این دوره ‌5 پروژه فریلنسری از سایت های مختلف رو همراه با فیچرهایی که دارن و شرایط پروژه به طور کامل آنالیز و تعیین قیمت میکنیم تا بعد از گذروندن دوره هر پروژه‌ای که تو حوزه فریلنسری گرفتین رو به راحتی بتونین تعیین قیمت کرده" , master:"محمد حمیدی" , participants:"۸۱۲" , price:"۳۷۰,۰۰۰"},
    {id:20 , category:"python" , img:"images/famous-course-img26.webp" , title:"آموزش پایتون با گرایش امنیت | پایتون سیاه" , caption:"زبان برنامه نویسی پایتون بخاطر سادگی. قدرت. و جامعه اماری بالایی که داره تونسته جز محبوب ترین زبان های برنامه نویسی هکرها قرار بگیره.و تا به امروز ابزار های قدرتمندی در زمینه هک و امنیت با پایتون توسعه داده شده" , master:"الناز حمیدی" , participants:"۴۸۵۹" , price:"۱,۹۰۰,۰۰۰"},
    {id:21 , category:"python" , img:"images/famous-course-img25.webp" , title:"آموزش پایتون مقدماتی تا پیشرفته" , caption:"حیف نیست محبوب ترین زبان برنامه نویسی دنیا رو  ناقص و بی هدف یادبگیری؟ آموزش پایتون از زیر صفر و پایه ترین مبحث شروع میشه تا تخصصی ترین و پیشرفته ترین مباحث، هر قسمت کلی پروژه و تمرین حل می کنیم، برات تکلیف مشخص می کنیم" , master:"سایه حمیدی" , participants:"۴۳۹۰" , price:"۳,۲۰۰,۰۰۰"},
    {id:22 , category:"soft-skill" , img:"images/famous-course-img19.webp" , title:"مستر فریلنس - هنر همکاری موفق با کارفرماها" , caption:"موفق بودن یک وکیل به تعداد بالای پرونده هاش نیست. بلکه به تعداد کیفیت پرونده هاییه که حل کرده. یک برنامه نویس هم برای رشد و ترقی نیاز به هزار کارفرما نداره. بلکه نیاز به چند کارفرمای با کیفیت داره !" , master:"علی حمیدی" , participants:"۲۸۰۸" , price:"۹,۱۰۰,۰۰۰"},
    {id:23 , category:"back-end" , img:"images/famous-course-img12.webp" , title:"آموزش پروژه محور فریمورک Fastify" , caption:"Fastify یه فریمورک وب سریع و کم‌ حجم برای ساخت برنامه‌های تحت وب با Node.js هست.Fastify یکی از فریم‌ورک‌های جدید در صنعت توسعه وب هست که با ویژگی‌های قدرتمندش تونسته محوبیت خوبی رو بدست بیاره!" , master:"علی حمیدی" , participants:"۵۸۵" , price:"۹۰۰,۰۰۰"},
    {id:24 , category:"system" , img:"images/famous-course-img17.webp" , title:"آموزش Docker از صفر مطلق!" , caption:"داکر یک پلتفرم متن باز برای طراحی؛ انتقال؛ استقرار و اجرای نرم افزار ها تحت مفهومی به نام Container می‌باشد، در این دوره به صورت تخصصی مفاهیم و مباحث داکر را فرا خواهیم گرفت.", master:"احسان حمیدی" , participants:"۲۵۶" , price:"۸۰۰,۰۰۰"},
    {id:25 , category:"back-end" , img:"images/famous-course-img13.webp" , title:"Api نویسی با Nodejs" , caption:"شما بعد از گذروندن این دوره میتونین واسه پروژه هایی که تو زمینه فرانت‌اند توسعه میدین، هر Api که نیاز بود رو بنویسین و بدون این که نیازی به برنامه نویس بک‌اند داشته باشین، کلی نمونه کار واقعی با لاجیک و عملکرد کامل تو رزومتون داشته باشین." , master:"محسن دهقان" , participants:"۲۵۳" , price:"۱,۱۵۰,۰۰۰"},
]
famousCoursesCategoryItem.forEach((item) =>
{
    item.addEventListener("click" , (e) =>
    {
        famousCoursesItemHandler(e.target.dataset.name)
    })    
})
function famousCoursesItemHandler(categoryName="all")
{
    let famousCoursesItem = famousCoursesListItems.filter(function(item)
    {
        return item.category == categoryName
    })     
    famousCoursesList.innerHTML = ''
    if(categoryName == "all")
    {
        famousCoursesListItems.forEach((item) =>
        {
            famousCoursesList.insertAdjacentHTML("afterbegin" , "<li class='famous-courses__list-item swiper-slide'><a href='famouscourses.html?="+item.id+"'><img class='famous-courses__img' src='"+item.img+"' alt='famous ourses image'></img></a><div class='famous-courses__content'><div class='famous-courses__caption'><h3>"+item.title+"</h3><p>"+item.caption+"</p></div><div class='famous-courses__master flex'><div class='famous-courses__master-name flex'><svg width='25px' height='25px' viewBox='0 0 24 24' fill='rgb(100 116 139 / 1)' xmlns='http://www.w3.org/2000/svg'><path stroke='rgb(100 116 139 / 1)' stroke-width='1px' fill='#fff' fill-rule='evenodd' clip-rule='evenodd' d='M12.0001 1.25C9.37678 1.25 7.25013 3.37665 7.25013 6C7.25013 8.62335 9.37678 10.75 12.0001 10.75C14.6235 10.75 16.7501 8.62335 16.7501 6C16.7501 3.37665 14.6235 1.25 12.0001 1.25ZM8.75013 6C8.75013 4.20507 10.2052 2.75 12.0001 2.75C13.7951 2.75 15.2501 4.20507 15.2501 6C15.2501 7.79493 13.7951 9.25 12.0001 9.25C10.2052 9.25 8.75013 7.79493 8.75013 6Z'></path><path stroke='rgb(100 116 139 / 1)' stroke-width='1px' fill='#fff' fill-rule='evenodd' clip-rule='evenodd' d='M12.0001 12.25C9.68658 12.25 7.55506 12.7759 5.97558 13.6643C4.41962 14.5396 3.25013 15.8661 3.25013 17.5L3.25007 17.602C3.24894 18.7638 3.24752 20.222 4.52655 21.2635C5.15602 21.7761 6.03661 22.1406 7.22634 22.3815C8.4194 22.6229 9.97436 22.75 12.0001 22.75C14.0259 22.75 15.5809 22.6229 16.7739 22.3815C17.9637 22.1406 18.8443 21.7761 19.4737 21.2635C20.7527 20.222 20.7513 18.7638 20.7502 17.602L20.7501 17.5C20.7501 15.8661 19.5807 14.5396 18.0247 13.6643C16.4452 12.7759 14.3137 12.25 12.0001 12.25ZM4.75013 17.5C4.75013 16.6487 5.37151 15.7251 6.71098 14.9717C8.02693 14.2315 9.89541 13.75 12.0001 13.75C14.1049 13.75 15.9733 14.2315 17.2893 14.9717C18.6288 15.7251 19.2501 16.6487 19.2501 17.5C19.2501 18.8078 19.2098 19.544 18.5265 20.1004C18.156 20.4022 17.5366 20.6967 16.4763 20.9113C15.4194 21.1252 13.9744 21.25 12.0001 21.25C10.0259 21.25 8.58087 21.1252 7.52393 20.9113C6.46366 20.6967 5.84425 20.4022 5.47372 20.1004C4.79045 19.544 4.75013 18.8078 4.75013 17.5Z'></path></svg><span>"+item.master+"</span></div><div class='famous-courses__score flex'><span>۵.۰</span><?xml version='1.0' encoding='utf-8'?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg width='25px' height='25px' viewBox='0 0 24 24' fill='#F59E0B' xmlns='http://www.w3.org/2000/svg'><path fill='#F59E0B' d='M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z' fill='#1C274C'/></svg></div></div><hr><div class='famous-courses__buy-details flex'><div class='famous-courses__student-numbers flex'><?xml version='1.0' encoding='utf-8'?><svg width='25px' height='25px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z' stroke='#1C274C' stroke-width='1.5'/><path d='M6.04779 10.849L6.28497 10.1375H6.28497L6.04779 10.849ZM8.22309 11.5741L7.98592 12.2856H7.98592L8.22309 11.5741ZM9.01682 13.256L8.31681 12.9868H8.31681L9.01682 13.256ZM7.77003 16.4977L8.47004 16.7669H8.47004L7.77003 16.4977ZM17.9522 10.849L17.715 10.1375H17.715L17.9522 10.849ZM15.7769 11.5741L16.0141 12.2856H16.0141L15.7769 11.5741ZM14.9832 13.256L15.6832 12.9868L14.9832 13.256ZM16.23 16.4977L15.53 16.7669L16.23 16.4977ZM10.4242 17.7574L11.0754 18.1295L10.4242 17.7574ZM12 14.9997L12.6512 14.6276C12.5177 14.394 12.2691 14.2497 12 14.2497C11.7309 14.2497 11.4823 14.394 11.3488 14.6276L12 14.9997ZM17.1465 7.8969L16.9894 7.16355L17.1465 7.8969ZM15.249 8.30353L15.4061 9.03688V9.03688L15.249 8.30353ZM8.75102 8.30353L8.90817 7.57018V7.57018L8.75102 8.30353ZM6.85345 7.89691L6.69631 8.63026L6.85345 7.89691ZM13.5758 17.7574L12.9246 18.1295V18.1295L13.5758 17.7574ZM15.0384 8.34826L14.8865 7.61381L14.8865 7.61381L15.0384 8.34826ZM8.96161 8.34826L8.80969 9.08272L8.80969 9.08272L8.96161 8.34826ZM15.2837 11.7666L15.6777 12.4048L15.2837 11.7666ZM14.8182 12.753L15.5613 12.6514V12.6514L14.8182 12.753ZM8.71625 11.7666L8.3223 12.4048H8.3223L8.71625 11.7666ZM9.18177 12.753L9.92485 12.8546V12.8546L9.18177 12.753ZM5.81062 11.5605L7.98592 12.2856L8.46026 10.8626L6.28497 10.1375L5.81062 11.5605ZM8.31681 12.9868L7.07002 16.2284L8.47004 16.7669L9.71683 13.5252L8.31681 12.9868ZM17.715 10.1375L15.5397 10.8626L16.0141 12.2856L18.1894 11.5605L17.715 10.1375ZM14.2832 13.5252L15.53 16.7669L16.93 16.2284L15.6832 12.9868L14.2832 13.5252ZM11.0754 18.1295L12.6512 15.3718L11.3488 14.6276L9.77299 17.3853L11.0754 18.1295ZM16.9894 7.16355L15.0918 7.57017L15.4061 9.03688L17.3037 8.63026L16.9894 7.16355ZM8.90817 7.57018L7.0106 7.16355L6.69631 8.63026L8.59387 9.03688L8.90817 7.57018ZM11.3488 15.3718L12.9246 18.1295L14.227 17.3853L12.6512 14.6276L11.3488 15.3718ZM15.0918 7.57017C14.9853 7.593 14.9356 7.60366 14.8865 7.61381L15.1903 9.08272C15.2458 9.07123 15.3016 9.05928 15.4061 9.03688L15.0918 7.57017ZM8.59387 9.03688C8.6984 9.05928 8.75416 9.07123 8.80969 9.08272L9.11353 7.61381C9.06443 7.60366 9.01468 7.593 8.90817 7.57018L8.59387 9.03688ZM14.8865 7.61381C12.9823 8.00768 11.0177 8.00768 9.11353 7.61381L8.80969 9.08272C10.9143 9.51805 13.0857 9.51805 15.1903 9.08272L14.8865 7.61381ZM9.14506 19.2497C9.94287 19.2497 10.6795 18.8222 11.0754 18.1295L9.77299 17.3853C9.64422 17.6107 9.40459 17.7497 9.14506 17.7497V19.2497ZM15.53 16.7669C15.7122 17.2406 15.3625 17.7497 14.8549 17.7497V19.2497C16.4152 19.2497 17.4901 17.6846 16.93 16.2284L15.53 16.7669ZM15.5397 10.8626C15.3178 10.9366 15.0816 11.01 14.8898 11.1283L15.6777 12.4048C15.6688 12.4102 15.6763 12.4037 15.7342 12.3818C15.795 12.3588 15.877 12.3313 16.0141 12.2856L15.5397 10.8626ZM15.6832 12.9868C15.6313 12.8519 15.6004 12.7711 15.5795 12.7095C15.5596 12.651 15.5599 12.6411 15.5613 12.6514L14.0751 12.8546C14.1057 13.0779 14.1992 13.3069 14.2832 13.5252L15.6832 12.9868ZM14.8898 11.1283C14.3007 11.492 13.9814 12.1687 14.0751 12.8546L15.5613 12.6514C15.5479 12.5534 15.5935 12.4567 15.6777 12.4048L14.8898 11.1283ZM18.25 9.39526C18.25 9.73202 18.0345 10.031 17.715 10.1375L18.1894 11.5605C19.1214 11.2499 19.75 10.3777 19.75 9.39526H18.25ZM7.07002 16.2284C6.50994 17.6846 7.58484 19.2497 9.14506 19.2497V17.7497C8.63751 17.7497 8.28784 17.2406 8.47004 16.7669L7.07002 16.2284ZM7.98592 12.2856C8.12301 12.3313 8.20501 12.3588 8.26583 12.3818C8.32371 12.4037 8.33115 12.4102 8.3223 12.4048L9.1102 11.1283C8.91842 11.01 8.68219 10.9366 8.46026 10.8626L7.98592 12.2856ZM9.71683 13.5252C9.80081 13.3069 9.89432 13.0779 9.92485 12.8546L8.43868 12.6514C8.44009 12.6411 8.4404 12.6509 8.42051 12.7095C8.3996 12.7711 8.36869 12.8519 8.31681 12.9868L9.71683 13.5252ZM8.3223 12.4048C8.40646 12.4567 8.45208 12.5534 8.43868 12.6514L9.92485 12.8546C10.0186 12.1687 9.69929 11.492 9.1102 11.1283L8.3223 12.4048ZM4.25 9.39526C4.25 10.3777 4.87863 11.2499 5.81062 11.5605L6.28497 10.1375C5.96549 10.031 5.75 9.73202 5.75 9.39526H4.25ZM5.75 9.39526C5.75 8.89717 6.20927 8.52589 6.69631 8.63026L7.0106 7.16355C5.58979 6.8591 4.25 7.9422 4.25 9.39526H5.75ZM12.9246 18.1295C13.3205 18.8222 14.0571 19.2497 14.8549 19.2497V17.7497C14.5954 17.7497 14.3558 17.6107 14.227 17.3853L12.9246 18.1295ZM19.75 9.39526C19.75 7.9422 18.4102 6.85909 16.9894 7.16355L17.3037 8.63026C17.7907 8.52589 18.25 8.89717 18.25 9.39526H19.75Z' fill='#1C274C'/><path d='M19.4537 14.5C21.0372 15.2961 22 16.3475 22 17.5C22 19.9853 17.5228 22 12 22C6.47715 22 2 19.9853 2 17.5C2 16.3475 2.96285 15.2961 4.54631 14.5' stroke='#1C274C' stroke-width='1.5' stroke-linecap='round'/></svg><span>"+item.participants+"</span></div><div class='famous-courses__price flex'><span>"+item.price+"</span><img class='toman-icon' src='images/toman_icon.png' alt='toman image'></div></div></div></li>")
        })
    }
    famousCoursesItem.forEach((item) =>
    {
            famousCoursesList.insertAdjacentHTML("afterbegin" , "<li class='famous-courses__list-item swiper-slide'><a href='famouscourses.html?="+item.id+"'><img class='famous-courses__img' src='"+item.img+"' alt='famous ourses image'></img></a><div class='famous-courses__content'><div class='famous-courses__caption'><h3>"+item.title+"</h3><p>"+item.caption+"</p></div><div class='famous-courses__master flex'><div class='famous-courses__master-name flex'><svg width='25px' height='25px' viewBox='0 0 24 24' fill='rgb(100 116 139 / 1)' xmlns='http://www.w3.org/2000/svg'><path stroke='rgb(100 116 139 / 1)' stroke-width='1px' fill='#fff' fill-rule='evenodd' clip-rule='evenodd' d='M12.0001 1.25C9.37678 1.25 7.25013 3.37665 7.25013 6C7.25013 8.62335 9.37678 10.75 12.0001 10.75C14.6235 10.75 16.7501 8.62335 16.7501 6C16.7501 3.37665 14.6235 1.25 12.0001 1.25ZM8.75013 6C8.75013 4.20507 10.2052 2.75 12.0001 2.75C13.7951 2.75 15.2501 4.20507 15.2501 6C15.2501 7.79493 13.7951 9.25 12.0001 9.25C10.2052 9.25 8.75013 7.79493 8.75013 6Z'></path><path stroke='rgb(100 116 139 / 1)' stroke-width='1px' fill='#fff' fill-rule='evenodd' clip-rule='evenodd' d='M12.0001 12.25C9.68658 12.25 7.55506 12.7759 5.97558 13.6643C4.41962 14.5396 3.25013 15.8661 3.25013 17.5L3.25007 17.602C3.24894 18.7638 3.24752 20.222 4.52655 21.2635C5.15602 21.7761 6.03661 22.1406 7.22634 22.3815C8.4194 22.6229 9.97436 22.75 12.0001 22.75C14.0259 22.75 15.5809 22.6229 16.7739 22.3815C17.9637 22.1406 18.8443 21.7761 19.4737 21.2635C20.7527 20.222 20.7513 18.7638 20.7502 17.602L20.7501 17.5C20.7501 15.8661 19.5807 14.5396 18.0247 13.6643C16.4452 12.7759 14.3137 12.25 12.0001 12.25ZM4.75013 17.5C4.75013 16.6487 5.37151 15.7251 6.71098 14.9717C8.02693 14.2315 9.89541 13.75 12.0001 13.75C14.1049 13.75 15.9733 14.2315 17.2893 14.9717C18.6288 15.7251 19.2501 16.6487 19.2501 17.5C19.2501 18.8078 19.2098 19.544 18.5265 20.1004C18.156 20.4022 17.5366 20.6967 16.4763 20.9113C15.4194 21.1252 13.9744 21.25 12.0001 21.25C10.0259 21.25 8.58087 21.1252 7.52393 20.9113C6.46366 20.6967 5.84425 20.4022 5.47372 20.1004C4.79045 19.544 4.75013 18.8078 4.75013 17.5Z'></path></svg><span>"+item.master+"</span></div><div class='famous-courses__score flex'><span>۵.۰</span><?xml version='1.0' encoding='utf-8'?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg width='25px' height='25px' viewBox='0 0 24 24' fill='#F59E0B' xmlns='http://www.w3.org/2000/svg'><path fill='#F59E0B' d='M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z' fill='#1C274C'/></svg></div></div><hr><div class='famous-courses__buy-details flex'><div class='famous-courses__student-numbers flex'><?xml version='1.0' encoding='utf-8'?><svg width='25px' height='25px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z' stroke='#1C274C' stroke-width='1.5'/><path d='M6.04779 10.849L6.28497 10.1375H6.28497L6.04779 10.849ZM8.22309 11.5741L7.98592 12.2856H7.98592L8.22309 11.5741ZM9.01682 13.256L8.31681 12.9868H8.31681L9.01682 13.256ZM7.77003 16.4977L8.47004 16.7669H8.47004L7.77003 16.4977ZM17.9522 10.849L17.715 10.1375H17.715L17.9522 10.849ZM15.7769 11.5741L16.0141 12.2856H16.0141L15.7769 11.5741ZM14.9832 13.256L15.6832 12.9868L14.9832 13.256ZM16.23 16.4977L15.53 16.7669L16.23 16.4977ZM10.4242 17.7574L11.0754 18.1295L10.4242 17.7574ZM12 14.9997L12.6512 14.6276C12.5177 14.394 12.2691 14.2497 12 14.2497C11.7309 14.2497 11.4823 14.394 11.3488 14.6276L12 14.9997ZM17.1465 7.8969L16.9894 7.16355L17.1465 7.8969ZM15.249 8.30353L15.4061 9.03688V9.03688L15.249 8.30353ZM8.75102 8.30353L8.90817 7.57018V7.57018L8.75102 8.30353ZM6.85345 7.89691L6.69631 8.63026L6.85345 7.89691ZM13.5758 17.7574L12.9246 18.1295V18.1295L13.5758 17.7574ZM15.0384 8.34826L14.8865 7.61381L14.8865 7.61381L15.0384 8.34826ZM8.96161 8.34826L8.80969 9.08272L8.80969 9.08272L8.96161 8.34826ZM15.2837 11.7666L15.6777 12.4048L15.2837 11.7666ZM14.8182 12.753L15.5613 12.6514V12.6514L14.8182 12.753ZM8.71625 11.7666L8.3223 12.4048H8.3223L8.71625 11.7666ZM9.18177 12.753L9.92485 12.8546V12.8546L9.18177 12.753ZM5.81062 11.5605L7.98592 12.2856L8.46026 10.8626L6.28497 10.1375L5.81062 11.5605ZM8.31681 12.9868L7.07002 16.2284L8.47004 16.7669L9.71683 13.5252L8.31681 12.9868ZM17.715 10.1375L15.5397 10.8626L16.0141 12.2856L18.1894 11.5605L17.715 10.1375ZM14.2832 13.5252L15.53 16.7669L16.93 16.2284L15.6832 12.9868L14.2832 13.5252ZM11.0754 18.1295L12.6512 15.3718L11.3488 14.6276L9.77299 17.3853L11.0754 18.1295ZM16.9894 7.16355L15.0918 7.57017L15.4061 9.03688L17.3037 8.63026L16.9894 7.16355ZM8.90817 7.57018L7.0106 7.16355L6.69631 8.63026L8.59387 9.03688L8.90817 7.57018ZM11.3488 15.3718L12.9246 18.1295L14.227 17.3853L12.6512 14.6276L11.3488 15.3718ZM15.0918 7.57017C14.9853 7.593 14.9356 7.60366 14.8865 7.61381L15.1903 9.08272C15.2458 9.07123 15.3016 9.05928 15.4061 9.03688L15.0918 7.57017ZM8.59387 9.03688C8.6984 9.05928 8.75416 9.07123 8.80969 9.08272L9.11353 7.61381C9.06443 7.60366 9.01468 7.593 8.90817 7.57018L8.59387 9.03688ZM14.8865 7.61381C12.9823 8.00768 11.0177 8.00768 9.11353 7.61381L8.80969 9.08272C10.9143 9.51805 13.0857 9.51805 15.1903 9.08272L14.8865 7.61381ZM9.14506 19.2497C9.94287 19.2497 10.6795 18.8222 11.0754 18.1295L9.77299 17.3853C9.64422 17.6107 9.40459 17.7497 9.14506 17.7497V19.2497ZM15.53 16.7669C15.7122 17.2406 15.3625 17.7497 14.8549 17.7497V19.2497C16.4152 19.2497 17.4901 17.6846 16.93 16.2284L15.53 16.7669ZM15.5397 10.8626C15.3178 10.9366 15.0816 11.01 14.8898 11.1283L15.6777 12.4048C15.6688 12.4102 15.6763 12.4037 15.7342 12.3818C15.795 12.3588 15.877 12.3313 16.0141 12.2856L15.5397 10.8626ZM15.6832 12.9868C15.6313 12.8519 15.6004 12.7711 15.5795 12.7095C15.5596 12.651 15.5599 12.6411 15.5613 12.6514L14.0751 12.8546C14.1057 13.0779 14.1992 13.3069 14.2832 13.5252L15.6832 12.9868ZM14.8898 11.1283C14.3007 11.492 13.9814 12.1687 14.0751 12.8546L15.5613 12.6514C15.5479 12.5534 15.5935 12.4567 15.6777 12.4048L14.8898 11.1283ZM18.25 9.39526C18.25 9.73202 18.0345 10.031 17.715 10.1375L18.1894 11.5605C19.1214 11.2499 19.75 10.3777 19.75 9.39526H18.25ZM7.07002 16.2284C6.50994 17.6846 7.58484 19.2497 9.14506 19.2497V17.7497C8.63751 17.7497 8.28784 17.2406 8.47004 16.7669L7.07002 16.2284ZM7.98592 12.2856C8.12301 12.3313 8.20501 12.3588 8.26583 12.3818C8.32371 12.4037 8.33115 12.4102 8.3223 12.4048L9.1102 11.1283C8.91842 11.01 8.68219 10.9366 8.46026 10.8626L7.98592 12.2856ZM9.71683 13.5252C9.80081 13.3069 9.89432 13.0779 9.92485 12.8546L8.43868 12.6514C8.44009 12.6411 8.4404 12.6509 8.42051 12.7095C8.3996 12.7711 8.36869 12.8519 8.31681 12.9868L9.71683 13.5252ZM8.3223 12.4048C8.40646 12.4567 8.45208 12.5534 8.43868 12.6514L9.92485 12.8546C10.0186 12.1687 9.69929 11.492 9.1102 11.1283L8.3223 12.4048ZM4.25 9.39526C4.25 10.3777 4.87863 11.2499 5.81062 11.5605L6.28497 10.1375C5.96549 10.031 5.75 9.73202 5.75 9.39526H4.25ZM5.75 9.39526C5.75 8.89717 6.20927 8.52589 6.69631 8.63026L7.0106 7.16355C5.58979 6.8591 4.25 7.9422 4.25 9.39526H5.75ZM12.9246 18.1295C13.3205 18.8222 14.0571 19.2497 14.8549 19.2497V17.7497C14.5954 17.7497 14.3558 17.6107 14.227 17.3853L12.9246 18.1295ZM19.75 9.39526C19.75 7.9422 18.4102 6.85909 16.9894 7.16355L17.3037 8.63026C17.7907 8.52589 18.25 8.89717 18.25 9.39526H19.75Z' fill='#1C274C'/><path d='M19.4537 14.5C21.0372 15.2961 22 16.3475 22 17.5C22 19.9853 17.5228 22 12 22C6.47715 22 2 19.9853 2 17.5C2 16.3475 2.96285 15.2961 4.54631 14.5' stroke='#1C274C' stroke-width='1.5' stroke-linecap='round'/></svg><span>"+item.participants+"</span></div><div class='famous-courses__price flex'><span>"+item.price+"</span><img class='toman-icon' src='images/toman_icon.png' alt='toman image'></div></div></div></li>")
    })
}
famousCoursesItemHandler()
// MAIN CATEGORY SECTION

let allCoursesDataBase = [
    {id:1 , category:"front-end" , img:"images/famous-course-img2.webp" , title:"آموزش انیمیشن سازی برای فرانت‌اند با GSAP و Three.js" , caption:"دوره Three.js سبزلرن به شما یاد می‌دهد چطور گرافیک‌های سه‌بعدی جذاب با استفاده از این کتابخانه بسازید. این دوره به شما کمک می‌کند به سادگی انیمیشن‌ها و طراحی‌های تعاملی ایجاد کنید." , master:"علی حمیدی" , participants:"۲۵۴" , price:"۱,۴۰۰,۰۰۰"},
    {id:2 , category:"hack-security" , img:"images/famous-course-img14.webp" , title:"آموزش جاوااسکریپت با گرایش امنیت | جاوااسکریپت سیاه" , caption:"جاوااسکریپت همواره در لیست محبوب ترین زبان های برنامه نویسی برای هکرها و امنیت کارهاست ! و من در این دوره جذاب قصد دارم که آموزش جاوااسکریپت رو از صفر با دیدگاه یک هکر. برای شما دوستان عزیز ارائه بدم ! اگر اماده اشنایی با نیمه تاریک" , master:"معین حمیدی" , participants:"۳۷۸۵۳" , price:"۲۰۰,۰۰۰"},
    {id:3 , category:"back-end" , img:"images/famous-course-img8.webp" , title:"آموزش جنگو به صورت پروژه محور" , caption:"از ویژگی های مهم دوره آموزش جنگو میتونیم به توضیح کامل مفاهیم پایه و ساختاری، کامل بودن و توجه به جزئیات، بررسی روش های مختلف حل مسئله و انتخاب بهترین روش ممکن، رعایت اصول کدنویسی، توجه به داکیومنت خوانی" , master:"محمد احمدی" , participants:"۱۱۴۰" , price:"۴,۳۰۰,۰۰۰"},
    {id:4 , category:"front-end" , img:"images/famous-course-img3.webp" , title:"نمایش نقشه‌های تعاملی با Leaflet.js" , caption:"دوره Leaflet.JS به شما یاد می‌دهد چگونه نقشه‌های تعاملی سبک و جذاب بسازید. این دوره پروژه‌محور است و از مبتدی تا پیشرفته، شما را با تمامی ویژگی‌های این کتابخانه کاربردی آشنا می‌کند" , master:"علی حمیدی" , participants:"۱۳۶" , price:"۹۰۰,۰۰۰"},
    {id:5 , category:"soft-skill" , img:"images/famous-course-img18.webp" , title:"تکنیک های قرارداد نویسی برای برنامه نویسان" , caption:"دوره تکنیک‌های قرارداد نویسی سبزلرن، مهارت‌های تنظیم قراردادهای حرفه‌ای را به برنامه‌نویسان و فریلنسرها آموزش می‌دهد تا شرایط همکاری را به‌طور شفاف و حرفه‌ای مشخص کنند." , master:"سایه حمیدی" , participants:"۱۶۸" , price:"۸۰۰,۰۰۰"},
    {id:6 , category:"python" , img:"images/famous-course-img22.webp" , title:"Data Visualization با پایتون" , caption:"ما تو دنیایی زندگی میکنیم که همه چیز به سمت سریع تر شدن حرکت میکنه. برای ذهن انسان درک اشکال خیلی راحت تر از اعداد و ارقام هست چون ذهن برای درک اعداد به پردازش بیشتری نسبت به اشکال نیاز داره." , master:"محسن رضایی" , participants:"۵۲۳" , price:"۸۰۰,۰۰۰"},
    {id:7 , category:"back-end" , img:"images/famous-course-img9.webp" , title:"ساخت ربات تلگرام با NodeJS" , caption:"دوره ربات تلگرام با Nodejs یه فرصت فوق‌العاده برای یادگیری نحوه‌ی ساخت ربات‌های تلگرامی با استفاده از یکی از قدرتمندترین فریم‌ورک‌های جاوااسکریپت، یعنی Node.js هست." , master:"زهرا حمیدی" , participants:"۶۹۳" , price:"۱,۴۵۰,۰۰۰"},
    {id:8 , category:"front-end" , img:"images/famous-course-img4.webp" , title:"پیاده سازی داشبورد های حرفه ای با CSS و JS" , caption:"این دوره فرصتی فوق‌العاده برای ارتقاء مهارت‌های فرانت اند شماست. با یادگیری از جدیدترین تکنیک‌ها، انیمیشن‌ها ، ابزارهای پیشرفته و کتابخونه ها، به دنیای داشبوردهای شگفت‌آور با HTML، CSS و JavaScript" , master:"امیرحسین حمیدی" , participants:"۵۶۷" , price:"۱,۸۰۰,۰۰۰"},
    {id:9, category:"front-end" , img:"images/famous-course-img5.webp" , title:"آموزش جامع و پروژه محور Tailwind Css + دیزاین فروشگاه قهوه" , caption:"tailwind css یک فریمورک Utility First هست، این فریمورک متشکل از یکسری کلاس های آماده ای هست که شما برای پیاده سازی هرگونه دیزاینی میتونید ازش بهره ببرید. توجه کنید که tailwind css هیچ کامپوننت اماده ای در خود ندارد." , master:"رضا حسینی" , participants:"۲۶۵۸" , price:"۱,۲۰۰,۰۰۰"},
    {id:10 , category:"soft-skill" , img:"images/famous-course-img21.webp" , title:"تجربیات طلایی من در کار تیمی" , caption:"در ساده ترین حالت شما اگه تو یک شرکت برنامه نویسی استخدام بشین، وارد تیم اون شرکت میشین و باید مهارت هایی رو در زمینه کار تیمی داشته باشین تا دچار یسری اذیت‌ها و مشکلات نشین." , master:"علی حمیدی" , participants:"۴۳۰" , price:"۵۰۰,۰۰۰"},
    {id:11 , category:"system" , img:"images/famous-course-img16.webp" , title:"آموزش جامع لینوکس برای برنامه نویسان" , caption:"لینوکس یک سیستم‌عامل قدرتمند، امن و متن‌باز است که در سرورها، توسعه نرم‌افزار، امنیت سایبری و سرویس‌های ابری به‌طور گسترده‌ای کاربرد دارد. بنابراین همه برنامه‌نویسان و کسانی‌که می‌خواهند در حوزه IT سرعت پیشرفت خود را افزایش دهند" , master:"مهدی حمیدی" , participants:"۱۵۱" , price:"۲,۱۴۰,۰۰۰"},
    {id:12 , category:"back-end" , img:"images/famous-course-img10.webp" , title:"آموزش ساخت ربات تلگرام با PHP" , caption:"توی دوره فوق‌العاده جذاب و کاربردی ساخت ربات تلگرام با php، به دنیای عجیب و جذاب ربات نویسی به طرز کاملا متفاوتی وارد میشین؛ این دوره با ارائه سرفصل‌های جذاب و پروژه‌های عملی، منتظر شماست!" , master:"الناز حمیدی" , participants:"۵۳۱" , price:"۱,۱۰۰,۰۰۰"},
    {id:13 , category:"python" , img:"images/famous-course-img23.webp" , title:"بهینه نویسی کد ها در پایتون" , caption:"همه میدونیم که زبان برنامه نویسی پایتون یه زبان خیلی جذاب، راحت و همینطور کاربردیه.  قبل از اینکه بخواین این دوره رو ببینید اگر دوره آموزش پایتون رو ندیدین حتما دوره رو ببینید که خیلی خیلی بهتون کمک خواهد کرد " , master:"علی حمیدی" , participants:"۹۹۹" , price:"۷۰۰,۰۰۰"},
    {id:14 , category:"hack-security" , img:"images/famous-course-img15.webp" , title:"آموزش پایتون با گرایش امنیت | پایتون سیاه" , caption:"زبان برنامه نویسی پایتون بخاطر سادگی. قدرت. و جامعه اماری بالایی که داره تونسته جز محبوب ترین زبان های برنامه نویسی هکرها قرار بگیره.و تا به امروز ابزار های قدرتمندی در زمینه هک و امنیت با پایتون توسعه داده شده" , master:"مهدی رضایی" , participants:"۱۷۹۰" , price:"۱,۱۵۰,۰۰۰"},
    {id:15 ,category:"front-end" , img:"images/famous-course-img7.webp" , title:"آموزش جاوا اسکریپت مقدماتی تا پیشرفته + مینی پروژه" , caption:"آموزش جاوا اسکریپت برای تمامی افرادی ک قصد ورود به زبان برنامه نویسی دارند مناسب می باشد . خصوصا برای علاقه مندان به حوزه فرانت همان طور که می دانید جاوا اسکریپت یکی از زبان های برنامه نویسی محبوب و پر طرفدار است" , master:"علی حمیدی" , participants:"۹۲۳" , price:"۳,۲۰۰,۰۰۰"},
    {id:16 , category:"python" , img:"images/famous-course-img24.webp" , title:"پروژه های کاربردی با پایتون" , caption:"قبل از اینکه بخواین این دوره رو ببینید اگر دوره آموزش پایتون رو ندیدین حتما دوره رو ببینید که خیلی خیلی بهتون کمک خواهد کرد یکی از مهم ترین کار هایی که باید برا یادگیری و تسلط بیشتر به یک زبان برنامه نویسی انجام بشه،" , master:"محسن رضایی" , participants:"۱۷۸۹" , price:"۹۰۰,۰۰۰"},
    {id:17 , category:"back-end" , img:"images/famous-course-img11.webp" , title:"دوره پروژه محور لایووایر (Livewire Master)" , caption:"دوره لایووایر مستر (Livewire Master) یک دوره‌ی تمام عیار برای فول‌استک فریمورکِ لایووایر است که هدف آن آموزش قدم به قدم، عمیق و مفهومی (Conceptional) تکنولوژی لایووایر می‌باشد." , master:"سایه حمیدی" , participants:"۹۳" , price:"۹۰۰,۰۰۰"},
    {id:18 ,category:"front-end" , img:"images/famous-course-img6.webp" , title:"آموزش حرفه ای طراحی قالب با Html Css FlexBox از صفر" , caption:"بعد از یادگیری Html,Css  افراد با یک چالش بزرگی رو به رو میشن، اونم اینه که نمیتونن توسط دانشی که یادگرفتن یک طرحی رو از صفر به کد تبدیل کنن و وبسایتی رو پیاده سازی کنن، توی این دوره به شما از صفر اصول طراحی قالب " , master:"علی حمیدی" , participants:"۲۹۸۱" , price:"۱,۵۰۰,۰۰۰"},
    {id:19 , category:"soft-skill" , img:"images/famous-course-img20.webp" , title:"تکنیک های قیمت گذاری پروژه های فریلنسری" , caption:"تو این دوره ‌5 پروژه فریلنسری از سایت های مختلف رو همراه با فیچرهایی که دارن و شرایط پروژه به طور کامل آنالیز و تعیین قیمت میکنیم تا بعد از گذروندن دوره هر پروژه‌ای که تو حوزه فریلنسری گرفتین رو به راحتی بتونین تعیین قیمت کرده" , master:"محمد حمیدی" , participants:"۸۱۲" , price:"۳۷۰,۰۰۰"},
    {id:20 , category:"python" , img:"images/famous-course-img26.webp" , title:"آموزش پایتون با گرایش امنیت | پایتون سیاه" , caption:"زبان برنامه نویسی پایتون بخاطر سادگی. قدرت. و جامعه اماری بالایی که داره تونسته جز محبوب ترین زبان های برنامه نویسی هکرها قرار بگیره.و تا به امروز ابزار های قدرتمندی در زمینه هک و امنیت با پایتون توسعه داده شده" , master:"الناز حمیدی" , participants:"۴۸۵۹" , price:"۱,۹۰۰,۰۰۰"},
    {id:21 , category:"python" , img:"images/famous-course-img25.webp" , title:"آموزش پایتون مقدماتی تا پیشرفته" , caption:"حیف نیست محبوب ترین زبان برنامه نویسی دنیا رو  ناقص و بی هدف یادبگیری؟ آموزش پایتون از زیر صفر و پایه ترین مبحث شروع میشه تا تخصصی ترین و پیشرفته ترین مباحث، هر قسمت کلی پروژه و تمرین حل می کنیم، برات تکلیف مشخص می کنیم" , master:"سایه حمیدی" , participants:"۴۳۹۰" , price:"۳,۲۰۰,۰۰۰"},
    {id:22 , category:"soft-skill" , img:"images/famous-course-img19.webp" , title:"مستر فریلنس - هنر همکاری موفق با کارفرماها" , caption:"موفق بودن یک وکیل به تعداد بالای پرونده هاش نیست. بلکه به تعداد کیفیت پرونده هاییه که حل کرده. یک برنامه نویس هم برای رشد و ترقی نیاز به هزار کارفرما نداره. بلکه نیاز به چند کارفرمای با کیفیت داره !" , master:"علی حمیدی" , participants:"۲۸۰۸" , price:"۹,۱۰۰,۰۰۰"},
    {id:23 , category:"back-end" , img:"images/famous-course-img12.webp" , title:"آموزش پروژه محور فریمورک Fastify" , caption:"Fastify یه فریمورک وب سریع و کم‌ حجم برای ساخت برنامه‌های تحت وب با Node.js هست.Fastify یکی از فریم‌ورک‌های جدید در صنعت توسعه وب هست که با ویژگی‌های قدرتمندش تونسته محوبیت خوبی رو بدست بیاره!" , master:"علی حمیدی" , participants:"۵۸۵" , price:"۹۰۰,۰۰۰"},
    {id:24 , category:"system" , img:"images/famous-course-img17.webp" , title:"آموزش Docker از صفر مطلق!" , caption:"داکر یک پلتفرم متن باز برای طراحی؛ انتقال؛ استقرار و اجرای نرم افزار ها تحت مفهومی به نام Container می‌باشد، در این دوره به صورت تخصصی مفاهیم و مباحث داکر را فرا خواهیم گرفت.", master:"احسان حمیدی" , participants:"۲۵۶" , price:"۸۰۰,۰۰۰"},
    {id:25 , category:"back-end" , img:"images/famous-course-img13.webp" , title:"Api نویسی با Nodejs" , caption:"شما بعد از گذروندن این دوره میتونین واسه پروژه هایی که تو زمینه فرانت‌اند توسعه میدین، هر Api که نیاز بود رو بنویسین و بدون این که نیازی به برنامه نویس بک‌اند داشته باشین، کلی نمونه کار واقعی با لاجیک و عملکرد کامل تو رزومتون داشته باشین." , master:"محسن دهقان" , participants:"۲۵۳" , price:"۱,۱۵۰,۰۰۰"},
    {id:26 ,category:"front-end" , img:"images/frontend-course-1.webp" , title:"آموزش جامع webpack" , caption:"فرقی نمی‌کند که شما یک برنامه نویس تازه کار و یا حرفه‌ای باشید؛ در هرصورت به وب‌پک نیاز خواهید داشت. وب‌پک یکی از ابزارهای حیاتی در توسعه نرم‌افزارهای تحت‌وب می‌باشد که در این دوره به طور کامل مورد بحث و بررسی قرار خواهد گرفت." , master:"سایه حمیدی" , participants:"۲۲۶" , price:"۱,۳۹۰,۰۰۰"  , status:"تکمیل شده" , duration:"۱۷" , prerequisites:" HTML , CSS"},
    {id:27 ,category:"front-end" , img:"images/frontend-course-2.webp" , title:"مینی پروژه های تخصصی با Html، Css + دیزاین اختصاصی" , caption:"عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره شرکت کنید و هدف دوره رو بهتر بتونید درک کنید. افراد بعد از یادگیری Css نیازه که مینی پروژه های مختلفی رو بزنن" , master:"علی حمیدی" , participants:"۱۰۹۰" , price:"۹۲۰,۰۰۰" , status:"تکمیل شده" , duration:"۵۲" , prerequisites:"JS"},
    {id:28 ,category:"front-end" , img:"images/frontend-course-3.webp" , title:"آموزش تخصصی Redux مقدماتی تا پیشرفته" , caption:"ریداکس یه کتابخونه پراستفاده واسه مدیریت حالت های مختلف یه برنامه جاوا اسکریپتیه که تو بازار کار ری‌اکت یکی از مهم‌ترین تکنولوژی‌ها واسه توسعه دهنده های فرانت‌اند به حساب میاد" , master:"محمد حمیدی" , participants:"۱۵۵۹" , price:"۱,۸۰۰,۰۰۰" , status:"تکمیل شده" , duration:"۱۱" , prerequisites:"HTML , CSS"},
    {id:29 ,category:"front-end" , img:"images/frontend-course-4.webp" , title:"آموزش Canvas برای برنامه نویسان فرانت‌اند" , caption:"Canvas عمدتا برای پیاده سازی و رسم نمودار های مختلف جهت تحلیل اطلاعات، بک‌گراندها و افکت های متنی انیمیشنی، شکل های گرافیکی مختلف، بازی سازی و ... استفاده میشه" , master:"امیرحسین حمیدی" , participants:"۶۷۷" , price:"۵۷۵,۰۰۰" , status:"تکمیل شده" , duration:"۳۲" , prerequisites:"علاقه به برنامه نویسی"},
    {id:30 ,category:"front-end" , img:"images/frontend-course-5.webp" , title:"آموزش پروژه محور CSS Grid + پروژه لندینگ رستوران" , caption:"Css grid یک ماژول مربوط به css است . کارکردن با این ماژول بسیار جذاب است و با امکانات و پراپرتی هایی که در اختیار ما قرار میدهد نه تنها مشکلات گذشته در طراحی و ریسپانسیو را نخواهیم داشت بلکه میتوانیم خیلی راحت تر از قبل کد بزنیم و لذت ببریم. پس یادتان باشد با کمک css grid میتوانیم صفحات وب سایت خود را به آسانی پیاده" , master:"رضا حسینی" , participants:"۳۰۱۲" , price:"۲۰۰,۰۰۰" , status:"تکمیل شده" , duration:"۱۹" , prerequisites:"علاقه به برنامه نویسی"},
    {id:31 ,category:"front-end" , img:"images/frontend-course-6.webp" , title:"آموزش PWA بصورت پروژه محور" , caption:"کلمه PWA مخفف Progressive Web App بوده و یه تکنولوژی تقریبا جدیده که میتونیم بهمون اجازه میده وب‌سایتی که توسعه دادیم رو به شکل یه اپلیکیشن دربیاریم که روی اندروید، IOS، ویندوز، مک و ... قابل نصبه." , master:"علی حمیدی" , participants:"۲۴۲۹" , price:"۲,۳۰۰,۰۰۰" , status:"تکمیل شده" , duration:"۵۱" , prerequisites:"علاقه به برنامه نویسی"},
    {id:32 ,category:"front-end" , img:"images/frontend-course-7.webp" , title:"آموزش FlexBox پروژه محور + پروژه سایت هاستینگ" , caption:"اگر شما به حوزه طراحی و برنامه نویسی وب علاقه داشته باشید قطعا در مورد صفحه آرایی، ریسپانسیو سازی، فلکس باکس و ... شنیده اید. در این دوره قصد داریم ماژول فلکس باکس را به صورت پروژه محور و از صفر تا صد به شما آموزش دهیم." , master:"احسان حمیدی" , participants:"۱۱۴۰۲" , price:"۳۰۰,۰۰۰" , status:"تکمیل شده" , duration:"۹" , prerequisites:"علاقه به برنامه نویسی"},
    {id:33 ,category:"front-end" , img:"images/frontend-course-8.webp" , title:"کد نویسی سریع html css با Emmet" , caption:"داخل هر کدام از IDE و ادیتور ها ابزاری به اسم Emmet وجود دارد که در برنامه نویسی و توسعه وب، کمک بسیار زیادی به شما می کند. در این دوره با مفهوم و کاربرد Emmet آشنا شده و آن را به طور کامل از صفر تا صد یاد خواهید گرفت" , master:"سایه حمیدی" , participants:"۲۹۱۵" , price:"۱۵۰,۰۰۰" , status:"تکمیل شده" , duration:"۲۴" , prerequisites:"علاقه به برنامه نویسی"},
    {id:34 ,category:"javascript" , img:"images/js-course-1.webp" , title:"توسعه افزونه مرورگر با جاوااسکریپت" , caption:"" , master:"رمضان حمیدی" , participants:"۱۴۳۲" , price:"۳,۹۰۰,۰۰۰" , status:"تکمیل شده" , duration:"۱۹" , prerequisites:"HTML , CSS"},
]
categoryItem.forEach((item) =>
{
    item.addEventListener("click" , (e) =>
    {
        let listItem = e.target.closest(".col-4")
        categoryLink.forEach(function(item)
        {
            item.setAttribute("href" , "allcourses.html?categoryname="+listItem.dataset.categoryname+"")
        })      
    })
})


let articles = [
    {id:1 , src:"images/articles-img1.webp" , title:"آیا پایتون هنوز هم گزینه مناسبی برای شروع برنامه‌نویسی است؟" , caption:"یک روز از خواب بیدار می‌شوی و با خودت می‌گویی: وقتشه! وقتشه که بالاخره برنامه‌نویسی رو شروع کنم." , author:"علی حمیدی" ,date:"۱۴۰۴/۰۱/۲۱"},
    {id:2 , src:"images/articles-img2.webp" , title:"هوش مصنوعی، بلاکچین و برنامه‌نویسی؛ این سه تا چطور با هم ترکیب می‌شن؟" , caption:"«هوش مصنوعی» تا همین چند سال پیش فقط در فیلم‌های علمی‌تخیلی بود، «بلاکچین» فقط با بیت‌کوین شناخته می‌شد" , author:"مرتضی رضایی" ,date:"۱۴۰۴/۰۱/۱۲"},
    {id:3 , src:"images/articles-img3.webp" , title:"کار در حوزه برنامه نویسی و هوش مصنوعی نیاز به انگلیسی خوب دارد؟" , caption:"تصور کنید پشت میز کارتان نشسته‌اید، یک ایده‌ی درخشان برای ساخت یک ربات هوشمند به ذهن‌تان رسیده" , author:"سایه حمیدی" ,date:"۱۴۰۴/۱۱/۰۳"},
    {id:4 , src:"images/articles-img4.webp" , title:"Spotify با چه زبان های برنامه نویسی و تکنولوژی ساخته شده است؟" , caption:"اگه اهل موسیقی باشی، احتمالا برات پیش اومده یه روز که حسابی خسته‌ای، هندزفری رو می‌ذاری تو گوشت" , author:"محمد احمدی" ,date:"۱۴۰۴/۰۵/۱۳"},
    {id:5 , src:"images/articles-img5.webp" , title:"هوش مصنوعی Claude چیست؟ چرا برنامه نویسان عاشق آن هستند؟" , caption:"تصوّر کنید در اتاقی مملو از دستیاران هوشمند ایستاده‌اید؛ هر کدام می‌توانند به سوال‌های شما پاسخ دهند" , author:"امیر حسین حمیدی" ,date:"۱۴۰۴/۰۱/۳۰"},
    {id:6 , src:"images/articles-img6.webp" , title:"۹۰٪ تازه‌ کارها این اشتباه رو تو یادگیری پایتون می‌کنن!" , caption:"تصور کن تصمیم گرفته‌ای بالاخره آموزش برنامه نویسی رو شروع کنی. کلی تحقیق کردی و از بین همه زبان‌ها پایتون رو انتخاب کردی" , author:"محسن رضایی" ,date:"۱۴۰۴/۰۲/۱۲"},
    {id:7 , src:"images/articles-img7.webp" , title:"مهندسی پرامپت یا Prompt Engineering چیست" , caption:"در دنیایی که هوش مصنوعی با سرعتی سرسام‌آور در حال پیشرفت است، عدم آشنایی با نحوه استفاده از ابزارهای هوش مصنوعی" , author:"علی حمیدی" ,date:"۱۴۰۴/۰۹/۲۹"},
    {id:8 , src:"images/articles-img8.webp" , title:"5 نشونه که وقتشه مسیر شغلی خودت رو در برنامه‌نویسی عوض کنی!" , caption:"گاهی اوقات همه‌چیز در ظاهر خوب پیش می‌رود! شغل داریم، پروژه داریم و حتی شاید درآمد قابل قبولی هم داشته باشیم،" , author:"احسان حمیدی" ,date:"۱۴۰۴/۱۲/۰۳"},
    {id:9 , src:"images/articles-img9.webp" , title:"۵ ایده پولساز ربات تلگرام که می‌تونی همین امروز راه بندازی!" , caption:"تلگرام، برخلاف بسیاری از پلتفرم‌های پیام‌رسان، تنها به ارسال و دریافت پیام محدود نمی‌شود. یکی از ویژگی‌های منحصربه‌فر آن " , author:"سایه حمیدی" ,date:"۱۴۰۴/۱۱/۰۹"},
    {id:10 , src:"images/articles-img10.webp" , title:"چطور برنامه نویسی با گوشی را شروع کنیم؟" , caption:"پیشرفت تکنولوژی در سال‌های اخیر باعث شده تا تقاضا برای یادگیری برنامه‌نویسی و توسعه اپلیکیشن‌های مختلف افزایش یابد." , author:"الناز حمیدی" ,date:"۱۴۰۴/۰۳/۱۹"},
    {id:11 , src:"images/articles-img11.webp" , title:"پایتون + ماینکرفت = یادگیری برنامه‌ نویسی با بازی! ( آموزش قدم‌ به‌ قدم )" , caption:"تا به‌حال فکر کرده‌اید اگر یادگیری برنامه‌‌نویسی شبیه به بازی کردن بود، چقدر راحت‌تر و هیجان‌انگیزتر می‌شد؟" , author:"احمد محمدی" ,date:"۱۴۰۴/۰۹/۱۶"},
    {id:12 , src:"images/articles-img12.webp" , title:"هوش هیجانی برای یه برنامه‌نویس یعنی چی ؟" , caption:"فرض کن وسط یه جلسه کدنویسی هستی، باگی ظاهر می‌شه که اصلا انتظارش رو نداشتی. وقت کمه، استرس بالا و صدای نوتیفیکیشن" , author:"محمد حمیدی" ,date:"۱۴۰۴/۰۷/۲۴"},
    {id:13 , src:"images/articles-img13.webp" , title:"وردپرس یا سایت با کدنویسی اختصاصی؟" , caption:"وقتی‌که وارد دنیای طراحی وب می‌شوید، یکی از اولین سوالاتی که برای شما پیش می‌آید این است که «وردپرس بهتر است" , author:"مرتضی رضایی" ,date:"۱۴۰۴/۰۱/۱۴"},
    {id:14 , src:"images/articles-img14.webp" , title:"Web3 برای برنامه‌نویس‌ها؛ آیا باید واردش بشی؟" , caption:"این روزها “Web3” نامی آشنا است که در اغلب رویدادهای تکنولوژی، استارتاپ‌های نوظهور و حتی اخبار روزمره در مورد آن صحبت می‌شود" , author:"سایه حمیدی" ,date:"۱۴۰۴/۱۲/۰۳"},
]

articles.forEach(item =>
{
    articlesList.insertAdjacentHTML("beforeend" , "<li class='articles__list-item swiper-slide'><a href='articles.html?id="+item.id+"'><img class='articles__list-item-img' src='"+item.src+"' alt='article image'></a><div class='article-caption'><h3>"+item.title+"</h3><p>"+item.caption+"</p></div><div class='article-info flex'><p class='article-author'>"+item.author+"</p><p class='article-date'>"+item.date+"</p></div><hr><div class='flex article-see'><a href='articles.html?id="+item.id+"' class='flex'><p>مطالعه مقاله</p><svg width='25px' height='25px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M11 9L8 12M8 12L11 15M8 12H16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg></a></div></li>")
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
            e.target.setAttribute(`href` , `famouscourses.html?id=${e.target.dataset.id}`)
        }      
    })
})
let discountCourses = [
    {id:42 , img:"images/discount-course-img1.webp" , title:"آموزش HTML رایگان مقدماتی تا پیشرفته" , caption:"آموزش HTML، اولین قدم شروع طراحی وبسایت است. HTML یه زبان نشانه گذاری هست که با کمک اون میتونی تگ هایی بنویسی تا سایت رو روی اون تگ ها پیاده کنی. همونجوری که هیچ موجودی نمیتونه بدون اسکلت زندگی کنه،", master:"علی حمیدی" , participants:"۱۹۲۰۲" , oldPrice:"۲۰۰,۰۰۰" , price:"۵۰,۰۰۰" , discountValue:"۷۵%"},
    {id:43 , img:"images/discount-course-img2.webp" , title:"آموزش Css رایگان مقدماتی تا پیشرفته" , caption:"حالا وقتشه که با دوره آموزش CSS به اسکلتی که با html ساختی پوست و گوشت بدی تا تبدیل به یه موجود زیبا بشه. توی دوره مقدماتی تا پیشرفته Css یاد میگیری چطوری به المانای خشک و بی جون HTML زیبایی ببخشی.", master:"سایه حمیدی" , participants:"۳۹۲۱" , oldPrice:"۳,۵۰۰,۰۰۰" , price:"۱۲۰,۰۰۰" , discountValue:"۶۰%"},
    {id:44 , img:"images/discount-course-img3.webp" , title:"شروع فرانت اند وب + مثال های جامع و زنده" , caption:"اگه میخوای طراحی وب رو اصولی شروع کنی و با اصطلاحات  و مقدمات این حوزه آشنا نیستی ! پس جای درستی اومدی ! زود ثبت نام کن و وارد سکوی پرتاب شو", master:"امیرحسین حمیدی" , participants:"۳۸۳۱" , oldPrice:"۳۰۰,۰۰۰" , price:"۸۰,۰۰۰" , discountValue:"۵۵%"},
    {id:45 , img:"images/discount-course-img4.webp" , title:"آموزش ۲۰ کتابخانه کاربردی ReactJS برای بازارکار" , caption:"‌کتابخانه‌ها باعث افزایش سرعت کدنویسی میشن. در حدی که تو بازار کار هم از کتابخانه های مختلفی برای توسعه پروژه‌ها استفاده میشه. تو این دوره 20 کتابخانه پرکاربرد و پراستفاده ری‌اکت که تو بازار کار برای توسعه پروژه های مختلفی استفاده میشه ", master:"محمدرضا احمدی" , participants:"۸۲۹" , oldPrice:"۱,۳۰۰,۰۰۰" , price:"۸۳۰,۰۰۰" , discountValue:"۴۰%"},
    {id:46 , img:"images/discount-course-img5.webp" , title:"پروژه های تخصصی با جاوا اسکریپت برای بازار کار" , caption:"هیچ فرقی نمیکنه شما با چه کتابخونه یا فریمورکی کار میکنین. تو این دوره یاد میگیری به عنوان یه برنامه نویس فرانت‌اند چطور یه پروژه بزرگ و واقعی رو منیج کنی. حالا این پروژه میتونه با ویو، ری‌اکت یا حتی جاوا اسکریپت خام باشه.", master:"محمد حمیدی" , participants:"۳۵۹" , oldPrice:"۱,۵۶۰,۰۰۰" , price:"۹۹۰,۰۰۰" , discountValue:"۳۰%"},
    {id:47 , img:"images/discount-course-img6.webp" , title:"توسعه افزونه مرورگر با جاوااسکریپت" , caption:"ما در این دوره، توسعه افزونه های مرورگر رو با پیاده سازی پروژه های کاربردی با دانش فرانت اند مون از طریق زبان های HTML CSS JS یاد میگریم", master:"سایه حمیدی" , participants:"۳۲۱", oldPrice:"۲,۱۰۰,۰۰۰" , price:"۱,۰۵۰,۰۰۰" , discountValue:"۵۵%"},
    {id:48 , img:"images/discount-course-img7.webp" , title:"توسعه کتابخانه با جاوااسکریپت" , caption:"توسعه کتابخانه، نمونه کاری قوی برای رزومه شما است و این دوره آموزشی یادگیری چنین مهارتی رو با نکات کاربردی…", master:"رضا اسعدی" , participants:"۱۲۹" , oldPrice:"۹۰۰,۰۰۰" , price:"۵۶۰,۰۰۰" , discountValue:"۳۵%"},
    {id:49 , img:"images/discount-course-img8.webp" , title:"آموزش Next.js بصورت پروژه محور" , caption:"نکست یه فریمورک مبتنی بر ری‌اکت هست که امروزه تو بازار کار یکی از مهم‌ترین تکنولوژی‌ها برای توسعه دهنده های ری‌اکت به حساب میاد. نکست رو میشه مکمل ری‌اکت دونست.", master:"سایه حمیدی" , participants:"۷۹۳" , oldPrice:"۴,۳۵۰,۰۰۰" , price:"۱,۲۹۰,۰۰۰" , discountValue:"۸۰%"},
    {id:50 , img:"images/discount-course-img9.webp" , title:"آموزش کاربردی Typescript بصورت پروژه محور" , caption:"تایپ اسکریپت یه زبون برنامه نویسیه که توسط مایکروسافت ارائه شده و یسری قابلیت و فیچر های جدید رو با هدف افزایش پرفورمنس و کاهش احتمال خطا به جاوا اسکریپت اضافه کرده.", master:"محسن محمدپور" , participants:"۲۰۳" , oldPrice:"۱,۹۰۰,۰۰۰" , price:"۱,۶۵۰,۰۰۰" , discountValue:"۲۰%"},
]
// DISCOUNT COURSES
discountCourses.forEach(item => 
    {
        discountCoursesList.insertAdjacentHTML(`beforeend` ,  `<li class="swiper-slide discount-swiper-slide discount-courses__list-item"><a href='famouscourses.html?=${item.id}'><img class='discount-courses__img' src='${item.img}' alt='famous ourses image'></img></a><div class='discount-courses__content'><div class='discount-courses__caption'><h3>${item.title}</h3><p>${item.caption}</p></div><div class='discount-courses__master flex'><div class='discount-courses__master-name flex'><svg width='25px' height='25px' viewBox='0 0 24 24' fill='rgb(100 116 139 / 1)' xmlns='http://www.w3.org/2000/svg'><path stroke='rgb(100 116 139 / 1)' stroke-width='1px' fill='#fff' fill-rule='evenodd' clip-rule='evenodd' d='M12.0001 1.25C9.37678 1.25 7.25013 3.37665 7.25013 6C7.25013 8.62335 9.37678 10.75 12.0001 10.75C14.6235 10.75 16.7501 8.62335 16.7501 6C16.7501 3.37665 14.6235 1.25 12.0001 1.25ZM8.75013 6C8.75013 4.20507 10.2052 2.75 12.0001 2.75C13.7951 2.75 15.2501 4.20507 15.2501 6C15.2501 7.79493 13.7951 9.25 12.0001 9.25C10.2052 9.25 8.75013 7.79493 8.75013 6Z'></path> <path stroke='rgb(100 116 139 / 1)' stroke-width='1px' fill='#fff' fill-rule='evenodd' clip-rule='evenodd' d='M12.0001 12.25C9.68658 12.25 7.55506 12.7759 5.97558 13.6643C4.41962 14.5396 3.25013 15.8661 3.25013 17.5L3.25007 17.602C3.24894 18.7638 3.24752 20.222 4.52655 21.2635C5.15602 21.7761 6.03661 22.1406 7.22634 22.3815C8.4194 22.6229 9.97436 22.75 12.0001 22.75C14.0259 22.75 15.5809 22.6229 16.7739 22.3815C17.9637 22.1406 18.8443 21.7761 19.4737 21.2635C20.7527 20.222 20.7513 18.7638 20.7502 17.602L20.7501 17.5C20.7501 15.8661 19.5807 14.5396 18.0247 13.6643C16.4452 12.7759 14.3137 12.25 12.0001 12.25ZM4.75013 17.5C4.75013 16.6487 5.37151 15.7251 6.71098 14.9717C8.02693 14.2315 9.89541 13.75 12.0001 13.75C14.1049 13.75 15.9733 14.2315 17.2893 14.9717C18.6288 15.7251 19.2501 16.6487 19.2501 17.5C19.2501 18.8078 19.2098 19.544 18.5265 20.1004C18.156 20.4022 17.5366 20.6967 16.4763 20.9113C15.4194 21.1252 13.9744 21.25 12.0001 21.25C10.0259 21.25 8.58087 21.1252 7.52393 20.9113C6.46366 20.6967 5.84425 20.4022 5.47372 20.1004C4.79045 19.544 4.75013 18.8078 4.75013 17.5Z'></path></svg><span>${item.master}</span>  </div><div class='discount-courses__score flex'><span>۵.۰</span> <svg width='25px' height='25px' viewBox='0 0 24 24' fill='#F59E0B' xmlns='http://www.w3.org/2000/svg'><path fill='#F59E0B' d='M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z' fill='#1C274C'/> </svg></div> </div><hr><div class='discount-courses__buy-details flex'><div class='discount-courses__student-numbers flex'><svg width='25px' height='25px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z' stroke='#1C274C' stroke-width='1.5'/><path d='M6.04779 10.849L6.28497 10.1375H6.28497L6.04779 10.849ZM8.22309 11.5741L7.98592 12.2856H7.98592L8.22309 11.5741ZM9.01682 13.256L8.31681 12.9868H8.31681L9.01682 13.256ZM7.77003 16.4977L8.47004 16.7669H8.47004L7.77003 16.4977ZM17.9522 10.849L17.715 10.1375H17.715L17.9522 10.849ZM15.7769 11.5741L16.0141 12.2856H16.0141L15.7769 11.5741ZM14.9832 13.256L15.6832 12.9868L14.9832 13.256ZM16.23 16.4977L15.53 16.7669L16.23 16.4977ZM10.4242 17.7574L11.0754 18.1295L10.4242 17.7574ZM12 14.9997L12.6512 14.6276C12.5177 14.394 12.2691 14.2497 12 14.2497C11.7309 14.2497 11.4823 14.394 11.3488 14.6276L12 14.9997ZM17.1465 7.8969L16.9894 7.16355L17.1465 7.8969ZM15.249 8.30353L15.4061 9.03688V9.03688L15.249 8.30353ZM8.75102 8.30353L8.90817 7.57018V7.57018L8.75102 8.30353ZM6.85345 7.89691L6.69631 8.63026L6.85345 7.89691ZM13.5758 17.7574L12.9246 18.1295V18.1295L13.5758 17.7574ZM15.0384 8.34826L14.8865 7.61381L14.8865 7.61381L15.0384 8.34826ZM8.96161 8.34826L8.80969 9.08272L8.80969 9.08272L8.96161 8.34826ZM15.2837 11.7666L15.6777 12.4048L15.2837 11.7666ZM14.8182 12.753L15.5613 12.6514V12.6514L14.8182 12.753ZM8.71625 11.7666L8.3223 12.4048H8.3223L8.71625 11.7666ZM9.18177 12.753L9.92485 12.8546V12.8546L9.18177 12.753ZM5.81062 11.5605L7.98592 12.2856L8.46026 10.8626L6.28497 10.1375L5.81062 11.5605ZM8.31681 12.9868L7.07002 16.2284L8.47004 16.7669L9.71683 13.5252L8.31681 12.9868ZM17.715 10.1375L15.5397 10.8626L16.0141 12.2856L18.1894 11.5605L17.715 10.1375ZM14.2832 13.5252L15.53 16.7669L16.93 16.2284L15.6832 12.9868L14.2832 13.5252ZM11.0754 18.1295L12.6512 15.3718L11.3488 14.6276L9.77299 17.3853L11.0754 18.1295ZM16.9894 7.16355L15.0918 7.57017L15.4061 9.03688L17.3037 8.63026L16.9894 7.16355ZM8.90817 7.57018L7.0106 7.16355L6.69631 8.63026L8.59387 9.03688L8.90817 7.57018ZM11.3488 15.3718L12.9246 18.1295L14.227 17.3853L12.6512 14.6276L11.3488 15.3718ZM15.0918 7.57017C14.9853 7.593 14.9356 7.60366 14.8865 7.61381L15.1903 9.08272C15.2458 9.07123 15.3016 9.05928 15.4061 9.03688L15.0918 7.57017ZM8.59387 9.03688C8.6984 9.05928 8.75416 9.07123 8.80969 9.08272L9.11353 7.61381C9.06443 7.60366 9.01468 7.593 8.90817 7.57018L8.59387 9.03688ZM14.8865 7.61381C12.9823 8.00768 11.0177 8.00768 9.11353 7.61381L8.80969 9.08272C10.9143 9.51805 13.0857 9.51805 15.1903 9.08272L14.8865 7.61381ZM9.14506 19.2497C9.94287 19.2497 10.6795 18.8222 11.0754 18.1295L9.77299 17.3853C9.64422 17.6107 9.40459 17.7497 9.14506 17.7497V19.2497ZM15.53 16.7669C15.7122 17.2406 15.3625 17.7497 14.8549 17.7497V19.2497C16.4152 19.2497 17.4901 17.6846 16.93 16.2284L15.53 16.7669ZM15.5397 10.8626C15.3178 10.9366 15.0816 11.01 14.8898 11.1283L15.6777 12.4048C15.6688 12.4102 15.6763 12.4037 15.7342 12.3818C15.795 12.3588 15.877 12.3313 16.0141 12.2856L15.5397 10.8626ZM15.6832 12.9868C15.6313 12.8519 15.6004 12.7711 15.5795 12.7095C15.5596 12.651 15.5599 12.6411 15.5613 12.6514L14.0751 12.8546C14.1057 13.0779 14.1992 13.3069 14.2832 13.5252L15.6832 12.9868ZM14.8898 11.1283C14.3007 11.492 13.9814 12.1687 14.0751 12.8546L15.5613 12.6514C15.5479 12.5534 15.5935 12.4567 15.6777 12.4048L14.8898 11.1283ZM18.25 9.39526C18.25 9.73202 18.0345 10.031 17.715 10.1375L18.1894 11.5605C19.1214 11.2499 19.75 10.3777 19.75 9.39526H18.25ZM7.07002 16.2284C6.50994 17.6846 7.58484 19.2497 9.14506 19.2497V17.7497C8.63751 17.7497 8.28784 17.2406 8.47004 16.7669L7.07002 16.2284ZM7.98592 12.2856C8.12301 12.3313 8.20501 12.3588 8.26583 12.3818C8.32371 12.4037 8.33115 12.4102 8.3223 12.4048L9.1102 11.1283C8.91842 11.01 8.68219 10.9366 8.46026 10.8626L7.98592 12.2856ZM9.71683 13.5252C9.80081 13.3069 9.89432 13.0779 9.92485 12.8546L8.43868 12.6514C8.44009 12.6411 8.4404 12.6509 8.42051 12.7095C8.3996 12.7711 8.36869 12.8519 8.31681 12.9868L9.71683 13.5252ZM8.3223 12.4048C8.40646 12.4567 8.45208 12.5534 8.43868 12.6514L9.92485 12.8546C10.0186 12.1687 9.69929 11.492 9.1102 11.1283L8.3223 12.4048ZM4.25 9.39526C4.25 10.3777 4.87863 11.2499 5.81062 11.5605L6.28497 10.1375C5.96549 10.031 5.75 9.73202 5.75 9.39526H4.25ZM5.75 9.39526C5.75 8.89717 6.20927 8.52589 6.69631 8.63026L7.0106 7.16355C5.58979 6.8591 4.25 7.9422 4.25 9.39526H5.75ZM12.9246 18.1295C13.3205 18.8222 14.0571 19.2497 14.8549 19.2497V17.7497C14.5954 17.7497 14.3558 17.6107 14.227 17.3853L12.9246 18.1295ZM19.75 9.39526C19.75 7.9422 18.4102 6.85909 16.9894 7.16355L17.3037 8.63026C17.7907 8.52589 18.25 8.89717 18.25 9.39526H19.75Z' fill='#1C274C'/>                                        <path d='M19.4537 14.5C21.0372 15.2961 22 16.3475 22 17.5C22 19.9853 17.5228 22 12 22C6.47715 22 2 19.9853 2 17.5C2 16.3475 2.96285 15.2961 4.54631 14.5' stroke='#1C274C' stroke-width='1.5' stroke-linecap='round'/></svg><span>${item.participants}</span></div><div class='discount-courses__price flex'><div class="discount-number flex">${item.discountValue}</div><div class="discount-courses__price-details flex"><del>${item.oldPrice}</del><div class="flex"><span>${item.price}</span><img class="toman-icon" src='images/toman_icon.png' alt='toman image'></div></div></div></div></li>`)
    }
)

