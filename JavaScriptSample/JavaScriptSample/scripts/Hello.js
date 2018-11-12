function foo() {
    "use strict";

    let a = 3;
    {
        let a = 4;
    }

    console.log("a: " + a);

    var hello = "hello";
    var b = "3";

    if (a === b) {
        alert("it's the same");
    }
    else {
        alert("not the same");
    }

    console.log(b);

    //Hello = "abc";
    //console.log(hello);

}

function add(x, y) {
    return x + y;
}

function bar() {
    var a = add;
    var b = a(3, 3, 3, 3);
}

function arraysample() {
    let attendees = [
        {
            "name": "Eric Gruber",
            "currentTrack": "1"
        },
        {
            "name": "Martin Weber",
            "currentTrack": "2"
        }
    ];

    var p1 = attendees[0];
    var name1 = p1["name"]; // "Eric Gruber"
    var name1b = pa.name;

    var name1c = attendees[0].name;

    p1.firstname = "Eric";
    p1.doit = function () {
        console.log("doit");
    };

    var json1 = JSON.stringify(p1);

    var p2 = JSON.parse(json1);
}

