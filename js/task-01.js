const categories = document.querySelectorAll("#categories .item");

console.log("Number of categories:", categories.length);

categories.forEach(category => {
    // Get the category name from the <h2> element
    const categoryName = category.querySelector("h2").textContent;
    
    // Count the number of elements in the category
    const elementsCount = category.querySelectorAll("ul > li").length;
    
    console.log(`\nCategory: ${categoryName}`);
    console.log("Elements:", elementsCount);
})
