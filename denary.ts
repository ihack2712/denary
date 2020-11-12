const big0 = 0n;
const num0 = 0;

const big1 = 1n;
const num1 = 1;

const big10 = 10n;
const num10 = 10;

function floor (value: number): number;
function floor (value: bigint): bigint;
function floor (value: number | bigint): number | bigint;
function floor (value: number | bigint): number | bigint
{
	return typeof value === "number" ? Math.floor(value) : value;
}

function leftShift (...digits: number[]): number;
function leftShift (...digits: bigint[]): bigint;
function leftShift (...digits: (number | bigint)[]): number | bigint;
function leftShift (...digits: (number | bigint)[]): number | bigint
{
	const initialValue = floor(digits.shift() as any);
	const multiplier = typeof initialValue === "bigint" ? big10 : num10;
	return digits.reduce((prev, cur) => (prev as any) * ((multiplier as any) ** floor(cur as any)), initialValue);
}

function rightShift (...digits: number[]): number;
function rightShift (...digits: bigint[]): bigint;
function rightShift (...digits: (number | bigint)[]): number | bigint;
function rightShift (...digits: (number | bigint)[]): number | bigint
{
	const initialValue = floor(digits.shift() as any);
	const multiplier = typeof initialValue === "bigint" ? big10 : num10;
	return floor(digits.reduce((prev, cur) => (prev as any) / ((multiplier as any) ** floor(cur as any)), initialValue) as any);
}

function count (a: number): number;
function count (a: bigint): bigint;
function count (a: number | bigint): number | bigint;
function count (a: number | bigint): number | bigint
{
	const zero = typeof a === "bigint" ? big0 : num0;
	const one = typeof a === "bigint" ? big1 : num1;
	let count = zero;
	while (a > zero)
	{
		a = rightShift(a as any, one);
		count++;
	}
	return count;
}

function _max (digit: bigint, ...digits: number[]): number;
function _max (digit: bigint, ...digits: bigint[]): bigint;
function _max (digit: number | bigint, ...digits: (number | bigint)[]): number | bigint;
function _max (digit: number | bigint, ...digits: (number | bigint)[]): number | bigint
{
	let a = digit;
	for (let t of digits)
		if (t > a)
			a = t;
	return a;
}

function _ (a: number | bigint, b: number | bigint, c: (p: number | bigint, a: number | bigint, b: number | bigint, pp: number | bigint) => bigint | number): number | bigint
{
	const zero = typeof a === "bigint" ? big0 : num0;
	const one = (typeof a === "bigint" ? big1 : num1) as any;
	let pa = zero as any;
	let pb = zero as any;
	let out = zero as any;
	const aCount = count(a);
	const bCount = count(b);
	const max = _max(aCount, bCount) as any;
	let pos = max - one;
	while (pos > -one)
	{
		const ca = (() => {
			if (pos > aCount) return zero;
			const _ca = rightShift((a as any) - pa, pos) as any;
			pa += leftShift(_ca, pos);
			return _ca;
		})();
		const cb = (() => {
			if (pos > bCount) return zero;
			const _cb = rightShift((b as any) - pb, pos) as any;
			pb += leftShift(_cb, pos);
			return _cb;
		})();
		out = c(out, ca, cb, pos);
		pos--;
	}
	return out;
}

function _and (a: number | bigint, b: number | bigint): number | bigint
{
	return _(a, b, (p, aa, bb, pp) => (aa <= bb && aa > (typeof aa === "bigint" ? big0 : num0)) ? (p as any) + leftShift(aa, pp) : p);
}

function and (...digits: number[]): number;
function and (...digits: bigint[]): bigint;
function and (...digits: (number | bigint)[]): number | bigint;
function and (...digits: (number | bigint)[]): number | bigint
{
	return digits.reduce((prev, cur) => _and(prev, floor(cur as any)), floor(digits.shift() as any));
}

function _or (a: number | bigint, b: number | bigint): number | bigint
{
	return _(a, b, (p, aa, bb, pp) => (p as any) + leftShift(_max(aa, bb), pp));
}

function or (...digits: number[]): number;
function or (...digits: bigint[]): bigint;
function or (...digits: (number | bigint)[]): number | bigint
{
	return digits.reduce((prev, cur) => _or(prev, floor(cur as any)), floor(digits.shift() as any));
}

export {
	leftShift,
	rightShift,
	count,
	and,
	or,
};
