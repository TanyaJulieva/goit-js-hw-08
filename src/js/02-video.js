import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    const currentTimeLSKey = "videoplayer-current-time";
    const videoTime = localStorage.getItem(currentTimeLSKey);

    function onPlay(data) {
const currentTime = data.seconds;
localStorage.setItem(currentTimeLSKey, JSON.stringify(currentTime));
    };

    player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(videoTime);
