// Video Ad; "Skip Ad" or "Skip Ads" button
// "ytp-ad-skip-button-text"

// Banner Ad; "X" button
// "ytp-ad-overlay-close-button"

// 'videoAdUiSkipButton',  Old close ad button
// 'ytp-ad-skip-button ytp-button',  New close ad button
// 'ytp-ad-overlay-close-button',  Close overlay button


const click = (clazz) => {
    const buttons = document.getElementsByClassName(clazz);
    for (const button of buttons) {
      	button.click();
    }
}

setInterval(() => {
  	click("ytp-ad-skip-button-text");
 	click("ytp-ad-overlay-close-button");
}, 2000);