export const days = {
  allIds: [1, 2],
  byId: {
    "1": {
      id: 1,
      name: "Conference Day 1",
      date: "2019-05-22T00:00:00+02:00",
      timezone: "Europe/Zagreb",
      tracks: [3, 2, 1, 4]
    },
    "2": {
      id: 2,
      name: "Conference Day 2",
      date: "2019-05-23T00:00:00+02:00",
      timezone: "Europe/Zagreb",
      tracks: [6, 5, 7]
    }
  }
};

export const tracks = {
  byId: {
    "1": {
      id: 1,
      title: "YELLOW",
      date: "2019-05-22",
      timeSlots: [1, 2, 3]
    },
    "2": {
      id: 2,
      title: "BLUE",
      date: "2019-05-22",
      timeSlots: [5, 6, 7, 8, 9]
    },
    "3": {
      id: 3,
      title: "RED",
      date: "2019-05-22",
      timeSlots: [11, 12, 13, 14, 15, 16]
    },
    "4": {
      id: 4,
      title: "GREEN",
      date: "2019-05-22",
      timeSlots: [17, 18, 19, 20, 21, 23, 22, 24, 25, 26, 27, 28]
    },
    "5": {
      id: 5,
      title: "BLUE",
      date: "2019-05-23",
      timeSlots: [37, 33, 38, 30, 44]
    },
    "6": {
      id: 6,
      title: "RED",
      date: "2019-05-23",
      timeSlots: [41, 46, 39, 34, 43]
    },
    "7": {
      id: 7,
      title: "GREEN",
      date: "2019-05-23",
      timeSlots: [42, 35, 47, 40, 36, 45]
    }
  },
  allIds: [1, 2, 3, 4, 5, 6, 7]
};

