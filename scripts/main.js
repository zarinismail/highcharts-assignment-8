Highcharts.chart("container", {
  chart: {
    type: "tilemap",
    inverted: true,
    height: "80%",
  },

  accessibility: {
    description:
      "A tile map represents the states of the USA by hate crime rates between 2013 to 2023. The hexagonal tiles are positioned to geographically echo the map of the USA. Hate crime rates are determined by the total rate of hate crime offenders per 100,000 in each state. A color-coded legend states the hate crime rate, starting below 10 (lime green), 10 to 20 (light teal), 30 to 40 (light blue), 40 to 60 (blue), and above 60 (dark blue). The chart is interactive, and the individual state data points are displayed upon hovering. The region with the highest crime rate is the District of Columbia, with a rate of 245 hate crime offenders per 100,000. The state with the lowest crime rate is Rhode Island, with a rate of 7 per 100,000. The western US region generally has higher crime rates than the southeast.",
    screenReaderSection: {
      beforeChartFormat:
        "<h5>{chartTitle}</h5>" +
        "<div>{chartSubtitle}</div>" +
        "<div>{chartLongdesc}</div>" +
        "<div>{viewTableButton}</div>",
    },
    point: {
      valueDescriptionFormat: "{index}. {xDescription}, {point.value}.",
    },
  },

  title: {
    text: "U.S. hate crime rates (per 100,000) from 2013 to 2023",
    style: {
      fontSize: "1em",
    },
  },

  subtitle: {
    text:
      "Sources: <a " +
      "href=https://cde.ucr.cjis.gov/LATEST/webapp/#/pages/downloads#datasets" +
      'target="_blank">FBI Crime Data Explorer</a>' +
      ", <a " +
      "href=https://censusreporter.org/data/table/?table=B01003&geo_ids=04000US12,040|01000US&primary_geo_id=04000US12" +
      'target="_blank">Census Reporter</a>',
  },

  xAxis: {
    visible: false,
  },

  yAxis: {
    visible: false,
  },

  colorAxis: {
    dataClasses: [
      {
        from: 0,
        to: 10,
        color: "#D5EEBE",
        name: "< 10",
      },
      {
        from: 10,
        to: 20,
        color: "#97D5C0",
        name: "10 - 20",
      },
      {
        from: 30,
        to: 40,
        color: "#4BA8C9",
        name: "30 - 40",
      },
      {
        from: 40,
        to: 60,
        color: "#1D79B5",
        name: "40 - 60",
      },
      {
        from: 60,
        color: "#254B8C",
        name: "> 60",
      },
    ],
  },

  tooltip: {
    headerFormat: "",
    pointFormat:
      "<b> {point.name}</b>: The total hate crime offender rate is <b>" +
      "{point.value}</b> per 100,000",
  },

  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: "{point.hc-a2}",
        color: "#000000",
        style: {
          textOutline: false,
        },
      },
    },
  },

  series: [
    {
      name: "",
      data: [
        {
          "hc-a2": "AL",
          name: "Alabama",
          region: "South",
          x: 6,
          y: 7,
          value: 14.2,
        },
        {
          "hc-a2": "AK",
          name: "Alaska",
          region: "West",
          x: 0,
          y: 0,
          value: 14.2,
        },
        {
          "hc-a2": "AZ",
          name: "Arizona",
          region: "West",
          x: 5,
          y: 3,
          value: 31.1,
        },
        {
          "hc-a2": "AR",
          name: "Arkansas",
          region: "South",
          x: 5,
          y: 6,
          value: 7.8,
        },
        {
          "hc-a2": "CA",
          name: "California",
          region: "West",
          x: 5,
          y: 2,
          value: 32.5,
        },
        {
          "hc-a2": "CO",
          name: "Colorado",
          region: "West",
          x: 4,
          y: 3,
          value: 36.9,
        },
        {
          "hc-a2": "CT",
          name: "Connecticut",
          region: "Northeast",
          x: 3,
          y: 11,
          value: 22.6,
        },
        {
          "hc-a2": "DE",
          name: "Delaware",
          region: "South",
          x: 4,
          y: 9,
          value: 14.8,
        },
        {
          "hc-a2": "DC",
          name: "District of Columbia",
          region: "South",
          x: 4,
          y: 10,
          value: 245.3,
        },
        {
          "hc-a2": "FL",
          name: "Florida",
          region: "South",
          x: 8,
          y: 8,
          value: 7.6,
        },
        {
          "hc-a2": "GA",
          name: "Georgia",
          region: "South",
          x: 7,
          y: 8,
          value: 9.8,
        },
        {
          "hc-a2": "HI",
          name: "Hawaii",
          region: "West",
          x: 8,
          y: 0,
          value: 17.8,
        },
        {
          "hc-a2": "ID",
          name: "Idaho",
          region: "West",
          x: 3,
          y: 2,
          value: 19.4,
        },
        {
          "hc-a2": "IL",
          name: "Illinois",
          region: "Midwest",
          x: 3,
          y: 6,
          value: 12.3,
        },
        {
          "hc-a2": "IN",
          name: "Indiana",
          region: "Midwest",
          x: 3,
          y: 7,
          value: 17.6,
        },
        {
          "hc-a2": "IA",
          name: "Iowa",
          region: "Midwest",
          x: 3,
          y: 5,
          value: 9.6,
        },
        {
          "hc-a2": "KS",
          name: "Kansas",
          region: "Midwest",
          x: 5,
          y: 5,
          value: 31.9,
        },
        {
          "hc-a2": "KY",
          name: "Kentucky",
          region: "South",
          x: 4,
          y: 6,
          value: 40.4,
        },
        {
          "hc-a2": "LA",
          name: "Louisiana",
          region: "South",
          x: 6,
          y: 5,
          value: 12.3,
        },
        {
          "hc-a2": "ME",
          name: "Maine",
          region: "Northeast",
          x: 0,
          y: 11,
          value: 27.6,
        },
        {
          "hc-a2": "MD",
          name: "Maryland",
          region: "South",
          x: 4,
          y: 8,
          value: 13.8,
        },
        {
          "hc-a2": "MA",
          name: "Massachusetts",
          region: "Northeast",
          x: 2,
          y: 10,
          value: 45.6,
        },
        {
          "hc-a2": "MI",
          name: "Michigan",
          region: "Midwest",
          x: 2,
          y: 7,
          value: 40.7,
        },
        {
          "hc-a2": "MN",
          name: "Minnesota",
          region: "Midwest",
          x: 2,
          y: 4,
          value: 30.2,
        },
        {
          "hc-a2": "MS",
          name: "Mississippi",
          region: "South",
          x: 6,
          y: 6,
          value: 7.2,
        },
        {
          "hc-a2": "MO",
          name: "Missouri",
          region: "Midwest",
          x: 4,
          y: 5,
          value: 23.8,
        },
        {
          "hc-a2": "MT",
          name: "Montana",
          region: "West",
          x: 2,
          y: 2,
          value: 23.7,
        },
        {
          "hc-a2": "NE",
          name: "Nebraska",
          region: "Midwest",
          x: 4,
          y: 4,
          value: 24.0,
        },
        {
          "hc-a2": "NV",
          name: "Nevada",
          region: "West",
          x: 4,
          y: 2,
          value: 26.9,
        },
        {
          "hc-a2": "NH",
          name: "New Hampshire",
          region: "Northeast",
          x: 1,
          y: 11,
          value: 11.7,
        },
        {
          "hc-a2": "NJ",
          name: "New Jersey",
          region: "Northeast",
          x: 3,
          y: 10,
          value: 42.9,
        },
        {
          "hc-a2": "NM",
          name: "New Mexico",
          region: "West",
          x: 6,
          y: 3,
          value: 17.7,
        },
        {
          "hc-a2": "NY",
          name: "New York",
          region: "Northeast",
          x: 2,
          y: 9,
          value: 38.6,
        },
        {
          "hc-a2": "NC",
          name: "North Carolina",
          region: "South",
          x: 5,
          y: 9,
          value: 18.8,
        },
        {
          "hc-a2": "ND",
          name: "North Dakota",
          region: "Midwest",
          x: 2,
          y: 3,
          value: 35.0,
        },
        {
          "hc-a2": "OH",
          name: "Ohio",
          region: "Midwest",
          x: 3,
          y: 8,
          value: 33.5,
        },
        {
          "hc-a2": "OK",
          name: "Oklahoma",
          region: "South",
          x: 6,
          y: 4,
          value: 14.4,
        },
        {
          "hc-a2": "OR",
          name: "Oregon",
          region: "West",
          x: 4,
          y: 1,
          value: 32.0,
        },
        {
          "hc-a2": "PA",
          name: "Pennsylvania",
          region: "Northeast",
          x: 3,
          y: 9,
          value: 8.5,
        },
        {
          "hc-a2": "RI",
          name: "Rhode Island",
          region: "Northeast",
          x: 2,
          y: 11,
          value: 7.2,
        },
        {
          "hc-a2": "SC",
          name: "South Carolina",
          region: "South",
          x: 6,
          y: 8,
          value: 15.2,
        },
        {
          "hc-a2": "SD",
          name: "South Dakota",
          region: "Midwest",
          x: 3,
          y: 4,
          value: 19.3,
        },
        {
          "hc-a2": "TN",
          name: "Tennessee",
          region: "South",
          x: 5,
          y: 7,
          value: 25.1,
        },
        {
          "hc-a2": "TX",
          name: "Texas",
          region: "South",
          x: 7,
          y: 4,
          value: 13.1,
        },
        {
          "hc-a2": "UT",
          name: "Utah",
          region: "West",
          x: 5,
          y: 4,
          value: 18.8,
        },
        {
          "hc-a2": "VT",
          name: "Vermont",
          region: "Northeast",
          x: 1,
          y: 10,
          value: 32.5,
        },
        {
          "hc-a2": "VA",
          name: "Virginia",
          region: "South",
          x: 5,
          y: 8,
          value: 16.8,
        },
        {
          "hc-a2": "WA",
          name: "Washington",
          region: "West",
          x: 2,
          y: 1,
          value: 56.1,
        },
        {
          "hc-a2": "WV",
          name: "West Virginia",
          region: "South",
          x: 4,
          y: 7,
          value: 30.8,
        },
        {
          "hc-a2": "WI",
          name: "Wisconsin",
          region: "Midwest",
          x: 2,
          y: 5,
          value: 13.3,
        },
        {
          "hc-a2": "WY",
          name: "Wyoming",
          region: "West",
          x: 3,
          y: 3,
          value: 18.2,
        },
      ],
    },
  ],
});

