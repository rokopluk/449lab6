// Add JavaScript below
function randomNameGenerator() {
    return{
        names:['Billy','Joe','John','Steve','Jennifer','Rico','bob','Jeffrey','Alex','Ben'],
        randomName:'',
        generateRandomName(){
            this.randomName = this.names[Math.floor(Math.random()*this.names.length)];
        }
    };
}