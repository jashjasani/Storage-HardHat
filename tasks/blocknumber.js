const {task} = require("hardhat/config")


module.exports = task("block-number","Prints the block number").setAction(async (taskArgs,hre)=>{
    let blocknumber = await hre.ethers.provider.getBlockNumber()
    console.log(`Block number : ${blocknumber}`);
})