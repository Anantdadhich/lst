
console.log(process.env.PUBLIC_KEY)

import express from "express"
import { burnTokens, mintTokens, sendNativeTokens } from "./minttokens";

const app=express();;

const HELIUS_RESPONSE=
{ "description": "5DxD5ViWjvRZEkxQEaJHZw2sBsso6xoXx3wGFNKgXUzE sold Fox #7637 to CKs1E69a2e9TmH4mKKLrXFF8kD3ZnwKjoEuXa6sz9WqX for 72 SOL on MAGIC_EDEN.",
    //we replace the touser account with the asssociated token account 
   "nativeTransfers": [ { "amount": 72936000000, "fromUserAccount": "CKs1E69a2e9TmH4mKKLrXFF8kD3ZnwKjoEuXa6sz9WqX", "toUserAccount": " Eo5k6B1Pwv51ybzZD3dJXyUiak4n47jUkxn1sJ7EyxPt" }, 
   
    ],
     }

  const VAULT="C6yk7sE13q9vphX6VpxHCBSgnziQBRNLHqcEQCi1MauN";

app.post("/helius",async(req,res)=>{
    ///we fill find out that the amount is  recieve 

    const incomingTranas=HELIUS_RESPONSE.nativeTransfers.find(x => x.toUserAccount ===VAULT)
     if(!incomingTranas){
         res.json({message:"process"})
         return
     }
    
    const fromAdress=incomingTranas.fromUserAccount;
    const toAdress=VAULT;
    const amount=incomingTranas.amount;
    const type="received_native_sol"
  
    await mintTokens(fromAdress,amount) 

   /* if(type==="received_native_sol"){
    await mintTokens(fromAdress,toAdress,amount)
   }else {
    await burnTokens(fromAdress,toAdress,amount);


    await sendNativeTokens(fromAdress,toAdress,amount)
   }  */
   res.send("Trans Successful")
    



})

app.listen(3000,()=>{
    console.log("server running ")
});