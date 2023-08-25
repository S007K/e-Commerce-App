//services for maincategory
export async function createMaincategoryAPI(data) {
    var response = await fetch("/api/maincategory", {
        method: "post",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function getMaincategoryAPI() {
    var response = await fetch("/api/maincategory", {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}
export async function updateMaincategoryAPI(data) {
    var response = await fetch("/api/maincategory/" + data._id, {
        method: "put",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteMaincategoryAPI(data) {
    var response = await fetch("/api/maincategory/" + data._id, {
        method: "delete",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        }
    })
    return await response.json()
}

//services for subcategory
export async function createSubcategoryAPI(data) {
    var response = await fetch("/api/subcategory", {
        method: "post",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function getSubcategoryAPI() {
    var response = await fetch("/api/subcategory", {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}
export async function updateSubcategoryAPI(data) {
    var response = await fetch("/api/subcategory/" + data._id, {
        method: "put",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteSubcategoryAPI(data) {
    var response = await fetch("/api/subcategory/" + data._id, {
        method: "delete",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        }
    })
    return await response.json()
}


//services for Brand
export async function createBrandAPI(data) {
    var response = await fetch("/api/brand", {
        method: "post",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function getBrandAPI() {
    var response = await fetch("/api/brand", {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}
export async function updateBrandAPI(data) {
    var response = await fetch("/api/brand/" + data._id, {
        method: "put",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteBrandAPI(data) {
    var response = await fetch("/api/brand/" + data._id, {
        method: "delete",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        }
    })
    return await response.json()
}

//services for Product
export async function createProductAPI(data) {
    var response = await fetch("/api/product", {
        method: "post",
        headers: {
            
            "authorization": localStorage.getItem("token")
        },
        body: data
    })
    return await response.json()
}
export async function getProductAPI() {
    var response = await fetch("/api/product", {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}
export async function updateProductAPI(data) {
    var response = await fetch("/api/product/" + data._id, {
        method: "put",
        headers: {
            
            "authorization": localStorage.getItem("token")
        },
        body:data.data   
    })
    return await response.json()
}
export async function deleteProductAPI(data) {
    var response = await fetch("/api/product/" + data._id, {
        method: "delete",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        }
    })
    return await response.json()
}

//services for User
export async function createUserAPI(data) {
    var response = await fetch("/api/user", {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function getUserAPI() {
    var response = await fetch("/api/user", {
        method: "get",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        }
    })
    return await response.json()
}
export async function updateUserAPI(data) {
    var response = await fetch("/api/user/" + data._id, {
        method: "put",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteUserAPI(data) {
    var response = await fetch("/api/user/" + data._id, {
        method: "delete",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        }
    })
    return await response.json()
}

//services for Cart
export async function createCartAPI(data) {
    var response = await fetch("/api/cart", {
        method: "post",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function getCartAPI() {
    var response = await fetch("/api/cart/user/"+localStorage.getItem("userid"), {
        method: "get",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        }
    })
    return await response.json()
}
export async function updateCartAPI(data) {
    var response = await fetch("/api/cart/" + data._id, {
        method: "put",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteCartAPI(data) {
    var response = await fetch("/api/cart/" + data._id, {
        method: "delete",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        }
    })
    return await response.json()
}


//services for Wishlist
export async function createWishlistAPI(data) {
    var response = await fetch("/api/wishlist", {
        method: "post",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function getWishlistAPI() {
    var response = await fetch("/api/wishlist/"+localStorage.getItem("userid"), {
        method: "get",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        }
    })
    return await response.json()
}

export async function deleteWishlistAPI(data) {
    var response = await fetch("/api/wishlist/" + data._id, {
        method: "delete",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        }
    })
    return await response.json()
}


//services for checkout
export async function createCheckoutAPI(data) {
    var response = await fetch("/api/checkout", {
        method: "post",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function getCheckoutAPI() {
    var response = await fetch("/api/checkout", {
        method: "get",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        }
    })
    return await response.json()
}
export async function getCheckoutUserAPI() {
    var response = await fetch("/api/checkout/user/"+localStorage.getItem("userid"), {
        method: "get",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        }
    })
    return await response.json()
}
export async function updateCheckoutAPI(data) {
    var response = await fetch("/api/checkout/" + data._id, {
        method: "put",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteCheckoutAPI(data) {
    var response = await fetch("/api/checkout/" + data._id, {
        method: "delete",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        }
    })
    return await response.json()
}



//services for Contact
export async function createContactAPI(data) {
    var response = await fetch("/api/contact", {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function getContactAPI() {
    var response = await fetch("/api/contact", {
        method: "get",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        }
    })
    return await response.json()
}
export async function updateContactAPI(data) {
    var response = await fetch("/api/contact/" + data._id, {
        method: "put",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteContactAPI(data) {
    var response = await fetch("/api/contact/" + data._id, {
        method: "delete",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        }
    })
    return await response.json()
}

//services for Newslatter
export async function createNewslatterAPI(data) {
    var response = await fetch("/api/newslatter", {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function getNewslatterAPI() {
    var response = await fetch("/api/newslatter", {
        method: "get",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        }
    })
    return await response.json()
}
export async function deleteNewslatterAPI(data) {
    var response = await fetch("/api/newslatter/" + data._id, {
        method: "delete",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        }
    })
    return await response.json()
} 
