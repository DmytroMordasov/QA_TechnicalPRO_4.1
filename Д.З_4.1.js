// 1. 'number' + 3 + 3
// 'number' + 3 → 'number3' (конкатенація, бо рядок)
// 'number3' + 3 → 'number33'
'number' + 3 + 3; // → "number33"


// 2. null + 3
// null приводиться до 0
// 0 + 3 = 3
null + 3; // → 3


// 3. 5 && "qwerty"
// 5 — truthy
// && повертає останнє truthy значення
5 && "qwerty"; // → "qwerty"


// 4. +'40' + +'2' + "hillel"
// +'40' → 40
// +'2' → 2
// 40 + 2 = 42
// 42 + "hillel" → "42hillel"
+'40' + +'2' + "hillel"; // → "42hillel"


// 5. '10' - 5 === 6
// '10' → 10 (числове перетворення)
// 10 - 5 = 5
// 5 === 6 → false
'10' - 5 === 6; // → false


// 6. true + false
// true → 1
// false → 0
// 1 + 0 = 1
true + false; // → 1


// 7. '4px' - 3
// '4px' → NaN
// NaN - 3 → NaN
'4px' - 3; // → NaN


// 8. '4' - 3
// '4' → 4
// 4 - 3 = 1
'4' - 3; // → 1


// 9. '6' + 3 ** 0
// 3 ** 0 = 1
// '6' + 1 → "61"
'6' + 3 ** 0; // → "61"


// 10. 12 / '6'
// '6' → 6
// 12 / 6 = 2
12 / '6'; // → 2


// 11. '10' + (5 === 6)
// 5 === 6 → false
// '10' + false → "10false"
'10' + (5 === 6); // → "10false"


// 12. null == ''
// null не дорівнює ''
null == ''; // → false


// 13. 3 ** (9 / 3)
// 9 / 3 = 3
// 3 ** 3 = 27
3 ** (9 / 3); // → 27


// 14. !!'false' == !!'true'
// 'false' → truthy → true
// 'true' → truthy → true
// true == true → true
!!'false' == !!'true'; // → true


// 15. 0 || '0' && 1
// '0' — truthy
// '0' && 1 → 1
// 0 || 1 → 1
0 || '0' && 1; // → 1


// 16. (+null == false) < 1
// +null → 0
// 0 == false → true
// true → 1
// 1 < 1 → false
(+null == false) < 1; // → false


// 17. false && true || true
// false && true → false
// false || true → true
false && true || true; // → true


// 18. false && (false || true)
// false || true → true
// false && true → false
false && (false || true); // → false


// 19. (+null == false) < 1 ** 5
// +null → 0
// 0 == false → true → 1
// 1 ** 5 = 1
// 1 < 1 → false
(+null == false) < 1 ** 5; // → false
