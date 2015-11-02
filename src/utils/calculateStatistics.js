import { toSeconds, toHHMMSS } from './convertTime';

export default function calculateStatistics(headers, rowsRaw) {
  const rowLength = rowsRaw.length
    ? Math.max(rowsRaw[0].length - 2, 0)
    : 0;

  // holds all row data
  let rows = [];

  // holds which lane was taken to commute
  let lanes = {};

  // holds average of times for each column
  let averageTimes = new Array(rowLength).fill(0);

  let rowTimes = [];

  // holds all times for each time column
  let colTimes = [];
  for (var i = 0; i < rowLength - 1; ++i) {
    colTimes.push([]);
  }

  // holds total time for each row (in hours)
  let rowTimesLineData = [];

  // holds longest commute time
  let longestCommute = { 
    index: -1,
    value: 0
  };

  // holds shortest commute time
  let shortestCommute = {
    index: -1,
    value: Number.MAX_SAFE_INTEGER
  };

  let rowTime;
  let lapTime;
  let date;
  let lane;
  let averageTime;
  let year, month, day;
  let rowDate;

  rowsRaw.map((row, index) => {
    [ date, lane, ...averageTime ] = row;
    [ month, day, year ] = date.split('/');
    rowDate = new Date(year, month, day);
    rowTime = 0;

    for (let i = 0; i < rowLength; ++i) {
      lapTime = toSeconds(averageTime[i]);

      averageTimes[i] += lapTime;

      if (i > 0) {
        colTimes[i-1].push({
          x: rowDate,
          y: lapTime / 60
        });
      }

      if (i > 1) {
        rowTime += lapTime;
      }
    }

    lanes[lane] ? ++lanes[lane] : lanes[lane] = 1;

    rowTimesLineData.push({
      x: rowDate,
      y: rowTime / 3600
    });
    rows.push(row);

    rowTimes.push(toHHMMSS(rowTime));

    if (rowTime > longestCommute.value) {
      longestCommute.index = index;
      longestCommute.value = rowTime;
    }

    if (rowTime < shortestCommute.value) {
      shortestCommute.index = index;
      shortestCommute.value = rowTime;
    }
  });

  longestCommute.value = toHHMMSS(longestCommute.value);
  shortestCommute.value = toHHMMSS(shortestCommute.value);

  averageTimes = averageTimes.map(averageTime => (
    toHHMMSS(averageTime / rowsRaw.length)
  ));

  return {
    rows,
    headers,
    lanes,
    rowTimes,
    rowTimesLineData,
    colTimes,
    averageTimes,
    longestCommute,
    shortestCommute
  }
}
