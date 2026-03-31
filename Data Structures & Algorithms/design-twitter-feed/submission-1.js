class Twitter {

    constructor() {
        this.count = 0
        this.tweetMap = new Map()
        this.followMap = new Map();
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if(!this.tweetMap.has(userId)){
            this.tweetMap.set(userId, [])
        }


        const tweets = this.tweetMap.get(userId)

        tweets.push([this.count, tweetId])

        if(tweets.length > 10){
            tweets.shift()
        }

        this.count--;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
    const res = [];
    
    // Ensure the user follows themselves to see their own tweets
    if (!this.followMap.has(userId)) {
        this.followMap.set(userId, new Set());
    }
    this.followMap.get(userId).add(userId);

    // Use a Max-Heap based on the count (since count starts at 0 and goes -1, -2...)
    // If using a standard Min-PriorityQueue, smaller values (more recent) go first.
    const pq = new PriorityQueue((a, b) => a[0] - b[0]);

    for (const followeeId of this.followMap.get(userId)) {
        const tweets = this.tweetMap.get(followeeId);
        if (tweets && tweets.length > 0) {
            const lastIdx = tweets.length - 1;
            const [time, tweetId] = tweets[lastIdx];
            pq.enqueue([time, tweetId, followeeId, lastIdx - 1]);
        }
    }

    while (pq.size() > 0 && res.length < 10) {
        const [time, tweetId, followeeId, nextIdx] = pq.dequeue();
        res.push(tweetId);

        if (nextIdx >= 0) {
            const [prevTime, prevTweetId] = this.tweetMap.get(followeeId)[nextIdx];
            pq.enqueue([prevTime, prevTweetId, followeeId, nextIdx - 1]);
        }
    }

    return res; // <--- Crucial Fix
}

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(!this.followMap.has(followerId)){
            this.followMap.set(followerId, new Set())
        }

        if(followerId !== followeeId){
            this.followMap.get(followerId).add(followeeId)
        }

    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.followMap.has(followerId)) {
            this.followMap.get(followerId).delete(followeeId);
        }
    }
}
