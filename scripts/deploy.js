
const hre = require("hardhat");

async function main() {

  
  // const token = await hre.ethers.deployContract("TestToken", ['TBST', 'TBST', ethers.parseEther("400000000000000")]);
  // await token.waitForDeployment();
  // await hre.run("verify:verify", {
  //   address: token.target,
  //   constructorArguments: ['TBST', 'TBST', ethers.parseEther("400000000000000")],
  // });

  const target = ethers.parseEther("100");
  const maximum = ethers.parseEther("1");
  const price = '4000000000';
  const startTime = Math.round(Date.now() / 1000);
  const endTime = Math.round(Date.now() / 1000) + (3 * 60 * 60 * 24);
  const claimTime = Math.round(Date.now() / 1000) + (4 * 60 * 60 * 24);
  const base = 1;
  const rewardAddress = '0x52a394a00Cc517B042D63E6d4D1AB8875946b0Be';
  const receiver = '0xEf30930B6ddA429E5b2657762b8853F60Fcf5D7E';
  const name = "BaseStarter";

  // const ido = await hre.ethers.deployContract("BSTIDO", [[target, maximum, price, startTime, endTime, claimTime, base, rewardAddress, receiver, name]]);
  const ido = await hre.ethers.deployContract("BSTIDO", [["10000000000000000","1000000000000000000","4000000000","1691133774","1691135043","1691135403","1", "0xEf30930B6ddA429E5b2657762b8853F60Fcf5D7E","0x52a394a00Cc517B042D63E6d4D1AB8875946b0Be","BaseStater"]]);
  await ido.waitForDeployment();
  await ido.waitForDeployment();
  await ido.transferOwnership('0xF84900e6Da0676a8CB3725D66c67E6f2d433FE76')
  await ido.waitForDeployment();
  await new Promise(resolve => {
    setTimeout(() => resolve(console.log("等待 10秒")), 100000);
  });

  await hre.run("verify:verify", {
    address: ido.target,
    constructorArguments: [["10000000000000000","1000000000000000000","4000000000","1691133774","1691135043","1691135403","1", "0xEf30930B6ddA429E5b2657762b8853F60Fcf5D7E","0x52a394a00Cc517B042D63E6d4D1AB8875946b0Be","BaseStater"]],
  });
  // await hre.run("verify:verify", {
  //   address: ido.target,
  //   constructorArguments: [[target, maximum, price, startTime, endTime, claimTime, base, rewardAddress, receiver, name]],
  // });

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
