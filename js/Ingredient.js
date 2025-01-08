let navtab = $('.nav-tab').width()
let Close = document.getElementById('Close')
$('#Close').click(() => {
   let left = $('.sidbar').css('left')
  
   if (left == "0px") {
      
      $('#Close').removeClass('open-close-icon fa-2x fa-x')
     $('#Close').addClass('fa-solid open-close-icon fa-align-justify fa-2x')
      $('.nav-tab').css('display', 'flex')
      $('.sidbar').animate({ left: "-256px" }, 1000)
   } else {
      $('.sidbar').animate({ left: "0px" }, 1000)
      $('#Close').addClass('open-close-icon fa-2x fa-x')
   
   }

})
let allpost=[]
async function demo(){
   
   let data =await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
   let res=await data.json()
   allpost=res.meals
   console.log(allpost)
   display()
}
demo()

function display(){
let box=``
for(let i=0;i<allpost.length;i++){
   box+=`
   <div class="col-md-3 text-white mb-4">
    <div class="rounded-2 text-center cursor-pointer" onclick="openIngredient('${allpost[i].strIngredient}')">
        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
        <h3>${allpost[i].strIngredient}</h3>
    </div>
</div> 
      `
}
document.getElementById('posts').innerHTML=box
}
$(window).on('load',function(){
   $('#spinner').fadeOut(1000,function(){
      $('body').css('overflow','auto')
   })
})
function openIngredient(ingredient) {
    
   window.location.href = `details.html?ingredient=${encodeURIComponent(ingredient)}`;
}
new WOW().init();