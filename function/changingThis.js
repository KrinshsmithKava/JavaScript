// Changing this

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showtags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

video.showtags();

// function playVideo(a, b) {
//     console.log(this);
// }

// playVideo.call({ name: 'Krinshsmith' }, 1, 2);
// playVideo.apply({ name: 'Krinshsmith' }, [1, 2]);
// playVideo.bind({ name: 'Krinshsmith' })();

// playVideo();