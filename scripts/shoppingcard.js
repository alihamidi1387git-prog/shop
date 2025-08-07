import {changeMode , modeHandler , navBar , pageModeIcon , lightIcon , mobilePageModeIcon ,mobileLightIcon ,darkIcon ,mobileDrkIcon } from './funcs.js'
const menuToggleBtn = document.querySelector(".hamburger-menu")
const mobileCategoryItem = document.querySelectorAll(".mobile-category__item")
const shoppingCardProductList = document.querySelector(".shoppingcard-product__list")

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
function getBasketProductData() 
{
  let lx = db.transaction("info" , "readonly")
  let request = lx.objectStore("info")
  let productData = request.getAll()
  productData.addEventListener("success" , e =>
  {
    shoppingCardProductList.innerHTML = ""
    basketCourseHandler(productData)
  }
)

}

function basketCourseHandler(courseData)
{
  courseData.result.forEach(item =>
    {
      if(item.oldPrice == undefined)
        {
          shoppingCardProductList.insertAdjacentHTML(`beforeend` , `<li data-id='${item.id}' class="shoppingcard-product__list-item flex "><div class="flex"><a href="#"><img class="course-img" src="${item.img}" alt="courses image"></a><div class="course-details"><h3>${item.title}</h3><p>${item.master}</p></div></div><div class="course-left-details flex"><div class="course-price"><div class="new-price flex"><p>${item.newPrice}</p><span>تومان</span></div></div><svg class="delete-icon" width="20px" height="20px" viewBox="0 0 1024 1024" fill="#000" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M32 241.6c-11.2 0-20-8.8-20-20s8.8-20 20-20l940 1.6c11.2 0 20 8.8 20 20s-8.8 20-20 20L32 241.6zM186.4 282.4c0-11.2 8.8-20 20-20s20 8.8 20 20v688.8l585.6-6.4V289.6c0-11.2 8.8-20 20-20s20 8.8 20 20v716.8l-666.4 7.2V282.4z" fill="" /><path d="M682.4 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM367.2 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM524.8 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM655.2 213.6v-48.8c0-17.6-14.4-32-32-32H418.4c-18.4 0-32 14.4-32 32.8V208h-40v-42.4c0-40 32.8-72.8 72.8-72.8H624c40 0 72.8 32.8 72.8 72.8v48.8h-41.6z" fill="" /></svg></div></li>`) 
        }
        else
        {
          shoppingCardProductList.insertAdjacentHTML(`beforeend` , `<li data-id='${item.id}' class="shoppingcard-product__list-item flex "><div class="flex"><a href="#"><img class="course-img" src="${item.img}" alt="courses image"></a><div class="course-details"><h3>${item.title}</h3><p>${item.master}</p></div></div><div class="course-left-details flex"><div class="course-price"><p class="old-price"><del>${item.oldPrice}</del></p><div class="new-price flex"><p>${item.newPrice}</p><span>تومان</span></div></div><svg class="delete-icon" width="20px" height="20px" viewBox="0 0 1024 1024" fill="#000" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M32 241.6c-11.2 0-20-8.8-20-20s8.8-20 20-20l940 1.6c11.2 0 20 8.8 20 20s-8.8 20-20 20L32 241.6zM186.4 282.4c0-11.2 8.8-20 20-20s20 8.8 20 20v688.8l585.6-6.4V289.6c0-11.2 8.8-20 20-20s20 8.8 20 20v716.8l-666.4 7.2V282.4z" fill="" /><path d="M682.4 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM367.2 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM524.8 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM655.2 213.6v-48.8c0-17.6-14.4-32-32-32H418.4c-18.4 0-32 14.4-32 32.8V208h-40v-42.4c0-40 32.8-72.8 72.8-72.8H624c40 0 72.8 32.8 72.8 72.8v48.8h-41.6z" fill="" /></svg></div></li>`) 
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
      }
      )
  }
}

let regex = /ali/

console.log(regex.test("ali hamidi"));
