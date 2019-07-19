function signup()
{
    let name=document.getElementById("name").value;
    console.log(name)
    let email=document.getElementById("email").value;
    console.log(email)
    let password=document.getElementById("password").value;
    console.log(password)
    let password2=document.getElementById("password2").value;
    console.log(password2)
    if(password!==password2)
    {
        swal({
            title:"Passsword",
            text:"Passsword not match",
            icon:"error",
            button:"Ok"
        })  
    }
    else
    {

    
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(()=>
    {
        let userobject=
        {
         name,
         email,
         password
        }
        swal({
            title:"Login",
            text:"Create Account Successfully",
            icon:"success",
            button:"Ok"
        })

        window.location="./Pages/signin.html"

    })
.catch(function(error) {
        
        var errorCode = error.code;
        var errorMessage = error.message;
 
        swal({
            type: 'error',
            title: 'Oops...',
            icon:"error",
            text: errorMessage,
    
          })
      });
 
}
}
function signin()
{
    let email=document.getElementById("email").value;
    console.log(email)
    let password=document.getElementById("password").value;
    console.log(password)
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((success)=>{
        console.log(success)
    localStorage.setItem("user",JSON.stringify(success));
    let userobject=
        {
         email,
         password
        }
let userid=firebase.auth().currentUser.uid;
console.log(userid)
    firebase.database().ref("user/"+userid).set(userobject)
    .then(()=>{
        swal({
            title:"Sign In",
            text:"Successfully Login",
            icon:"success",
            button:"ok"
        })
       window.location="../Pages/Product.html"
    })
    })
   

    .catch(function(error) {
        
        var errorCode = error.code;
        var errorMessage = error.message;
        swal({
            type: 'error',
            title: 'Oops...',
            text: errorMessage,
            button:"Ok"
    
          })
      });
    
    
//     var user = firebase.auth().currentUser;

// if (user) {
//   // User is signed in.
// } else {
//   // No user is signed in.
// }
    

 }
 function fb()
 {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            let user = result.user;
            let userData = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                uid: user.uid
            }
            firebase.database().ref(`user/${userData.uid}`).set(userData)
                .then(() => {
                    window.location="../Pages/Home.html"

                })
        }).catch(function (error) {
            console.log("error===>", error)
        });
}
 