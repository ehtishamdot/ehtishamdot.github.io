const iframeContainer = document.querySelector(".iframe-container");
const loader = document.querySelector(".circle-container");

const ytBtns = document.querySelector(".btns");
const loadmoreBtn = document.querySelector(".load-more");
const showallBtn = document.querySelector(".show-all");
const showlessBtn = document.querySelector(".show-less");

class Youtubeapi {
  #currentItem = 6;
  #currentPlayelistId = `PL7d2cHJbFVWiKiRnDGdUrqpzbnlldnPyk`;

  constructor() {
    this.getData(this.#currentPlayelistId);
    ytBtns.addEventListener("click", this.getPlaylistId.bind(this));
    iframeContainer.addEventListener("click", this.appendVideo.bind(this));
    loadmoreBtn.addEventListener("click", this.loadmore.bind(this));
    showallBtn.addEventListener("click", this.showall.bind(this));
    showlessBtn.addEventListener("click", this.showless.bind(this));
  }

  getPlaylistId(e) {
    e.preventDefault();
    if (e.target.closest(".button")) {
      this.cleanIframeContainer();
      this.#currentItem = 6;
      this.getData(e.target.dataset.playlistid);
      this.#currentPlayelistId = e.target.dataset.playlistid;
    }
  }

  async getJSON(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error("api is not working");
    const data = res.json();
    return data;
  }

  async getData(url) {
    loader.style.display = "block";
    try {
      const data = await this.getJSON(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=${
          this.#currentItem
        }&playlistId=${url}&key=AIzaSyCZwu3DfA-5DKJJuhIQpC68WugFsmJoc1Y`
      );
      this.embedVideo(data);
    } catch (err) {
    } finally {
      loader.style.display = "none";
    }
  }

  embedVideo(videos) {
    videos.items.forEach((vid, i) => {
      const html = ` <div class="box">
             <div class="box-title">
            <span >${vid.snippet.title}</span>
            </div>
             <div class="box-player">
              <div class="box-player-play--btn" data-videoId="${vid.snippet.resourceId.videoId}"></div>
              <img
                class="box-img"
                src="${vid.snippet.thumbnails.medium.url}"
                alt=""
              />
            </div>  
          </div>`;
      iframeContainer.insertAdjacentHTML("beforeend", html);
    });
  }

  appendVideo(e) {
    if (e.target.closest(`.box-player-play--btn`)) {
      const html = `<iframe style="width:100%; height:100%" frameborder="0" allowfullscreen="" src="https://www.youtube.com/embed/${e.target.dataset.videoid}?rel=0&amp;showinfo=0&amp;autoplay=1"></iframe>`;
      e.target.parentNode.innerHTML = html;
    }
  }

  /////////////////////////////
  //helper functions
  toggleBtns() {
    showlessBtn.classList.toggle("hidden");
    showallBtn.classList.toggle("hidden");
    loadmoreBtn.classList.toggle("hidden");
  }

  loadmore(e) {
    e.preventDefault();
    try {
      this.#currentItem += 3;
      this.cleanIframeContainer();
      this.getData(this.#currentPlayelistId);
    } catch (err) {
    } finally {
      loader.style.display = "none";
    }
  }

  showall(e) {
    e.preventDefault();
    try {
      loader.style.display = "block";
      this.#currentItem += 100;
      this.getData(this.#currentPlayelistId);
      this.toggleBtns();
    } catch (err) {
    } finally {
      loader.style.display = "none";
    }
  }

  showless(e) {
    e.preventDefault();
    try {
      loader.style.display = "block";
      this.#currentItem = 6;
      this.cleanIframeContainer();
      this.getData(this.#currentPlayelistId);
      this.toggleBtns();
    } catch (err) {
    } finally {
      loader.style.display = "none";
    }
  }

  cleanIframeContainer() {
    iframeContainer.innerHTML = "";
  }
}
const ahtidotpkApi = new Youtubeapi();
