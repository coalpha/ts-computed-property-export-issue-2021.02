import { ct_cool, make_ct_cool_number, make_ct_cool_string } from "./ct_cool";
import { ct_number } from "./ct_number";
import { ct_string } from "./ct_string";

function str<S extends string>(s: ct_string<S>){};
function num<N extends number>(n: ct_number<N>){};
function cool<C>(c: ct_cool<C>){};

const cool_str = make_ct_cool_string("Hello!");
const cool_num = make_ct_cool_number(39);

str(cool_str);

num(cool_num);

cool(cool_str);
cool(cool_num);
