$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();  
})

$(document).ready(function() {
    $.getJSON("json.json", function(maximum) {
        $("#maximum-graphics").html(maximum.maximum[0].graphics)
        $("#maximum-memory").html(maximum.maximum[0].memory)
        $("#maximum-network").html(maximum.maximum[0].network)
        $("#maximum-os").html(maximum.maximum[0].os)
        $("#maximum-processor").html(maximum.maximum[0].processor)
        $("#maximum-resolution").html(maximum.maximum[0].resolution)
        $("#maximum-storage").html(maximum.maximum[0].storage)
    })
    $.getJSON("json.json", function(minimum) {
        $("#minimum-graphics").html(minimum.minimum[0].graphics)
        $("#minimum-memory").html(minimum.minimum[0].memory)
        $("#minimum-network").html(minimum.minimum[0].network)
        $("#minimum-os").html(minimum.minimum[0].os)
        $("#minimum-processor").html(minimum.minimum[0].processor)
        $("#minimum-resolution").html(minimum.minimum[0].resolution)
        $("#minimum-storage").html(minimum.minimum[0].storage)
    })
})

$(function() {
    $("a[href*= '#']:not([href = '#carousel'], [href*= '#v-pills-'])").click(function() {
        var target = $(this.hash)
        if(target.length) {
            $("html, body").animate({scrollTop: target.offset().top}, 1000)
        }
    })
})

function loading() {
    setTimeout(show, 0)
}
function show() {
    document.getElementById("loading-screen").style.display = "none"
    document.getElementById("content").style.display = "block"
}

function submitQuiz() {
    function answerScore (qName) {
        var radiosNo = document.getElementsByName(qName);
        for (var i = 0, length = radiosNo.length; i < length; i++) {
            if (radiosNo[i].checked) {
            var answerValue = Number(radiosNo[i].value)
            }
        }
        if (isNaN(answerValue)) {
            answerValue = 0
        }
        return answerValue
    }
    var calcScore = (answerScore("q1") + answerScore("q2") + answerScore("q3") + answerScore("q4"))
    console.log("CalcScore: " + calcScore)
    function correctAnswer (correctStringNo, qNumber) {
        console.log("qNumber: " + qNumber)
        return ("A helyes válasz a(z) " + qNumber + ". kérdésre: <span class='font-weight-bold'>" + (document.getElementById(correctStringNo).innerHTML) + "</span>")
    }
    if (answerScore("q1") === 0) {
        document.getElementById("correct-answer-1").innerHTML = correctAnswer("correctString1", 1)
    }
    if (answerScore("q2") === 0) {
        document.getElementById("correct-answer-2").innerHTML = correctAnswer("correctString2", 2)
    }
    if (answerScore("q3") === 0) {
        document.getElementById("correct-answer-3").innerHTML = correctAnswer("correctString3", 3)
    }
    if (answerScore("q4") === 0) {
        document.getElementById("correct-answer-4").innerHTML = correctAnswer("correctString4", 4)
    }
    var questionCountArray = document.getElementsByClassName("question")
    var questionCounter = 0
    for (var i = 0, length = questionCountArray.length; i < length; i++) {
        questionCounter++
    }
    var showScore = "<div class='font-weight-bold mt-3 user-score shadow-sm'>Pontszám: " + calcScore + "/" + questionCounter + "<br/>"
    if (calcScore === questionCounter) {
        showScore = showScore + "Gratulálok, hibátlan!</div>"
    }
    document.getElementById("user-score").innerHTML = showScore
}
$(document).ready(function() {
$("#submit").click(function() {
    $(this).addClass("hide")
    })
})

var reviews = [
    {
        "by": "Destructoid",
        "review": "\"the best combat I’ve ever seen in an MMO\""
    }, {
        "by": "DualShockers",
        "review": "\"a True \"Next-Gen\" MMORPG that Makes You Feel Small\""
    }, {
        "by": "GameSpot",
        "review": "\"Fantastic combat, Superb visuals!\""
    }, {
        "by": "IGN",
        "review": "\"Black Desert Online is a unique and beautiful sandbox fantasy MMORPG\""
    }, {
        "by": "MMORPG.com",
        "review": "\"It's just phenomenal\""
    }
]
function newReview() {
    var reviewId = Math.floor(Math.random() * (reviews.length))
    $("#by").html(reviews[reviewId].by)
    $("#review").html(reviews[reviewId].review)
    $("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + "Black Desert Online: " + reviews[reviewId].review + " - " + reviews[reviewId].by)
}
$(document).ready(function() {
    newReview()
    $("#generate").on("click", function() {
        newReview()
      })
})