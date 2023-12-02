var xValues = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
		var yValues = [17, 28, 28, 39, 59, 79, 88, 66, 44, 39, 20,15];

		new Chart("myChart", {
			type: "line",
			data: {
				labels: xValues,
				datasets: [{
					fill: false,
					lineTension: 0,
					backgroundColor: "rgba(0,0,255,1.0)",
					borderColor: "rgba(0,0,255,0.1)",
					data: yValues
				}]
			},
			options: {
				legend: { display: false },
				scales: {
					yAxes: [{ ticks: { min: 0, max: 100 } }],
				},
				title: {
					display: true,
					text: "Monthly Sales"
				}
			}
		});

		var xValues = ["Jan-Apr","May-Aug","Sep-Dec"];
		var yValues = [10,24,18];

		new Chart("myChart1", {
			type: "line",
			data: {
				labels: xValues,
				datasets: [{
					fill: false,
					lineTension: 0,
					backgroundColor: "rgba(0,0,255,1.0)",
					borderColor: "rgba(0,0,255,0.1)",
					data: yValues
				}]
			},
			options: {
				legend: { display: false },
				scales: {
					yAxes: [{ ticks: { min: 0, max: 30 } }],
				},
				title: {
					display: true,
					text: "Quartely Sales 2020-2021"
				}
			}
		});

		
		var xValues = ["Apple","Samsung","Google","Huawei","OnePlus","Xiaomi","Oppo","LG","Vivo","Nokia"];
		var yValues = [12,23,13,33,80,72,66,18,79,11];
		var barColors = ["blue", "#blue", "blue", "blue", "blue","blue", "blue", "blue", "blue", "blue","blue", "blue"];

		new Chart("myChart2", {
			type: "bar",
			data: {
				labels: xValues,
				datasets: [{
					backgroundColor: barColors,
					data: yValues
				}]
			},
			options: {
				legend: { display: false },
				title: {
					display: true,
					text: "Brand Sales for Today"
				}
			}
		});

		var xValues = ["Apple","Samsung","Google","Huawei","OnePlus","Xiaomi","Oppo","LG","Vivo","Nokia"];
		var yValues = [21,44,23,50,40,42,36,48,43,42];
		var barColors = ["blue", "#blue", "blue", "blue", "blue","blue", "blue", "blue", "blue", "blue","blue", "blue"];

		new Chart("myChart3", {
			type: "bar",
			data: {
				labels: xValues,
				datasets: [{
					backgroundColor: barColors,
					data: yValues
				}]
			},
			options: {
				legend: { display: false },
				title: {
					display: true,
					text: "Brand Sales for Previous Month"
				}
			}
		});