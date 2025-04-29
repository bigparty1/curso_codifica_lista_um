const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
    for(let i = 10; i > 0; i--) {
        console.log(i);
        await sleep(1000);
    }
})();