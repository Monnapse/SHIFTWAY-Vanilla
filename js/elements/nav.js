function loadNav(element) {
    element.innerHTML = `
        <div class="nav">
            <div class="nav-links-container">
                <a href="index.html">
                    <img  class="logo-text" src="assets/images/LogoText.svg" alt="logo text" loading="lazy">
                </a>
                <nav class="nav-links">
                    <a class="page-link" href="news.html">NEWS</a>
                    <button class="page-link-button page-link">
                        ABOUT <img src="assets/images/down.svg" alt="🔻" loading="lazy">
                        <div class="page-link-hover">
                            <a class="page-link" href="about.html">ABOUT SHIFTWAY</a>
                            <a class="page-link" href="maps.html">MAPS</a>
                            <a class="page-link" href="gamemodes.html">GAMEMODES</a>
                        </div>
                    </button>
                    <a class="page-link" href="support.html">SUPPORT</a>
                </nav>
            </div>
            <div class="nav-buttons">
                <a class="styled-button" href="jointhebeta.html">JOIN THE BETA</a>
                <div class="social-media-links">
                    <a href="twitter">
                        <img src="assets/images/twitter.svg" alt="twitter" loading="lazy">
                    </a> 
                    <a href="youtube"> 
                        <img src="assets/images/youtube.svg" alt="youtube" loading="lazy">
                    </a> 
                    <a href="discord"> 
                        <img src="assets/images/discord.svg" alt="discord" loading="lazy">
                    </a> 
                    <a href="tiktok"> 
                        <img src="assets/images/tiktok.svg" alt="tiktok" loading="lazy">
                    </a>
                </div>
            </div>
        </div>
    `
}