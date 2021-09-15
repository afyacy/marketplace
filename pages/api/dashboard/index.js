import { getSession } from "next-auth/client";

// eslint-disable-next-line import/no-anonymous-default-export
export default handler = async(request, response) => {
    const session = await getSession({request});

    if(session){
        response.send({
            content: "Welcome to the Secret page"
        });
    }else {
        response.send({
            error: "You need to sign in"
        })
    }
}

