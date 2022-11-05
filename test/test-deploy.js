const { ethers } = require("hardhat")
const {assert} = require("chai")

describe("SimpleStorage",function (){
  let simpleStorageFactory,simpleStorage,transactionReceipt
  beforeEach(async function(){
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await simpleStorageFactory.deploy();
    transactionReceipt = await simpleStorage.deployTransaction.wait(1)
  })
  it("Should be initialized to zero",async function(){
    let expectedValue = "0"
    let value = await simpleStorage.retrieve()
    assert.equal(value.toString(),expectedValue);
  })
  it("Should change the value on store",async function(){
    let expectedValue = "19"
    let transactionReceipt = await simpleStorage.store("19");
    let value = await simpleStorage.retrieve();
    assert.equal(value.toString(),expectedValue)
  })
  it("Should add person on add person method",async function (){
    let transactionReceipt = await simpleStorage.addPerson("Jash",19);
    let name = await simpleStorage.getName();
    assert.equal(name.toString(),"Jash")
  })
})