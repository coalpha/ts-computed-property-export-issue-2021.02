import {ct_string} from "./ct_string";

export declare const ct_cool_string_symbol: unique symbol;

export type ct_cool_string = {readonly [ct_cool_string_symbol]: true};

export const make_ct_cool_string = <S extends string>(s: S) =>
   s as string as ct_string<S> & ct_cool_string;
