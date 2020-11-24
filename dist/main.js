const renderer = new Renderer

$("#findRecipes").on("click", function(){
    const ingredient = $("#input").val().toLowerCase()
    $.get(`/recipes/${ingredient}`, function(recipes){
        console.log(recipes)
        renderer.render(recipes)
    })
})

$("#mainContent").on("click", ".image", function(){
    const firstIngredient=  $(this).closest(".recipe").find(".ingredientList").first().text()
    alert(firstIngredient)
})