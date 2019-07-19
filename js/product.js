localStorage.getItem("user");   
 //console.log(userid)
 function savedata(){
    // console.log("clicked me signUp")
    // console.log(firebase)
    let userid = firebase.auth().currentUser.uid;
    if(userid!==null || userid!==undefined)
    {

    
    let name = document.getElementById("name").value;
    let Productid = document.getElementById("pid").value;
    let ProductDes = document.getElementById("pdes").value;
    let ProductCategory = document.getElementById("pcat").value;
    let productprice=document.getElementById("price").value
    let img = document.querySelector('#img').files[0];
    let storageRef = firebase.storage().ref().child(`userimages/${img.name}`)
    storageRef.put(img)
    .then((snapshot) => {
        var key = firebase.database().ref('Product').child('Car').push().key;
        let productobject=
        {
            Productid,
            ProductDes,
            ProductCategory,
            productprice            
        }
        
        snapshot.ref.getDownloadURL().then((sanpUrl) => {
            productobject.img = sanpUrl
            console.log(productobject)
            let userid = firebase.auth().currentUser.uid;
          //  firebase.database().ref("Product/"+userid).push(productobject)
            let select=document.getElementById("pcat").value
            if(select=="Car")
            {
                firebase.database().ref("Product/").child(`Car/${key}`).set(productobject)

            }
            else if(select=="Bike")
            {
                firebase.database().ref("Product/").child(`Bike/${key}`).push(productobject)

            }            

            else if(select=="Cell Phone")
            {
                firebase.database().ref("Product/").child(`Cell Phone/${key}`).push(productobject)

            }
            else if(select=="Laptop")
            {
                firebase.database().ref("Product/").child(`Laptop/${key}`).push(productobject)

            }
            else if(select=="Tablet")
            {
                firebase.database().ref("Product/").child(`Tablet/${key}`).push(productobject)

            }
                                swal({
                                    title: "Product",
                                    text: "Add Product Successfully",
                                    icon: "success",
                                    button: "Done",
                                });
                                // window.location = '../pages/signin.html'
                            
                        
                            
                    })

                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    swal({
                        title: "Connection Error",
                        text: errorMessage,
                        icon: "warning",
                        button: "OK",
                    });
                    // ...
                });

            }
            else
            {
                swal({
                    title: "Login",
                    text: "Please login",
                    icon: "error",
                    button: "OK",
                });

            }        
}


function logout()
{
    
            firebase.auth().signOut().then(function () {
                localStorage.setItem("userAuth", JSON.stringify({ user: 'null' }))
                window.location = "../Pages/signin.html"
            }).catch(function (error) {
                // An error happened.
                var errorMessage = error.message;
                swal({
                    title: "Internet Error",
                    text: errorMessage,
                    icon: "warning",
                    button: "OK",
                });
            });
        }


    
                
            


