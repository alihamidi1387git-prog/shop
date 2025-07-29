// /* <!-- 💕 به نام خداند روزی ده رهنمای 💕 -->
// <!-- 💕 Thanks For Merciful God 💕 -->
// <!-- 💕 كل ما أملكه يأتي من الله 💕 --> */
const pageModeIcon = document.querySelector(".page-mode")
const navBar = document.querySelector(".nav")
const lightIcon = `<?xml version="1.0" encoding="utf-8"?><svg width="40px" height="40px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const mobilePageModeIcon = document.querySelector(".mobile-page-mode")
const mobileLightIcon = '<svg height="30px" width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5S7 9.2 7 12zM12 9c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3S10.3 9 12 9zM13 5V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1S13 5.6 13 5zM19.1 4.9c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4C19.5 6 19.5 5.3 19.1 4.9zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1S21.6 11 21 11zM17.7 16.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L17.7 16.2zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1S11 18.4 11 19zM4.9 19.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4C4.5 18 4.5 18.7 4.9 19.1zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3C2.4 11 2 11.4 2 12zM6.3 4.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4C6.5 8 6.8 8.1 7.1 8.1S7.6 8 7.8 7.8c.4-.4.4-1 0-1.4L6.3 4.9z"/></svg>'
const darkIcon = "<?xml version='1.0' encoding='iso-8859-1'?><svg fill='#fff' height='35px' width='35px' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 49.739 49.739' xml:space='preserve'><path stroke='#fff' stroke-width='3px' d='M25.068,48.889c-9.173,0-18.017-5.06-22.396-13.804C-3.373,23.008,1.164,8.467,13.003,1.979l2.061-1.129l-0.615,2.268c-1.479,5.459-0.899,11.25,1.633,16.306c2.75,5.493,7.476,9.587,13.305,11.526c5.831,1.939,12.065,1.492,17.559-1.258v0c0.25-0.125,0.492-0.258,0.734-0.391l2.061-1.13l-0.585,2.252c-1.863,6.873-6.577,12.639-12.933,15.822C32.639,48.039,28.825,48.888,25.068,48.889z M12.002,4.936c-9.413,6.428-12.756,18.837-7.54,29.253c5.678,11.34,19.522,15.945,30.864,10.268c5.154-2.582,9.136-7.012,11.181-12.357c-5.632,2.427-11.882,2.702-17.752,0.748c-6.337-2.108-11.473-6.557-14.463-12.528C11.899,15.541,11.11,10.16,12.002,4.936z'/></svg>"
const mobileDrkIcon = '<?xml version="1.0" encoding="iso-8859-1"?><svg fill="#000" height="25px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 49.739 49.739" xml:space="preserve"><path stroke="#000" stroke-width="1px" d="M25.068,48.889c-9.173,0-18.017-5.06-22.396-13.804C-3.373,23.008,1.164,8.467,13.003,1.979l2.061-1.129l-0.615,2.268c-1.479,5.459-0.899,11.25,1.633,16.306c2.75,5.493,7.476,9.587,13.305,11.526c5.831,1.939,12.065,1.492,17.559-1.258v0c0.25-0.125,0.492-0.258,0.734-0.391l2.061-1.13l-0.585,2.252c-1.863,6.873-6.577,12.639-12.933,15.822C32.639,48.039,28.825,48.888,25.068,48.889z M12.002,4.936c-9.413,6.428-12.756,18.837-7.54,29.253c5.678,11.34,19.522,15.945,30.864,10.268c5.154-2.582,9.136-7.012,11.181-12.357c-5.632,2.427-11.882,2.702-17.752,0.748c-6.337-2.108-11.473-6.557-14.463-12.528C11.899,15.541,11.11,10.16,12.002,4.936z"/></svg>'

function changeMode()
{
    document.documentElement.classList.toggle("dark-mode")
    if(document.documentElement.classList.contains("dark-mode"))
    {
        localStorage.setItem("theme" , "dark")
        pageModeIcon.innerHTML = lightIcon
        mobilePageModeIcon.innerHTML = mobileLightIcon + "<p>مود روشن</p>"
    }
    else
    {
        localStorage.setItem("theme" , "light")
        pageModeIcon.innerHTML = darkIcon
        mobilePageModeIcon.innerHTML = mobileDrkIcon + "<p>مود تاریک</p>"
    }
}
function modeHandler()
{
    let theme = this.localStorage.getItem("theme")
    if(theme == "dark")
    {
        document.documentElement.classList.add("dark-mode")
        pageModeIcon.innerHTML = lightIcon
        mobilePageModeIcon.innerHTML = mobileLightIcon + "<p>مود روشن</p>"
    }
}
function navBarScrolledStyles ()
{
    if(window.scrollY > 100)
        {
            navBar.style.cssText = "margin:2rem; border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.3);   box-shadow: 0 0.8rem 3.2rem rgba(0, 0, 0, 0.1),inset 0 0.1rem 0 rgba(255, 255, 255, 0.5),inset 0 -0.1rem 0 rgba(255, 255, 255, 0.1),inset 0 0 0.2rem 0.1rem rgba(255, 255, 255, 1);"
        }
        else
        {
            navBar.style.cssText = ""
        }    
}

export {changeMode , modeHandler , navBarScrolledStyles , navBar , pageModeIcon , lightIcon , mobilePageModeIcon ,mobileLightIcon ,darkIcon ,mobileDrkIcon}