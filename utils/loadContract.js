import abiNFT from '../contract/abiNFT.json'
import abiMarketplace from '../contract/abiMarketplace.json'
import abiAuction from '../contract/abiAuction.json'

export const loadContract = async (web3) => {
    let contractNFT = null
    let contractMarketplace = null
    let contractAuction = null
    
    try {

    //coming soon

     1155
     contractNFT = new web3.eth.Contract(
        abiNFT,
        "0x15719ee1aaBBFF9f7AD71e176913B1d071052990"
      );

      contractMarketplace = new web3.eth.Contract(  
        abiMarketplace,
        "0x9d47E94636743b30F90bdB9309E4dFAB4AEc86fb"
      )

/*       contractAuction = new web3.eth.Contract(
        abiAuction,
        ""
      ) */
  
    } catch (e) {
      console.log(e);
    }
  
    return {contractNFT, contractMarketplace, contractAuction};
  };