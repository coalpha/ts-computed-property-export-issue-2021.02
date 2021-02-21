import {ct_string} from "./ct_string";
import {ct_number} from "./ct_number";

export declare const ct_cool_symbol: unique symbol;

export type ct_cool<C> = C & {readonly [ct_cool_symbol]: true};

export const make_ct_cool_string = <S extends string>(s: S) =>
   s as string as ct_cool<ct_string<S>>;

export const make_ct_cool_number = <N extends number>(n: N) =>
   n as number as ct_cool<ct_number<N>>;
