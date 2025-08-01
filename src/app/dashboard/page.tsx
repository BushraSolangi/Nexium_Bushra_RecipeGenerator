"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {

  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const toggleIngredient = (name: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const isSelected = (name: string) => selectedIngredients.includes(name);

useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      fetch("http://localhost:5678/webhook/search-recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients: selectedIngredients }),
      });
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [selectedIngredients]);

console.log("Selected ingredients:", selectedIngredients);

  

  return (

<div style={{ maxHeight:"700px", display: "flex", flexDirection: "row", justifyContent: "space-between" , position: "relative"}}>
  
  <div style={{height: "700px",width: "380px",backgroundColor: "#D8456B",}}>
    
    <div style={{fontSize: "24px", height: "20px",width: "340px",color: "white", position: "relative" , left:"150px" , top:"20px" }}>
        Pantry
       <div style={{fontSize: "15px", height: "15px",width: "340px",color: "white", position: "relative" , left:"-50px" , top:"5px" }}>
        Get recipes, choose options
    
    </div>
    </div>
    
   <div style={{ height: "50px", width: "310px", backgroundColor: "white", borderRadius: "10px", position: "relative", left: "20px", top: "80px", display: "flex", alignItems: "center", padding: "0 15px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
        <img src="/images/search.png" alt="Search Icon" style={{ width: "20px", height: "20px", marginRight: "10px" }} />
        <div style={{ fontSize: "18px", color: "#808080" }}>
            add/remove/paste ingredients
        </div>
    </div>

    
    <div style={{height: "550px",width: "380px",backgroundColor: "white",borderRadius:"20px", position: "relative" , left:"0px" , top:"100px" ,overflowY: "auto",  overflowX: "hidden"}}>
        <div style={{height: "80px",width: "340px",backgroundColor: "#FAF9F6", position: "relative" , left:"20px" , top:"40px" }}>
             <img src="/images/Proteins.png" alt="Search Icon" style={{ width: "80px", height: "70px", marginRight: "40px" }} />
        <div style={{ fontSize: "20px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"140px" , top:"-60px" }}>
         Meat
          <div style={{ fontSize: "15px", color: "#808080" , height: "15px",width: "340px", position: "relative" , left:"-15px" , top:"-2px" }}>
         10 Ingredients
        </div>
        </div>
        </div>
        <div style={{height: "250px",width: "340px",backgroundColor: "#FAF9F6", position: "relative" , left:"20px" , top:"50px" }}>
            <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Chicken") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "20px", top: "20px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
            <div className="ingredient" data-ingredient="Chicken" onClick={() => toggleIngredient("Chicken")} style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"-2px" , top:"-2px" }}>
            Chicken
        </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Beef") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "20px", top: "2px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
            <div className="ingredient" data-ingredient="Beef" onClick={() => toggleIngredient("Beef")} style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"10px" , top:"-1px" }}>
            Beef
        </div>
         </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Mutton") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "30px", top: "2px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Mutton")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"2px" , top:"-1px" }}>
            Mutton
        </div>
         </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("lamb") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "40px", top: "2px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Lamb")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"10px" , top:"-1px" }}>
            lamb
        </div>
         </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Fish") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "-255px", top: "70px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Fish")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"10px" , top:"-1px" }}>
            Fish
        </div>
         </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Shrimp") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "-240px", top: "70px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Shrimp")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"3px" , top:"-1px" }}>
            Shrimp
        </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Turkey") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "25px", top: "-2px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Turkey")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"3px" , top:"-1px" }}>
            Turkey
        </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Tuna") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "25px", top: "-2px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Tuna")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"8px" , top:"-1px" }}>
            Tuna
        </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Veal") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "-273px", top: "75px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Veal")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"8px" , top:"-1px" }}>
            Veal
        </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Duck") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "45px", top: "1px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Duck")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"8px" , top:"-1px" }}>
            Duck
        </div>
        
    </div>

        </div>
        </div>
        </div>
        </div>
        </div>

        </div>

        <div style={{height: "80px",width: "340px",backgroundColor: "#FAF9F6", position: "relative" , left:"20px" , top:"70px" }}>
             <img src="/images/veg.png" alt="Search Icon" style={{ width: "80px", height: "70px", marginRight: "40px" }} />
        <div style={{ fontSize: "20px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"130px" , top:"-60px" }}>
         Vegetables
          <div style={{ fontSize: "15px", color: "#808080" , height: "15px",width: "340px", position: "relative" , left:"-4px" , top:"-2px" }}>
         10 Ingredients
        </div>
        </div>
        </div>
        <div style={{height: "250px",width: "340px", backgroundColor: "#FAF9F6", position: "relative" , left:"20px" , top:"80px" }}>
             <div style={{ height: "50px", width: "50px",cursor: "pointer",backgroundColor: isSelected("Potato") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "15px", top: "20px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Potato")} style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"6px" , top:"-2px" }}>
            Potato
        </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Tomato") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "35px", top: "2px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Tomato")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"4px" , top:"-5px" }}>
            Tomato
        </div>
         </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Onion") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "50px", top: "2px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Onion")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"2px" , top:"-4px" }}>
            Onion
        </div>
         </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Chilli") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "65px", top: "2px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Chilli")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"10px" , top:"-1px" }}>
            Chilli
        </div>
         </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Ginger") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "-245px", top: "70px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Ginger")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"8px" , top:"-1px" }}>
            Ginger
        </div>
         </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Garlic") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "-230px", top: "70px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Garlic")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"5px" , top:"-1px" }}>
            Garlic
        </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Carrot") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "35px", top: "-2px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Carrot")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"6px" , top:"-1px" }}>
            Carrot
        </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Cabbage") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "35px", top: "-2px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Cabbage")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"2px" , top:"-1px" }}>
            Cabbage
        </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Peas") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "-300px", top: "75px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div  onClick={() => toggleIngredient("Peas")} style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"8px" , top:"-1px" }}>
            Peas
        </div>
        <div style={{ height: "50px", width: "50px",cursor: "pointer",backgroundColor: isSelected("Eggplant") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "45px", top: "1px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Eggplant")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"1px" , top:"-1px" }}>
            Eggplant
        </div>
        
    </div>

        </div>
        </div>
        </div>
        </div>
        </div>

        </div>


        <div style={{height: "80px",width: "340px",backgroundColor: "#FAF9F6", position: "relative" , left:"20px" , top:"100px" }}>
             <img src="/images/spices.png" alt="Search Icon" style={{ width: "80px", height: "70px", marginRight: "40px" }} />
        <div style={{ fontSize: "20px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"140px" , top:"-60px" }}>
         Spices
          <div style={{ fontSize: "15px", color: "#808080" , height: "15px",width: "340px", position: "relative" , left:"-15px" , top:"-2px" }}>
         10 Ingredients
        </div>
        </div>
        </div>
        <div style={{height: "250px",width: "340px",backgroundColor: "#FAF9F6", position: "relative" , left:"20px" , top:"110px" }}>
             <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Salt") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "20px", top: "20px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Salt")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"12px" , top:"-2px" }}>
            Salt
        </div>
        <div style={{ height: "50px", width: "90px", cursor: "pointer",backgroundColor: isSelected("Red Chilli") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "50px", top: "2px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Red Chilli")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"10px" , top:"-1px" }}>
            Red Chilli
        </div>
         </div>
        <div style={{ height: "50px", width: "90px", cursor: "pointer",backgroundColor: isSelected("Mustard Seeds") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "65px", top: "2px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Mustard Seeds")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"2px" , top:"-1px" }}>
            Mustard Seeds 
        </div>
         </div>
        <div style={{ height: "50px", width: "70px", cursor: "pointer",backgroundColor: isSelected("Cardamom") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "-80px", top: "140px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Cardamon")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"10px" , top:"-1px" }}>
            Cardamom
        </div>
         </div>
        <div style={{ height: "50px", width: "60px", cursor: "pointer",backgroundColor: isSelected("Coriander") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "-330px", top: "70px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Coriander")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"3px" , top:"-1px" }}>
            Coriander
        </div>
         </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Cumin") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "-320px", top: "70px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Cumin")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"3px" , top:"-1px" }}>
            Cumin
        </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Turmeric") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "30px", top: "-2px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div  onClick={() => toggleIngredient("Turmeric")} style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"-5px" , top:"-1px" }}>
            Turmeric
        </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Herbs") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "15px", top: "-2px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Herbs")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"10px" , top:"-1px" }}>
             Herbs
        </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Clove") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "-290px", top: "75px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Clove")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"8px" , top:"-1px" }}>
           Clove
        </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Paprika") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "40px", top: "1px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Paprika")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"5px" , top:"-1px" }}>
           Paprika
        </div>
        
    </div>

        </div>
        </div>
        </div>
        </div>
        </div>

        </div>

        <div style={{height: "80px",width: "340px",backgroundColor: "#FAF9F6", position: "relative" , left:"20px" , top:"135px" }}>
             <img src="/images/Fruits.png" alt="Search Icon" style={{ width: "80px", height: "70px", marginRight: "40px" }} />
        <div style={{ fontSize: "20px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"140px" , top:"-60px" }}>
         Fruits
          <div style={{ fontSize: "15px", color: "#808080" , height: "15px",width: "340px", position: "relative" , left:"-15px" , top:"-2px" }}>
         10 Ingredients
        </div>
        </div>
        </div>
        <div style={{height: "250px",width: "340px",backgroundColor: "#FAF9F6", position: "relative" , left:"20px" , top:"145px" }}>
             <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Banana") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "20px", top: "20px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Banana")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"-2px" , top:"-2px" }}>
            Banana
        </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Grapes") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "20px", top: "2px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient(" Grapes")}  style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"10px" , top:"-1px" }}>
            Grapes
        </div>
         </div>
        <div style={{ height: "50px", width: "50px",cursor: "pointer",backgroundColor: isSelected("Apples") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "30px", top: "2px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient(" Apples")} style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"2px" , top:"-1px" }}>
            Apples
        </div>
         </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Mango") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "40px", top: "2px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient(" Mango")} style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"10px" , top:"-1px" }}>
          Mango
        </div>
         </div>
        <div style={{ height: "50px", width: "50px",cursor: "pointer",backgroundColor: isSelected("Peach") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "-255px", top: "70px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Peach")} style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"10px" , top:"-1px" }}>
            Peach
        </div>
         </div>
        <div style={{ height: "50px", width: "50px",cursor: "pointer",backgroundColor: isSelected("Coconut") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "-240px", top: "70px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Coconut")} style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"3px" , top:"-1px" }}>
           Coconut
        </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Orange") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "25px", top: "-2px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient(" Orange")} style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"3px" , top:"-1px" }}>
            Orange
        </div>
        <div style={{ height: "50px", width: "50px", cursor: "pointer",backgroundColor: isSelected("Cherries") ? "lightgreen" : "#F2F2F2", borderRadius: "10px", position: "relative", left: "25px", top: "-2px", display: "flex", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <div onClick={() => toggleIngredient("Cherries")} style={{ fontSize: "15px", color: "black" , height: "15px",width: "340px", position: "relative" , left:"2px" , top:"-1px" }}>
            Cherries
        </div>
        
        </div>
        </div>
        </div>
        </div>

        </div>
  </div>



  </div>

  <div style={{ height: "700px", width: "1120px", backgroundColor: "#D8456B", position: "relative" , left:"10px" , top:"0px"}}>
    
     <div style={{height: "700px",width: "380px",backgroundColor: "#D8456B",}}>
    
    <div style={{fontSize: "27px", height: "20px",width: "340px",color: "white", position: "relative" , left:"500px" , top:"30px" }}>
        SuperChef
       
  </div>
  <div style={{ height: "50px", width: "1050px", backgroundColor: "white", borderRadius: "10px", position: "relative", left: "20px", top: "78px", display: "flex", alignItems: "center", padding: "0 15px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
        <img src="/images/search.png" alt="Search Icon" style={{ width: "20px", height: "20px", marginRight: "10px" }} />
        <div style={{ fontSize: "17px", color: "#808080" }}>
           Find...
        </div>
    </div>
    <div style={{height: "550px",width: "1120px",backgroundColor: "white",borderRadius:"20px", position: "relative" , left:"0px" , top:"100px" }}>
        <img src="/images/pink.jpg" alt="Search Icon" style={{ width: "1120px", height: "550px", marginRight: "10px" }} />
        <div onClick={() => window.open("https://www.teaforturmeric.com/chicken-karahi/", "_blank")} style={{height: "150px",width: "450px",backgroundColor: "white",cursor:"pointer",borderRadius:"20px", position: "absolute" , left:"50px" , top:"100px" }}>
            <img src="/images/chickenkarahi.avif" alt="Search Icon" style={{ transform: "rotate(90deg)", width: "150px", height: "150px", marginRight: "10px" }} />
         <div style={{fontSize: "20px", height: "15px",width: "340px",color: "black", position: "relative" , left:"160px" , top:"-120px" }}>
         Chicken Karahi 
        </div>
        <div style={{fontSize: "12px", height: "15px",width: "340px",color: "#C4C4C4", position: "relative" , left:"160px" , top:"-110px" }}>
         https://www.teaforturmeric.com/chicken-karahi/
        </div>
         <div style={{fontSize: "15px", height: "15px",width: "340px",color: "red", position: "relative" , left:"160px" , top:"-105px" }}>
         You're missing chicken Karahi
        </div>
        </div>
        <div onClick={() => window.open("https://recipe52.com/pakistani-chicken-tikka/", "_blank")} style={{height: "150px",width: "450px",backgroundColor: "white",cursor:"pointer",borderRadius:"20px", position: "absolute" , left:"530px" , top:"100px" }}> 
            <img src="/images/ChickenTikka.jpg" alt="Search Icon" style={{ width: "150px", height: "150px", marginRight: "10px" }} />
         <div style={{fontSize: "20px", height: "15px",width: "340px",color: "black", position: "relative" , left:"160px" , top:"-120px" }}>
         Chicken Tikka 
        </div>
        <div style={{fontSize: "12px", height: "15px",width: "340px",color: "#C4C4C4", position: "relative" , left:"160px" , top:"-110px" }}>
          https://recipe52.com/pakistani-chicken-tikka/        </div>
         <div style={{fontSize: "15px", height: "15px",width: "340px",color: "red", position: "relative" , left:"160px" , top:"-105px" }}>
         You're missing chicken Tikka
        </div>
        </div>
        <div onClick={() => window.open("https://bakewithzoha.com/best-chicken-biryani/", "_blank")} style={{height: "150px",width: "450px",backgroundColor: "white",cursor:"pointer",borderRadius:"20px", position: "absolute" , left:"50px" , top:"300px" }}>
            <img src="/images/Biryani.jpg" alt="Search Icon" style={{ width: "150px", height: "150px", marginRight: "10px" }} />
         <div style={{fontSize: "20px", height: "15px",width: "340px",color: "black", position: "relative" , left:"160px" , top:"-120px" }}>
         Chicken Biryani
        </div>
        <div style={{fontSize: "12px", height: "15px",width: "340px",color: "#C4C4C4", position: "relative" , left:"160px" , top:"-110px" }}>
         https://bakewithzoha.com/best-chicken-biryani/      </div>
         <div style={{fontSize: "15px", height: "15px",width: "340px",color: "red", position: "relative" , left:"160px" , top:"-105px" }}>
         You're missing  Chicken Biryani

        </div>
        </div>
        <div onClick={() => window.open("https://www.recipetineats.com/one-pot-chicken-alfredo-pasta/", "_blank")} style={{height: "150px",width: "450px",backgroundColor: "white",cursor:"pointer",borderRadius:"20px", position: "absolute" , left:"530px" , top:"300px" }}>
            <img src="/images/Skinny-Chicken-Broccoli-Alfredo-1.jpg" alt="Search Icon" style={{ width: "150px", height: "150px", marginRight: "10px" }} />
         <div style={{fontSize: "20px", height: "15px",width: "340px",color: "black", position: "relative" , left:"160px" , top:"-120px" }}>
         Chicken Alfredo Pasta
        </div>
        <div style={{fontSize: "12px", height: "15px",width: "340px",color: "#C4C4C4", position: "relative" , left:"160px" , top:"-110px" }}>
          https://www.recipetineats.com/one-pot-chicken-alfredo-pasta/          </div>
         <div style={{fontSize: "15px", height: "15px",width: "340px",color: "red", position: "relative" , left:"160px" , top:"-105px" }}>
         You're missing Chicken Alfredo Pasta

        </div>
        </div>


  </div>
  </div>

</div>
</div>




  )};
