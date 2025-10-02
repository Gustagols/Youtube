fetch("./data/video-data.json")
    .then(response => response.json())
    .then(data => {

        let videosHTML = '';

    data.forEach((video) => {
        videosHTML += `
     <div class="video-container">
            <div class="thumbnail-container">
                <a href="${video.id}" target="_blank"> 
                <img class="video-thumbnail"
                    src="${video.thumbnail}">
                <div class="video-time">${video.time}</div>
                 </a>
            </div>
            <div class="video-info-grid">
                <div class="channel-picture-container">
                    <a href="${video["channel-id"]}" target="_blank">
                    <img class="channel-picture"
                        src="${video["channel-picture"]}" alt="channel picture">
                     </a>
                     <div class="tooltip-picture">
                        <!-- <img class="channel-picture-tooltip" src="https://yt3.ggpht.com/UUm4lyajZDllkiLWALJkyLVB4APv2IkobccT9IsnUEmTFYvgxri4tWfA5EgnHvv4gaFsLTHkeQ=s68-c-k-c0x00ffffff-no-rj" alt="cnannel picture"> -->
                    <div class="tooltip-text"> 
                    <!-- <div class="channel-tooltip-name">Sergey Meshkov</div>  -->
                    <!-- <div class="channel-tooltip-stats">3.59K subscribers</div> -->
                    </div>
                    </div>
                </div>
                <div class="video-text-container">
                    <p class="video-title">
                        ${video.title}
                    </p>
                    <p class="video-author">
                        ${video["channel-name"]}
                    </p>
                    <p class="video-stats">
                        ${video.stats}
                    </p>
                </div>
                 <div class="options-container">
                    <img src="../assets/icons/videos/options-icon.svg" alt="options icon">
                </div>
            </div>
        </div> 
    `;
        });

        document.querySelector('.js-videos-grid').innerHTML = videosHTML;
    })
    .catch(error => console.error("Erro ao carregar vídeos:", error));

