// /* <!-- 💕 به نام خداند روزی ده رهنمای 💕 -->
// <!-- 💕 Thanks For Merciful God 💕 -->
// <!-- 💕 كل ما أملكه يأتي من الله 💕 --> */
import {changeMode , modeHandler , navBar , pageModeIcon , lightIcon , mobilePageModeIcon ,mobileLightIcon ,darkIcon ,mobileDrkIcon } from './funcs.js'
const menuToggleBtn = document.querySelector(".hamburger-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const courseImg = document.querySelector(".course-details__img img")
const courseTitle = document.querySelector(".course-title")
const courseCaption = document.querySelector(".course-caption")
const coursePrice = document.querySelector(".course-price p")
const courseStatus = document.querySelector(".course-status")
const courseDuration = document.querySelector(".course-duration")
const coursePrerequisites = document.querySelector(".course-prerequisites")
const video = document.getElementById('myVideo');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const timeDisplay = document.getElementById('timeDisplay');
const progressBar = document.querySelector('.progress-bar');
const courseStudentNumber = document.querySelector(".course-participate__number p")
const courseTeacherName = document.querySelector(".course-teacher__name")
const courseLink = document.querySelector(".course-link")
const courseMainCaptionImg = document.querySelector(".course-main-caption__img")
const courseSeeMoreInfoBtn = document.querySelector(".course-seemoreinfo-btn")
const courseMainCaptionTextContainer = document.querySelector(".course-main-caption__text-container")
const courseMainCaption = document.querySelector(".course-main-caption")
const courseConceptList = document.querySelector(".course-concept__list")
const mobileCategoryItem = document.querySelectorAll(".mobile-category__item")
const mobileCategorySubmenuItem = document.querySelectorAll(".mobile-category__submenu-item")
const addToBasketCardBtn = document.querySelector(".course-buy__btn")
const addtocardMessage = document.querySelector(".addtocard-message")
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
let famousCoursesListItems = [
    {id:1 , category:"front-end" , img:"images/famous-course-img2.webp" , title:"آموزش انیمیشن سازی برای فرانت‌اند با GSAP و Three.js" , caption:"دوره Three.js سبزلرن به شما یاد می‌دهد چطور گرافیک‌های سه‌بعدی جذاب با استفاده از این کتابخانه بسازید. این دوره به شما کمک می‌کند به سادگی انیمیشن‌ها و طراحی‌های تعاملی ایجاد کنید." , master:"علی حمیدی" , participants:"۲۵۴" , price:"۱,۴۰۰,۰۰۰" , status:"تکمیل شده" , duration:"۱۳" , prerequisites:"JS"},
    {id:2 , category:"hack-security" , img:"images/famous-course-img14.webp" , title:"آموزش جاوااسکریپت با گرایش امنیت | جاوااسکریپت سیاه" , caption:"جاوااسکریپت همواره در لیست محبوب ترین زبان های برنامه نویسی برای هکرها و امنیت کارهاست ! و من در این دوره جذاب قصد دارم که آموزش جاوااسکریپت رو از صفر با دیدگاه یک هکر. برای شما دوستان عزیز ارائه بدم ! اگر اماده اشنایی با نیمه تاریک" , master:"معین حمیدی" , participants:"۳۷۸۵۳" , price:"۲۰۰,۰۰۰" , status:"تکمیل شده" , duration:"۲۵" , prerequisites:"HTML , CSS"},
    {id:3 , category:"back-end" , img:"images/famous-course-img8.webp" , title:"آموزش جنگو به صورت پروژه محور" , caption:"از ویژگی های مهم دوره آموزش جنگو میتونیم به توضیح کامل مفاهیم پایه و ساختاری، کامل بودن و توجه به جزئیات، بررسی روش های مختلف حل مسئله و انتخاب بهترین روش ممکن، رعایت اصول کدنویسی، توجه به داکیومنت خوانی" , master:"محمد احمدی" , participants:"۱۱۴۰" , price:"۴,۳۰۰,۰۰۰" , status:"تکمیل شده" , duration:"۱۰", prerequisites:"PHP"},
    {id:4 , category:"front-end" , img:"images/famous-course-img3.webp" , title:"نمایش نقشه‌های تعاملی با Leaflet.js" , caption:"دوره Leaflet.JS به شما یاد می‌دهد چگونه نقشه‌های تعاملی سبک و جذاب بسازید. این دوره پروژه‌محور است و از مبتدی تا پیشرفته، شما را با تمامی ویژگی‌های این کتابخانه کاربردی آشنا می‌کند" , master:"علی حمیدی" , participants:"۱۳۶" , price:"۹۰۰,۰۰۰", status:"تکمیل شده" , duration:"۷", prerequisites:"PYTHON"},
    {id:5 , category:"soft-skill" , img:"images/famous-course-img18.webp" , title:"تکنیک های قرارداد نویسی برای برنامه نویسان" , caption:"دوره تکنیک‌های قرارداد نویسی سبزلرن، مهارت‌های تنظیم قراردادهای حرفه‌ای را به برنامه‌نویسان و فریلنسرها آموزش می‌دهد تا شرایط همکاری را به‌طور شفاف و حرفه‌ای مشخص کنند." , master:"سایه حمیدی" , participants:"۱۶۸" , price:"۸۰۰,۰۰۰", status:"تکمیل شده" , duration:"۴۲" , prerequisites:"علاقه به برنامه نویسی"},
    {id:6 , category:"python" , img:"images/famous-course-img22.webp" , title:"Data Visualization با پایتون" , caption:"ما تو دنیایی زندگی میکنیم که همه چیز به سمت سریع تر شدن حرکت میکنه. برای ذهن انسان درک اشکال خیلی راحت تر از اعداد و ارقام هست چون ذهن برای درک اعداد به پردازش بیشتری نسبت به اشکال نیاز داره." , master:"محسن رضایی" , participants:"۵۲۳" , price:"۸۰۰,۰۰۰", status:"تکمیل شده" , duration:"۳۴" , prerequisites:"HTML , CSS"},
    {id:7 , category:"back-end" , img:"images/famous-course-img9.webp" , title:"ساخت ربات تلگرام با NodeJS" , caption:"دوره ربات تلگرام با Nodejs یه فرصت فوق‌العاده برای یادگیری نحوه‌ی ساخت ربات‌های تلگرامی با استفاده از یکی از قدرتمندترین فریم‌ورک‌های جاوااسکریپت، یعنی Node.js هست." , master:"زهرا حمیدی" , participants:"۶۹۳" , price:"۱,۴۵۰,۰۰۰", status:"تکمیل شده", duration:"۹۲" , prerequisites:"علاقه به برنامه نویسی"},
    {id:8 , category:"front-end" , img:"images/famous-course-img4.webp" , title:"پیاده سازی داشبورد های حرفه ای با CSS و JS" , caption:"این دوره فرصتی فوق‌العاده برای ارتقاء مهارت‌های فرانت اند شماست. با یادگیری از جدیدترین تکنیک‌ها، انیمیشن‌ها ، ابزارهای پیشرفته و کتابخونه ها، به دنیای داشبوردهای شگفت‌آور با HTML، CSS و JavaScript" , master:"امیرحسین حمیدی" , participants:"۵۶۷" , price:"۱,۸۰۰,۰۰۰", status:"تکمیل شده", duration:"۱۹" , prerequisites:"آشنایی با برنامه نویسی"},
    {id:9, category:"front-end" , img:"images/famous-course-img5.webp" , title:"آموزش جامع و پروژه محور Tailwind Css + دیزاین فروشگاه قهوه" , caption:"tailwind css یک فریمورک Utility First هست، این فریمورک متشکل از یکسری کلاس های آماده ای هست که شما برای پیاده سازی هرگونه دیزاینی میتونید ازش بهره ببرید. توجه کنید که tailwind css هیچ کامپوننت اماده ای در خود ندارد." , master:"رضا حسینی" , participants:"۲۶۵۸" , price:"۱,۲۰۰,۰۰۰", status:"تکمیل شده", duration:"۹۱", prerequisites:"آشنایی با برنامه نویسی"},
    {id:10 , category:"soft-skill" , img:"images/famous-course-img21.webp" , title:"تجربیات طلایی من در کار تیمی" , caption:"در ساده ترین حالت شما اگه تو یک شرکت برنامه نویسی استخدام بشین، وارد تیم اون شرکت میشین و باید مهارت هایی رو در زمینه کار تیمی داشته باشین تا دچار یسری اذیت‌ها و مشکلات نشین." , master:"علی حمیدی" , participants:"۴۳۰" , price:"۵۰۰,۰۰۰", status:"تکمیل شده", duration:"۱۴", prerequisites:"آشنایی با برنامه نویسی"},
    {id:11 , category:"system" , img:"images/famous-course-img16.webp" , title:"آموزش جامع لینوکس برای برنامه نویسان" , caption:"لینوکس یک سیستم‌عامل قدرتمند، امن و متن‌باز است که در سرورها، توسعه نرم‌افزار، امنیت سایبری و سرویس‌های ابری به‌طور گسترده‌ای کاربرد دارد. بنابراین همه برنامه‌نویسان و کسانی‌که می‌خواهند در حوزه IT سرعت پیشرفت خود را افزایش دهند" , master:"مهدی حمیدی" , participants:"۱۵۱" , price:"۲,۱۴۰,۰۰۰", status:"تکمیل شده" , duration:"۲۹", prerequisites:"آشنایی با برنامه نویسی"},
    {id:12 , category:"back-end" , img:"images/famous-course-img10.webp" , title:"آموزش ساخت ربات تلگرام با PHP" , caption:"توی دوره فوق‌العاده جذاب و کاربردی ساخت ربات تلگرام با php، به دنیای عجیب و جذاب ربات نویسی به طرز کاملا متفاوتی وارد میشین؛ این دوره با ارائه سرفصل‌های جذاب و پروژه‌های عملی، منتظر شماست!" , master:"الناز حمیدی" , participants:"۵۳۱" , price:"۱,۱۰۰,۰۰۰", status:"تکمیل شده" , duration:"۶۴", prerequisites:"آشنایی با برنامه نویسی"},
    {id:13 , category:"python" , img:"images/famous-course-img23.webp" , title:"بهینه نویسی کد ها در پایتون" , caption:"همه میدونیم که زبان برنامه نویسی پایتون یه زبان خیلی جذاب، راحت و همینطور کاربردیه.  قبل از اینکه بخواین این دوره رو ببینید اگر دوره آموزش پایتون رو ندیدین حتما دوره رو ببینید که خیلی خیلی بهتون کمک خواهد کرد " , master:"علی حمیدی" , participants:"۹۹۹" , price:"۷۰۰,۰۰۰", status:"تکمیل شده", duration:"۲۱", prerequisites:"علاقه به برنامه نویسی"},
    {id:14 , category:"hack-security" , img:"images/famous-course-img15.webp" , title:"آموزش پایتون با گرایش امنیت | پایتون سیاه" , caption:"زبان برنامه نویسی پایتون بخاطر سادگی. قدرت. و جامعه اماری بالایی که داره تونسته جز محبوب ترین زبان های برنامه نویسی هکرها قرار بگیره.و تا به امروز ابزار های قدرتمندی در زمینه هک و امنیت با پایتون توسعه داده شده" , master:"مهدی رضایی" , participants:"۱۷۹۰" , price:"۱,۱۵۰,۰۰۰", status:"تکمیل شده" , duration:"۴۲", prerequisites:"علاقه به برنامه نویسی"},
    {id:15 , category:"front-end" , img:"images/famous-course-img7.webp" , title:"آموزش جاوا اسکریپت مقدماتی تا پیشرفته + مینی پروژه" , caption:"آموزش جاوا اسکریپت برای تمامی افرادی ک قصد ورود به زبان برنامه نویسی دارند مناسب می باشد . خصوصا برای علاقه مندان به حوزه فرانت همان طور که می دانید جاوا اسکریپت یکی از زبان های برنامه نویسی محبوب و پر طرفدار است" , master:"علی حمیدی" , participants:"۹۲۳" , price:"۳,۲۰۰,۰۰۰", status:"تکمیل شده", duration:"۹", prerequisites:"علاقه به برنامه نویسی"},
    {id:16 , category:"python" , img:"images/famous-course-img24.webp" , title:"پروژه های کاربردی با پایتون" , caption:"قبل از اینکه بخواین این دوره رو ببینید اگر دوره آموزش پایتون رو ندیدین حتما دوره رو ببینید که خیلی خیلی بهتون کمک خواهد کرد یکی از مهم ترین کار هایی که باید برا یادگیری و تسلط بیشتر به یک زبان برنامه نویسی انجام بشه،" , master:"محسن رضایی" , participants:"۱۷۸۹" , price:"۹۰۰,۰۰۰", status:"تکمیل شده", duration:"۴۲", prerequisites:"علاقه به برنامه نویسی"},
    {id:17 , category:"back-end" , img:"images/famous-course-img11.webp" , title:"دوره پروژه محور لایووایر (Livewire Master)" , caption:"دوره لایووایر مستر (Livewire Master) یک دوره‌ی تمام عیار برای فول‌استک فریمورکِ لایووایر است که هدف آن آموزش قدم به قدم، عمیق و مفهومی (Conceptional) تکنولوژی لایووایر می‌باشد." , master:"سایه حمیدی" , participants:"۹۳" , price:"۹۰۰,۰۰۰", status:"تکمیل شده", duration:"۶۴", prerequisites:"علاقه به برنامه نویسی"},
    {id:18 , category:"front-end" , img:"images/famous-course-img6.webp" , title:"آموزش حرفه ای طراحی قالب با Html Css FlexBox از صفر" , caption:"بعد از یادگیری Html,Css  افراد با یک چالش بزرگی رو به رو میشن، اونم اینه که نمیتونن توسط دانشی که یادگرفتن یک طرحی رو از صفر به کد تبدیل کنن و وبسایتی رو پیاده سازی کنن، توی این دوره به شما از صفر اصول طراحی قالب " , master:"علی حمیدی" , participants:"۲۹۸۱" , price:"۱,۵۰۰,۰۰۰", status:"تکمیل شده", duration:"۷۶", prerequisites:"علاقه به برنامه نویسی"},
    {id:19 , category:"soft-skill" , img:"images/famous-course-img20.webp" , title:"تکنیک های قیمت گذاری پروژه های فریلنسری" , caption:"تو این دوره ‌5 پروژه فریلنسری از سایت های مختلف رو همراه با فیچرهایی که دارن و شرایط پروژه به طور کامل آنالیز و تعیین قیمت میکنیم تا بعد از گذروندن دوره هر پروژه‌ای که تو حوزه فریلنسری گرفتین رو به راحتی بتونین تعیین قیمت کرده" , master:"محمد حمیدی" , participants:"۸۱۲" , price:"۳۷۰,۰۰۰", status:"تکمیل شده", duration:"۱۸", prerequisites:"علاقه به برنامه نویسی"},
    {id:20 , category:"python" , img:"images/famous-course-img26.webp" , title:"آموزش پایتون با گرایش امنیت | پایتون سیاه" , caption:"زبان برنامه نویسی پایتون بخاطر سادگی. قدرت. و جامعه اماری بالایی که داره تونسته جز محبوب ترین زبان های برنامه نویسی هکرها قرار بگیره.و تا به امروز ابزار های قدرتمندی در زمینه هک و امنیت با پایتون توسعه داده شده" , master:"الناز حمیدی" , participants:"۴۸۵۹" , price:"۱,۹۰۰,۰۰۰", status:"تکمیل شده" , duration:"۶۵", prerequisites:"علاقه به برنامه نویسی"},
    {id:21 , category:"python" , img:"images/famous-course-img25.webp" , title:"آموزش پایتون مقدماتی تا پیشرفته" , caption:"حیف نیست محبوب ترین زبان برنامه نویسی دنیا رو  ناقص و بی هدف یادبگیری؟ آموزش پایتون از زیر صفر و پایه ترین مبحث شروع میشه تا تخصصی ترین و پیشرفته ترین مباحث، هر قسمت کلی پروژه و تمرین حل می کنیم، برات تکلیف مشخص می کنیم" , master:"سایه حمیدی" , participants:"۴۳۹۰" , price:"۳,۲۰۰,۰۰۰", status:"تکمیل شده", duration:"۱۱", prerequisites:"علاقه به برنامه نویسی"},
    {id:22 , category:"soft-skill" , img:"images/famous-course-img19.webp" , title:"مستر فریلنس - هنر همکاری موفق با کارفرماها" , caption:"موفق بودن یک وکیل به تعداد بالای پرونده هاش نیست. بلکه به تعداد کیفیت پرونده هاییه که حل کرده. یک برنامه نویس هم برای رشد و ترقی نیاز به هزار کارفرما نداره. بلکه نیاز به چند کارفرمای با کیفیت داره !" , master:"علی حمیدی" , participants:"۲۸۰۸" , price:"۹,۱۰۰,۰۰۰", status:"تکمیل شده", duration:"۳۷", prerequisites:"علاقه به برنامه نویسی"},
    {id:23 , category:"back-end" , img:"images/famous-course-img12.webp" , title:"آموزش پروژه محور فریمورک Fastify" , caption:"Fastify یه فریمورک وب سریع و کم‌ حجم برای ساخت برنامه‌های تحت وب با Node.js هست.Fastify یکی از فریم‌ورک‌های جدید در صنعت توسعه وب هست که با ویژگی‌های قدرتمندش تونسته محوبیت خوبی رو بدست بیاره!" , master:"علی حمیدی" , participants:"۵۸۵" , price:"۹۰۰,۰۰۰", status:"تکمیل شده", duration:"۶۱", prerequisites:"علاقه به برنامه نویسی"},
    {id:24 , category:"system" , img:"images/famous-course-img17.webp" , title:"آموزش Docker از صفر مطلق!" , caption:"داکر یک پلتفرم متن باز برای طراحی؛ انتقال؛ استقرار و اجرای نرم افزار ها تحت مفهومی به نام Container می‌باشد، در این دوره به صورت تخصصی مفاهیم و مباحث داکر را فرا خواهیم گرفت.", master:"احسان حمیدی" , participants:"۲۵۶" , price:"۸۰۰,۰۰۰", status:"تکمیل شده", duration:"۷"},
    {id:25 , category:"back-end" , img:"images/famous-course-img13.webp" , title:"Api نویسی با Nodejs" , caption:"شما بعد از گذروندن این دوره میتونین واسه پروژه هایی که تو زمینه فرانت‌اند توسعه میدین، هر Api که نیاز بود رو بنویسین و بدون این که نیازی به برنامه نویس بک‌اند داشته باشین، کلی نمونه کار واقعی با لاجیک و عملکرد کامل تو رزومتون داشته باشین." , master:"محسن دهقان" , participants:"۲۵۳" , price:"۱,۱۵۰,۰۰۰", status:"تکمیل شده" , duration:"۴۸", prerequisites:"علاقه به برنامه نویسی"},
    {id:26 ,category:"front-end" , img:"images/frontend-course-1.webp" , title:"آموزش جامع webpack" , caption:"فرقی نمی‌کند که شما یک برنامه نویس تازه کار و یا حرفه‌ای باشید؛ در هرصورت به وب‌پک نیاز خواهید داشت. وب‌پک یکی از ابزارهای حیاتی در توسعه نرم‌افزارهای تحت‌وب می‌باشد که در این دوره به طور کامل مورد بحث و بررسی قرار خواهد گرفت." , master:"سایه حمیدی" , participants:"۲۲۶" , price:"۱,۳۹۰,۰۰۰"  , status:"تکمیل شده" , duration:"۱۷" , prerequisites:" HTML , CSS"},
    {id:27 ,category:"front-end" , img:"images/frontend-course-2.webp" , title:"مینی پروژه های تخصصی با Html، Css + دیزاین اختصاصی" , caption:"عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره شرکت کنید و هدف دوره رو بهتر بتونید درک کنید. افراد بعد از یادگیری Css نیازه که مینی پروژه های مختلفی رو بزنن" , master:"علی حمیدی" , participants:"۱۰۹۰" , price:"۹۲۰,۰۰۰" , status:"تکمیل شده" , duration:"۵۲" , prerequisites:"JS"},
    {id:28 ,category:"front-end" , img:"images/frontend-course-3.webp" , title:"آموزش تخصصی Redux مقدماتی تا پیشرفته" , caption:"ریداکس یه کتابخونه پراستفاده واسه مدیریت حالت های مختلف یه برنامه جاوا اسکریپتیه که تو بازار کار ری‌اکت یکی از مهم‌ترین تکنولوژی‌ها واسه توسعه دهنده های فرانت‌اند به حساب میاد" , master:"محمد حمیدی" , participants:"۱۵۵۹" , price:"۱,۸۰۰,۰۰۰" , status:"تکمیل شده" , duration:"۱۱" , prerequisites:"HTML , CSS"},
    {id:29 ,category:"front-end" , img:"images/frontend-course-4.webp" , title:"آموزش Canvas برای برنامه نویسان فرانت‌اند" , caption:"Canvas عمدتا برای پیاده سازی و رسم نمودار های مختلف جهت تحلیل اطلاعات، بک‌گراندها و افکت های متنی انیمیشنی، شکل های گرافیکی مختلف، بازی سازی و ... استفاده میشه" , master:"امیرحسین حمیدی" , participants:"۶۷۷" , price:"۵۷۵,۰۰۰" , status:"تکمیل شده" , duration:"۳۲" , prerequisites:"علاقه به برنامه نویسی"},
    {id:30 ,category:"front-end" , img:"images/frontend-course-5.webp" , title:"آموزش پروژه محور CSS Grid + پروژه لندینگ رستوران" , caption:"Css grid یک ماژول مربوط به css است . کارکردن با این ماژول بسیار جذاب است و با امکانات و پراپرتی هایی که در اختیار ما قرار میدهد نه تنها مشکلات گذشته در طراحی و ریسپانسیو را نخواهیم داشت بلکه میتوانیم خیلی راحت تر از قبل کد بزنیم و لذت ببریم. پس یادتان باشد با کمک css grid میتوانیم صفحات وب سایت خود را به آسانی پیاده" , master:"رضا حسینی" , participants:"۳۰۱۲" , price:"۲۰۰,۰۰۰" , status:"تکمیل شده" , duration:"۱۹" , prerequisites:"علاقه به برنامه نویسی"},
    {id:31 ,category:"front-end" , img:"images/frontend-course-6.webp" , title:"آموزش PWA بصورت پروژه محور" , caption:"کلمه PWA مخفف Progressive Web App بوده و یه تکنولوژی تقریبا جدیده که میتونیم بهمون اجازه میده وب‌سایتی که توسعه دادیم رو به شکل یه اپلیکیشن دربیاریم که روی اندروید، IOS، ویندوز، مک و ... قابل نصبه." , master:"علی حمیدی" , participants:"۲۴۲۹" , price:"۲,۳۰۰,۰۰۰" , status:"تکمیل شده" , duration:"۵۱" , prerequisites:"علاقه به برنامه نویسی"},
    {id:32 ,category:"front-end" , img:"images/frontend-course-7.webp" , title:"آموزش FlexBox پروژه محور + پروژه سایت هاستینگ" , caption:"اگر شما به حوزه طراحی و برنامه نویسی وب علاقه داشته باشید قطعا در مورد صفحه آرایی، ریسپانسیو سازی، فلکس باکس و ... شنیده اید. در این دوره قصد داریم ماژول فلکس باکس را به صورت پروژه محور و از صفر تا صد به شما آموزش دهیم." , master:"احسان حمیدی" , participants:"۱۱۴۰۲" , price:"۳۰۰,۰۰۰" , status:"تکمیل شده" , duration:"۹" , prerequisites:"علاقه به برنامه نویسی"},
    {id:33 ,category:"front-end" , img:"images/frontend-course-8.webp" , title:"کد نویسی سریع html css با Emmet" , caption:"داخل هر کدام از IDE و ادیتور ها ابزاری به اسم Emmet وجود دارد که در برنامه نویسی و توسعه وب، کمک بسیار زیادی به شما می کند. در این دوره با مفهوم و کاربرد Emmet آشنا شده و آن را به طور کامل از صفر تا صد یاد خواهید گرفت" , master:"سایه حمیدی" , participants:"۲۹۱۵" , price:"۱۵۰,۰۰۰" , status:"تکمیل شده" , duration:"۲۴" , prerequisites:"علاقه به برنامه نویسی"},
    {id:34 ,category:"javascript" , img:"images/js-course-1.webp" , title:"توسعه افزونه مرورگر با جاوااسکریپت" , caption:"ما در این دوره، توسعه افزونه های مرورگر رو با پیاده سازی پروژه های کاربردی با دانش فرانت اند مون از طریق زبان های HTML CSS JS یاد میگریم" , master:"رمضان حمیدی" , participants:"۱۴۳۲" , price:"۳,۹۰۰,۰۰۰" , status:"تکمیل شده" , duration:"۱۹" , prerequisites:"HTML , CSS"},
    {id:35 ,category:"javascript" , img:"images/js-course-2.webp" , title:"توسعه کتابخانه با جاوااسکریپت" , caption:"توسعه کتابخانه، نمونه کاری قوی برای رزومه شما است و این دوره آموزشی یادگیری چنین مهارتی رو با نکات کاربردی و کد نویسی و همچنین ساخت مستندات جامع و پروژه عملی فراهم میکند" , master:"محسن احمدی" , participants:"۴۸۱۳" , price:"۳,۴۹۰,۰۰۰" , status:"تکمیل شده" , duration:"۲۴" , prerequisites:"HTML , CSS"},
    {id:36 ,category:"javascript" , img:"images/js-course-3.webp", title:"آموزش Next.js بصورت پروژه محور" , caption:"نکست یه فریمورک مبتنی بر ری‌اکت هست که امروزه تو بازار کار یکی از مهم‌ترین تکنولوژی‌ها برای توسعه دهنده های ری‌اکت به حساب میاد. نکست رو میشه مکمل ری‌اکت دونست. یعنی هر چی که ری‌اکت داره نکست هم داره" , master:"" , participants:"۵۴۰" , price:"۱,۲۹۰,۰۰۰" , status:"تکمیل شده" , duration:"۳۰" , prerequisites:"علاقه برنامه نویسی"},
    {id:37 ,category:"javascript" , img:"images/js-course-4.webp" , title:"پروژه های تخصصی با جاوا اسکریپت برای بازار کار" , caption:"هیچ فرقی نمیکنه شما با چه کتابخونه یا فریمورکی کار میکنین. تو این دوره یاد میگیری به عنوان یه برنامه نویس فرانت‌اند چطور یه پروژه بزرگ و واقعی رو منیج کنی. حالا این پروژه میتونه با ویو، ری‌اکت یا حتی جاوا اسکریپت خام باشه." , master:"سایه حمیدی" , participants:"۵۸۹" , price:"۲,۱۳۰,۰۰۰" , status:"تکمیل شده" , duration:"۵۳" , prerequisites:"HTML , CSS"},
    {id:38 ,category:"javascript" , img:"images/js-course-5.webp" , title:"آموزش کاربردی ESlint" , caption:"ESLint برای برنامه‌نویسان جاوااسکریپت طراحی شده تا با این ابزار، کدهایی بهینه و بدون خطا بنویسند. نحوه پیکربندی و استفاده از آن در پروژه‌های مختلف آموزش داده می‌شود." , master:"مرتضی راد" , participants:"۳۲۹" , price:"۹۵۰,۰۰۰" , status:"تکمیل شده" , duration:"۲۹" , prerequisites:"علاقه برنامه نویسی"},
    {id:39 ,category:"javascript" , img:"images/js-course-6.webp" , title:"آموزش 20 کتابخانه جاوااسکریپت برای بازار کار" , caption:"امروزه کتابخانه‌ها کد نویسی را خیلی آسان و لذت بخش تر کرده اند. به قدری که حتی امروزه هیچ شرکت برنامه نویسی پروژه های خود را با Vanilla Js پیاده سازی نمی کند و همیشه از کتابخانه ها و فریمورک های موجود استفاده می کند." , master:"علی حمیدی" , participants:"۱۹۳۴" , price:"۱,۳۵۰,۰۰۰" , status:"تکمیل شده" , duration:"۴۵" , prerequisites:"HTML , CSS"},
    {id:40 ,category:"javascript" , img:"images/js-course-7.webp" , title:"پروژه های خلاقانه با جاوااسکریپت" , caption:"ممکن است در خیلی از وب سایت ها و شبکه های مجازی پروژه هایی را دیده باشید که خیلی خیلی خوشگل و زیبا هستند و با خودتان بگویید “من کِی میتونم همچین چیزی پیاده سازی کنم؟” یا اصلا فکر کنید" , master:"سایه حمیدی" , participants:"۴۹۱۳" , price:"۸۰۰,۰۰۰" , status:"تکمیل شده" , duration:"۱۶" , prerequisites:"علاقه برنامه نویسی"},
    {id:41 ,category:"wordpress" , img:"images/wordpress-course-1.webp" , title:"آموزش جامع توسعه وردپرس" , caption:"آموزش وردپرس یکی از بهترین مسیرها برای ورود به دنیای طراحی سایت است، چرا که وردپرس پرکاربردترین و محبوب‌ترین سیستم مدیریت محتوا است که در دنیای طراحی سایت حرف اول را می‌زند" , master:"امیرحسین حمیدی" , participants:"۴۲۹" , price:"۱,۸۵۰,۰۰۰" , status:"تکمیل شده" , duration:"۴۴" , prerequisites:"علاقه برنامه نویسی"},
    {id:42 , img:"images/discount-course-img1.webp" , title:"آموزش HTML رایگان مقدماتی تا پیشرفته" , caption:"آموزش HTML، اولین قدم شروع طراحی وبسایت است. HTML یه زبان نشانه گذاری هست که با کمک اون میتونی تگ هایی بنویسی تا سایت رو روی اون تگ ها پیاده کنی. همونجوری که هیچ موجودی نمیتونه بدون اسکلت زندگی کنه،", master:"علی حمیدی" , participants:"۱۹۲۰۲" , oldPrice:"۲۰۰,۰۰۰" , price:"۵۰,۰۰۰" , discountValue:75 ,status:"تکمیل شده" , duration:"۶۷" , prerequisites:"علاقه به برنامه نویسی"},
    {id:43 , img:"images/discount-course-img2.webp" , title:"آموزش Css رایگان مقدماتی تا پیشرفته" , caption:"حالا وقتشه که با دوره آموزش CSS به اسکلتی که با html ساختی پوست و گوشت بدی تا تبدیل به یه موجود زیبا بشه. توی دوره مقدماتی تا پیشرفته Css یاد میگیری چطوری به المانای خشک و بی جون HTML زیبایی ببخشی.", master:"سایه حمیدی" , participants:"۳۹۲۱" , oldPrice:"۳,۵۰۰,۰۰۰" , price:"۱۲۰,۰۰۰" , discountValue:60 ,status:"تکمیل شده" , duration:"۹۰" , prerequisites:"علاقه به برنامه نویسی"},
    {id:44 , img:"images/discount-course-img3.webp" , title:"شروع فرانت اند وب + مثال های جامع و زنده" , caption:"اگه میخوای طراحی وب رو اصولی شروع کنی و با اصطلاحات  و مقدمات این حوزه آشنا نیستی ! پس جای درستی اومدی ! زود ثبت نام کن و وارد سکوی پرتاب شو", master:"امیرحسین حمیدی" , participants:"۳۸۳۱" , oldPrice:"۳۰۰,۰۰۰" , price:"۸۰,۰۰۰" , discountValue:55 , status:"تکمیل شده" , duration:"۴۵" , prerequisites:"JS"},
    {id:45 , img:"images/discount-course-img4.webp" , title:"آموزش ۲۰ کتابخانه کاربردی ReactJS برای بازارکار" , caption:"‌کتابخانه‌ها باعث افزایش سرعت کدنویسی میشن. در حدی که تو بازار کار هم از کتابخانه های مختلفی برای توسعه پروژه‌ها استفاده میشه. تو این دوره 20 کتابخانه پرکاربرد و پراستفاده ری‌اکت که تو بازار کار برای توسعه پروژه های مختلفی استفاده میشه ", master:"محمدرضا احمدی" , participants:"۸۲۹" , oldPrice:"۱,۳۰۰,۰۰۰" , price:"۸۳۰,۰۰۰" , discountValue:40 , status:"تکمیل شده" , duration:"۴۲" , prerequisites:"HTML , CSS"},
    {id:46 , img:"images/discount-course-img5.webp" , title:"پروژه های تخصصی با جاوا اسکریپت برای بازار کار" , caption:"هیچ فرقی نمیکنه شما با چه کتابخونه یا فریمورکی کار میکنین. تو این دوره یاد میگیری به عنوان یه برنامه نویس فرانت‌اند چطور یه پروژه بزرگ و واقعی رو منیج کنی. حالا این پروژه میتونه با ویو، ری‌اکت یا حتی جاوا اسکریپت خام باشه.", master:"محمد حمیدی" , participants:"۳۵۹" , oldPrice:"۱,۵۶۰,۰۰۰" , price:"۹۹۰,۰۰۰" , discountValue:30 ,status:"تکمیل شده" , duration:"۸" , prerequisites:"HTML , CSS"},
    {id:47 , img:"images/discount-course-img6.webp" , title:"توسعه افزونه مرورگر با جاوااسکریپت" , caption:"ما در این دوره، توسعه افزونه های مرورگر رو با پیاده سازی پروژه های کاربردی با دانش فرانت اند مون از طریق زبان های HTML CSS JS یاد میگریم", master:"سایه حمیدی" , participants:"۳۲۱", oldPrice:"۲,۱۰۰,۰۰۰" , price:"۱,۰۵۰,۰۰۰" , discountValue:55 , status:"تکمیل شده" , duration:"۴۹" , prerequisites:"علاقه به برنامه نویسی"},
    {id:48 , img:"images/discount-course-img7.webp" , title:"توسعه کتابخانه با جاوااسکریپت" , caption:"توسعه کتابخانه، نمونه کاری قوی برای رزومه شما است و این دوره آموزشی یادگیری چنین مهارتی رو با نکات کاربردی…", master:"رضا اسعدی" , participants:"۱۲۹" , oldPrice:"۹۰۰,۰۰۰" , price:"۵۶۰,۰۰۰" , discountValue:"۳۵%" , status:"تکمیل شده" , duration:"۴۵" , prerequisites:"علاقه به برنامه نویسی"},
    {id:49 , img:"images/discount-course-img8.webp" , title:"آموزش Next.js بصورت پروژه محور" , caption:"نکست یه فریمورک مبتنی بر ری‌اکت هست که امروزه تو بازار کار یکی از مهم‌ترین تکنولوژی‌ها برای توسعه دهنده های ری‌اکت به حساب میاد. نکست رو میشه مکمل ری‌اکت دونست.", master:"سایه حمیدی" , participants:"۷۹۳" , oldPrice:"۴,۳۵۰,۰۰۰" , price:"۱,۲۹۰,۰۰۰" , discountValue:80, status:"تکمیل شده" , duration:"۲۷" , prerequisites:"JS"},
    {id:50 , img:"images/discount-course-img9.webp" , title:"آموزش کاربردی Typescript بصورت پروژه محور" , caption:"تایپ اسکریپت یه زبون برنامه نویسیه که توسط مایکروسافت ارائه شده و یسری قابلیت و فیچر های جدید رو با هدف افزایش پرفورمنس و کاهش احتمال خطا به جاوا اسکریپت اضافه کرده.", master:"محسن محمدپور" , participants:"۲۰۳" , oldPrice:"۱,۹۰۰,۰۰۰" , price:"۱,۶۵۰,۰۰۰" , discountValue:20 , status:"تکمیل شده" , duration:"۱۹" , prerequisites:"HTML , CSS"},
]

let searchParametrs = location.search.split("=")[1]

let deciredCourse = famousCoursesListItems.find(function(course)
{
    return course.id == searchParametrs
})
video.setAttribute("poster" , deciredCourse.img)
courseMainCaptionImg.setAttribute("src" , deciredCourse.img)
courseTitle.innerText = deciredCourse.title
courseCaption.innerText = deciredCourse.caption
coursePrice.innerText = deciredCourse.price
courseStatus.innerText = deciredCourse.status
courseDuration.innerText = deciredCourse.duration + " ساعت"
coursePrerequisites.innerText = deciredCourse.prerequisites
courseStudentNumber.innerText = deciredCourse.participants
courseTeacherName.innerText = deciredCourse.master + " | مدرس دوره"

// تابع تبدیل ثانیه به فرمت زمان
function formatTime(seconds) {
  if (isNaN(seconds)) return '0:00';
  
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
// آپدیت زمان و پیشرفت
function updateTime() {
  const currentTime = video.currentTime;
  const duration = video.duration;
  
  timeDisplay.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
  
  if (!isNaN(duration)) {
    const progress = (currentTime / duration) * 100;
    progressBar.style.width = `${progress}%`;
  }
}
// رویدادهای ویدیو
video.addEventListener('timeupdate', updateTime);
video.addEventListener('loadedmetadata', updateTime);
video.addEventListener('ended', () => {
  playBtn.textContent = '▶';
});
// کنترل‌ها
playBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playBtn.textContent = '❚❚';
  } else {
    video.pause();
    playBtn.textContent = '▶';
  }
});

