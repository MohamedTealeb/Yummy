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

   
let allpost = [];

async function demo(id) {
    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        let res = await response.json();
        console.log("Meal Details Response:", res);
        allpost = res.meals || []; 
        if (allpost.length > 0) {
            display();
        } else {
            console.error("No meal found for the given ID.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function display() {
    if (allpost.length > 0) {
        const meal = allpost[0]; 
        let ingredients = ``

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients += `<li class="alert alert-info m-2 p-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
    }
  }

  let tags = meal.strTags?.split(",")
 
  if (!tags) tags = []

  let tagsStr = ''
  for (let i = 0; i < tags.length; i++) {
    tagsStr += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`}
        const box = `
            
                <div class="col-md-4">
                    <img class="w-100 rounded-3" src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <h2 class="text-white">${meal.strMeal}</h2>
                </div>
                    <div class="col-md-8  text-white">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                <h3>Recipes :</h3>
             <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${ingredients}
               </ul>

                <h3>Tags :</h3>
                 <ul class="list-unstyled d-flex g-3 flex-wrap">
                     ${tagsStr}
             </ul>

                <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
            </div>
    
        `;
        document.getElementById('det').innerHTML = box; 
    }
}


const urlParams = new URLSearchParams(window.location.search);
const mealId = urlParams.get('id');
if (mealId) {
    demo(mealId);
} 

const category = urlParams.get('category');

if (category) {
   
    fetchCategoryDetails(category);
}

async function fetchCategoryDetails(category) {
    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        let res = await response.json();
        console.log("Category Details Response:", res);
        // Process and display the category details
        displayCategoryDetails(res.meals);
    } catch (error) {
        console.error("Error fetching category details:", error);
    }
}
async function fetchAreaDetails(Area) {
    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`);
        let res = await response.json();
        console.log("Category Details Response:", res);
        // Process and display the category details
        displayAreaDetails(res.meals);
    } catch (error) {
        console.error("Error fetching category details:", error);
    }
}

function displayCategoryDetails(meals) {
    let box = ``;
    if (meals) {
        for (let i = 0; i < meals.length; i++) {
            box += `
            <div class="col-md-3">
                <div id="item"  class="item m-2"> 
                <a href="details.html?id=${meals[i].idMeal}" class="image-link">
                    <img class="w-100" src="${meals[i].strMealThumb}" alt="" id="imagge">
                   
                    <div class="item-caption text-black">
                        <h3>${meals[i].strMeal}</h3>
                    </div>
                      </a>
                </div>
            </div>  
            `;
        }
    } else {
        box = `<p>No meals found for this category.</p>`;
    }
    document.getElementById('det').innerHTML = box;
} 
function displayAreaDetails(Area) {
    let box4= ``;
    if (Area) {
        for (let i = 0; i < Area.length; i++) {
            box4 += `
            <div class="col-md-3">
                <div id="item"  class="item m-2"> 
                <a href="details.html?id=${Area[i].idMeal}" class="image-link">
                    <img class="w-100" src="${Area[i].strMealThumb}" alt="" id="imagge">
                   
                    <div class="item-caption text-black">
                        <h3>${Area[i].strMeal}</h3>
                    </div>
                      </a>
                </div>
            </div>  
            `;
        }
    } else {
        box4= `<p>No meals found for this category.</p>`;
    }
    document.getElementById('det').innerHTML = box4;
} 
const urlParamss = new URLSearchParams(window.location.search);
const area = urlParamss.get('area'); 

const ingredient = urlParams.get('ingredient');

if (ingredient) {
    fetchIngredientDetails(ingredient);
}

async function fetchIngredientDetails(ingredient) {
    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        let res = await response.json();
        console.log("Ingredient Details Response:", res);
        displayIngredientDetails(res.meals);
    } catch (error) {
        console.error("Error fetching ingredient details:", error);
    }
}

function displayIngredientDetails(ingredients) {
    let box = ``;
    if (ingredients) {
        for (let i = 0; i < ingredients.length; i++) {
            box += `
              <div class="col-md-3">
                <div id="item"  class="item m-2"> 
                <a href="details.html?id=${ingredients[i].idMeal}" class="image-link">
                    <img class="w-100" src="${ingredients[i].strMealThumb}" alt="" id="imagge">
                   
                    <div class="item-caption text-black">
                        <h3>${ingredients[i].strMeal}</h3>
                    </div>
                      </a>
                </div>
            </div> 
            `;
        }
    } else {
        box = `<p>No details found for this ingredient.</p>`;
    }
    document.getElementById('det').innerHTML = box;
} 
new WOW().init();