export const timeSlots = {
  byId: {
    "1": {
      id: 1,
      title: " time slot 1",
      startTime: "2019-05-22T08:00:00+02:00",
      endTime: "2019-05-22T09:00:00+02:00",
      session: 1,
      room: 1,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 1
    },
    "2": {
      id: 2,
      title: " time slot 2",
      startTime: "2019-05-22T09:00:00+02:00",
      endTime: "2019-05-22T09:15:00+02:00",
      session: 2,
      room: 1,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 1
    },
    "3": {
      id: 3,
      title: " time slot 3",
      startTime: "2019-05-22T09:20:00+02:00",
      endTime: "2019-05-22T10:05:00+02:00",
      session: 3,
      room: 1,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 1
    },
    "5": {
      id: 5,
      title: " time slot 5",
      startTime: "2019-05-22T10:20:00+02:00",
      endTime: "2019-05-22T11:10:00+02:00",
      session: 5,
      room: 1,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 2
    },
    "6": {
      id: 6,
      title: " time slot 6",
      startTime: "2019-05-22T11:20:00+02:00",
      endTime: "2019-05-22T12:25:00+02:00",
      session: 6,
      room: 1,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 2
    },
    "7": {
      id: 7,
      title: " time slot 7",
      startTime: "2019-05-22T12:30:00+02:00",
      endTime: "2019-05-22T13:15:00+02:00",
      session: 7,
      room: null,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 2
    },
    "8": {
      id: 8,
      title: " time slot 8",
      startTime: "2019-05-22T13:15:00+02:00",
      endTime: "2019-05-22T13:45:00+02:00",
      session: 8,
      room: 1,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 2
    },
    "9": {
      id: 9,
      title: " time slot 9",
      startTime: "2019-05-22T13:50:00+02:00",
      endTime: "2019-05-22T14:20:00+02:00",
      session: 9,
      room: 1,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 2
    },
    "11": {
      id: 11,
      title: " time slot 11",
      startTime: "2019-05-22T10:20:00+02:00",
      endTime: "2019-05-22T11:10:00+02:00",
      session: 11,
      room: 2,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 3
    },
    "12": {
      id: 12,
      title: " time slot 12",
      startTime: "2019-05-22T11:55:00+02:00",
      endTime: "2019-05-22T12:25:00+02:00",
      session: 13,
      room: 2,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 3
    },
    "13": {
      id: 13,
      title: " time slot 13",
      startTime: "2019-05-22T12:30:00+02:00",
      endTime: "2019-05-22T13:15:00+02:00",
      session: 14,
      room: null,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 3
    },
    "14": {
      id: 14,
      title: " time slot 14",
      startTime: "2019-05-22T13:45:00+02:00",
      endTime: "2019-05-22T14:20:00+02:00",
      session: 15,
      room: 2,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 3
    },
    "15": {
      id: 15,
      title: " time slot 15",
      startTime: "2019-05-22T14:25:00+02:00",
      endTime: "2019-05-22T15:20:00+02:00",
      session: 16,
      room: 2,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 3
    },
    "16": {
      id: 16,
      title: " time slot 16",
      startTime: "2019-05-22T15:25:00+02:00",
      endTime: "2019-05-22T16:20:00+02:00",
      session: 17,
      room: 2,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 3
    },
    "17": {
      id: 17,
      title: " time slot 17",
      startTime: "2019-05-22T10:05:00+02:00",
      endTime: "2018-05-22T10:20:00+02:00",
      session: 18,
      room: 4,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 4
    },
    "18": {
      id: 18,
      title: " time slot 18",
      startTime: "2019-05-22T10:20:00+02:00",
      endTime: "2018-05-22T11:10:00+02:00",
      session: 19,
      room: 3,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 4
    },
    "19": {
      id: 19,
      title: " time slot 19",
      startTime: "2019-05-22T11:20:00+02:00",
      endTime: "2019-05-22T11:50:00+02:00",
      session: 20,
      room: 3,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 4
    },
    "20": {
      id: 20,
      title: " time slot 20",
      startTime: "2019-05-22T11:55:00+02:00",
      endTime: "2019-05-22T12:25:00+02:00",
      session: 21,
      room: 3,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 4
    },
    "21": {
      id: 21,
      title: " time slot 21",
      startTime: "2019-05-22T12:30:00+02:00",
      endTime: "2019-05-22T13:15:00+02:00",
      session: 22,
      room: null,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 4
    },
    "22": {
      id: 22,
      title: " time slot 22",
      startTime: "2019-05-22T13:15:00+02:00",
      endTime: "2019-05-22T13:45:00+02:00",
      session: 23,
      room: 3,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 4
    },
    "23": {
      id: 23,
      title: " time slot 23",
      startTime: "2019-05-22T13:15:00+02:00",
      endTime: "2019-05-22T13:45:00+02:00",
      session: 24,
      room: 3,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 4
    },
    "24": {
      id: 24,
      title: " time slot 24",
      startTime: "2019-05-22T14:25:00+02:00",
      endTime: "2019-05-22T14:55:00+02:00",
      session: 25,
      room: 3,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 4
    },
    "25": {
      id: 25,
      title: " time slot 25",
      startTime: "2019-05-22T15:00:00+02:00",
      endTime: "2019-05-22T15:30:00+02:00",
      session: 26,
      room: 3,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 4
    },
    "26": {
      id: 26,
      title: " time slot 26",
      startTime: "2019-05-22T15:30:00+02:00",
      endTime: "2019-05-22T15:45:00+02:00",
      session: 27,
      room: 3,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 4
    },
    "27": {
      id: 27,
      title: " time slot 27",
      startTime: "2019-05-22T15:45:00+02:00",
      endTime: "2019-05-22T16:15:00+02:00",
      session: 28,
      room: 3,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 4
    },
    "28": {
      id: 28,
      title: " time slot 28",
      startTime: "2019-05-22T16:20:00+02:00",
      endTime: "2019-05-22T16:50:00+02:00",
      session: 29,
      room: 3,
      eventDayName: "Conference Day 1",
      isFavorite: false,
      eventDayId: 1,
      trackId: 4
    },
    "30": {
      id: 30,
      title: "SPOTSIE-DEMO time slot 16",
      startTime: "2019-05-23T13:45:00+02:00",
      endTime: "2019-05-23T15:00:00+02:00",
      session: 31,
      room: 3,
      eventDayName: "Conference Day 2",
      isFavorite: false,
      eventDayId: 2,
      trackId: 5
    },
    "33": {
      id: 33,
      title: "SPOTSIE-DEMO time slot 10",
      startTime: "2019-05-23T11:00:00+02:00",
      endTime: "2019-05-23T12:25:00+02:00",
      session: 32,
      room: 1,
      eventDayName: "Conference Day 2",
      isFavorite: false,
      eventDayId: 2,
      trackId: 5
    },
    "34": {
      id: 34,
      title: "SPOTSIE-DEMO time slot 9",
      startTime: "2019-05-23T13:30:00+02:00",
      endTime: "2019-05-23T14:30:00+02:00",
      session: 33,
      room: 1,
      eventDayName: "Conference Day 2",
      isFavorite: false,
      eventDayId: 2,
      trackId: 6
    },
    "35": {
      id: 35,
      title: "SPOTSIE-DEMO time slot 4",
      startTime: "2019-05-23T10:10:00+02:00",
      endTime: "2019-05-23T11:10:00+02:00",
      session: 31,
      room: 2,
      eventDayName: "Conference Day 2",
      isFavorite: false,
      eventDayId: 2,
      trackId: 7
    },
    "36": {
      id: 36,
      title: "SPOTSIE-DEMO time slot 9",
      startTime: "2019-05-23T13:30:00+02:00",
      endTime: "2019-05-23T15:00:00+02:00",
      session: 34,
      room: 1,
      eventDayName: "Conference Day 2",
      isFavorite: false,
      eventDayId: 2,
      trackId: 7
    },
    "37": {
      id: 37,
      title: "SPOTSIE-DEMO time slot 6",
      startTime: "2019-05-23T09:00:00+02:00",
      endTime: "2019-05-23T10:30:00+02:00",
      session: 35,
      room: 1,
      eventDayName: "Conference Day 2",
      isFavorite: false,
      eventDayId: 2,
      trackId: 5
    },
    "38": {
      id: 38,
      title: "SPOTSIE-DEMO time slot 7",
      startTime: "2019-05-23T12:30:00+02:00",
      endTime: "2019-05-23T13:15:00+02:00",
      session: 14,
      room: 5,
      eventDayName: "Conference Day 2",
      isFavorite: false,
      eventDayId: 2,
      trackId: 5
    },
    "39": {
      id: 39,
      title: "SPOTSIE-DEMO time slot 8",
      startTime: "2019-05-23T12:30:00+02:00",
      endTime: "2019-05-23T13:15:00+02:00",
      session: 14,
      room: 5,
      eventDayName: "Conference Day 2",
      isFavorite: false,
      eventDayId: 2,
      trackId: 6
    },
    "40": {
      id: 40,
      title: "SPOTSIE-DEMO time slot 9",
      startTime: "2019-05-23T12:30:00+02:00",
      endTime: "2019-05-23T13:15:00+02:00",
      session: 14,
      room: 5,
      eventDayName: "Conference Day 2",
      isFavorite: false,
      eventDayId: 2,
      trackId: 7
    },
    "41": {
      id: 41,
      title: "SPOTSIE-DEMO time slot 10",
      startTime: "2019-05-23T09:30:00+02:00",
      endTime: "2019-05-23T11:00:00+02:00",
      session: 36,
      room: 1,
      eventDayName: "Conference Day 2",
      isFavorite: false,
      eventDayId: 2,
      trackId: 6
    },
    "42": {
      id: 42,
      title: "SPOTSIE-DEMO time slot 11",
      startTime: "2019-05-23T08:30:00+02:00",
      endTime: "2019-05-23T10:00:00+02:00",
      session: 37,
      room: 3,
      eventDayName: "Conference Day 2",
      isFavorite: false,
      eventDayId: 2,
      trackId: 7
    },
    "43": {
      id: 43,
      title: "SPOTSIE-DEMO time slot 12",
      startTime: "2019-05-23T15:30:00+02:00",
      endTime: "2019-05-23T16:30:00+02:00",
      session: 38,
      room: 1,
      eventDayName: "Conference Day 2",
      isFavorite: false,
      eventDayId: 2,
      trackId: 6
    },
    "44": {
      id: 44,
      title: "SPOTSIE-DEMO time slot 14",
      startTime: "2019-05-23T15:15:00+02:00",
      endTime: "2019-05-23T16:35:00+02:00",
      session: 39,
      room: 2,
      eventDayName: "Conference Day 2",
      isFavorite: false,
      eventDayId: 2,
      trackId: 5
    },
    "45": {
      id: 45,
      title: "SPOTSIE-DEMO time slot 15",
      startTime: "2019-05-23T15:10:00+02:00",
      endTime: "2019-05-23T16:25:00+02:00",
      session: 40,
      room: 1,
      eventDayName: "Conference Day 2",
      isFavorite: false,
      eventDayId: 2,
      trackId: 7
    },
    "46": {
      id: 46,
      title: "SPOTSIE-DEMO time slot 15",
      startTime: "2019-05-23T11:30:00+02:00",
      endTime: "2019-05-23T12:00:00+02:00",
      session: 41,
      room: 2,
      eventDayName: "Conference Day 2",
      isFavorite: false,
      eventDayId: 2,
      trackId: 6
    },
    "47": {
      id: 47,
      title: "SPOTSIE-DEMO time slot 17",
      startTime: "2019-05-23T11:20:00+02:00",
      endTime: "2019-05-23T12:00:00+02:00",
      session: 43,
      room: 1,
      eventDayName: "Conference Day 2",
      isFavorite: false,
      eventDayId: 2,
      trackId: 7
    }
  },
  allIds: [
    1,
    2,
    3,
    5,
    6,
    7,
    8,
    9,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    30,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47
  ]
};

