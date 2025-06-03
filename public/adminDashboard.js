// Js For LineChart
// window.addEventListener("DOMContentLoaded", () => {
//     const ctx = document.getElementById("earningsLineChart").getContext("2d");

//     new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//             datasets: [
//                 {
//                     label: 'Income',
//                     data: [400000, 450000, 500000, 600000, 700000, 750000, 800000, 820000, 870000, 910000, 950000, 1000000],
//                     borderColor: '#60A5FA',
//                     backgroundColor: 'rgba(96, 165, 250, 0.2)',
//                     fill:true,
//                     tension: 0.5,
//                     pointRadius: 4,
//                     pointHoverRadius: 6
//                 },
//                 {
//                     label: 'Expense',
//                     data: [350000, 400000, 420000, 550000, 550000, 600000, 630000, 650000, 700000, 750000, 800000, 850000],
//                     borderColor: '#F87171',   
//                     backgroundColor: 'rgba(248, 113, 113, 0.2)',
//                     fill: true,
//                     tension: 0.4,
//                     pointRadius: 4,
//                     pointHoverRadius: 6
//                 }
//             ]
//         },
//         options: {
//             responsive: true,
//             plugins: {
//                 legend: {
//                     // legend: { position: 'top' }, ADD  legend (box with Income/Expense) 
//                     display: false // ❌ Ye line chart ke top legend ko hata degi
//                 },
//                 tooltip: {
//                     mode: 'index',
//                     intersect: false,
//                     backgroundColor: 'rgba(0,0,0,0.7)',  // hover box style
//                     titleFont: { size: 14 },
//                     bodyFont: { size: 14 },
//                     padding: 10
//                 },
//                 verticalHoverLine: {
//                     color: 'rgba(0,0,0,0.1)', // vertical bar color
//                 }
//             },
//             interaction: {

//                 mode: 'index',
//                 axis: 'x',       // ✅ tells Chart.js to highlight entire vertical section
//                 intersect: false
//             },
//             scales: {
//                 x: {
//                     grid: {
//                         display: false  // ✅ REMOVE vertical grid lines
//                     }
//                 },
//                 y: {
//                     beginAtZero: true,
//                     max: 1000000,
//                     ticks: {
//                         stepSize: 200000,
//                         callback: value => `₹${value / 1000}K`
//                     },
//                     grid: {
//                         display: true,       // ✅ KEEP horizontal lines
//                         drawTicks: false
//                     }
//                 }
//             }

//         },
//         plugins: [{
//             id: 'verticalHoverLine',
//             beforeDraw: chart => {
//               if (chart.tooltip?._active?.length) {
//                 const ctx = chart.ctx;
//                 const tooltipPoint = chart.tooltip._active[0].element;

//                 const centerX = tooltipPoint.x;
//                 const widthBetweenPoints = tooltipPoint.options.radius * 8 || 50;

//                 const topY = chart.scales.y.top;
//                 const bottomY = chart.scales.y.bottom;

//                 ctx.save();
//                 ctx.fillStyle = chart.options.plugins.verticalHoverLine.color || 'rgba(0,0,0,0.05)';
//                 ctx.fillRect(centerX - widthBetweenPoints / 2, topY, widthBetweenPoints, bottomY - topY);
//                 ctx.restore();
//               }
//             }
//         }]
//     });
// });


window.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("earningsLineChart").getContext("2d");

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Income',
                    data: [400000, 450000, 500000, 600000, 700000, 750000, 800000, 820000, 870000, 910000, 950000, 1000000],
                    borderColor: '#60A5FA',
                    backgroundColor: 'rgba(96, 165, 250, 0.2)',
                    fill: true,
                    tension: 0.5,
                    pointRadius: 4,
                    pointHoverRadius: 6
                },
                {
                    label: 'Expense',
                    data: [350000, 400000, 420000, 550000, 550000, 600000, 630000, 650000, 700000, 750000, 800000, 850000],
                    borderColor: '#F87171',
                    backgroundColor: 'rgba(248, 113, 113, 0.2)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    // legend: { position: 'top' }, ADD  legend (box with Income/Expense) 
                    display: false // ❌ Ye line chart ke top legend ko hata degi
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,

                    backgroundColor: 'rgba(0,0,0,0.7)',  // hover box style
                    titleFont: { size: 14 },
                    bodyFont: { size: 14 },
                    padding: 10
                }
            },

            interaction: {
                mode: 'index',
                intersect: false,
                axis: 'x',
            },
            scales: {
                x: {
                    grid: {
                        display: false  // ✅ REMOVE vertical grid lines
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 1000000,
                    ticks: {
                        stepSize: 200000,
                        callback: value => `₹${value / 1000}K`
                    },
                    grid: {
                        display: true,       // ✅ KEEP horizontal lines
                        drawTicks: false
                    }
                }
            }

        }

    });
});

// Js For PieCharts
window.onload = function () {
    // Chart 1: Expenses
    const ctx1 = document.querySelector(".expense-chart").getContext('2d');
    const expenseData = {
        labels: ['Management', 'Infrastructure', 'Salaries Distribution', 'Others'],
        datasets: [{
            label: 'Expenses',
            data: [300, 50, 100, 200],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)'
            ],
            hoverOffset: 3
        }]
    };
    new Chart(ctx1, {
        type: 'pie',
        data: expenseData
    });

    // Chart 2: Revenue
    const ctx2 = document.querySelector(".revenue-chart").getContext('2d');
    const revenueData = {
        labels: ['Admission', 'Fees', 'Fund/Self'],
        datasets: [{
            label: 'Revenue',
            data: [300, 250, 100],
            backgroundColor: [
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 3
        }]
    };
    new Chart(ctx2, {
        type: 'pie',
        data: revenueData
    });
};

// Toggle menu Section
const menuBtn = document.querySelector('.menu-btn');
const menuSection = document.querySelector('.menu-section');

menuBtn.addEventListener('click', () => {
    menuSection.classList.toggle('active');

});
