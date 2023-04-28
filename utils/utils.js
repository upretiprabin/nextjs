export function removeElement(arr, attr, value) {
  let i = arr.length;
  while (i--) {
    if (arr[i]
      && arr[i].hasOwnProperty(attr)
      && (arguments.length > 2 && arr[i][attr] === value)) {

      arr.splice(i, 1);

    }
  }
  return arr;
}

export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function validatePassword(password) {
  var re = /^((?=.*[a-z])(?=.*[@#$%])(?=.*[A-Z])(?=.*[0-9]).{6,15})$/;
  return re.test(password);
}