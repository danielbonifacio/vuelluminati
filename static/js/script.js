$.ajaxSetup({
  headers: {
    'Authorization': localStorage.getItem('sicoobestoken'),
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
});
