import abiNFT from '../contract/abiNFT.json'
import abiMarketplace from '../contract/abiMarketplace.json'
import abiAuction from '../contract/abiAuction.json'

export const loadContract = async (web3) => {
    let contractNFT = null
    let contractMarketplace = null
    let contractAuction = null
    
    try {

    //coming soon

    // 1155
    /* contractNFT = new web3.eth.Contract(
        abiNFT,
        ""
      );

      contractMarketplace = new web3.eth.Contract(  
        abiMarketplace,
        ""
      )

      contractAuction = new web3.eth.Contract(
        abiAuction,
        ""
      ) */
  
    } catch (e) {
      console.log(e);
    }
  
    return {contractNFT, contractMarketplace, contractAuction};
  };