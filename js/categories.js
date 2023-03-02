function printCategories(){
    categories = document.getElementById('categories');
    if(categories.style.display == "none") {
        categories.style.display = "";
    } else{
        categories.style.display = "none";
    }
}