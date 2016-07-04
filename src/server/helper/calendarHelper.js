const Promise = require('bluebird');
const request = Promise.promisify(require('request'));
const calendarAPI = 'https://www.googleapis.com/calendar/v3/calendars';

module.exports = {
  events: (accessToken, calendarID, lowerBound, upperBound) => {
    // Default the calendar selection to Primary if none given
    const calendar = calendarID || 'primary';
    // Array for Parameters
    const params = [];
    params.push(`access_token=${accessToken}`);
    // Set Lower Bound for Events
    const lowerTime = lowerBound || '2016-01-01T10%3A00%3A00-07%3A00';
    params.push(`timeMin=${lowerTime}`);
    // Set Upper Bound for Events
    if (upperBound) params.push(`timeMax=${upperBound}`);
    // Create Parameter String for GET request
    const paramStr = params.join('&');

    return request(`${calendarAPI}/${calendar}/events?${paramStr}`)
      .then(response => JSON.parse(response.body || '{}'));
  },
  extendWithCalendar: (obj, events) => {
    const newObj = obj;
    newObj.calendarEvents = events;
    return newObj;
  },
};