Highcharts.chart("container2", {
  chart: {
    type: "bar",
  },
  title: {
    text: "Top biases among hate crimes in Washington, D.C. from 2013 to 2023",
    align: "left",
  },
  subtitle: {
    text:
      "Source: <a " +
      "href=https://cde.ucr.cjis.gov/LATEST/webapp/#/pages/downloads#datasets" +
      'target="_blank">FBI Crime Data Explorer</a>',
    align: "left",
  },
  xAxis: {
    categories: [
      "Anti-Gay (Male)",
      "Anti-Transgender",
      "Anti-Black or African",
      "Anti-Other Race/Ethnicity",
      "Anti-White",
      "Anti-Hispanic or Latino",
      "Anti-Jewish",
      "Anti-Lesbian, Gay, Bisexual",
      "Anti-Lesbian (Female)",
      "Anti-Islamic (Muslim)",
    ],
    title: {
      text: null,
    },
    gridLineWidth: 1,
    lineWidth: 0,
  },
  yAxis: {
    visible: false,
  },
  tooltip: {
    valueSuffix: null,
  },
  plotOptions: {
    bar: {
      borderRadius: "0%",
      dataLabels: {
        enabled: true,
      },
      groupPadding: 0.1,
    },
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      showInLegend: false,
      name: "Offenders",
      data: [390, 206, 194, 181, 154, 116, 55, 49, 38, 24],
    },
  ],
});
