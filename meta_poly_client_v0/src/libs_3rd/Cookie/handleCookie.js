export function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
export function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
export function checkCookie() {

      let user = getCookie("username");

      if (user !== "") {

          alert("Welcome again " + user);
      } 
      else {

          user = prompt("Please enter your name:", "");

          if (user !== "" && user !== null) {
            
            setCookie("username", user, 365);
          }
      }
}

export function deleteAllCookies() {

    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {

        var cookie = cookies[i];

        var eqPos = cookie.indexOf("=");

        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

export function deleteCookie(name) {
  
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}