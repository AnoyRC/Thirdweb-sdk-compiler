import { config } from "dotenv";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { readFileSync } from "fs";

config();

const main = async () => {
  if (!process.env.PRIVATE_KEY) {
    throw new Error("No private key found");
  }
  try {
    const sdk = ThirdwebSDK.fromPrivateKey(
      process.env.PRIVATE_KEY as string,
      "mumbai"
    );

    const edition = await sdk.getContract("0xb48fAf5A2B3Ef7a28919AB45e93e9Da1F90dA598","edition")

    const pack = await sdk.getContract("0x2dDCb0F088312eEa656783FCbdC7e20F8Fd9cbE5","pack")

    await edition.setApprovalForAll(pack.getAddress(), true)

    await pack.create({
      packMetadata:{
        name: "SK_Lootbox",
        image: readFileSync("./assets/SilverKnightsRender.png"),
        description: "This lootbox randomly drops card skin from Silver Knights Pack"
      },
      erc1155Rewards:[
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 0
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 1
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 2
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 3
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 4
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 5
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 6
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 7
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 8
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 9
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 10
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 11
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 12
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 13
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 14
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 15
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 16
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 17
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 18
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 19
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 20
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 21
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 22
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 23
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 24
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 25
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 26
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 27
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 28
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 29
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 30
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 31
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 32
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 33
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 34
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 35
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 36
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 37
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 38
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 39
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 40
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 41
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 42
        },
        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 43
        },

        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 44
        },

        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 45
        },

        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 46
        },

        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 47
        },

        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 48
        },

        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 49
        },

        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 50
        },

        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 51
        },

        {
          contractAddress: edition.getAddress(),
          totalRewards: 200,
          quantityPerReward: 1,
          tokenId: 52
        },


      ]
    })

    console.log("Created batch successfully!");
  } catch (e) {
    console.error("Something went wrong: ", e);
  }
};

main();
