const isDateBeforeToday = date => {
  return new Date(date).toDateString() <= new Date(new Date().toDateString());
  // return new Date(date.toDateString()) <= new Date(new Date().toDateString());
};

export { isDateBeforeToday };

const isDate = date => {
  return new Date(date) !== 'Invalid Date' && !isNaN(new Date(date));
};

export { isDate };

const sortDate = (firstDate, secondDate) => {
  const dateA = new Date(firstDate.date);
  const dateB = new Date(secondDate.date);
  return dateA - dateB;
};

export { sortDate };
