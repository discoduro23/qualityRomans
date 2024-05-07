// Some messages are changed from the previous work, to match with the actual code
test("TC-1: Valid Input (Single Digit)", function(assert) {
  assert.propEqual(convertIntegerToRoman(1), {value: "I", message: "", result: true}, "TC-1");
});

test("TC-2: Valid Input (Multiple Digits)", function(assert) {
  assert.propEqual(convertIntegerToRoman(3999), {value: "MMMCMXCIX", message: "", result: true}, "TC-2");
});

test("TC-3: Negative Input (Not-Valid Number)", function(assert) {
  assert.propEqual(convertIntegerToRoman(-1), {value: 0, message: "Please enter a valid integer", result: false}, "TC-3");
});

test("TC-4: Invalid Input (Number Less Than Range)", function(assert) {
  assert.propEqual(convertIntegerToRoman(0), {value: 0, message: "Out of range (1-3999)", result: false}, "TC-4");
});

test("TC-5: Invalid Input (Number Greater Than Range)", function(assert) {
  assert.propEqual(convertIntegerToRoman(4000), {value: 0, message: "Out of range (1-3999)", result: false}, "TC-5");
});

test("TC-6: Invalid Input (Non-Numeric String)", function(assert) {
  assert.propEqual(convertIntegerToRoman("hello"), {value: 0, message: "Please enter a valid integer", result: false}, "TC-6");
});

test("TC-7: Valid Input (Simple Roman Numeral)", function(assert) {
  assert.propEqual(convertRomanToInteger("X"), {value: 10, message: "", result: true}, "TC-7");
});

test("TC-8: Valid Input (Complex Roman Numeral):", function(assert) {
  assert.propEqual(convertRomanToInteger("MMII"), {value: 2002, message: "", result: true}, "TC-8");
});

test("TC-9: Invalid Input (Empty String)", function(assert) {
  assert.propEqual(convertRomanToInteger(""), {value: 0, message: "Please enter a valid roman", result: false}, "TC-9");
});

test("TC-10: Invalid Input (Invalid Characters)", function(assert) {
  assert.propEqual(convertRomanToInteger("X11"), {value: 0, message: "Please enter a valid roman", result: false}, "TC-10");
});

test("TC-11: Invalid Input (Incorrect Symbol Repetition)", function(assert) {
  assert.propEqual(convertRomanToInteger("IIII"), {value: 0, message: "Please enter a valid roman", result: false}, "TC-11");
});


