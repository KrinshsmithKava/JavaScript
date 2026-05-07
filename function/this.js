// The "This" Keyword

// method -> obj
// function -> global (window, global)

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showtags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
};

video.showtags();