export const sessions = {
  byId: {
    "1": {
      id: 1,
      title: "Guest Registration",
      subtitle: "Registration to Cinderella app.",
      description: "Registration and welcoming drinks.",
      trackTitle: "YELLOW",
      sessionType: {
        name: "Registration",
        performance: false
      },
      sessionAbstract:
        "First thing that users go trough when they arrive on Changecon.",
      level: 2,
      performers: [],
      tags: [],
      expectedAudiences: [],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "2": {
      id: 2,
      title: "Conference Opening",
      subtitle: "Start of conference.",
      description:
        "Welcoming speech by Plamenko Barišić, President of the Managment Board, KING ICT.",
      trackTitle: "YELLOW",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract: "Conference opening talk.",
      level: 3,
      performers: [1],
      tags: [],
      expectedAudiences: [
        "audience.managers",
        "audience.sys-admin",
        "audience.developers"
      ],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "3": {
      id: 3,
      title: "The Why behind DevOps, Containters and Microservices",
      subtitle: "Subtitle",
      description: "DevOps, Containers, Microservices.",
      trackTitle: "YELLOW",
      sessionType: {
        name: "Keynote",
        performance: true
      },
      sessionAbstract:
        "Now every company is a software company: software is the fuel to this new digital economy. And how can we deliver software and value faster? Many try to show you what to do or how to do it. If you really want to know the “why”, come and check this session. We’ll show the real reasons for you to engage in DevOps, Containers, and Microservices. With this knowledge, you and all your team will be enabled to stop discussing and start delivering real value every time faster, better and more reliably.",
      level: 4,
      performers: [2],
      tags: [53, 67],
      expectedAudiences: ["audience.devops"],
      averageRating: 2,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "5": {
      id: 5,
      title: "Containers, Kubernetes and Google Cloud",
      subtitle: "This is subtitle.",
      description: "This is description.",
      trackTitle: "BLUE",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "Creating a single microservice is a well-understood problem. Creating a cluster of load-balanced microservices that are resilient and self-healing is not so easy. Managing that cluster with rollouts and rollbacks, scaling individual services on demand, securely sharing secrets and configuration among services is even harder. Kubernetes, an open-source container management system, can help with this. In this talk, we will start with a simple microservice, containerize it using Docker, and scale it to a cluster of resilient microservices managed by Kubernetes. Along the way, we will learn what makes Kubernetes a great system for automating deployment, operations, and scaling of containerized applications.",
      level: 5,
      performers: [3],
      tags: [18, 8, 9],
      expectedAudiences: ["audience.sys-admin", "audience.developers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "6": {
      id: 6,
      title: "Think twice before dropping ACID and throw your CAP away",
      subtitle: "This is subtitle.",
      description: "This is description.",
      trackTitle: "BLUE",
      sessionType: {
        name: "Workshop",
        performance: true
      },
      sessionAbstract:
        "ACID: why it burns, why rock stars dropped it, why it can make your head spin CAP: Neither wrong nor terribly useful in practice Actually useful stuff - questions for selecting an (R)DB(MS).",
      level: 4,
      performers: [4],
      tags: [4],
      expectedAudiences: ["audience.managers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null,
      applicationStartTime: "2019-04-09T09:00:00+02:00",
      applicationEndTime: "2019-05-09T11:00:00+02:00",
      maxPlaces: 10,
      emptyPlaces: 9,
      filledPlaces: null,
      visitors: null,
      applied: false
    },
    "7": {
      id: 7,
      title: "Lunch break",
      subtitle: "Bon apetit",
      description: "Enjoy the food",
      trackTitle: "BLUE",
      sessionType: {
        name: "Break",
        performance: false
      },
      sessionAbstract: null,
      level: 0,
      performers: [],
      tags: [],
      expectedAudiences: [],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "8": {
      id: 8,
      title: "Downloading the internet",
      subtitle: "This is subtitle.",
      description: "This is description.",
      trackTitle: "BLUE",
      sessionType: {
        name: "Lightning talk",
        performance: true
      },
      sessionAbstract:
        "What to do when you're supposed to acquire all the files you can find on the internet. Overview how to design build and deploy a system to find, classify, download and store large amounts of files in the world's largest file reputation database.",
      level: 4,
      performers: [5],
      tags: [9],
      expectedAudiences: ["audience.sys-admin"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "9": {
      id: 9,
      title: "From zero to code-hero",
      subtitle: "This is subtitle.",
      description: "This is description.",
      trackTitle: "BLUE",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "How accidental decision forced me to become main maintainer and main developer (sure I’m the only one) of the 1st cross-platform libraries submitted by Xamarin to .NET Foundation; how open source is not freedom-only; how ordinary developer can literally beat-the-odds (all of them).",
      level: 3,
      performers: [6],
      tags: [29, 4],
      expectedAudiences: ["audience.developers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "11": {
      id: 11,
      title: "JavaScript Confessions of Java Developer",
      subtitle: "This is subtitle.",
      description: "This is a description.",
      trackTitle: "RED",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "How accidental decision forced me to become main maintainer and main developer (sure I’m the only one) of the 1st cross-platform libraries submitted by Xamarin to .NET Foundation; how open source is not freedom-only; how ordinary developer can literally beat-the-odds (all of them)…",
      level: 3,
      performers: [17],
      tags: [4, 59],
      expectedAudiences: ["audience.developers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "13": {
      id: 13,
      title: "ELK - from zero to coding class hero",
      subtitle: "This is subtitle.",
      description: "This is a description.",
      trackTitle: "RED",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract: "This is some abstract text.",
      level: 2,
      performers: [19],
      tags: [4, 110],
      expectedAudiences: [],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "14": {
      id: 14,
      title: "Lunch break",
      subtitle: "Bon apetit",
      description: "Enjoy the food",
      trackTitle: "RED",
      sessionType: {
        name: "Break",
        performance: false
      },
      sessionAbstract: null,
      level: 0,
      performers: [],
      tags: [],
      expectedAudiences: [],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "15": {
      id: 15,
      title: "10 tips for hosting web apps and sites on Azure",
      subtitle: "This is subtitle.",
      description: "This is a description.",
      trackTitle: "RED",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "We're quite sure that you know how to deploy a website to Azure and set the main properties, but Azure is much more than a hosting platform. There are so many things you can tweak, so many services that can simplify the development, so many easy mistakes that can make turn your dev life into hell. From the extensive experience with Azure, with small and big projects, we’ll be highlighting ten most important tips & tricks that will make you fall in love in Azure and cloud in general. It doesn’t matter if this is your first encounter with the Azure or you have some experience, we’re sure you’ll find out something new and interesting.",
      level: 3,
      performers: [20],
      tags: [9, 18],
      expectedAudiences: ["audience.developers"],
      averageRating: 5,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "16": {
      id: 16,
      title: "Real-Time Analytical Reporting of Transactional Data",
      subtitle: "This is subtitle.",
      description: "This is a description.",
      trackTitle: "RED",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "Imagine you can do analytical reporting on transaction data, without major effects on the production work of such transactional software solution. Imagine that you no longer need different ETL processes, SSIS, OLAP…Interested? Then let me show you how ColumnStore indexes and InMemory technology can make this happen.",
      level: 3,
      performers: [21],
      tags: [36, 9],
      expectedAudiences: [],
      averageRating: 4,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "17": {
      id: 17,
      title: "My first artificial intelligence",
      subtitle: "This is subtitle.",
      description: "This is a description.",
      trackTitle: "RED",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "If you are interested in starting your first AI project, I surely recommend you to come and listen me talk.",
      level: 2,
      performers: [22],
      tags: [17, 112],
      expectedAudiences: ["audience.developers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "18": {
      id: 18,
      title: "Coffee, tea, snacks",
      subtitle: "Enjoy some snacks",
      description: null,
      trackTitle: "GREEN",
      sessionType: {
        name: "Break",
        performance: false
      },
      sessionAbstract: null,
      level: 0,
      performers: [],
      tags: [],
      expectedAudiences: [],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "19": {
      id: 19,
      title: "The Real Story about Management 3.0",
      subtitle: "Management tips",
      description: "Short description of my lecture",
      trackTitle: "GREEN",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "I started my career as manager around 2004. I experienced manager who told me what to do and how to do it. I knew there had to be another way to manage organizations. In this talk, I will share my journey as manager. It easy said that you should act as a servant leader. Play Moving Motivator and you are there? The reality is different. How do you deal with managers who have a different view, how do you deal with C-level that just want to get things done, how do you work together with HR? How did I implement Management 3.0 practices? What are my lessons learned, my mistakes and failures? This talk will give you an insight into what Management 3.0 is, the obstacles you could encounter applying Management 3.0 ideas and practices. A story of my journey so far.",
      level: 0,
      performers: [7],
      tags: [36, 109, 35],
      expectedAudiences: ["audience.managers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "20": {
      id: 20,
      title: "UX Primer",
      subtitle: "UX tips",
      description: "Short description of my lecture",
      trackTitle: "GREEN",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "I started my career as manager around 2004. I experienced manager who told me what to do and how to do it. I knew there had to be another way to manage organizations. In this talk, I will share my journey as manager. It easy said that you should act as a servant leader. Play Moving Motivator and you are there? The reality is different. How do you deal with managers who have a different view, how do you deal with C-level that just want to get things done, how do you work together with HR? How did I implement Management 3.0 practices? What are my lessons learned, my mistakes and failures? This talk will give you an insight into what Management 3.0 is, the obstacles you could encounter applying Management 3.0 ideas and practices. A story of my journey so far.",
      level: 0,
      performers: [8],
      tags: [4, 10, 9],
      expectedAudiences: ["audience.developers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "21": {
      id: 21,
      title: "Why developers really need to write",
      subtitle: "Dev growing tips",
      description: "Short description of my lecture",
      trackTitle: "GREEN",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "From better, more concise code and more persuasive emails to clients and colleagues, to documentation that other developers will want to read and better blog posts that will truly show our expertise - writing is an essential skill that every developer can use to succeed in their career. Good writing helps better any communication; with colleagues, clients, managers, users. It will translate not just into the emails you send about how to improve your company's project, but also the blog posts you write about your work that will actually showcase why it matters, entertaining updates about your app that users actually read, as well as improved, trolly comments on your friend's social media updates.",
      level: 0,
      performers: [9],
      tags: [4, 11],
      expectedAudiences: ["audience.developers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "22": {
      id: 22,
      title: "Lunch break",
      subtitle: "Bon apetit",
      description: "Enjoy the food",
      trackTitle: "GREEN",
      sessionType: {
        name: "Break",
        performance: false
      },
      sessionAbstract: null,
      level: 0,
      performers: [],
      tags: [],
      expectedAudiences: [],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "23": {
      id: 23,
      title: "BPMN2 - the gem that remained after the BPM hype cycle",
      subtitle: "BPMN tips",
      description: "Short description of my lecture",
      trackTitle: "GREEN",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract: null,
      level: 0,
      performers: [10],
      tags: [108],
      expectedAudiences: ["audience.managers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "24": {
      id: 24,
      title: "Retrospectives – what’s the point?",
      subtitle: "AGILE tips",
      description: "Short description of my lecture",
      trackTitle: "GREEN",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "Scrum masters deal with various team-related activities, but retrospectives are Nives's favorite. This talk will lead you through various methods of conducting team retrospectives and show you the importance of investing time in them.",
      level: 0,
      performers: [11],
      tags: [4, 17],
      expectedAudiences: ["audience.managers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "25": {
      id: 25,
      title: "Your hiring process is broken, and here is how you fix it",
      subtitle: "Hiring tips",
      description: "Short description of my lecture",
      trackTitle: "GREEN",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "One of the secrets to a successful company is getting the right people on the bus. Yet most companies make the same mistakes when hiring developers. I will take you on a journey from an ineffective hiring process to the one that we have.",
      level: 0,
      performers: [12],
      tags: [110, 109],
      expectedAudiences: ["audience.managers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "26": {
      id: 26,
      title: "Google’s secret weapon for personal and team growth - OKR’s",
      subtitle: "Getting things done tips",
      description: "Short description of my lecture",
      trackTitle: "GREEN",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "Objectives and Key results might just be the missing wheel in your organization’s growth, be it a team or a full-scale company. First introduced at Intel. Made mainstream and popular by being used all across Google.  Do not mistake them for KPI’s, they are not a method for evaluating performance. They are a method for focusing the team and personal growth. They are transparent. They try to navigate people and organizations to a common growth goal. They help with getting people out of their comfort zones because this is where growth starts. They are fun and challenging. They are a great companion for an agile (or Agile) team. Allow me to show you how they worked in local companies and how they helped developers and team leaders grow.",
      level: 0,
      performers: [13],
      tags: [111, 36, 11],
      expectedAudiences: ["audience.managers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "27": {
      id: 27,
      title: "Break time",
      subtitle: "Snack time",
      description: "Coffee tee and snacks",
      trackTitle: "GREEN",
      sessionType: {
        name: "Break",
        performance: false
      },
      sessionAbstract: null,
      level: 0,
      performers: [],
      tags: [],
      expectedAudiences: [],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "28": {
      id: 28,
      title: "Agile planning in the Gov environment",
      subtitle: "Agile tips",
      description: "Short description of my lecture",
      trackTitle: "GREEN",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "Being agile isn't easy. Being agile in Gov environment can be even harder. Bureaucratic hurdles, fixed yearly budgets, and other similar impediments are strong motivators to fall back to classic waterfall process and project management. This presentation highlights a successful agile implementation on a large Gov project using our agile planning practices as an example how to overcome these hurdles. Out of all agile practices, planning paired witch customer engagement gave us excellent results. This presentation will show some of the learned lessons.",
      level: 0,
      performers: [14],
      tags: [10],
      expectedAudiences: ["audience.managers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "29": {
      id: 29,
      title: "Reporting for a happy management board",
      subtitle: "Management tips",
      description: "Short description of my lecture",
      trackTitle: "GREEN",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "How many times have you seen a data model that perfectly transfers data from operating systems but nobody can find its way around in it? Did you ever had the right numbers to back up your results, but just weren't able to get the message in the right way to your management? Successful data presentation is the key to getting you closer to your business goals. Power BI was designed to help advanced business users to communicate important data based messages and to facilitate data-driven decision-making. This talk will take you through a journey of transforming reports based on Excel files to Power BI reports and dashboards using a mashup of data sources.",
      level: 0,
      performers: [15, 16],
      tags: [109, 110],
      expectedAudiences: ["audience.managers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "31": {
      id: 31,
      title: "Starting a company, growing from 3 to 300 people, and selling",
      subtitle: "this is subtitle",
      description: "this is description",
      trackTitle: "BLUE",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "How the company changed as it went through the various stages of growth (startup, rapid growth, maturing into a “real” company, and finally selling), including the positive things and the challenges about each stage. How we overcame the various challenges and use some funny true stories from our past to illustrate some of the issues we faced. I’d give some tips on starting and growing a company in general.",
      level: 2,
      performers: [5],
      tags: [109],
      expectedAudiences: ["audience.managers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "32": {
      id: 32,
      title: "Javascript without Javascript",
      subtitle: "this is subtitle",
      description: "this is description",
      trackTitle: "BLUE",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "With the help of a handful of amazing open source programs, we can now transpile nearly any programming language to JS, making it a sort of modern assembly language. In a fun and code heavy talk, I’ll show how you can leverage pre existing libraries today in order to get amazing performance and features in your current web apps, creating possibilities you never dreamt possible in the web browser. To top it off, a sneak peek into what the future of web perf will look like.",
      level: 3,
      performers: [6],
      tags: [59],
      expectedAudiences: ["audience.developers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "33": {
      id: 33,
      title: "Making great, discoverable web apps",
      subtitle: "this is subtitle",
      description: "this is description",
      trackTitle: "RED",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "The web is a great platform, but making web apps fast, semantic and discoverable can be a challenge. In this session we will explore how to build web apps that work great for your users and can be found better via search engines, too. We will discuss PWAs, technical SEO, server side rendering and a few other bits and pieces for you to build successful web apps.",
      level: 3,
      performers: [2],
      tags: [113, 114],
      expectedAudiences: ["audience.developers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "34": {
      id: 34,
      title: "A year of mob programming - tips and tricks",
      subtitle: "this is subtitle",
      description: "this is description",
      trackTitle: "GREEN",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "Mob programming is when the whole development team works on the same thing, at the same time, in the same space and with one shared computer. I’ve been working in a development team where we’ve been mob programming for well over a year, every day, without exceptions. We noticed an enormous boost in productivity as we used the team’s overall brain capacity to solve problems and to ship high quality software. But it was not always easy. We’ve learned to master this way of working the hard way, by continuously improving on our processes, which I’ll share in this presentation.",
      level: 3,
      performers: [9],
      tags: [10, 67, 11],
      expectedAudiences: ["audience.mobile-developers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "35": {
      id: 35,
      title: "Serverless: The Missing Manual",
      subtitle: "this is subtitle",
      description: "this is description",
      trackTitle: "BLUE",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "Do serverless cloud platforms leave you with more questions than answers? This session will focus on migrating from traditional applications to serverless cloud platforms. You’ll learn about serving files without a web server, managing application state in a stateless environment, running background processes in ephemeral runtimes and more. These techniques will enable you to build modern applications using serverless platforms. This session is for developers who see the benefits of serverless but are struggling to adjust to a serverless world.",
      level: 4,
      performers: [20],
      tags: [69],
      expectedAudiences: ["audience.devops"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "36": {
      id: 36,
      title: "What if Spring framework disappeared for a week?",
      subtitle: "this is subtitle",
      description: "this is description",
      trackTitle: "RED",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "This talk is a bit provocative. Spring framework is probably the most successful of all Java frameworks in the last couple of years. Usually, half of every conference schedule is dedicated to it. It’s really great and helpful, but sometimes I see that (especially younger) developers stop to see world outside it. If they cannot use Spring for some (good or bad) reasons, they are helpless and start to moan. I’d like to do a kind of a mental experiment – what would one do in such a situation, which stuff is really essential and which is such syntax sugar that is easily replaced. This talk is mostly Spring/Java based, but I’d like to make some general observations about frameworks/libraries – how to distinguish if some feature is really difficult to live without, or is it just some syntactic glue we can replace with 5 lines of code.",
      level: 4,
      performers: [7],
      tags: [3],
      expectedAudiences: ["audience.developers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "37": {
      id: 37,
      title: "Technology for a Moving World",
      subtitle: "this is subtitle",
      description: "this is description",
      trackTitle: "GREEN",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "TomTom builds technology for a moving world. We help drivers – human or computer – to drive the 1.2 billion cars in the world safely. Every day, all over the world, moving goods and people where they need to go. In 1984, TomTom started mapping the world for navigation applications that help drivers find their way from A to B, eliminating the need for paper maps. Later, in 2006, we developed global traffic services and connected navigation applications so drivers could outsmart traffic congestion altogether. Currently, we fight range anxiety for drivers navigating in their electric vehicles, making sure they don’t run out of batteries. Going forward, we are already enabling automated vehicles to see beyond their physical sensors by remapping the world with centimeter accuracy. We’re building applications that assist people as they drive, or even drive a car all on its own – more safely and more efficiently than human drivers can.",
      level: 5,
      performers: [22],
      tags: [112],
      expectedAudiences: ["audience.developers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "38": {
      id: 38,
      title: "Cloud scale IoT messaging",
      subtitle: "this is subtitle",
      description: "this is description",
      trackTitle: "RED",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "Device connectivity is one of the most common issues IoT developers need to solve. Having an open source solution based on the standardized protocols that solves recurring connectivity problems is a very useful tool to have. Meet Eclipse Hono, a cloud-based IoT connectivity platform which provides remote interfaces for device connectivity and mechanisms for uniform interaction with devices regardless of the communication protocol.",
      level: 3,
      performers: [10],
      tags: [7],
      expectedAudiences: ["audience.developers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "39": {
      id: 39,
      title: "Build a 12-factor microservice with MicroProfile",
      subtitle: "this is subtitle",
      description: "this is description",
      trackTitle: "BLUE",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "Planning to build microservices? The best practice of building a first-class microservice is to follow 12-Factor app. But how to fulfill the 12-factor app rules, e.g. how to achieve externalise the configuration, fault tolerance, etc? Come to this session to build a 12-factor microservice using MicroProfile programming mode in half an hour with live code demo.",
      level: 3,
      performers: [8],
      tags: [53],
      expectedAudiences: ["audience.developers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "40": {
      id: 40,
      title: "Android Typography",
      subtitle: "this is subtitle",
      description: "this is description",
      trackTitle: "GREEN",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "Tips and tricks for using and formatting text on Android platform. How to layout text to align with designs, what certain design terms regarding text mean and how to apply them on Android. Pros and cons of certain approaches regarding both code readability and performance.",
      level: 3,
      performers: [3],
      tags: [11],
      expectedAudiences: ["audience.mobile-developers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "41": {
      id: 41,
      title: "Idea to Execution and Beyond",
      subtitle: "this is subtitle",
      description: "this is description",
      trackTitle: "RED",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "A high-level run-through of what it takes to execute and launch a project. Ashley covers the idea stage, build process, launch, and what to expect post-launch. Idea validation, shipping anxiety, and customer development are just a few of the themes covered.",
      level: 1,
      performers: [1],
      tags: [109],
      expectedAudiences: ["audience.managers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    },
    "43": {
      id: 43,
      title: "Let your users decide what they want",
      subtitle: "this is subtitle",
      description: "this is description",
      trackTitle: "GREEN",
      sessionType: {
        name: "Talk",
        performance: true
      },
      sessionAbstract:
        "We are all working towards one single goal. To create a best user experience. But most of the time we are wrong about what we think is good for the user. We usually have no idea if a feature is useful to the user until it is used by the customers. My talk is about letting the users help you understand what they need and if a particular feature is really useful for the users by using the technique of A/B testing. At Booking.com we are constantly running A/B tests to improve the customer experience by measuring the business metrics.",
      level: 2,
      performers: [2],
      tags: [110],
      expectedAudiences: ["audience.developers"],
      averageRating: null,
      currentVisitorRating: null,
      pdfUrl: null,
      rating: null
    }
  },
  allIds: [
    1,
    2,
    3,
    5,
    6,
    7,
    8,
    9,
    11,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    43
  ]
};

export const getDays = () => days.allIds.map(id => days.byId[id]);
export const getSessions = () => session.allIds.map(id => session.byId[id]);
export const getTimeSlots = () =>
  timeSlots.allIds.map(id => timeSlots.byId[id]);
export const getTracks = () => tracks.allIds.map(id => tracks.byId[id]);
