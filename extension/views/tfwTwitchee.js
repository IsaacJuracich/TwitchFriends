(function () {
  window.tfwTwitchee = {
    render: function (friend) {
      return `<div
      class="Layout-sc-nxg1ff-0 fcPbos side-nav-card"
      data-test-selector="side-nav-card"
    >
      <a
        data-a-id="similarity-channel-0"
        data-test-selector="similarity-channel"
        class="ScCoreLink-sc-udwpw5-0 cmQKL InjectLayout-sc-588ddc-0 hqHHYw side-nav-card__link tw-link"
        ><div class="Layout-sc-nxg1ff-0 kZFVrV side-nav-card__avatar">
          <figure
            aria-label="${friend.name}"
            class="ScAvatar-sc-12nlgut-0 dncwPH tw-avatar"
          >
            <img
              id="imgpfp-${friend.name}"
              class="InjectLayout-sc-588ddc-0 iDjrEF tw-image tw-image-avatar"
              alt="${friend.name}"
              src="${friend.pfp}"
              style="border: 2px solid ${statusToColor(
                friend.status
              )}; border-radius: 100%; display: inline-block;"
            />
          </figure>
        </div>
        <div class="Layout-sc-nxg1ff-0 blhocS">
          <div
            data-a-target="side-nav-card-metadata"
            class="Layout-sc-nxg1ff-0 bGPqDX"
          >
            <div class="Layout-sc-nxg1ff-0 gcwIMz side-nav-card__title">
              <p
                title="${friend.name}"
                data-a-target="side-nav-title"
                class="CoreText-sc-cpl358-0 gYupEs InjectLayout-sc-588ddc-0 emHXNr"
              >
                ${friend.name}
              </p>
            </div>
            <div
              class="Layout-sc-nxg1ff-0 bXhxYI side-nav-card__metadata"
              data-a-target="side-nav-game-title"
            >
              <p style="color:red;" title="${
                friend.status
              }" class="CoreText-sc-cpl358-0 ciPVTQ">
                ${friend.status}
              </p>
            </div>
          </div>
          <div
            class="Layout-sc-nxg1ff-0 iiA-dIp side-nav-card__live-status"
            data-a-target="side-nav-live-status"
          >
            <div class="Layout-sc-nxg1ff-0 gcwIMz">
                 <i id="inbox-${
                   friend.name
                 }"class="fa-solid fa-inbox fa-lg" style="
                 margin: auto;
                 padding: 12px;"></i>
              </div>
            </div>
          </div>
        </div></a
      >
    </div>
  </div>
  </div>`;
    },
  };

  function statusToColor(status) {
    switch (status) {
      case "online":
        return "#00ff00";
      case "offline":
        return "#808080";
      case "idle":
        return "#ff6200";
      case "streaming":
        return "#6f00ff";
      case "busy":
        return "#ff2200";
      case "custom":
        return "#3446eb";
      default:
        return "#808080";
    }
  }
}.apply(this));
