window.addEventListener("load",()=>{

    firebase.database().ref("Product").child("Bike").once("child_added",(data)=>{
        let bikedata=data.val();
        console.log(bikedata)
        let bikearray=[];
        for(var key in bikedata)
        {
            console.log(bikedata[key])
            bikearray.push(bikedata[key])
        }
        bikearray.map((v,i)=>{
            bike.innerHTML=
            `
            <tr>
            <td>:<img src="https://firebasestorage.googleapis.com/v0/b/olx-app-c5227.appspot.com/o/userimages%2Fbike.png?alt=media&token=ee9068a2-6cbe-4861-b2b5-18bf51d3aada" width="200" height="100"></td>
            <td>:${v.Productid}</td>
            <td>${v.ProductDes}</td>
            <td>${v.ProductCategory}</td>
            <td>${v.productprice}</td>
            </tr>
            `
        })

    })


    firebase.database().ref("Product").child("Car").once("value",(data)=>{
        let Cardata=data.val();
        console.log(Cardata)
        let Cararray=[];
        for(var key in Cardata)
        {
            console.log(Cardata[key])
            Cararray.push(Cardata[key])
        }
        Cararray.map((v,i)=>{
            car.innerHTML=
            `
            <tr>
            <td><img src="https://firebasestorage.googleapis.com/v0/b/olx-app-c5227.appspot.com/o/userimages%2Fcar.jpg?alt=media&token=c76027fc-8847-406a-b220-ace65481c4d4" width="200" height="100"></td>
            <td>:${v.Productid}</td>
            <td>${v.ProductDes}</td>
            <td>${v.ProductCategory}</td>
            <td>${v.productprice}</td>
            
            </tr>
            `
        })

    })










    firebase.database().ref("Product").child("Cell Phone").once("child_added",(data)=>{
        let mobiledata=data.val();
        console.log(mobiledata)
        let mobilearray=[];
        for(var key in mobiledata)
        {
            console.log(mobiledata[key])
            mobilearray.push(mobiledata[key])
        }
        mobilearray.map((v,i)=>{
            mobile.innerHTML=
            `
            <tr>
            <td>:<img src="https://firebasestorage.googleapis.com/v0/b/olx-app-c5227.appspot.com/o/userimages%2Fmobile.jpg?alt=media&token=6c51e5cc-f075-4c5d-bf3e-9c63cf5707e8" width="200" height="100"></td>
            <td>:${v.Productid}</td>
            <td>${v.ProductDes}</td>
            <td>${v.ProductCategory}</td>
            <td>${v.productprice}</td>
            
            </tr>
            `
        })

    })












    firebase.database().ref("Product").child("Laptop").once("child_added",(data)=>{
        let Laptopdata=data.val();
        console.log(Laptopdata)
        let Laptoparray=[];
        for(var key in Laptopdata)
        {
            console.log(Laptopdata[key])
            Laptoparray.push(Laptopdata[key])
        }
        Laptoparray.map((v,i)=>{
            Laptop.innerHTML=
            `
            <tr>
            <td>:<img src="https://firebasestorage.googleapis.com/v0/b/olx-app-c5227.appspot.com/o/userimages%2Flap.jpg?alt=media&token=a9305788-65a8-4e73-94f5-feb257962b23" width="200" height="100"></td>
            <td>:${v.Productid}</td>
            <td>${v.ProductDes}</td>
            <td>${v.ProductCategory}</td>
            <td>${v.productprice}</td>
            
            </tr>
            `
        })

    })









    firebase.database().ref("Product").child("Tablet").once("child_added",(data)=>{
        let tabletdata=data.val();
        console.log(tabletdata)
        let tabletarray=[];
        for(var key in tabletdata)
        {
            console.log(tabletdata[key])
            tabletarray.push(tabletdata[key])
        }
        tabletarray.map((v,i)=>{
            Tablet.innerHTML=
            `
            <tr>
            <td>:<img src="https://firebasestorage.googleapis.com/v0/b/olx-app-c5227.appspot.com/o/userimages%2Ftablet.jpg?alt=media&token=04c7148c-759b-4f67-a87a-e4b5f20d426b" width="200" height="100"></td>
            <td>:${v.Productid}</td>
            <td>${v.ProductDes}</td>
            <td>${v.ProductCategory}</td>
            <td>${v.productprice}</td>
            
            </tr>
            `
                })

    })
})
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

