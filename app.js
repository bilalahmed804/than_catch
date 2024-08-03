function fetchData(){
    setTimeout(function(){

    },2000)
}



fetch("https://covid-api.com/api/regions")
.then(async function(res){
    return await res.json()
})
.then(function(data){
    console.log(data);
})


new Promise(function(res , rej){
    setTimeout(function(){


    },2000)
})