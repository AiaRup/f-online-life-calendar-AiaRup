const isDateBeforeToday = givenDate => {
  const currentDate = new Date();
  givenDate = new Date(givenDate);
  return givenDate > currentDate;
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
