function login()
{
  let u = username.value
  let p = pw.value
  if (u=="hieu" && p=="123")
  {
    window.open("home.html")
    document.getElementById(compiler).style.display="block"
  }
}
