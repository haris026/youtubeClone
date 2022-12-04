const vContainers = document.querySelectorAll('.root__content__videos__container__video');
for (let i = 0; i < vContainers.length; i++) {
    const iframe = vContainers[i].querySelector('iframe');
    if (i > youtubeKlipovi.length - 1) break;
    iframe.src = youtubeKlipovi[i].video.url
}