dataSetVersion = "2020-04-02"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Star Ocean", tooltip: "SO1", key: "SO1" },
      { name: "Star Ocean: First Departure", tooltip: "SO1FD", key: "SO1FD" },
      { name: "Star Ocean: The Second Story", tooltip: "SO2", key: "SO2" },
      { name: "Star Ocean: Second Evolution", tooltip: "SO2SE", key: "SO2SE" },
      { name: "Star Ocean: Blue Sphere", tooltip: "SOBS", key: "SOBS" },
      { name: "Star Ocean: Till the End of Time", tooltip: "SO3", key: "SO3" },
      { name: "Star Ocean: The Last Hope", tooltip: "SO4", key: "SO4" },
      { name: "Star Ocean: Integrity and Faithlessness", tooltip: "SO5", key: "SO5" },
      { name: "Star Ocean Anamnesis", tooltip: "SOA (unique characters only)", key: "SOA" },
    ]
  },
  {
    name: "Other Filters",
    key: "stage",
    tooltip: "Filter characters by gender and playability",
    checked: false,
    sub: [ { name: "Girls", key: "F" }, { name: "Dudes", key: "M" }, { name: "Playable", key: "P" }, { name: "Non-playable", key: "N" }
    ]
  },
  {
    name: "Remove non-combat characters",
    key: "dialog",
    tooltip: "Check this to remove characters who only appear in dialogue.",
	checked: false
  },
  {
    name: "Remove Welch",
    key: "Welch",
    tooltip: "Forcefully removes Welch from FD/SE/3/5, as playable/non-playable filters don't work on her.  SO4 and SOA Welch will still appear if not removed via other filters.",
	checked: false
  }
  
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Roddick Farrence (Ratix)",
    img: "J6gzlLw.png",
    opts: {
      series: [ "SO1", "SO1FD" ],
      stage: ["M", "P"]
    }
  },
  {
    name: "Millie Chliette",
    img: "EIzdaAh.png",
    opts: {
      series: [ "SO1", "SO1FD" ],
      stage: ["F", "P"]
    }
  },
  {
    name: "Dorne Murtough",
    img: "DZmkNaw.png",
    opts: {
      series: ["SO1", "SO1FD"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Ronyx J. Kenny",
    img: "zDSrkmm.png",
    opts: {
      series: ["SO1", "SO1FD"],
      stage: ["M", "P"]
    },
  },
  {
    name: "Ilia Silvestri",
    img: "ZVaj6HR.png",
    opts: {
      series: [ "SO1", "SO1FD" ],
      stage: ["F", "P"]
    }
  },
  {
    name: "Cyuss Warren",
    img: "rdruT4w.png",
    opts: {
      series: ["SO1", "SO1FD"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Ashlay Bernbeldt",
    img: "DSiTuIV.png",
    opts: {
      series: ["SO1", "SO1FD"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Phia Melle",
    img: "sEExjcD.png",
    opts: {
      series: ["SO1", "SO1FD"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Joshua Jerand",
    img: "pKX8d35.png",
    opts: {
      series: [ "SO1", "SO1FD" ],
      stage: ["M", "P"]
    }
  },
  {
    name: "Mavelle Froesson",
    img: "zZhZelL.png",
    opts: {
      series: ["SO1", "SO1FD"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Pericci",
    img: "7Fn5kNi.png",
    opts: {
      series: ["SO1", "SO1FD"],
      stage: ["F", "P"]
    }
  },
  {
    name: "T'nique Arcana",
    img: "e3zd7UA.png",
    opts: {
      series: ["SO1", "SO1FD"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Erys Jerand",
    img: "VIec3CQ.png",
    opts: {
      series: ["SO1FD"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Welch Vineyard",
    img: "oxOkXQb.png",
    opts: {
      series: ["SO1FD", "SO2SE", "SO3", "SO5"],
      stage: ["F", "P"],
	  Welch: true
    }
  },
  {
    name: "Claude C. Kenny",
    img: "UJXL6em.png",
    opts: {
      series: ["SO2", "SO2SE", "SOBS"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Rena Lanford",
    img: "V8FdTy5.png",
    opts: {
      series: ["SO2", "SO2SE", "SOBS"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Celine Jules",
    img: "tMEetpB.png",
    opts: {
      series: ["SO2", "SO2SE", "SOBS"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Dias Flac",
    img: "agF7EdE.png",
    opts: {
      series: ["SO2", "SO2SE", "SOBS"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Leon D.S. Gehste",
    img: "1Mrz8Ik.png",
    opts: {
      series: ["SO2", "SO2SE", "SOBS"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Ashton Anchors",
    img: "TxdHhUS.png",
    opts: {
      series: ["SO2", "SO2SE", "SOBS"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Precis F. Neumann",
    img: "lOzuBuf.png",
    opts: {
      series: ["SO2", "SO2SE", "SOBS"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Bowman Jeane",
    img: "cU6xLB8.png",
    opts: {
      series: ["SO2", "SO2SE", "SOBS"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Opera Vectra",
    img: "u4Gmj3v.png",
    opts: {
      series: ["SO2", "SO2SE", "SOBS"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Ernest Raviede",
    img: "NL6e8lX.png",
    opts: {
      series: ["SO2", "SO2SE", "SOBS"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Noel Chandler",
    img: "hpXQpPx.png",
    opts: {
      series: ["SO2", "SO2SE", "SOBS"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Chisato Madison",
    img: "rbGG2Yv.png",
    opts: {
      series: ["SO2", "SO2SE", "SOBS"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Fayt Leingod",
    img: "bMaBrSR.png",
    opts: {
      series: ["SO3"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Sophia Esteed",
    img: "AfVWFbs.png",
    opts: {
      series: ["SO3"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Peppita Rossetti",
    img: "40FFZt9.png",
    opts: {
      series: ["SO3"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Cliff Fittir",
    img: "TBWb3z9.png",
    opts: {
      series: ["SO3"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Nel Zelpher",
    img: "apYoa8E.png",
    opts: {
      series: ["SO3"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Roger S. Huxley",
    img: "grXhNVv.png",
    opts: {
      series: ["SO3"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Albel Nox",
    img: "4ZlERmR.png",
    opts: {
      series: ["SO3"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Maria Traydor",
    img: "h6cJ7mI.png",
    opts: {
      series: ["SO3"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Mirage Koas",
    img: "IHuT6Vy.png",
    opts: {
      series: ["SO3"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Adray Lasbard",
    img: "LHFPPXO.png",
    opts: {
      series: ["SO3"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Edge Maverick",
    img: "0vx6x26.png",
    opts: {
      series: ["SO4"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Reimi Saionji",
    img: "rQHYfAu.png",
    opts: {
      series: ["SO4"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Faize Sheifa Beleth",
    img: "iYwoYMz.png",
    opts: {
      series: ["SO4"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Lymle Lemuri Phi",
    img: "xDf6dXF.png",
    opts: {
      series: ["SO4"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Bacchus D-79",
    img: "C1CSciP.png",
    opts: {
      series: ["SO4"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Meracle Chamlotte",
    img: "dP4eLGf.png",
    opts: {
      series: ["SO4"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Myuria Tionysus",
    img: "wg1Jy11.png",
    opts: {
      series: ["SO4"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Sarah Jerand",
    img: "JWzYgMT.png",
    opts: {
      series: ["SO4"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Arumat P. Thanatos",
    img: "joI2b1f.png",
    opts: {
      series: ["SO4"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Fidel Camuze",
    img: "trqBpNO.png",
    opts: {
      series: ["SO5"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Miki Sauvester",
    img: "a7MJbEF.png",
    opts: {
      series: ["SO5"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Victor Oakville",
    img: "ISEFd0t.png",
    opts: {
      series: ["SO5"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Fiore Brunelli",
    img: "kfz1CCP.png",
    opts: {
      series: ["SO5"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Emmerson T. Kenny",
    img: "RtvCCtc.png",
    opts: {
      series: ["SO5"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Anne Patriceani",
    img: "eh2ekW2.png",
    opts: {
      series: ["SO5"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Relia",
    img: "bMjL5KE.png",
    opts: {
      series: ["SO5"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Evelysse",
    img: "MwZMKwc.png",
    opts: {
      series: ["SOA"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Coro",
    img: "K6nE0fQ.png",
    opts: {
      series: ["SOA"],
      stage: ["M", "N"],
	  dialog: true
    }
  },
  {
    name: "Verda Kleiman",
    img: "x2jN9y2.png",
    opts: {
      series: ["SOA"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Tika Blunche",
    img: "XvKBLsy.png",
    opts: {
      series: ["SOA"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Recoro",
    img: "6mBODMu.png",
    opts: {
      series: ["SOA"],
      stage: ["M", "N"],
	  dialog: true
    }
  },
  {
    name: "Yrian Luxter",
    img: "PFR6rhs.png",
    opts: {
      series: ["SOA"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Welch Vineyard (SOA)",
    img: "4lx0r02.png",
    opts: {
      series: ["SOA"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Caleen Keemosn",
    img: "HHSiwka.png",
    opts: {
      series: ["SOA"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Ricardo Franz",
    img: "SH1bPaT.png",
    opts: {
      series: ["SOA"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Vulcan S90 (Valka)",
    img: "QOdVKdQ.png",
    opts: {
      series: ["SOA"],
      stage: ["F", "P"]
    }
  },
  {
    name: "Henri Anree Henry",
    img: "begRf1P.png",
    opts: {
      series: ["SOA"],
      stage: ["M", "P"]
    }
  },
  {
    name: "Mastema",
    img: "SPaa2j3.png",
    opts: {
      series: ["SOA"],
      stage: ["F", "P"]
	}
  },
  {
    name: "Gabriel (Indalecio)",
    img: "y36rDcU.png",
    opts: {
      series: ["SO2", "SO2SE"],
      stage: ["M", "N"]
	}
  },
  {
    name: "Lucifer (Cyril)",
    img: "rY9Z3FK.png",
    opts: {
      series: ["SO2", "SO2SE"],
      stage: ["M", "N"]
	}
  },
  {
    name: "Haniel (Vesper)",
    img: "dG2oDLp.png",
    opts: {
      series: ["SO2", "SO2SE"],
      stage: ["M", "N"]
	}
  },
  {
    name: "Michael (Decus)",
    img: "bzlp8Ih.png",
    opts: {
      series: ["SO2", "SO2SE"],
      stage: ["M", "N"]
	}
  },
  {
    name: "Raphael (Jibril)",
    img: "NvE5XB0.png",
    opts: {
      series: ["SO2", "SO2SE"],
      stage: ["M", "N"]
	}
  },
  {
    name: "Camael (Nicolus)",
    img: "lOdUlSj.png",
    opts: {
      series: ["SO2", "SO2SE"],
      stage: ["M", "N"]
	}
  },
  {
    name: "Zadkiel (Ruprecht)",
    img: "sHt9tVs.png",
    opts: {
      series: ["SO2", "SO2SE"],
      stage: ["M", "N"]
	}
  },
  {
    name: "Metatron (Berle)",
    img: "uuJBeVb.png",
    opts: {
      series: ["SO2", "SO2SE"],
      stage: ["M", "N"]
	}
  },
  {
    name: "Jophiel (Shigeo)",
    img: "5iBNPks.png",
    opts: {
      series: ["SO2", "SO2SE"],
      stage: ["M", "N"]
	}
  },
  {
    name: "Zaphkiel (Marsilio)",
    img: "6GeZuWz.png",
    opts: {
      series: ["SO2", "SO2SE"],
      stage: ["M", "N"]
	}
  },
  {
    name: "Blair Lansfeld",
    img: "0pmlHDZ.png",
    opts: {
      series: ["SO3"],
      stage: ["F", "N"]
	}
  },
  {
    name: "Clair Lasbard",
    img: "oigbqGD.png",
    opts: {
      series: ["SO3"],
      stage: ["F", "N"],
	  dialog: true
	}
  },
  {
    name: "Luther Lansfeld",
    img: "6vRgLTE.png",
    opts: {
      series: ["SO3"],
      stage: ["M", "N"]
	}
  },
  {
    name: "Rival",
    img: "3H6NeAq.png",
    opts: {
      series: ["SOBS"],
      stage: ["F", "N"]
	}
  },
  {
    name: "Jie Revorse",
    img: "1GTGWe0.png",
    opts: {
      series: ["SO1", "SO1FD"],
      stage: ["M", "N"]
	}
  },
  {
    name: "Jivre",
    img: "kxxE2ah.png",
    opts: {
      series: ["SOA"],
      stage: ["M", "N"]
	}
  },
  {
    name: "Welch Vineyard (SO4)",
    img: "7tqTmlG.png",
    opts: {
      series: ["SO4"],
      stage: ["F", "N"],
	  dialog: true
	}
  },
  {
    name: "Farleen",
    img: "GkedsNF.png",
    opts: {
      series: ["SO3"],
      stage: ["F", "N"],
	  dialog: true
	}
  },
  {
    name: "Tynave",
    img: "bqstSNT.png",
    opts: {
      series: ["SO3"],
      stage: ["F", "N"],
	  dialog: true
	}
  },
  {
    name: "Ted",
    img: "TcKAeMg.png",
    opts: {
      series: ["SO5"],
      stage: ["M", "N"]
	}
  },
  {
    name: "Daril Camuze",
    img: "Hdcbxbc.png",
    opts: {
      series: ["SO5"],
      stage: ["M", "N"]
	}
  },
  {
    name: "Alma",
    img: "7DE4zIx.png",
    opts: {
      series: ["SO5"],
      stage: ["M", "N"]
	}
  },
  {
    name: "Shimada",
    img: "Tc7cQel.png",
    opts: {
      series: ["SO4"],
      stage: ["M", "N"]
	}
  },
  {
    name: "Stephen D. Kenny",
    img: "UqCgNDN.png",
    opts: {
      series: ["SO4"],
      stage: ["M", "N"]
	}
  }
]
