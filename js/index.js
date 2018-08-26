if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js', { scope: '' })
    .then(function (reg) {
        console.log('Service worker registration is succeeded. Scope is ' + reg.scope);
    })
    .catch(function (error) {
        console.log('Registration failed with ' + error);
    });
}