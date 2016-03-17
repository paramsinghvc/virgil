export default class ChartSvc {
	constructor() {
		this.chartColors = ['#ff7575', '#ffae82', '#75e8d4', '#ffdd69', '#6bde83'];
	}


	prepareChartData(skills) {
		let data = [],
			paletteData = [];

		skills.stats.forEach(function(skill, index) {
			data.push({
				value: skill.value,
				label: skill.key,
				color: this.chartColors[index]
			});

			paletteData.push({
				label: skill.key,
				color: {'background' : this.chartColors[index] }
			})

		}.bind(this))

		return {
			data: data,
			paletteData: paletteData
		};
	}

}
