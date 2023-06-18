const bars = document.getElementById('grafico-barras');
const pie = document.getElementById('grafico-pastel');
var layout1 = {
    paper_bgcolor:'#1f1e1e',
    plot_bgcolor:'#1f1e1e',
    xaxis: {
        tickfont: {
          color: '#ffffff'
        }
      },
      yaxis: {
        tickfont: {
          color: '#ffffff'
        }
      },
    title:{
        text:'Ventas de los últimos 6 meses',
        font:{
            color:'#ffffff'
        }
    },
    autosize: true,
}
var data1 = [{
    x: ['Febrero','Marzo','Abril','Mayo','Junio','Julio'],
    y: [12000,10150,13450,16000,9000,11200,15000],
    type:'bar',
    marker:{
        color:[
            '#003f5c',
            '#444e86',
            '#955196',
            '#dd5182',
            '#ff6e54',
            '#ffa600',
        ]
      },
    }
  
];
var layout2 = {
    paper_bgcolor:'#1f1e1e',
    plot_bgcolor:'#1f1e1e',
    title:{
        text:'Tipo más vendido',
        font:{
            color:'#ffffff'
        }
    },
    legend: {
        font: {
          color: '#ffffff' // Color de texto de la leyenda
        }
    },
    margin: {"t": 40, "b": 30, "l": 30, "r": 30},
    autosize: true,
}
var data2 = [{
    labels: ['Coche Estándar','Furgoneta','Coche Industrial','Accesorio'],
    values: [100,40,20,250],
    type:'pie',
    marker:{
        colors:[
            '#003f5c',
            '#7a5195',
            '#ffa600',
            '#ef5675',
        ]
    },
    textfont: {
        color: '#ffffff'
    },
    position: 'middle-center',
    automargin: true,
}];
Plotly.newPlot(bars,data1,layout1);
Plotly.newPlot(pie,data2,layout2);

