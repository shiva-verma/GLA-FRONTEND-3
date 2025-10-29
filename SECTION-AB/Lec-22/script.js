//callback function --> functions which is passed as an argument to another function

function greet(name, callback){
      console.log("Hello " + name);
      callback();
}

function sayGoodBye(){
    console.log("GoodBye")
}

greet("rudra", sayGoodBye);

//use of callback function

//database(all user) ---> getUser(particular id) ---> getPosts(users posts) ---> getComments();

//callback hell --> when there is multiple nested callback function

//callback --> when there is dependency
getUser(users, function(users){
    console.log("User:", users);
    
    getPosts(users.id, function(posts){
        console.log("Posts:", posts);

        getComments(posts.id, function(){
            console.log("Comments:", comments)
        })
    })
})

