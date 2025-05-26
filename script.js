const url="https://pokeapi.co/api/v2/pokemon/";
let name=document.querySelector(".name");
let one=document.querySelector("#first");
let two=document.querySelector("#second");
let health=document.querySelector("h5");
let atk=document.querySelector("#Attack");
let def=document.querySelector("#Defence");
let spd=document.querySelector("#Speed");

let btn=document.querySelector("button");

let img=document.querySelector("img");
let color=document.querySelector(".card");







async function generate(){
    
    let num=Math.floor(Math.random()*500) +1;
    const finalUrl=url+num;
    try{
    let data=await axios.get(finalUrl);
    console.log(data);
    let color_data= await axios.get(data.data.species.url);
    


    
    
    name.innerText=data.data.species.name.toUpperCase();
    if(data.data.types.length==2){
    one.innerText=data.data.types[0].type.name.toUpperCase();
    two.innerText=data.data.types[1].type.name.toUpperCase();
    }else{
        one.innerText=data.data.types[0].type.name.toUpperCase();
        two.innerText="None".toUpperCase();



    };

    health.innerText=`HP ${data.data.stats[0].base_stat}`;
    atk.innerText=data.data.stats[1].base_stat;
    def.innerText=data.data.stats[2].base_stat;
    spd.innerText=data.data.stats[5].base_stat;

    img.setAttribute("src",data.data.sprites.other.dream_world.front_default);
    const primaryColor = color_data.data.color.name;
    color.style.background = `radial-gradient(circle at 50% 0%, ${primaryColor} 38.5%, #ffffff 36%)`;








    }catch(error){
        console.log("Failed to retrieve data");

    }




}

btn.addEventListener("click", () => {
    setTimeout(generate, 2000);
});
