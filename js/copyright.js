// JS Information ======================================================
// Site URL:http://www.yomogi.com/
// File name:copyright.js
// Summary:西暦自動繰上
// Created:2021-4-12
// Last update:2021-4-12 by Sadaoka
// Copyright:(C) BUNKASOZOSHA Co.,Ltd.
//======================================================================

myD = new Date();
myYear = myD.getYear();
myYears = (myYear < 2000) ? myYear+1900 : myYear;
document.write("&copy; ",myYears," YOMOGI, Inc.");
