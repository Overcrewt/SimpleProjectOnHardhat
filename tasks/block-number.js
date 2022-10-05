const { task } = require("hardhat/config")

task("block-number", "Prints the currnet block number").setAction(
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current block number is: ${blockNumber}`)
    }
)
module.exports = {}
