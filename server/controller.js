
const fortunes = [
    "As iron sharpens iron, so one person sharpens another",
    "Beware the man of a single book",
    "The things that we love tell us what we are",
    "There is nothing on this earth more to be prized than true friendship",
    "Sorrow can be alleviated by good sleep, a bath and a glass of wine"
]

const dostQuotes = [
    "Short cuts make long delays",
    "Above all, don't lie to yourself",
    "It takes something more than intelligence to live intelligently",
    "Taking a new step, uttering a new word, is what people fear most",
    "Nothing in this world is harder than speaking the truth, nothing easier than flattery"
]

const MTQuotes = [
    "Peace begins with a smile",
    "A life not lived for others is not a life",
    "Life is a song, sing it. Life is a struggle, accept it",
    "Do not wait for leaders; do it alone, person to person"
]
const mlkQuotes = [
    "A lie cannot live",
    "There can be no deep disappointment where there is not deep love",
    "Let no man pull you so low as to hate him",
    "A man who wont die for something is not fit to live"
]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
       
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },

    getDost: (req, res) => {
        let randomIndex = Math.floor(Math.random() * dostQuotes.length)
        let randomDost = dostQuotes[randomIndex]

        res.status(200).send(randomDost)
    },

    getMT: (req, res) => {
        let randomIndex = Math.floor(Math.random() * MTQuotes.length)
        let randomMT = MTQuotes[randomIndex]

        res.status(200).send(randomMT)
    },

    getMLK: (req, res) => {
        let randomIndex = Math.floor(Math.random() * mlkQuotes.length)
        let randomMLK = mlkQuotes[randomIndex]

        res.status(200).send(randomMLK)
    }


}