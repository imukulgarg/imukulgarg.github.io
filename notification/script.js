const button = document.querySelector(".button");
const area = document.querySelector(".notification-area");

button.addEventListener("click", () => {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  area.appendChild(notification);

  const notificationText = document.createElement("p");
  notificationText.classList.add("notification-text");
  notificationText.innerText = "You Have Notification";
  notification.appendChild(notificationText);

  setTimeout(() => {
    notification.remove();
  }, 3000);
});
