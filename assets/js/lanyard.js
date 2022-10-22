var statusIcon = document.getElementById("statusIcon");

const lanyard = new WebSocket("wss://api.lanyard.rest/socket");

var api = {};
var received = false;

lanyard.onopen = function () {
  lanyard.send(
    JSON.stringify({
      op: 2,
      d: {
        subscribe_to_id: "762420804066738186",
      },
    })
  );
};

setInterval(() => {
  if (received) {
    lanyard.send(
      JSON.stringify({
        op: 3,
      })
    );
  }
}, 30000);

lanyard.onmessage = function (event) {
  received = true;
  api = JSON.parse(event.data);

  if (api.t === "INIT_STATE" || api.t === "PRESENCE_UPDATE") {
    update_presence();
  }
};

function update_presence() {
  if (statusIcon != null) {
    update_status(api.d.discord_status);
  }


  if (api.d.discord_status === "dnd") {
    document.getElementById("statusContent").innerHTML = `<i class="fa-solid fa-circle" style="color:red"></i> Do Not Disturb`;

  } else if (api.d.discord_status === "idle") {
    document.getElementById("statusContent").innerHTML = `<i class="fa-solid fa-circle" style="color:orange"></i> Idle`;

  } else if (api.d.discord_status === "online") {
    document.getElementById("statusContent").innerHTML = `<i class="fa-solid fa-circle" style="color:green"></i> Online`;

  } else if (api.d.discord_status === "offline") {
    document.getElementById("statusContent").innerHTML = `<i class="fa-solid fa-circle" style="color:grey"></i> Offline`;

  } else {
    document.getElementById("statusContent").innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Loading`;

  }

}