let pingCount = 0;
let pongCount = 0;

function ping() {
  console.log(new Date().toISOString(), ++pingCount, `ping`);
  // pong(); // error after some time
  process.nextTick(pong);
}

function pong() {
  console.log(new Date().toISOString(), ++pongCount, `pong`);
  // ping(); // error after some time
  process.nextTick(ping);
}

ping();
