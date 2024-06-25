let login = prompt("Введите имя пользователя");
if (login == null) {
  alert("Галя, отмена!" + login);
} else if (login == !"Админ") {
  alert("Ты кто вообще?" + login);
} else {
  let password = prompt("Введите пароль");
  if (password == "Я главный") {
    alert("Здравствуйте!");
  }
}
