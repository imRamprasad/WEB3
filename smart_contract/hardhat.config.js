

// require('@nomiclabs/hardhat-waffle');

// module.exports = {
//   solidity: "0.8.0",
//   networks: {
//     sepolia: {
//       url: "https://eth-mainnet.g.alchemy.com/v2/XyKowJk1v3OM2Cf_3-I_ILrVl-OCBcux",
//       accounts: ["597acc446ff47012b576382616ab9f76ee2b439747990aa5baf39be2afd1f488"],
//       gas: 2100000,
//       gasPrice: 8000000000,
//     },
//   },
// };

require("@nomiclabs/hardhat-ethers");

task("balance", "Prints the balance of a given account")
  .addParam("account", "The account's address")
  .setAction(async (taskArgs, hre) => {
    const account = taskArgs.account;
    const balance = await hre.ethers.provider.getBalance(account);

    console.log(`Balance of ${account}: ${hre.ethers.utils.formatEther(balance)} ETH`);
  });

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://eth-mainnet.g.alchemy.com/v2/XyKowJk1v3OM2Cf_3-I_ILrVl-OCBcux", // Replace with your RPC URL
      accounts: ["597acc446ff47012b576382616ab9f76ee2b439747990aa5baf39be2afd1f488"], // Replace with your private key
    },
  },
};


// npx hardhat balance --account <597acc446ff47012b576382616ab9f76ee2b439747990aa5baf39be2afd1f488> --network sepolia