stopBtn.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
  playBtn.textContent = '▶';
});

// کلیک روی نوار پیشرفت
document.querySelector('.progress-container').addEventListener('click', (e) => {
  if (isNaN(video.duration)) return;
  
  const pos = (e.pageX - e.target.offsetLeft) / e.target.offsetWidth;
  video.currentTime = pos * video.duration;
});

courseSeeMoreInfoBtn.addEventListener("click" , function()
{
  courseMainCaption.classList.toggle("course-seemoreinfo-toggle")
  if(courseMainCaption.classList.contains("course-seemoreinfo-toggle"))
  {
    document.querySelector(".course-seemoreinfo-btn span").innerText = "مشاهده کمتر توضیحات"
  }
  else
  {
    document.querySelector(".course-seemoreinfo-btn span").innerText = "مشاهده بیشتر توضیحات"
  }
})
let courseConceptDataBase = [
  {id:1 , lessonNumber:6 , time:"1h 42m" , concept:"معرفی - پاسخ به سوالات متداول"},
  {id:2 , lessonNumber:12 , time:"1h 0m" , concept:"زیر و بم شی‌گرایی"},
  {id:3 , lessonNumber:4 , time:"2h 22m" , concept:"مبانی ریاضی مورد نیاز"},
  {id:4 , lessonNumber:18 , time:"3h 14m" , concept:"فصل دوم: تحلیل الگوریتم ها"},
  {id:5 , lessonNumber:3 , time:"3h 51m" , concept:"فصل سوم: بازگشت (Recursion)"},
  {id:6 , lessonNumber:5 , time:"2h 37m" , concept:"الگوریتم حریصانه"},
  {id:7 , lessonNumber:7 , time:"1h 52m" , concept:"برنامه نویسی پویا"},
  {id:8 , lessonNumber:11 , time:"59m" , concept:"لیست پیوندی"},
  {id:9 , lessonNumber:4 , time:"1h 50m" , concept:"مدیریت کاربران و دسترسی‌ها"},
  {id:10 , lessonNumber:9 , time:"1h 6m" , concept:"مدیریت دسترسی فایل‌ها و فولدرها"},
  {id:11 , lessonNumber:13 , time:"2h 5m" , concept:"اسکریپت‌نویسی با Bash"},
]
let courseSubConceptDataBase = [
  {id:1 , time:"04:26" , content:"معیار تجزیه و تحلیل الگوریتم ها"},
  {id:2 , time:"25:23" , content:"بدترین حالت، بهترین حالت و حالت متوسط"},
  {id:3 , time:"12:54" , content:"الگوریتم جستجوی خطی (ساده)"},
  {id:4 , time:"25:75" , content:"یک مثال برای O در الگوریتم های اسنپ"},
  {id:5 , time:"31:45" , content:"نماد O به زبان ریاضی*"},
  {id:6 , time:"22:03" , content:"حل مثال و تمرین برای کد برنامه نویسی"},
  {id:7 , time:"08:42" , content:"درک الگوریتم بازگشتی با مثال فاکتوریل "},
  {id:8 , time:"03:34" , content:"مثال برای روش حدس و استقرا*"},
  {id:9 , time:"53:03" , content:"مثال برنامه نویسی برای روش جایگذاری با تکرار"},
  {id:10 , time:"32:01" , content:"حل روابط بازگشتی با روش درخت بازگشت"},
  {id:11 , time:"41:31" , content:"مقدمه ای بر روش قضیه اصلی"},
  {id:12 , time:"04:42" , content:"حل روابط بازگشتی با روش قضیه اصلی"},
  {id:13 , time:"13:43" , content:"حل روابط بازگشتی با روش تغییر متغیر"},
  {id:14 , time:"34:53" , content:"الگوریتم بازگشتی در علم و زندگی (اختیاری)"},
  {id:15 , time:"53:23" , content:"نحوه ذخیره سازی در حافظه کامپیوتر"},
  {id:16 , time:"10:42" , content:"تابع درجه سوم و چندجمله ای ها"},
  {id:17 , time:"11:43" , content:"مفهوم مشتق و فرمول های آن"},
  {id:18 , time:"53:02" , content:"حل دو معادله دو مجهولی"},
  {id:19 , time:"06:40" , content:"جمع یابی (نماد سیگما)"},
  {id:20 , time:"19:42" , content:"یک مثال قبل از شروع"},
]
courseConceptDataBase.forEach(function(concept)
{
  courseConceptList.insertAdjacentHTML("afterbegin" , "<li class='course-concept__list-item flex'><div class='course-concept__list-item-content flex'><h3 class='course-concept__list-item__title'>"+concept.concept+"</h3><div class='flex'><span class='course-concept__list-item__time course-lesson'>"+concept.time+"</span><span class='dott-symbol'> . </span><span class='course-concept__list-item__concept course-lesson'>"+concept.lessonNumber+"lesson</span><?xml version='1.0' encoding='utf-8'?><svg class='course-concept-arrow-icon' width='20px' height='20px' viewBox='0 -19.04 75.804 75.804' xmlns='http://www.w3.org/2000/svg'><g id='Group_67' data-name='Group 67' transform='translate(-798.203 -587.815)'><path id='Path_59' data-name='Path 59' d='M798.2,589.314a1.5,1.5,0,0,1,2.561-1.06l33.56,33.556a2.528,2.528,0,0,0,3.564,0l33.558-33.556a1.5,1.5,0,1,1,2.121,2.121l-33.558,33.557a5.53,5.53,0,0,1-7.807,0l-33.56-33.557A1.5,1.5,0,0,1,798.2,589.314Z' fill='#0c2c67'/>  </g></svg></div></div></li>")
  courseConceptSubtemHandler(concept.lessonNumber)
})
function courseConceptSubtemHandler(lessonNumber)
{
      let item = document.querySelector(".course-concept__list-item")
      let content = courseSubConceptDataBase.slice(0,lessonNumber)
      
      for(let i = 0 ;i < lessonNumber;i++)
        {  

        item.insertAdjacentHTML("beforeend" , "<div class='course-concept__list-item-video flex'> <div class='flex'> <span class='video-number flex'>"+(i + 1)+"</span>  <span class='course-vdeo__title'>"+content[i].content+"</span>    </div>    <div class='flex'>        <span class='course-video__time'>"+content[i].time+"</span><?xml version='1.0' encoding='utf-8'?>        <svg width='30px' height='30px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>        <circle cx='12' cy='12' r='10' stroke='#1C274C' stroke-width='1.5'/>        <path  d='M15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868L9 9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941Z' stroke='#1C274C' stroke-width='1.5'/> </svg> </div></div>")
      }
}
courseConceptList.addEventListener("click" , function(e)
{
  const lessonBoxContent = e.target.closest('.course-concept__list-item-content')
  const lessonBoxItem = e.target.closest('.course-concept__list-item')
  if(lessonBoxContent)
   {
      lessonBoxContent.classList.toggle("course-concept--active")
      lessonBoxItem.classList.toggle("course-concept-item--active")
    }
} )
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

