//callback function
function greet(name, callback){
    console.log("Hello " + name);
    callback();
}
function sayGoodbye(){
    console.log("Goodbye")
}

greet("rudra", sayGoodbye);

//callback hell
//pyramid of doom
getUser(userId, function(user){
    console.log("User:", user)

    getPost(userId, function(posts){
        console.log("Posts", posts)

        getComments(posts[0], function(comments){
            console.log("Comments:", comments)
        })
    })
})


// promises
// asyn/await