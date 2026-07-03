    const createbtn = document.querySelector("#create");
    const formdiv= document.querySelector(".form");
    const closebtn = document.querySelector("#close");
    const form = document.querySelector("form");
    const products = document.querySelector(".products");

    const productsArr =[];



    let ui = ()=>{


        products.innerHTML = "";
        productsArr.forEach((product,index)=>{
            products.innerHTML += `<div class="product-card">
                <div class="img">
                    <img src="${product.image}" alt="">
                </div>
                <div class="text">
                    <h3>
                        ${product.productName}</h3>
                    <p>${product.description}</p>
                    <p>${product.price}</p>
                </div>
                <div class="btns">
                    <button onclick="updateProduct('${product.productName}')"id="update">Update</button>
                    <button onclick="deleteproduct(index)"id="delete">Delete</button>
                </div>
            </div>`

        })
    }



    createbtn.addEventListener("click", ()=>{
        formdiv.style.display = "flex"  ;
    });

    closebtn.addEventListener("click", ()=>{
        formdiv.style.display = "none"  ;
    })

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        // Handle form submission logic here
        let productName =event.target[0].value;
        let  description =event.target[1].value;
        let price =event.target[2].value;
        let image =event.target[3].value;

        if(productName.trim() === "" || description.trim() === "" || price.trim() === "" || image.trim() === ""){
            alert("Please fill all the fields");
            return;
        } 

        let obj ={
            productName,
            description,
            price,
            image,
        }
        productsArr.push(obj);
        ui();
        console.log(productsArr);
        form.reset();
        formdiv.style.display = "none"  ;
    });


    const updateProduct = (name) => {
        formdiv.style.display = "flex"  ;
        let product = productsArr.find((product) => product.productName === name);
        form[0].value = product.productName;
        form[1].value = product.description;
        form[2].value = product.price;
        form[3].value = product.image;
    }; 

    const deleteproduct = (index) => {
        productsArr.splice(index, 1);
        ui();
    }