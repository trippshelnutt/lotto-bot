const getPrize = (match) => {
  if (match.powerballMatch) {
    switch (match.matches) {
      case 5:
        return "Jackpot!";
      case 4:
        return "$10K";
      case 3:
        return "$200";
      case 2:
        return "$10";
      case 1:
        return "$4";
      case 0:
        return "$2";
      default:
        return "$0";
    }
  } else {
    switch (match.matches) {
      case 5:
        return "$1M!";
      case 4:
        return "$500";
      case 3:
        return "$10";
      default:
        return "$0";
    }
  }
};

module.exports = getPrize;
