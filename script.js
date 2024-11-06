function links(){
    var productBtn = document.querySelector("#product")
    var productDiv = document.querySelector("#product-page")
    var useCaseBtn = document.querySelector("#use-case")
    var useCaseDiv = document.querySelector("#use-case-page")
    var aboutBtn = document.querySelector("#about")
    var aboutDiv = document.querySelector("#about-page")

    var flag = 0
    productBtn.addEventListener("click",function(){
        if(flag == 0){
            productDiv.style.display = "flex"
            flag = 1
        }else{
            productDiv.style.display = "none"
            flag = 0
        }
    })
    useCaseBtn.addEventListener("click",function(){
        if(flag == 0){
            useCaseDiv.style.display = "flex"
            flag = 1
        }else{
            useCaseDiv.style.display = "none"
            flag = 0
        }
    })
    aboutBtn.addEventListener("click",function(){
        if(flag == 0){
            aboutDiv.style.display = "flex"
            flag = 1
        }else{
            aboutDiv.style.display = "none"
            flag = 0
        }
    })
}
links()
gsap.to("#child-scroll",{
    transform:"translateX(-100%)",
    duration:30,
    ease:"none",
    repeat:-1
})
var heroines = document.querySelectorAll("#heroines")
var selectedVideo = document.querySelector("#side-video")
var selectedText = document.querySelector("#side-text")

var video = ""
heroines.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        video = elem.getAttribute("data-video");
        selectedVideo.setAttribute("src",video) 
    })
})
// var text = ""
// heroines.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         text = elem.getAttribute("data-text");
//         selectedText.setAttribute("textContent",text) 
//     })
// })

var swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});