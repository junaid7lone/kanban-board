export const getPriority = (priority) => {
  switch (parseInt(priority)) {
    case 0:
      return "Backlog";
    case 1:
      return "Low Priority";
    case 2:
      return "Meduim Priority";
    case 3:
      return "High Priority";
    case 4:
      return "Urgent Priority";
    default:
      return "No Priority";
  }
};
