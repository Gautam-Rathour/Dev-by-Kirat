
// //  axios vs fetch 

// function main() {
//     fetch("https://sum-server.100xdevs.com/tods")
//     .then(async response => {
//         const json = await response.json();
//         console.log(json.todos.length);
//         //await response.text()
//     })
// }

// async function main() {
//     const response = await fetch("https://sum-server.100xdevs.com/tods")
//         const json = await response.json();
//         console.log(json.todos.length);
// }


// main();

// =============================================================================
// =============================================================================


// //  axios :: ----

// const axios = require("axios");

// // async function main() {
// //     const response = await fetch("https://www.toptal.com/develpers/postbin/1706261117587-5522551864851", {
// //         method: "POST",
// //     },
// // );
// //         const textualData = await response.text();
// //         console.log(textualData);
// // }

// async function main() {
//     const response = await axios.post("https://www.toptal.com/develpers/postbin/1706261117587-5522551864851")
//         console.log(response.data); //response.data
// }


// main();


// =============================================================================
// =============================================================================


// //  axios :: ----

const axios = require("axios");

async function main() {
    const response = await axios.get(
        "https://httpdump.app/dumps/320eedb3-043d-4234-80f5-414cc30fad00", {
            username: "harkirat", 
            password: "1234567",
        }, 
        {
            headers: {
                Authorization: "Bearer 123",
            },
        },
    );
    console.log(response.data);
}

main();




















