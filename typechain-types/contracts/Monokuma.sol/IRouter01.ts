/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IRouter01Interface extends utils.Interface {
  functions: {
    "WETH()": FunctionFragment;
    "addLiquidity(address,address,uint256,uint256,uint256,uint256,address,uint256)": FunctionFragment;
    "addLiquidityETH(address,uint256,uint256,uint256,address,uint256)": FunctionFragment;
    "factory()": FunctionFragment;
    "getAmountsIn(uint256,address[])": FunctionFragment;
    "getAmountsOut(uint256,address[])": FunctionFragment;
    "swapExactETHForTokens(uint256,address[],address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "WETH"
      | "addLiquidity"
      | "addLiquidityETH"
      | "factory"
      | "getAmountsIn"
      | "getAmountsOut"
      | "swapExactETHForTokens"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidityETH",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAmountsIn",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountsOut",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactETHForTokens",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidityETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAmountsIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountsOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactETHForTokens",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IRouter01 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRouter01Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    WETH(overrides?: CallOverrides): Promise<[string]>;

    addLiquidity(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      amountADesired: PromiseOrValue<BigNumberish>,
      amountBDesired: PromiseOrValue<BigNumberish>,
      amountAMin: PromiseOrValue<BigNumberish>,
      amountBMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addLiquidityETH(
      token: PromiseOrValue<string>,
      amountTokenDesired: PromiseOrValue<BigNumberish>,
      amountTokenMin: PromiseOrValue<BigNumberish>,
      amountETHMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    getAmountsIn(
      amountOut: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { amounts: BigNumber[] }>;

    getAmountsOut(
      amountIn: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { amounts: BigNumber[] }>;

    swapExactETHForTokens(
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  WETH(overrides?: CallOverrides): Promise<string>;

  addLiquidity(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    amountADesired: PromiseOrValue<BigNumberish>,
    amountBDesired: PromiseOrValue<BigNumberish>,
    amountAMin: PromiseOrValue<BigNumberish>,
    amountBMin: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addLiquidityETH(
    token: PromiseOrValue<string>,
    amountTokenDesired: PromiseOrValue<BigNumberish>,
    amountTokenMin: PromiseOrValue<BigNumberish>,
    amountETHMin: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  factory(overrides?: CallOverrides): Promise<string>;

  getAmountsIn(
    amountOut: PromiseOrValue<BigNumberish>,
    path: PromiseOrValue<string>[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getAmountsOut(
    amountIn: PromiseOrValue<BigNumberish>,
    path: PromiseOrValue<string>[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  swapExactETHForTokens(
    amountOutMin: PromiseOrValue<BigNumberish>,
    path: PromiseOrValue<string>[],
    to: PromiseOrValue<string>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    WETH(overrides?: CallOverrides): Promise<string>;

    addLiquidity(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      amountADesired: PromiseOrValue<BigNumberish>,
      amountBDesired: PromiseOrValue<BigNumberish>,
      amountAMin: PromiseOrValue<BigNumberish>,
      amountBMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amountA: BigNumber;
        amountB: BigNumber;
        liquidity: BigNumber;
      }
    >;

    addLiquidityETH(
      token: PromiseOrValue<string>,
      amountTokenDesired: PromiseOrValue<BigNumberish>,
      amountTokenMin: PromiseOrValue<BigNumberish>,
      amountETHMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amountToken: BigNumber;
        amountETH: BigNumber;
        liquidity: BigNumber;
      }
    >;

    factory(overrides?: CallOverrides): Promise<string>;

    getAmountsIn(
      amountOut: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getAmountsOut(
      amountIn: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    swapExactETHForTokens(
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    WETH(overrides?: CallOverrides): Promise<BigNumber>;

    addLiquidity(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      amountADesired: PromiseOrValue<BigNumberish>,
      amountBDesired: PromiseOrValue<BigNumberish>,
      amountAMin: PromiseOrValue<BigNumberish>,
      amountBMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addLiquidityETH(
      token: PromiseOrValue<string>,
      amountTokenDesired: PromiseOrValue<BigNumberish>,
      amountTokenMin: PromiseOrValue<BigNumberish>,
      amountETHMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    getAmountsIn(
      amountOut: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountsOut(
      amountIn: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapExactETHForTokens(
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addLiquidity(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      amountADesired: PromiseOrValue<BigNumberish>,
      amountBDesired: PromiseOrValue<BigNumberish>,
      amountAMin: PromiseOrValue<BigNumberish>,
      amountBMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addLiquidityETH(
      token: PromiseOrValue<string>,
      amountTokenDesired: PromiseOrValue<BigNumberish>,
      amountTokenMin: PromiseOrValue<BigNumberish>,
      amountETHMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAmountsIn(
      amountOut: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAmountsOut(
      amountIn: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swapExactETHForTokens(
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}