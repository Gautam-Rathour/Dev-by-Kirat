const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success) {
        return null;
    }


    const signature = jwt.sign({
        username
    }, jwtPassword);
    return signature;
}


// const ans = signJwt("harkadsdas", "sldjsldglskdgjlskdfj");
// console.log(ans);


function verifyJwt(token) {
    let ans = true;
    try {
        jwt.verify(token, jwtPassword);
    } catch (err) {
        ans = false;
    }
    return ans;
}



function decodeJwt(token) {
    //  true , false
    const decoded = jwt.decode(token);
    if(decoded) {
        return true;
    } else {
        return false;
    }
}

// =======================================================================
// =======================================================================

