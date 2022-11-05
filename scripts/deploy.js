const {ethers , run, network } = require("hardhat");
async function main(){
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
  const simpleStorage = await SimpleStorageFactory.deploy();
  console.log(`Deployed Contract to : ${simpleStorage.address}`);
  if(network.config.chainId==5){
    await simpleStorage.deployTransaction.wait(6)
    await verify(simpleStorage.address,[])
  }

  let favnumber = await simpleStorage.retrieve();
  console.log(`Fav number = ${favnumber}`);

  let transactionResponse = await simpleStorage.store(19);
  transactionResponse.wait(1);

  let updatedfavnum = await simpleStorage.retrieve();
  updatedfavnum.wait(1);
  console.log(`Fav number = ${updatedfavnum}`);
}

async function verify(contractAddress,args){
  console.log("Scanning on etherscan");
  try{
    await run("verify:verify",{
      address:contractAddress,
      constructorArgs:args
    })
  } catch(e){
    if(e.message.toLowerCase().includes("already verified")){
      console.log("Already verified!!");
    }else{
      console.log(e);
    }
  }
  
}

main().then(()=>process.exit(0)).catch((e)=>{
  console.log(e);
  process.exit(1);
})