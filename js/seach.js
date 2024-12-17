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
let Search=[]
async function demo(){
    let resu =await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    let data=await resu.json()
   Search =data.meals
    console.log(Search)
   
 }
 demo()
function search(){
    let InputSearch=document.getElementById('InputSearch').value
    let box2=``
    for(let i=0;i<Search.length;i++){
        if(Search[i].strMeal.toLowerCase().includes(InputSearch.toLowerCase())){
            box2+=`

            <div class="col-md-3">
                <div class="item m-4">
                    <img class="w-100" src="${Search[i].strMealThumb}" alt="">
                    <div class="item-caption">
                        <h3>${Search[i].strMeal}</h3>
                    </div>
                </div>
            </div>`
}
}
document.getElementById('SearchIteam').innerHTML=box2
        }
        search()
        // let dataletter=[]
        // async function letter(){
        //     let firstLetter = document.getElementById('InputSearchByLetter').value;
        //     let resl=await fetch(`https://themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
        //     let datam=await resl.json()
        //     dataletter=datam.meals
        //     console.log(dataletter)
        // }
        // letter()
        $(window).on('load',function(){
            $('#spinner').fadeOut(1000,function(){
               $('body').css('overflow','auto')
            })
         })