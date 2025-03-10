const findTheOldest = (people) => {
  return people.sort((personA, personB) => {
    const ageA =
      (personA.yearOfDeath || new Date().getFullYear()) - personA.yearOfBirth;
    const ageB =
      (personB.yearOfDeath || new Date().getFullYear()) - personB.yearOfBirth;
    return ageB - ageA;
  })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
