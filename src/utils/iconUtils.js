import { ICONS } from "../constants/icons";

export const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case "backlog":
      return ICONS.BACKLOG;
    case "in progress":
      return ICONS.IN_PROGRESS;
    case "done":
      return ICONS.DONE;
    case "cancelled":
      return ICONS.CANCELLED;
    default:
      return ICONS.BACKLOG;
  }
};

export const getPriorityIcon = (priority) => {
  switch (parseInt(priority)) {
    case 0:
      return ICONS.PRIORITY_NO;
    case 1:
      return ICONS.PRIORITY_LOW;
    case 2:
      return ICONS.PRIORITY_MEDIUM;
    case 3:
      return ICONS.PRIORITY_HIGH;
    case 4:
      return ICONS.PRIORITY_URGENT;
    default:
      return ICONS.PRIORITY_NO;
  }
};

export const getPriorityIconByLabel = (priority) => {
  switch (priority.toLowerCase()) {
    case "no priority":
      return ICONS.PRIORITY_NO;
    case "low priority":
      return ICONS.PRIORITY_LOW;
    case "medium priority":
      return ICONS.PRIORITY_MEDIUM;
    case "high priority":
      return ICONS.PRIORITY_HIGH;
    case "urgent priority":
      return ICONS.PRIORITY_URGENT;
    default:
      return ICONS.PRIORITY_NO;
  }
};
