   let navtab = $('.nav-tab').width()
   let Close = document.getElementById('Close')
   $('#Close').click(() => {
      let left = $('.sidbar').css('left')
      console.log(left)
   
      if (left == "0px") {
         $('.nav-tab').css('display', 'flex')
         $('#Close').removeClass('open-close-icon fa-2x fa-x')
      $('#Close').addClass('fa-solid open-close-icon fa-align-justify fa-2x')
      
         $('.sidbar').animate({ left: "-256px" }, 1000)
      } else {
         $('.sidbar').animate({ left: "0px" }, 1000)
         $('#Close').addClass('open-close-icon fa-2x fa-x')
      
      }

   })


 
 

let allpost=[]
async function demo(){
   
   let data =await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
   let res=await data.json()
   allpost=res.meals
   
   display()
}
demo()

function display(){
let box=``
for(let i=0;i<allpost.length;i++){
   box+=`
       <div class="col-md-3">
                <div id="item"  class="item m-2"> 
                <a href="details.html?id=${allpost[i].idMeal}" class="image-link">
                    <img class="w-100" src="${allpost[i].strMealThumb}" alt="" id="imagge">
                   
                    <div class="item-caption text-black">
                        <h3>${allpost[i].strMeal}</h3>
                    </div>
                      </a>
                </div>
            </div>`
}
document.getElementById('posts').innerHTML=box
}

$(window).on('load',function(){
   $('#spinner').fadeOut(1000,function(){
      $('body').css('overflow','auto')
   })
})


// async function fetchDetails(id) {
//     let data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    
//     let res = await data.json();
   
//     const meal = res.meals[0];
   
//     document.getElementById('po').innerText = meal.strMeal;
//     document.getElementById('mealImage').src = meal.strMealThumb;

// }

// fetchDetails();