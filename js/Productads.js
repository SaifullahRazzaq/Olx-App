window.addEventListener("load",()=>{
	var tt="<thead><tr> <th>Product Image</th>    <th>Product Id</th>        <th>Product Description</th> <th>Product Category</th>    <th>Product Price</th>  </tr> </thead>";
    firebase.database().ref("Product").child("Bike").on("child_added",(data)=>{
        let bikedata=data.val();
    
        for(var key in bikedata)
        {
            // console.log("ALi bhai+bikedata[key]["Productid"])
           tt +="<tr> <td><img src='https://firebasestorage.googleapis.com/v0/b/olx-app-c5227.appspot.com/o/userimages%2Fbike.png?alt=media&token=ee9068a2-6cbe-4861-b2b5-18bf51d3aada' width='200' height='100'></td>";
            tt +=" <td>"+bikedata[key]["Productid"]+"</td>";
           tt +=" <td>"+bikedata[key]["ProductDes"]+"</td>";
           tt +=" <td>"+bikedata[key]["ProductCategory"]+"</td>";
           tt +=" <td>"+bikedata[key]["productprice"]+"</td>";
        }
		   
         tt +="    </tr>";
	table.innerHTML  = tt;

    })


    firebase.database().ref("Product").child("Car").on("value",(data)=>{
        let Cardata=data.val();
        console.log(Cardata)
    
           for(var key in Cardata)
        {
     
           tt +="<tr> <td><img src='https://firebasestorage.googleapis.com/v0/b/olx-app-c5227.appspot.com/o/userimages%2Fcar.jpg?alt=media&token=c76027fc-8847-406a-b220-ace65481c4d4' width='200' height='100'></td>";
            tt +=" <td>"+Cardata[key]["Productid"]+"</td>";
           tt +=" <td>"+Cardata[key]["ProductDes"]+"</td>";
           tt +=" <td>"+Cardata[key]["ProductCategory"]+"</td>";
           tt +=" <td>"+Cardata[key]["productprice"]+"</td>";
		     tt +="    </tr>";
        }
		      
	table.innerHTML  = tt;


        })
		

    firebase.database().ref("Product").child("Cell Phone").on("child_added",(data)=>{
        let mobiledata=data.val();
        console.log(mobiledata)
        let mobilearray=[];
        for(var key in mobiledata)
        {
     
           tt +="<tr> <td><img src='https://firebasestorage.googleapis.com/v0/b/olx-app-c5227.appspot.com/o/userimages%2Fmobile.jpg?alt=media&token=6c51e5cc-f075-4c5d-bf3e-9c63cf5707e8' width='200' height='100'></td>";
            tt +=" <td>"+mobiledata[key]["Productid"]+"</td>";
           tt +=" <td>"+mobiledata[key]["ProductDes"]+"</td>";
           tt +=" <td>"+mobiledata[key]["ProductCategory"]+"</td>";
           tt +=" <td>"+mobiledata[key]["productprice"]+"</td>";
		     tt +="    </tr>";
        }
      
	table.innerHTML  = tt;


    })


    firebase.database().ref("Product").child("Laptop").on("child_added",(data)=>{
        let Laptopdata=data.val();
        console.log(Laptopdata)
        for(var key in Laptopdata)
        {
            tt +="<tr> <td><img src='https://firebasestorage.googleapis.com/v0/b/olx-app-c5227.appspot.com/o/userimages%2Flap.jpg?alt=media&token=a9305788-65a8-4e73-94f5-feb257962b23' width='200' height='100'></td>";
            tt +=" <td>"+Laptopdata[key]["Productid"]+"</td>";
           tt +=" <td>"+Laptopdata[key]["ProductDes"]+"</td>";
           tt +=" <td>"+Laptopdata[key]["ProductCategory"]+"</td>";
           tt +=" <td>"+Laptopdata[key]["productprice"]+"</td>";
		     tt +="    </tr>";
        }
        table.innerHTML  = tt;
        })










    firebase.database().ref("Product").child("Tablet").on("child_added",(data)=>{
        let tabletdata=data.val();
        for(var key in tabletdata)
        {
                
            tt +="<tr> <td><img src='https://firebasestorage.googleapis.com/v0/b/olx-app-c5227.appspot.com/o/userimages%2Ftablet.jpg?alt=media&token=04c7148c-759b-4f67-a87a-e4b5f20d426b' width='200' height='100'></td>";
            tt +=" <td>"+tabletdata[key]["Productid"]+"</td>";
           tt +=" <td>"+tabletdata[key]["ProductDes"]+"</td>";
           tt +=" <td>"+tabletdata[key]["ProductCategory"]+"</td>";
           tt +=" <td>"+tabletdata[key]["productprice"]+"</td>";
		     tt +="    </tr>";
        }
        table.innerHTML  = tt;
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


      