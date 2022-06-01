import { useEffect, useState } from "react"
import "./LandingPage.css"

const small = [{name:"WOMEN" , url:"https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/women_thumb.jpg"} , {name:"MEN" , url:"https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/men_thumb.jpg"} , {name:"NEW ARRIVALS" , url:"https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/newarrival_thumb.jpg"} , {name:"SALE" ,url:"https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/sale_thumb.jpg"} ,{name:"BEST SELLERS",url:"https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/best_seller_thumb.jpg"}];
const largeBox = [{name:"BOOTS" , url:"https://www.fashos.com/pub/media/wysiwyg/home/boots.jpg"} ,{name:"SANDALS" , url:"https://www.fashos.com/pub/media/wysiwyg/home/sandals.jpg"} ,{name:"SNEAKERS" , url:"https://www.fashos.com/pub/media/wysiwyg/home/sneaker.jpg"} ,{name:"OFFICE" , url:"https://www.fashos.com/pub/media/wysiwyg/home/office.jpg"} ,{name:"SPORTS" , url:"https://www.fashos.com/pub/media/wysiwyg/home/sports.jpg"}];
const brand = ["https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/brand_logo/bata_logo.jpg" , "https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/brand_logo/hush-puppies.jpg" , "https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/brand_logo/drscholls.jpg" , "https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/brand_logo/fausto.jpg" , "https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/brand_logo/sparx.jpg" , "https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/brand_logo/lancer.jpg" ];

export const Home = () =>{

    const[url , setUrl] = useState("https://www.fashos.com/pub/media/wysiwyg/home/Fashos1_WEB.png") ;
    let arr = ["https://www.fashos.com/pub/media/wysiwyg/home/Fashos1_WEB.png" , "https://www.fashos.com/pub/media/wysiwyg/home/Fashos2_WEB.png" , "https://www.fashos.com/pub/media/wysiwyg/home/Fashos333.png"] ;
    let count = 0 ;
    
    useEffect(()=>{
        let id  = setInterval(()=>{

            if(count==3){count=0} ;

            setUrl(arr[count]) ;
            count++ ;
            
            return ()=>clearInterval(id) ;
        },4000)
    },[])

    return(
        <div>
            <img src={url} className="slides" alt="slides" />
        </div>
    )
}