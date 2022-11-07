export const getDataSet = (labels, firstValues, secondValues, firstColor, secondColor) => {
  if (secondValues.length !== 0) {
    return {
      labels,
      datasets: [
        {
          type: 'line',
          yAxisID: 'first',
          borderColor: firstColor,
          borderWidth: 2,
          data: firstValues,
        },
        {
          type: 'line',
          yAxisID: 'second',
          borderColor: secondColor,
          borderWidth: 2,
          data: secondValues,
        },
      ],
    };
  } else {
    return {
      labels,
      datasets: [
        {
          type: 'line',
          yAxisID: 'first',
          borderColor: firstColor,
          borderWidth: 2,
          data: firstValues,
        },
      ],
    };
  }
};

export const getChartOptionProps = (secondValues) => {
  if (secondValues.length !== 0) {
    return {
      elements: {
        point: {
          radius: 0,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        xAxis: {
          grid: {
            display: false,
          },
        },
        first: {
          position: 'left',
          grid: {
            borderWidth: 0,
          },
          ticks: {
            maxTicksLimit: 4,
          },
        },
        second: {
          position: 'right',
          grid: {
            borderWidth: 0,
          },
          ticks: {
            maxTicksLimit: 4,
          },
        },
      },
      responsive: true,
    };
  } else {
    return {
      elements: {
        point: {
          radius: 0,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        xAxis: {
          grid: {
            display: false,
          },
        },
        first: {
          position: 'left',
          grid: {
            borderWidth: 0,
          },
          ticks: {
            maxTicksLimit: 4,
          },
        },
      },
      responsive: true,
    };
  }
};
