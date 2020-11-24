class Renderer{
    render(data){
        const source = $("#content").html()
        const template = Handlebars.compile(source)
        const recipes = template({relevantData:data})
        $("#mainContent").append(recipes)
    }
}