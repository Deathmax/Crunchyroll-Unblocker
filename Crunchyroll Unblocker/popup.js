var regionSelect = null;

function saveSettings() {
  var region = regionSelect.options[regionSelect.selectedIndex].value;
  chrome.storage.local.set({"REGION_SETTINGS": regionSelect.options[regionSelect.selectedIndex].value});
  chrome.runtime.sendMessage({msg: "SET"});
  return false;
}

document.addEventListener('DOMContentLoaded', function () {
  regionSelect = document.getElementById('region');
  chrome.storage.local.get("REGION_SETTINGS", function (items) {
    var region = items["REGION_SETTINGS"];
    var opts = regionSelect.options;
    for (var opt, j = 0; opt = opts[j]; j++) {
      if (opt.value == region) {
        regionSelect.selectedIndex = j;
        break;
      }
    }
  });
  document.getElementById('savesettings').addEventListener('submit', saveSettings);
});