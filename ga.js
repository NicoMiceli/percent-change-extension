//GOOGLE ANALYTICS

var _AnalyticsCode = 'UA-XXXXX-Y';

var _gaq = _gaq || [];
_gaq.push(['_setAccount', _AnalyticsCode]);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();


function trackButtonClick(e) {
    _gaq.push(['_trackEvent', e.target.id, 'clicked']);
}
document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('input');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', trackButtonClick);
    }
});

function trackLinkClick (e) {
	_gaq.push(['_trackEvent','link','clicked',e.target.id])
}

document.addEventListener('DOMContentLoaded',function () {
	var links = document.querySelectorAll('a');
	for (var i =0; links.length; i++) {
		links[i].addEventListener('click',trackLinkClick)
	};
})
