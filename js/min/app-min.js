$('a[href^="#"]').on("click",function(t){var e=$($(this).attr("href"));e.length&&(t.preventDefault(),$("html, body").animate({scrollTop:e.offset().top-115},400))});