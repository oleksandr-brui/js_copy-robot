'use strict';

const robotJoy = { serial: 94, name: 'Joy', wheels: 4 };
const robotDonny = createRobotCopy(robotJoy);

function createRobotCopy(robot) {
  // write code here

  for (const [key, value] of Object.entries(robot)) {
    robotDonny.key = value;

    if (key === serial) {
      robotDonny.key += 1;
    }
  }
}