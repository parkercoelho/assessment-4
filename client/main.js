
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const dostBtn = document.getElementById("dostoevsky")
const MTBtn = document.getElementById("teresa")
const mlkBtn = document.getElementById("mlk")



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
    .then(res => {
        const data = res.data
        alert(data);
    })
};

const getDost = () => {
    axios.get("http://localhost:4000/api/dostoevsky")
    .then(res => {
        alert(res.data)
    })
};

const getMT = () => {
    axios.get("http://localhost:4000/api/teresa")
    .then(res => {
        alert(res.data)
    })
};

const getMLK = () => {
    axios.get("http://localhost:4000/api/mlk")
    .then(res => {
        alert(res.data)
    })
};



fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
dostBtn.addEventListener('click', getDost)
MTBtn.addEventListener('click', getMT)
mlkBtn.addEventListener('click', getMLK)


