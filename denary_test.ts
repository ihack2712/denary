// Imports
import {
	leftShift,
	rightShift,
	count,
	and,
	or
} from "./denary.ts";
import { assertStrictEquals } from "https://deno.land/std@0.76.0/testing/asserts.ts";

Deno.test("left shift 0", () => assertStrictEquals(leftShift(2, 0),     2));
Deno.test("left shift 1", () => assertStrictEquals(leftShift(2, 1),    20));
Deno.test("left shift 2", () => assertStrictEquals(leftShift(2, 2),   200));
Deno.test("left shift 3", () => assertStrictEquals(leftShift(2, 3),  2000));
Deno.test("left shift 4", () => assertStrictEquals(leftShift(2, 4), 20000));

Deno.test("left shift 0 bigint", () => assertStrictEquals(leftShift(2n, 0n),     2n));
Deno.test("left shift 1 bigint", () => assertStrictEquals(leftShift(2n, 1n),    20n));
Deno.test("left shift 2 bigint", () => assertStrictEquals(leftShift(2n, 2n),   200n));
Deno.test("left shift 3 bigint", () => assertStrictEquals(leftShift(2n, 3n),  2000n));
Deno.test("left shift 4 bigint", () => assertStrictEquals(leftShift(2n, 4n), 20000n));

Deno.test("right shift 1", () => assertStrictEquals(rightShift(20000, 1), 2000));
Deno.test("right shift 2", () => assertStrictEquals(rightShift(20000, 2),  200));
Deno.test("right shift 3", () => assertStrictEquals(rightShift(20000, 3),   20));
Deno.test("right shift 4", () => assertStrictEquals(rightShift(20000, 4),    2));

Deno.test("right shift 1 bigint", () => assertStrictEquals(rightShift(20000n, 1n), 2000n));
Deno.test("right shift 2 bigint", () => assertStrictEquals(rightShift(20000n, 2n),  200n));
Deno.test("right shift 3 bigint", () => assertStrictEquals(rightShift(20000n, 3n),   20n));
Deno.test("right shift 4 bigint", () => assertStrictEquals(rightShift(20000n, 4n),    2n));

Deno.test("count 0", () => assertStrictEquals(count(    0), 0));
Deno.test("count 1", () => assertStrictEquals(count(    2), 1));
Deno.test("count 2", () => assertStrictEquals(count(   20), 2));
Deno.test("count 3", () => assertStrictEquals(count(  200), 3));
Deno.test("count 4", () => assertStrictEquals(count( 2000), 4));
Deno.test("count 5", () => assertStrictEquals(count(20000), 5));

Deno.test("count 0 bigint", () => assertStrictEquals(count(    0n), 0n));
Deno.test("count 1 bigint", () => assertStrictEquals(count(    2n), 1n));
Deno.test("count 2 bigint", () => assertStrictEquals(count(   20n), 2n));
Deno.test("count 3 bigint", () => assertStrictEquals(count(  200n), 3n));
Deno.test("count 4 bigint", () => assertStrictEquals(count( 2000n), 4n));
Deno.test("count 5 bigint", () => assertStrictEquals(count(20000n), 5n));

Deno.test("and 20202 & 22222 = 20202", () => assertStrictEquals(and(20202, 22222), 20202));
Deno.test("and 20102 & 22222 = 20102", () => assertStrictEquals(and(20102, 22222), 20102));
Deno.test("and 22022 & 20202 = 20002", () => assertStrictEquals(and(22022, 20202), 20002));
Deno.test("and 22222 & 22002 = 22002", () => assertStrictEquals(and(22222, 22002), 22002));
Deno.test("and 11111 & 11001 = 11001", () => assertStrictEquals(and(11111, 11001), 11001));
Deno.test("and 11111 & 22002 = 11001", () => assertStrictEquals(and(11111, 22002), 11001));

Deno.test("and 20202 & 22222 = 20202 bigint", () => assertStrictEquals(and(20202n, 22222n), 20202n));
Deno.test("and 20102 & 22222 = 20102 bigint", () => assertStrictEquals(and(20102n, 22222n), 20102n));
Deno.test("and 22022 & 20202 = 20002 bigint", () => assertStrictEquals(and(22022n, 20202n), 20002n));
Deno.test("and 22222 & 22002 = 22002 bigint", () => assertStrictEquals(and(22222n, 22002n), 22002n));
Deno.test("and 11111 & 11001 = 11001 bigint", () => assertStrictEquals(and(11111n, 11001n), 11001n));
Deno.test("and 11111 & 22002 = 11001 bigint", () => assertStrictEquals(and(11111n, 22002n), 11001n));

Deno.test("or  0 |  1 =  1", () => assertStrictEquals(or( 0,  1),  1));
Deno.test("or  1 |  1 =  1", () => assertStrictEquals(or( 1,  1),  1));
Deno.test("or  1 |  2 =  2", () => assertStrictEquals(or( 1,  2),  2));
Deno.test("or  2 |  2 =  2", () => assertStrictEquals(or( 2,  2),  2));
Deno.test("or  2 | 10 = 12", () => assertStrictEquals(or( 2, 10), 12));
Deno.test("or  2 | 11 = 12", () => assertStrictEquals(or( 2, 11), 12));
Deno.test("or 20 | 11 = 21", () => assertStrictEquals(or(20, 11), 21));

Deno.test("or  0 |  1 =  1 bigint", () => assertStrictEquals(or( 0n,  1n),  1n));
Deno.test("or  1 |  1 =  1 bigint", () => assertStrictEquals(or( 1n,  1n),  1n));
Deno.test("or  1 |  2 =  2 bigint", () => assertStrictEquals(or( 1n,  2n),  2n));
Deno.test("or  2 |  2 =  2 bigint", () => assertStrictEquals(or( 2n,  2n),  2n));
Deno.test("or  2 | 10 = 12 bigint", () => assertStrictEquals(or( 2n, 10n), 12n));
Deno.test("or  2 | 11 = 12 bigint", () => assertStrictEquals(or( 2n, 11n), 12n));
Deno.test("or 20 | 11 = 21 bigint", () => assertStrictEquals(or(20n, 11n), 21n));
