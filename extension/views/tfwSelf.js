(function () {
  window.tfwSelf = {
    render: function (friend) {
      const { tfwId, name, status, stream, friends, pfp } = friend;
      return `
      <div class="ScTransitionBase-sc-eg1bd7-0 dpqRKW tw-transition" style="transition-property: transform, opacity; transition-timing-function: ease;">
        <div>
         <div class="Layout-sc-nxg1ff-0 fcPbos side-nav-card" data-test-selector="side-nav-card">
            <a class="ScCoreLink-sc-udwpw5-0 cmQKL InjectLayout-sc-588ddc-0 hqHHYw side-nav-card__link tw-link" data-a-id="recommended-channel-0" data-test-selector="recommended-channel">
               <div class="Layout-sc-nxg1ff-0 kZFVrV side-nav-card__avatar">
                  <figure aria-label="${name}" class="ScAvatar-sc-12nlgut-0 dncwPH tw-avatar"><img class="InjectLayout-sc-588ddc-0 iDjrEF tw-image tw-image-avatar" alt="${name}" href="/${name}" src="${pfp}" style="border: 2px solid ${statusToColor(
        friend.status
      )}; border-radius: 100%; display: inline-block;">
                  </figure>
               </div>
               <div class="Layout-sc-nxg1ff-0 blhocS">
                  <div data-a-target="side-nav-card-metadata" class="Layout-sc-nxg1ff-0 bGPqDX">
                     <div class="Layout-sc-nxg1ff-0 gcwIMz side-nav-card__title">
                        <p title="${name}" data-a-target="side-nav-title" class="CoreText-sc-cpl358-0 gYupEs InjectLayout-sc-588ddc-0 emHXNr">${name}</p>
                     </div>
                     <div class="Layout-sc-nxg1ff-0 bXhxYI side-nav-card__metadata" data-a-target="side-nav-game-title">
                        <p title="${status}" class="CoreText-sc-cpl358-0 ciPVTQ">${status}</p>
                     </div>
                  </div>
                  <div class="Layout-sc-nxg1ff-0 iiA-dIp side-nav-card__live-status" data-a-target="side-nav-live-status">
                     <div class="Layout-sc-nxg1ff-0 gcwIMz">
                        <div class="Layout-sc-nxg1ff-0 gtLBqE">
                          <button class="my-2" id="tfw-edit">Edit</button>
                        </div>
                     </div>
                  </div>
               </div>
            </a>
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
