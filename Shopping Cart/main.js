let shop=document.getElementById('shop')


let basket=JSON.parse(localStorage.getItem("data")) || [];


let shopItemsData=[
    {
        id:"item1",
        name:"Casual Shirt",
        price:"$15",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
        img:"1.jpg"
    },
    {
        id:"item2",
        name:"Casual Pants",
        price:"$45",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
        img:"2.jpg"
    },
    {
        id:"item3",
        name:"Casual Dress",
        price:"$150",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
        img:"3.jpg"
    },
    {
        id:"item4",
        name:"Casual Gown",
        price:"$450",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
        img:"4.jpg"
    }
]

/* We are adding id to target  */
let generateShop=()=>{
    return (shop.innerHTML=shopItemsData.map((x)=>{
        let {id,name,price,desc,img}=x
        let search = basket.find((x) => x.id === id) || [];
        return (`<div id="product-id-${id}" class="item">
        <img width="200" src=${img} />
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>${price}</h2>
                <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id="${id}" class="quantity">${search.item === undefined ? 0 : search.item}</div>         
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
        </div>`)
    }).join("")                                               //We are writing .join to remove appreance of comma from the screen check join.js*/
    )
}

generateShop()

let increment=(id)=>{
    let selectedItem=id
    console.log(selectedItem)
    let search=basket.find((x)=>x.id===selectedItem.id)
    console.log(search)

    if(search===undefined){
        basket.push({
            id:selectedItem.id,
            item:1
        })
    }else{
        search.item+=1
    }
    //console.log(basket)
    update(selectedItem.id)
    localStorage.setItem("data", JSON.stringify(basket))
}
let decrement=(id)=>{
    let selectedItem=id
    let search=basket.find((x)=>x.id===selectedItem.id)
    if (search === undefined) return;

    else if(search.item===0){
        return
    }else{
        search.item-=1
    }
    //console.log(basket)
    update(selectedItem.id)
    basket = basket.filter((x) => x.item !== 0);
    localStorage.setItem("data", JSON.stringify(basket))
}
let update=(id)=>{
    let search=basket.find((x)=>x.id===id)
    document.getElementById(id).innerHTML=search.item
    calculation()
}

let calculation=()=>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
    console.log("calculation function is running")
}


calculation();



/*Calculation explanation

let a=[1,2,3,4,5,6,7,8,9,10]
a.reduce((x,y)=> x+y,0)
initially x is 1 and y is 2
then x is 3 and y is 3
then x is 6 and y is 4
then x is 10 and y is 5

*/

