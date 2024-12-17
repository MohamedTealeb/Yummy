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

$(window).on('load',function(){
    $('#spinner').fadeOut(1000,function(){
       $('body').css('overflow','auto')
    })
 })
//  let allpost=[]
// async function demo(id){
   
//    let data =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//    console.log(data)
//    let res=await data.json()
//    console.log(res)
//    allpost=res.meals||[];
   
//    display()
// }
// demo()

//  function display(){
//     let box=``
//     for(let i=0;i=allpost.length;i++){
   

//        box+=`
//            <div class="col-md-3">
//                     <div> 
                    
//                         <img class="w-100" src="${allpost[i].strMealThumb}" alt="" >
                       
                      
//                             <h3>${allpost[i].strMeal}</h3>
                       
//                           </a>
//                     </div>
//                 </div>`
//     }
//     document.getElementById('det').innerHTML=box
//     }
//     demo()
    async function fetchDetails(id) {
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        
        let res = await data.json();
       
        const meal = res.meals[0];
       
        // document.getElementById('det').innerText = meal.strMeal;
        document.getElementById('det').src = meal.strMealThumb;
    
    }
    
    fetchDetails();

async function demo(id ) { 
    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        let res = await response.json();

        
        if (res.meals === null) {
            console.error("Invalid ID or no meal found.");
            return; 
        }

       
        const meal = res.meals[0]; 
        display(meal); 
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function display(meal) {
   
    const box = `
        <div class="col-md-3">
            <div>
                <img class="w-100" src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <h3>${meal.strMeal}</h3>
                <p>${meal.strInstructions}</p> 
            </div>
        </div>
    `;

 
    document.getElementById('det').innerHTML = box;
}

// Call the demo function with a valid ID
demo(); // Replace with a valid meal ID
