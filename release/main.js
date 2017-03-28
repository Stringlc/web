var projectName = 'kittenbook';
var versionNumber = '0.0.1';
var currentDate = new Date();
var currentTime = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate() + '-' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();

var username = prompt('hello, what\'s your name?');
// alert("hello, lc!");
document.body.innerHTML = '<h1>Hello, ' + username + '!</h1>' + '<br/>' + '<p>' + projectName + ' ' + versionNumber + ' accessed on: ' + currentTime + '</p>';

var func = function () {
  alert("hello, lc!");
  
};
