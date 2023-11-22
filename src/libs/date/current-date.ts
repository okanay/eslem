const istanbulTimeOffset = 1000 * 60 * 60 * 3; // 3 hours.
const currentTimeMS = new Date().getTime() + istanbulTimeOffset;
const currentDate = new Date(currentTimeMS);

export default currentDate;
