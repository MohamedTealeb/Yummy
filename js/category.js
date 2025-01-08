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

let cate=[]
async function item(){
   
   let CatData =await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
   let Catres=await CatData.json()
   cate=Catres.categories
   console.log(cate)
   categories()
}
item()
function categories(){
let box3=``
for(let i=0;i<cate.length;i++){
   box3+=`
       <div class="col-md-3">
                <div class="item m-2"onclick="openCategory('${cate[i].strCategory}')">
               
                    <img class="w-100" src="${cate[i].strCategoryThumb}" alt="">
                    <div class="item-caption ">
                        <h3>${cate[i].strCategory}</h3>
                    </div>
                </div>
            </div>`
}
document.getElementById('post').innerHTML=box3
}
$(window).on('load',function(){
    $('#spinner').fadeOut(1000,function(){
       $('body').css('overflow','auto')
    })
 })

function openCategory(category) {
    
    window.location.href = `details.html?category=${encodeURIComponent(category)}`;
}
new WOW().init();