test("Equilateral", function (assert) {
    assert.equal(getTriangleType(2,2,2), EQUILATERAL, "NORMAL");
    assert.equal(getTriangleType(0.1,0.1,0.1), EQUILATERAL, "SMALL DECIMAL NUMBERS");
    assert.equal(getTriangleType(99999,99999,99999), EQUILATERAL, "BIG INTEGERS");
});

test("Isosceles", function (assert) {
    assert.equal(getTriangleType(2,2,3), ISOSCELES, "LAST ONE DIFFERENT");
    assert.equal(getTriangleType(2,3,2), ISOSCELES, "MIDDLE ONE DIFFERENT");
    assert.equal(getTriangleType(3,2,2), ISOSCELES, "FIRST ONE DIFFERENT");
});

test("Scalene", function (assert) {
    assert.equal(getTriangleType(2,3,4), SCALENE, "LAST BIGGEST");
    assert.equal(getTriangleType(2,4,3), SCALENE, "MIDDLE BIGGEST");
    assert.equal(getTriangleType(4,3,2), SCALENE, "FIRST BIGGEST");
});

test("Not a Triangle", function (assert) {
    assert.equal(getTriangleType(1,3,4), NOT_A_TRIANGLE, "BIG IS LAST ONE");
    assert.equal(getTriangleType(4,3,1), NOT_A_TRIANGLE, "BIG IS FIRST ONE");
    assert.equal(getTriangleType(2,5,3), NOT_A_TRIANGLE, "BIG IS MIDDLE ONE");
    assert.equal(getTriangleType(2,5,2.99999999), NOT_A_TRIANGLE, "BIG IS MIDDLE ONE WITH DECIMALS");
});

test("Invalid Arguments", function (assert) {
    assert.equal(getTriangleType(0,0,0), INVALID_ARGUMENTS , "ALL ZEROS");
    assert.equal(getTriangleType(-1,1,1), INVALID_ARGUMENTS, "FIRST ONE INVALID");
    assert.equal(getTriangleType(2,-5,3), INVALID_ARGUMENTS, "SECOND ONE INVALID");
    assert.equal(getTriangleType(2,5,-2.99999999), INVALID_ARGUMENTS, "THIRD ONE INVALID");
    assert.equal(getTriangleType("A",1,1), INVALID_ARGUMENTS, "FIRST ONE LETTER");
    assert.equal(getTriangleType(2,"!",3), INVALID_ARGUMENTS, "SECOND ONE SPECIAL CHARACTER");
    assert.equal(getTriangleType(2,5,"AA"), INVALID_ARGUMENTS, "THIRD ONE LETTER");
});
