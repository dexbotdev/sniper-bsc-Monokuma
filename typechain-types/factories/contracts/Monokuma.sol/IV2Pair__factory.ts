/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IV2Pair,
  IV2PairInterface,
} from "../../../contracts/Monokuma.sol/IV2Pair";

const _abi = [
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
      {
        internalType: "uint32",
        name: "blockTimestampLast",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sync",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IV2Pair__factory {
  static readonly abi = _abi;
  static createInterface(): IV2PairInterface {
    return new utils.Interface(_abi) as IV2PairInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IV2Pair {
    return new Contract(address, _abi, signerOrProvider) as IV2Pair;
  }
}
