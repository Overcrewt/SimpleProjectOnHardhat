const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("SimpleStorage", function () {
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("Should start with a favourite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        assert.equal(currentValue.toString(), expectedValue)
        //expect(currentValue.toString()).to.equal(expectedValue)
    })
    it("Should update when we call store", async function () {
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)
        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
    })
    it("Should add people when we call addPeople", async function () {
        const personName = "dima"
        const personNum = "7"
        const peopleAdd = await simpleStorage.addPerson(personName, personNum)
        await peopleAdd.wait(1)
        const { favoriteNumber, name } = await simpleStorage.people(0)

        expect(favoriteNumber).to.equal(personNum)
        expect(name).to.equal(personName)
    })
})
