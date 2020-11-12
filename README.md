# Denary Numeral System Logical Operations

Logical operations for the denary numeral system.

## Usage

Import the module.

```ts
// Imports
import { leftShift, rightShift, and, or, count } from "https://deno.land/x/denary/mod.ts";
```

## Left Shift Logical Operation

In binary a left shift logical operation means moving bits to left (multiplication). In js/ts there is a logical operator for performing a left shift operation on binary numbers (`<<`), however, that operator doesn't work for denary, hence binary works with power of two and denary works on the power of ten. The mathematical equation to perform a left shift operation is given number *`x`* and amount of positions *`p`*: `x * 10 ** p`.

```ts
leftShift(
	parseInt("2", 10),
	10
) === parseInt("2000", 10);
// -> true

leftShift(
	parseInt("12", 10),
	10
) === parseInt("12000", 10);
// -> true
```

## Right Shift Logical Operation

The mathematical equation to perform a right shift operation is given number *`x`* and amount of positions *`p`*: `x / 10 ** p`.

```ts
rightShift(
		parseInt("2000", 10),
		10
) ===	parseInt("2", 10);
// -> true

rightShift(
		parseInt("12000", 10),
		10
) ===	parseInt("12", 10);
// -> true
```

## And Logical Operation

An and logical operation is to go through two fields of digits. Imagine field *`a`* and field *`b`*, when going through each digit from the left to the right, one will check if a statement is true, if it is one will place the digit back to it's position in a field *`c`*. When going through the fields of denary digits consider *`da`* to mean *digit from `a`* and *`db`* to mean *digit from `b`*. *`da`* and *`db`* will be start from left most (last) digit, meaning that they will start from the greatest position, if the other field does not have any digit in that position, the digit will become zero. The next part will be to check if *`da`* is more than zero and also less or equal to *`db`*, if it is, put the digit back in the same position in *field `c`*. Do that for every digit in the fields, and once you've computed the last digit of *`c`*, return *`c`*.

```ts
and(
		parseInt("20202", 10),
		parseInt("22222", 10)
) ===	parseInt("20202", 10);
// -> true

and(
		parseInt("22022", 10),
		parseInt("20202", 10)
) ===	parseInt("20002", 10);
// -> true
```

## Or Logical Operation

An or logical operation is to go through to fields of digits and for each digit choose the greatest digit and put it back in *field `c`*. When you've done that for every digit, return *field `c`*.

```ts
or(
		parseInt("20102", 10),
		parseInt("11012", 10)
) ===	parseInt("21112", 10);
// -> true

or(
		parseInt("22022", 10),
		parseInt("20202", 10)
) ===	parseInt("22222", 10);
// -> true
```
