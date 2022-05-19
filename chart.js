const getWeather = async () => {
    const url = 'https://api.waqi.info/feed/mexico/?token=bfa4362bd4d05d8afb40b09afe745c48b2b8b583'
    const res = await fetch(url)

    console.log(res)
    const data = await res.json()

    console.log(data)
    setGraph(data.data)
}

const setGraph = (data) => {
    const labels = Object.keys(data.iaqi)
    const convertData = Object.values(data.iaqi).map(item => item.v)
    console.log(convertData)

    const dataConfig = {
        labels: labels,
        datasets: [{
            label : 'my first dataSet',
            backgroundColor: 'rgb(255,99,132)',
            borderColor: 'rgb(255,99,132)',
            data: convertData,
        }]
    };


    const config = {
        type: 'bar',
        data: dataConfig,
        options: {
            scales: {
             y: {
                 beginAtZero: true
                 }
            }
        }
    };
    
    const myChart = new Chart(
        document.getElementById('myChart1'),
        config

    )


}

// Aqui inician los intentos por generar las otras graficas

const setGraph2 = (data) => {
    const labels = Object.keys(data.iaqi)
    const convertData = Object.values(data.iaqi).map(item => item.v)
    console.log(convertData)

    const dataConfig = {
        labels: labels,
        datasets: [{
            label : 'my first dataSet',
            backgroundColor: 'rgb(255,99,132)',
            borderColor: 'rgb(255,99,132)',
            data: convertData,
        }]
    };


    const config = {
        type: 'bar',
        data: dataConfig,
        options: {
            scales: {
             y: {
                 beginAtZero: true
                 }
            }
        }
    };
    
    const myChart2 = new Chart(
        document.getElementById('myChart2'),
        config

    )




}






getWeather()

