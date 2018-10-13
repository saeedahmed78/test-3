let count = 0;
let images   = ["book.png", "book2.webp", "book3.webp"]

function initialize(){
    for(let i = 0; i<3; i++){
    document.querySelector(".container").innerHTML +=`
    <div class="card border-secondary mb-3 card-center">
    <div class="img-div">
        <img src="images/${images[i]}" alt="" class="book-img">
        <div class="card-body">
        <h4 class="card-title">How to Stop Worrying and Start Living </h4>
        <p class="cart-textt1">by <span class="cart-textt2">Dale Carnegie</span></p>
        <p class="card-text">Through Dale Carnegie’s six-million-copy bestseller recently revised, millions of people have been helped to overcome the worry habit. Dale Carnegie offers a set of practical formulas you can put to work today. In our fast-paced world—formulas that will last a lifetime!</p>
        
        <div class="btn-groups">
            <div class="price">
                <p class="amount">Price:<span class="total-amount">  $5.99</span> </p>	
            </div>    
        <div class="two-btn">	
    
        <div class="form-group">
            
                <div class="form-group">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                    <span class="input-group-text input-btn" id = "btnn${i}" onclick="countsneg()">-</span>
                    </div>
                    <input type="text" class="form-control input" style="width: 70px" id = "btnn${i}" >
                    <div class="input-group-append">
                    <span class="input-group-text input-btn" id = "btnn${i}" onclick="counts()">+</span>
                    </div>
                </div>
                </div>
            </div>



        </div>
        </div>
        </div>
    </div>
    </div>
    
    <div class="alert alert-dismissible alert-primary">
            <span class="total-amoutn-dis">Total Amount:  </span> <span class="pricess"> </span>
    </div>   

    `
}


}

function counts(){
    count++;

    document.querySelector(".input").value = count;
    document.querySelector(".pricess").innerHTML = "$ " + parseFloat(count*5.99).toFixed(2);

}
function countsneg(){
    
 if(count>0){
    count--;
    document.querySelector(".input").value = count;
    document.querySelector(".pricess").innerHTML = " $ " + parseFloat(count*5.99).toFixed(2);
 }    
}    