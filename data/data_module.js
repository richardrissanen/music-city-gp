define([], function() {

    var eventList = [
        {
            "id": 1,
            "title": "GATES OPEN",
            "description": "",
            "startTime": new Date("2023-08-04T09:30:00"),
            "endTime": new Date("2023-08-04T09:30:00"),
            "location": ""
        },
        {
            "id": 2,
            "title": "TRANS AM SERIES PRACTICE P1",
            "description": "",
            "startTime": new Date("2023-08-04T10:45:00"),
            "endTime": new Date("2023-08-04T11:30:00"),
            "location": ""
        },
        {
            "id": 3,
            "title": "SRO GT AMERICA PRACTICE P1",
            "description": "",
            "startTime": new Date("2023-08-04T11:30:00"),
            "endTime": new Date("2023-08-04T12:15:00"),
            "location": ""
        },
        {
            "id": 4,
            "title": "TOYOTA GR CUP PRACTICE P1",
            "description": "",
            "startTime": new Date("2023-08-04T12:15:00"),
            "endTime": new Date("2023-08-04T13:00:00"),
            "location": ""
        },
        {
            "id": 5,
            "title": "TRANS AM SERIES PRACTICE P2",
            "description": "",
            "startTime": new Date("2023-08-04T13:00:00"),
            "endTime": new Date("2023-08-04T13:55:00"),
            "location": ""
        },
        {
            "id": 6,
            "title": "INDY NXT PRACTICE P1",
            "description": "",
            "startTime": new Date("2023-08-04T13:55:00"),
            "endTime": new Date("2023-08-04T15:00:00"),
            "location": ""
        },
        {
            "id": 7,
            "title": "NTT INDYCAR SERIES PRACTICE P1",
            "description": "",
            "startTime": new Date("2023-08-04T15:00:00"),
            "endTime": new Date("2023-08-04T16:30:00"),
            "location": ""
        },
        {
            "id": 8,
            "title": "STADIUM SUPER TRUCKS PRACTICE / QUALIFYING",
            "description": "",
            "startTime": new Date("2023-08-04T16:30:00"),
            "endTime": new Date("2023-08-04T17:30:00"),
            "location": ""
        },
        {
            "id": 9,
            "title": "SRO GT AMERICA PRACTICE P2",
            "description": "",
            "startTime": new Date("2023-08-04T17:30:00"),
            "endTime": new Date("2023-08-04T18:15:00"),
            "location": ""
        },
        {
            "id": 10,
            "title": "TOYOTA GR CUP PRACTICE 2",
            "description": "",
            "startTime": new Date("2023-08-04T18:15:00"),
            "endTime": new Date("2023-08-04T18:45:00"),
            "location": ""
        },
        {
            "id": 11,
            "title": "FREEDOM FRIDAY TRIBUTE CONCERT",
            "description": "",
            "startTime": new Date("2023-08-04T18:45:00"),
            "endTime": new Date("2023-08-04T21:30:00"),
            "location": ""
        },
        {
            "id": 12,
            "title": "TRACK / GATES CLOSE",
            "description": "",
            "startTime": new Date("2023-08-04T21:30:00"),
            "endTime": new Date("2023-08-04T21:30:00"),
            "location": ""
        },
        {
            "id": 13,
            "title": "MUSIC CITY MILES & MEMORIES BIKE/WALK/RUN/RUCK",
            "description": "",
            "startTime": new Date("2023-08-05T07:00:00"),
            "endTime": new Date("2023-08-05T08:30:00"),
            "location": ""
        },
        {
            "id": 14,
            "title": "GATES OPEN",
            "description": "",
            "startTime": new Date("2023-08-05T08:30:00"),
            "endTime": new Date("2023-08-05T08:30:00"),
            "location": ""
        },{
            "id": 15,
            "title": "TRANS AM SERIES QUALIFYING",
            "description": "",
            "startTime": new Date("2023-08-05T08:30:00"),
            "endTime": new Date("2023-08-05T09:35:00"),
            "location": ""
        },
        {
            "id": 16,
            "title": "IHEART COUNTRY STAGE LIVE MUSIC",
            "description": "",
            "startTime": new Date("2023-08-05T09:00:00"),
            "endTime": new Date("2023-08-05T19:00:00"),
            "location": ""
        },
        {
            "id": 17,
            "title": "INDY NXT PRACTICE",
            "description": "",
            "startTime": new Date("2023-08-05T09:35:00"),
            "endTime": new Date("2023-08-05T10:40:00"),
            "location": ""
        },
        {
            "id": 18,
            "title": "NTT INDYCAR SERIES PRACTICE P2",
            "description": "",
            "startTime": new Date("2023-08-05T10:40:00"),
            "endTime": new Date("2023-08-05T11:55:00"),
            "location": ""
        },
        {
            "id": 19,
            "title": "SRO GT AMERICA QUALIFYING",
            "description": "",
            "startTime": new Date("2023-08-05T11:55:00"),
            "endTime": new Date("2023-08-05T12:30:00"),
            "location": ""
        },
        {
            "id": 20,
            "title": "TOYOTA GR CUP QUALIFYING",
            "description": "",
            "startTime": new Date("2023-08-05T12:30:00"),
            "endTime": new Date("2023-08-05T13:05:00"),
            "location": ""
        },
        {
            "id": 21,
            "title": "INDY NXT QUALIFYING",
            "description": "",
            "startTime": new Date("2023-08-05T13:05:00"),
            "endTime": new Date("2023-08-05T13:45:00"),
            "location": ""
        },
        {
            "id": 22,
            "title": "NTT INDYCAR SERIES QUALIFYING / FIRESTONE FAST 6",
            "description": "",
            "startTime": new Date("2023-08-05T13:45:00"),
            "endTime": new Date("2023-08-05T15:40:00"),
            "location": ""
        },
        {
            "id": 23,
            "title": "TRANS AM RACE",
            "description": "",
            "startTime": new Date("2023-08-05T15:40:00"),
            "endTime": new Date("2023-08-05T17:25:00"),
            "location": ""
        },
        {
            "id": 24,
            "title": "NTT INDYCAR SERIES FINAL PRACTICE",
            "description": "",
            "startTime": new Date("2023-08-05T17:25:00"),
            "endTime": new Date("2023-08-05T18:10:00"),
            "location": ""
        },
        {
            "id": 25,
            "title": "STADIUM SUPER TRUCKS RACE 1",
            "description": "",
            "startTime": new Date("2023-08-05T18:10:00"),
            "endTime": new Date("2023-08-05T19:00:00"),
            "location": ""
        },
        {
            "id": 26,
            "title": "FLO RIDA CONCERT ON MAIN STAGE",
            "description": "",
            "startTime": new Date("2023-08-05T19:00:00"),
            "endTime": new Date("2023-08-05T19:05:00"),
            "location": ""
        },
        {
            "id": 27,
            "title": "TOYOTA GR CUP RACE 1",
            "description": "",
            "startTime": new Date("2023-08-05T19:05:00"),
            "endTime": new Date("2023-08-05T20:15:00"),
            "location": ""
        },
        {
            "id": 28,
            "title": "SRO GT AMERICA RACE 1",
            "description": "",
            "startTime": new Date("2023-08-05T20:15:00"),
            "endTime": new Date("2023-08-05T21:30:00"),
            "location": ""
        },
        {
            "id": 29,
            "title": "TRACK/GATES CLOSE",
            "description": "",
            "startTime": new Date("2023-08-05T21:30:00"),
            "endTime": new Date("2023-08-05T21:30:00"),
            "location": ""
        },
        {
            "id": 30,
            "title": "GATES OPEN",
            "description": "",
            "startTime": new Date("2023-08-06T07:30:00"),
            "endTime": new Date("2023-08-06T07:30:00"),
            "location": ""
        },
        {
            "id": 31,
            "title": "INDY NXT RACE",
            "description": "",
            "startTime": new Date("2023-08-06T09:15:00"),
            "endTime": new Date("2023-08-06T10:05:00"),
            "location": ""
        },
        {
            "id": 32,
            "title": "NTT INDYCAR SERIES PRE RACE CEREMONIES",
            "description": "",
            "startTime": new Date("2023-08-06T10:05:00"),
            "endTime": new Date("2023-08-06T11:30:00"),
            "location": ""
        },
        {
            "id": 33,
            "title": "NTT NDYCAR SERIES BIG MACHINE MUSIC CITY GRAND PRIX",
            "description": "",
            "startTime": new Date("2023-08-06T11:30:00"),
            "endTime": new Date("2023-08-06T14:30:00"),
            "location": ""
        },
        {
            "id": 34,
            "title": "IHEART COUNTRY STAGE LIVE MUSIC",
            "description": "",
            "startTime": new Date("2023-08-06T14:30:00"),
            "endTime": new Date("2023-08-06T15:35:00"),
            "location": ""
        },
        {
            "id": 35,
            "title": "STADIUM SUPER TRUCKS RACE 2",
            "description": "",
            "startTime": new Date("2023-08-06T14:30:00"),
            "endTime": new Date("2023-08-06T15:35:00"),
            "location": ""
        },
        {
            "id": 36,
            "title": "SRO GT AMERICA RACE 2",
            "description": "",
            "startTime": new Date("2023-08-06T15:35:00"),
            "endTime": new Date("2023-08-06T16:35:00"),
            "location": ""
        },
        {
            "id": 37,
            "title": "TOYOTA GR CUP RACE 2",
            "description": "",
            "startTime": new Date("2023-08-06T16:35:00"),
            "endTime": new Date("2023-08-06T18:00:00"),
            "location": ""
        },
        {
            "id": 38,
            "title": "TRACK/GATES CLOSE",
            "description": "",
            "startTime": new Date("2023-08-06T18:00:00"),
            "endTime": new Date("2023-08-06T18:00:00"),
            "location": ""
        },
        {
            "id": 39,
            "title": "Turn 9 Club - Breakfast",
            "description": "",
            "startTime": new Date("2023-08-04T09:30:00"),
            "endTime": new Date("2023-08-04T11:00:00"),
            "location": ""
        },
        {
            "id": 40,
            "title": "Turn 9 Club - Breakfast",
            "description": "",
            "startTime": new Date("2023-08-05T09:30:00"),
            "endTime": new Date("2023-08-05T11:00:00"),
            "location": ""
        },
        {
            "id": 41,
            "title": "Turn 9 Club - Breakfast",
            "description": "",
            "startTime": new Date("2023-08-06T09:30:00"),
            "endTime": new Date("2023-08-06T11:00:00"),
            "location": ""
        },
        {
            "id": 42,
            "title": "Turn 9 Club - Lunch",
            "description": "",
            "startTime": new Date("2023-08-04T11:30:00"),
            "endTime": new Date("2023-08-04T15:30:00"),
            "location": ""
        },
        {
            "id": 43,
            "title": "Turn 9 Club - Lunch",
            "description": "",
            "startTime": new Date("2023-08-05T11:30:00"),
            "endTime": new Date("2023-08-05T15:30:00"),
            "location": ""
        },
        {
            "id": 44,
            "title": "Turn 9 Club - Lunch",
            "description": "",
            "startTime": new Date("2023-08-06T11:30:00"),
            "endTime": new Date("2023-08-06T15:30:00"),
            "location": ""
        },
        {
            "id": 42,
            "title": "Turn 9 Club - Grab & Go",
            "description": "",
            "startTime": new Date("2023-08-04T14:30:00"),
            "endTime": new Date("2023-08-04T16:00:00"),
            "location": ""
        },
        {
            "id": 43,
            "title": "Turn 9 Club - Grab & Go",
            "description": "",
            "startTime": new Date("2023-08-05T14:30:00"),
            "endTime": new Date("2023-08-05T16:00:00"),
            "location": ""
        },
        {
            "id": 44,
            "title": "Turn 9 Club - Grab & Go",
            "description": "",
            "startTime": new Date("2023-08-06T14:30:00"),
            "endTime": new Date("2023-08-06T16:00:00"),
            "location": ""
        }
    ];

    function sortByStart(eventList) {
        eventList.sort(function(a, b) {
            keyA = a.startTime;
            keyB = b.startTime;

            if(keyA < keyB) return -1;
            if(keyA > keyB) return 1;
            return 0;
        });
    }

    var dataModule = function() {
        this.events = function() {
            eventsList = sortByStart(eventList);
            return eventList;
        }
    }

    return dataModule;
});