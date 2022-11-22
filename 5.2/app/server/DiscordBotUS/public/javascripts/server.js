function Welcome (token,id){
    localStorage.setItem('MAIN_TOKEN', token);
    localStorage.setItem('MAIN_ID', id);
    sessionStorage.key('389028430938');
    indexedDB.open('ZaysOS', '1.0');
    alert(`Welcome to ZaysOS |\nServices are online`)
}