addToBasketCardBtn.addEventListener("click" , e =>
{
    let basketProduct = {
      id: deciredCourse.id,
      category:deciredCourse.category,
      img:deciredCourse.img,
      title:deciredCourse.title,
      caption:deciredCourse.caption,
      master:deciredCourse.master,
      oldPrice:deciredCourse.oldPrice,
      newPrice:deciredCourse.price,
      discountValue : deciredCourse.discountValue
    }   
    
    let productDb = indexedDB.open("products" , 8)
    productDb.addEventListener("success" , e =>
        {
            db = e.target.result
            let lx = db.transaction("info" , "readwrite")
            let request = lx.objectStore('info')
            let addItem = request.add(basketProduct)
            addItem.addEventListener("success" , e =>
            {
              addtocardMessage.style.left = "5rem"
            setTimeout(function()
            {
              addtocardMessage.style.left = "-40rem"

            },3000)
            }
            )
            addItem.addEventListener("error", e => {
                addtocardMessage.innerHTML = `<svg fill="#ff0000" height="60px" width="60px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.76 511.76" xml:space="preserve" stroke="#ff0000"><path d="M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048 c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251 l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251 c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165 c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0 c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z"/> </g> </g> </g></svg><div class="addtocard-message__title"><h2>خطا</h2><p>این دوره قبلا اظافه شده است</p></div>`
                addtocardMessage.style.borderBottom = ".5rem solid red"
                addtocardMessage.style.left = "5rem"
                setTimeout(function()
                {
                  addtocardMessage.style.left = "-40rem"
    
                },3000)
              })
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
function getBasketProductData() 
{
  let lx = db.transaction("info" , "readonly")
  let request = lx.objectStore("info")
  let productData = request.getAll()
}