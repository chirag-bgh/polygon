/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-waffle')
require('dotenv').config()
const PrivateKey = process.env.PRIVATE_KEY;
console.log(PrivateKey.length);


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
  });

  
module.exports = {
solidity: {
  version: "0.7.3",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
},
networks: {
  mumbai: {
    url: "https://polygon-mumbai.g.alchemy.com/v2/z31OMjGDYva-LH4So0aR9WBDXsb_R9Iq",
    accounts: [`0x${PrivateKey}`]
    
  },
}
};
