function saveStage() {
    var json = stage.toJSON(); 
    localStorage.setItem('stage', json);
    console.log("Stage has been saved.");
}
function resetStage() {
    localStorage.removeItem('stage');
}
// saves layer in local storage in certain intervals
setInterval(function() {
    saveStage();
}, 60000);