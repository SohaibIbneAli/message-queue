export function showNotification(id) {
  return {
    type: "MESSAGE",
    payload: {
      data: id,
    },
  };
}
export function removeNotification(id) {
  return {
    type: "DELETE",
    payload: {
      data: id,
    },
  };
}
