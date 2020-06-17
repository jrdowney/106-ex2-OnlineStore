// Global variables

var items=[];

function init(){
    console.log("Admin page");
    $('#btn-register').on('click',function(){
        register();
    });
}

window.onload=init;

// object constructor
class Item{
    constructor(code,title,price,description,category,image){
        this.code=code;
        this.title=title;
        this.price=price;
        this.description=description;
        this.category=category;
        this.image=image;
    }
}
// register function

function register(){
    //get from the form the values
    var code=$("#code").val();
    var title=$("#title").val();
    var code=$("#price").val();
    var code=$("#description").val();
    var code=$("#category").val();
    var code=$("#image").val();
    //create the object
    var newItem = new Item(code,title,price,description,category,image);
    //push the item to items array
    items.push(newItem);
    //display on the console the item
    console.log(newItem);
    console.log(items);
}   