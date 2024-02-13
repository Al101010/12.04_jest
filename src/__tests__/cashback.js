import calculateCashback from "../cashback";

test ('cashback at sum: 500', () => {
    const result = calculateCashback(500);
    expect(result).toBe(0);
});