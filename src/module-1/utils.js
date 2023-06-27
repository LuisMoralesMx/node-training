module.exports.getRandomNumber = function(limitRandomNumber) {
    var random = Math.floor(Math.random() * limitRandomNumber);
    return random;
};