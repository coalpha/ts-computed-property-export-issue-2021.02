export declare const ct_string_symbol: unique symbol;

export type ct_string<S extends string> =
   & string
   & {readonly [ct_string_symbol]: S};
