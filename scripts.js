// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", (event) => {
  console.log("Page loaded");

  //Takeoff btn
  let takeoff = document.getElementById("takeoff");
  let flightStatus = document.querySelector("#flightStatus");
  let shuttleBackground = document.getElementById("shuttleBackground");
  let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

  takeoff.addEventListener("click", function () {
    let isReady = window.confirm(
      "Confirm that the shuttle is ready for takeoff."
    );
    if (isReady === true) {
      flightStatus.innerHTML = "Shuttle in flight.";
      shuttleBackground.style.backgroundColor = "blue";
      spaceShuttleHeight.innerHTML =
        Number(spaceShuttleHeight.innerHTML) + 10000;
    } else {
      window.alert("Shuttle not ready");
    }
  });

  //Land btn
  let landing = document.querySelector("#landing");

  landing.addEventListener("click", function () {
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = "0";
  });

  // Abort btn
  let missionAbort = document.getElementById("missionAbort");

  missionAbort.addEventListener("click", function () {
    let confirmMissionAbort = window.confirm(
      "Confirm that you want to abort the mission."
    );

    if (confirmMissionAbort === true) {
      flightStatus.innerHTML = "Mission aborted.";
      shuttleBackground.style.backgroundColor = "green";
      spaceShuttleHeight.innerHTML = "0";
    } else {
      window.alert("Mission NOT aborted");
    }
  });
  //Directional btns
  let up = document.getElementById("up");
  let down = document.getElementById("down");
  let right = document.getElementById("right");
  let left = document.getElementById("left");
  let rocket = document.querySelector("#rocket");

  rocket.style.bottom = 0;
  rocket.style.position = "absolute";

  let initialTranslate = 0;
  let translateAmmount = 10;

  up.addEventListener("click", function () {
    initialTranslate += translateAmmount;
    rocket.style.transform = "translateY(-" + initialTranslate + "px)";
    spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
  });

  down.addEventListener("click", function () {
    initialTranslate += translateAmmount;
    rocket.style.transform = "translateY(" + initialTranslate + "px)";
    spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
  });
  right.addEventListener("click", function () {
    initialTranslate += translateAmmount;
    rocket.style.transform = "translateX(" + initialTranslate + "px)";
  });
  left.addEventListener("click", function () {
    initialTranslate += translateAmmount;
    rocket.style.transform = "translateX(-" + initialTranslate + "px)";
  });
});
