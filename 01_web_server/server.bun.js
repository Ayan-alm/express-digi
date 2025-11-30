import {server} from 'bun'
import { hostname } from 'os';

serve({
    fetch(request){
        const url = new URL(request.url)
        if(url.pathname === '/'){
            return new Response("Hello ice tea",{status:200})

        }else if (url.pathname === "/ice-tea") {
            return new Response("Hello ice tea is goated", { status: 200 });
        }else{
            return new Response('404 NOT FUND',{status:404})
        }
    },
   port: 3000,
   hostname:'127.0.0.1' 
})