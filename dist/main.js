$("#findRecipes").on("click", function(){
    const ingredient = $("#input").val().toLowerCase()
    $.get(`/recipes/${ingredient}`, function(recipes){
        console.log(recipes)
    })
})