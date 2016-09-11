while(true) {
  p(1);
  break;
}

var a = 0;
while(a < 2) {
  a = a + 1;
  p(2);
  continue;
  p(1);
}
