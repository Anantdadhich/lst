 import {mintTo} from "@solana/spl-token"
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { PRIVATE_KEY, TOKEN } from "./Address";
import bs58 from  "bs58"
const  connection =new Connection("https://mainnet.helius-rpc.com/?api-key=7cf5d184-75a3-4f15-aff3-c02f8ad566eb");



function bs58tokeypairTrans(bs58Privatekey:string):Keypair{
  try {
      const privatekeybuffer=bs58.decode(bs58Privatekey);
    return Keypair.fromSecretKey(privatekeybuffer)
  } catch (error) {
     throw new Error("error found")
  }
}
const keypair =bs58tokeypairTrans(PRIVATE_KEY!)

export const mintTokens=async(fromAdress:string,amount:number)=>{
    console.log("miniting")
      await mintTo(connection,keypair,TOKEN,new PublicKey(fromAdress),keypair,amount)
      console.log("minted")
}

export const burnTokens=async(fromAdress:string,toAdress:string,amount:number)=>{
    console.log("buntokens")

}

export const sendNativeTokens=async(fromAdress:string,toAdress:string,amount:number)=>{
    console.log("sendnativetokens")
}   

 