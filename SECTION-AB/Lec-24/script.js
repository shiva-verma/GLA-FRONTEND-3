//promises & fetch & async /await

//fetching
// let data = fetch("https://jsonplaceholder.typicode.com/posts")

// data.then((res)=>{
//     let newRes = res.json();
//     newRes.then((res2)=>{
//         console.log(res2)
//     })
// }).catch((err)=>{
//     console.log(err)
// })


// data.then((res)=>{
//    return res.json();
// }).then((res2)=>{
//     console.log(res2);
// }).catch((err)=>{
//     console.log(err)
// })

//async / await
async function getData(){
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await response.json();

}
getData();

