// /* <!-- 💕 به نام خداند روزی ده رهنمای 💕 -->
// <!-- 💕 Thanks For Merciful God 💕 -->
// <!-- 💕 كل ما أملكه يأتي من الله 💕 -->  */
import {changeMode , modeHandler , navBar , pageModeIcon , lightIcon , mobilePageModeIcon ,mobileLightIcon ,darkIcon ,mobileDrkIcon} from './funcs.js'
const menuToggleBtn = document.querySelector(".hamburger-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const articleRoadCourseName = document.querySelector(".article-road__course-name")
const articleContentImg = document.querySelector(".article-content__img")
const articleTitle = document.querySelector(".article-title")
const authorName = document.querySelector(".author-name")
const mobileCategoryItem = document.querySelectorAll(".mobile-category__item")
const mobileCategorySubmenuItem = document.querySelectorAll(".mobile-category__submenu-item")
const articleDateText = document.querySelector(".article-date__text")
const articleTitle1 = document.querySelector(".article-title__1")
const articleCategoryTitleContent = document.querySelector(".article-category__title-content")
const seeMoreCategoryBtn = document.querySelector(".see-more-category")
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
let articles = [
    {id:1 , src:"images/articles-img1.webp" , title:"آیا پایتون هنوز هم گزینه مناسبی برای شروع برنامه‌نویسی است؟" , caption:"یک روز از خواب بیدار می‌شوی و با خودت می‌گویی: وقتشه! وقتشه که بالاخره برنامه‌نویسی رو شروع کنم." , author:"علی حمیدی" ,date:"۱۴۰۴/۰۱/۲۱" },
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
let locationAridicleId = location.search.split("=")[1]

let consideredArticle = articles.find(item =>
{
    return item.id == locationAridicleId
}
)
articleRoadCourseName.textContent = consideredArticle.title
articleContentImg.setAttribute("src" , consideredArticle.src)
articleTitle.textContent = consideredArticle.title
articleTitle1.textContent = consideredArticle.title
authorName.textContent = consideredArticle.author + " | مقاله نویس"
articleDateText.textContent = consideredArticle.date
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

seeMoreCategoryBtn.addEventListener("click" ,() =>
{
    articleCategoryTitleContent.classList.toggle("article-category__title-content--active")
}
)
