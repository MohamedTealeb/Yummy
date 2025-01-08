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
let Search = []; 
async function fetchMeals() {
    try {
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='); 
        let data = await response.json();
        Search = data.meals; 
        console.log(Search); 
    } catch (error) {
        console.error("Error fetching meals:", error);
    }
}

fetchMeals();

function search() {
    let searchTerm = document.getElementById('InputSearch').value.trim().toLowerCase();
    let box2 = '';

    if (searchTerm) {
        for (let i = 0; i < Search.length; i++) {
            if (Search[i].strMeal.toLowerCase().includes(searchTerm)) {
                box2 += `
                <div class="col-md-3">
                    <div class="item m-4">
                    
                        <img class="w-100" src="${Search[i].strMealThumb}" alt="">
                        <div class="item-caption">
                            <h3>${Search[i].strMeal}</h3>
                        </div>
                    </div>
                </div>`;
            }
        }
    }

    document.getElementById('SearchIteam').innerHTML = box2 || '<p>No meals found for this name.</p>'; 
}

// Function to search by first letter using a different API
async function letter() {
    let firstLetter = document.getElementById('InputSearchByLetter').value.trim();
    let box2 = '';

    if (firstLetter) {
        try {
            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
            let data = await response.json();
            const meals = data.meals; 

            if (meals) {
                for (let i = 0; i < meals.length; i++) {
                    box2 += `
                    <div class="col-md-3">
                        <div class="item m-4">
                            <img class="w-100" src="${meals[i].strMealThumb}" alt="">
                            <div class="item-caption">
                                <h3>${meals[i].strMeal}</h3>
                            </div>
                        </div>
                    </div>`;
                }
            } else {
                box2 = '<p>No meals found for this letter.</p>';
            }
        } catch (error) {
            console.error("Error fetching meals by letter:", error);
            box2 = '<p>Error fetching meals.</p>'; 
        }
    }

    document.getElementById('SearchIteam').innerHTML = box2; 
}

$(window).on('load',function(){
    $('#spinner').fadeOut(1000,function(){
       $('body').css('overflow','auto')
    })
 })
 new WOW().init();