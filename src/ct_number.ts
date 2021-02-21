export declare const ct_number_symbol: unique symbol;

export type ct_number<S extends number> =
   & number
   & {readonly [ct_number_symbol]: S};
