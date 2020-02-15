dataSetVersion = "2020-02-16"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name: "Filter by Character",
        key: "series",
        tooltip: "Check this to restrict to certain characters.",
        checked: false,
        sub: [
            { name: "Alice", tooltip: "アリス",  key: "alice" },
            { name: "Snow White", tooltip: "スノウホワイト", key: "snow" },
            { name: "Red Riding Hood", tooltip: "赤ずきん", key: "rrh" },
            { name: "Cinderella", tooltip: "シンデレラ", key: "cindy" },
            { name: "Pinocchio", tooltip: "ピノキオ", key: "pino" },
            { name: "Little Mermaid", tooltip: "人魚姫", key: "lm" },
            { name: "Gretel", tooltip: "グレーテル", key: "gretel" },
            { name: "Briar Rose", tooltip: "いばら姫", key: "ibara" },
            { name: "Kaguyahime", tooltip: "かぐや姫", key: "kaguya" },
            { name: "Dorothy", tooltip: "ドロシー", key: "doro" },
            { name: "Nutcracker", tooltip: "くるみ割り人形", key: "nut" },
            { name: "Three Little Pigs", tooltip: "三匹の子豚", key: "pigs" },
            { name: "Aladdin", tooltip: "アラジン", key: "aladdin" },
            { name: "Rapunzel", tooltip: "ラプンツェル", key: "rapun" },
            { name: "Hamelin", tooltip: "ハーメルン", key: "hamelin" },
            { name: "NieR/NieR: Automata", tooltip: "NieR/NieR: Automata", key: "nier" },
            { name: "Drakengard 3", tooltip: "DOD3", key: "dod3" },
            { name: "Code Geass", tooltip: "コードギアス", key: "cg" },
            { name: "FINAL FANTASY BRAVE EXVIUS", tooltip: "ファイナルファンタジー ブレイブエクスヴィアス", key:"ffbe"},
            { name: "Re:Zero", tooltip: "Re：ゼロから始める異世界生活", key: "rezero" },

        ]
    },
    {
        name: "Filter by Job",
        key: "stage",
        tooltip: "Check this to restrict to certain jobs.",
        checked: false,
        sub: [
            { name: "Breaker", tooltip: "ブレイカー", key: "breaker" },
            { name: "Crusher", tooltip: "クラッシャー", key: "crusher" },
            { name: "Gunner", tooltip: "ガンナー", key: "gunner" },
            { name: "Paladin", tooltip: "パラディン", key: "paladin" },
            { name: "Sorcerer", tooltip: "ソーサラー", key: "sorc" },
            { name: "Minstrel", tooltip: "ミンストレル", key: "mins" },
            { name: "Cleric", tooltip: "クレリック", key: "cleric" },
            { name: "Mage", tooltip: "メイジ", key: "mage" },
            { name: "Half-Nightmare", tooltip: "ハーフナイトメア", key: "hnm" },
            { name: "Alternative", tooltip: "オルタナティブ", key: "alt" },
            { name: "Swimsuit", tooltip: "水着", key: "swimsuit" },
            { name: "Event/Other", tooltip: "イベント/その他、Example: X-mas, Camp", key: "event" }
        ]
    },
    {
        name: "Filter by Sin",
        key: "sin",
        tooltip: "Check this to restrict to sin jobs.",
        checked: false,
        sub: [
            { name: "Proud Lion",tooltip: "傲獅", key: "pride" },
            { name: "Envious Serpent",tooltip: "嫉蛇", key: "envy" },
            { name: "Wrath Wolf",tooltip: "憤狼", key: "wrath" },
            { name: "Greedy Crow",tooltip: "慾鴉", key: "greed" },
            { name: "Gluttonous Tiger",tooltip: "餐虎", key: "glut" },
            { name: "Sloth Bear",tooltip: "怠熊", key: "sloth" },
            { name: "Lustful Scorpion", tooltip: "淫蠍",key: "lust" }
        ]
    },



    {
        name: "Remove Job Outfits",
        key: "outfit",
        tooltip: "Check this to remove the alternative outfit for some characters."
    },

    {
        name: "Remove Sin Jobs",
        key: "sinCheck",
        tooltip: "Check this to remove sin jobs from your options.",
        checked: false
    }



//  {
//    name: "Remove Non-Girls",
//    key: "notgirl",
//    tooltip: "Check this to remove all non-female characters."
//  }
];

dataSet[dataSetVersion].characterData = [

    //       Alice
    {
        name: "Alice/Kimono",
        img: "S8dpss4.png",
        opts: {
            series: ["alice"],
            stage: ["crusher","event"]
        }
    },
    {
        name: "Alice/Gunner",
        img: "ssHMizu.png",
        opts: {
            series: ["alice"],
            stage: ["gunner"]
        }
    },
    {
        name: "Alice/Proud Lion Half-Nightmare",
        img: "aotun3m.png",
        opts: { series: ["alice"],
            stage: ["breaker","hnm"],
            sin: ["pride"],
            sinCheck: true}
    },
    {
        name: "Alice/Envious Serpent Gunner",
        img: "17iuozT.png",
        opts: { series: ["alice"], stage: ["gunner"], sin:["envy"], sinCheck:true}
    },
    {
        name: "Alice/Mage",
        img: "3jxnLP8.png",
        opts: {
            series: [ "alice"],
            stage: ["mage"]
        }
    },
    {
        name: "Alice/Mizugi",
        img: "0VMTf21.png",
        opts: { series: ["alice"], stage: ["crusher","swimsuit"] }
    },
    {
        name: "Alice/Crusher",
        img: "MRZUrOB.png",
        opts: { series: ["alice"], stage: ["crusher"] }
    },
    {
        name: "Alice/Grandioso",
        img: "No8y01I.png",
        opts: {
            series: ["alice"],
            stage: ["mins", "event"]
        }
    },
    {
        name: "Alice/Valentine",
        img: "m04VO26.png",
        opts: {
            series: [ "alice"
            ],
            stage: ["breaker", "event"]
        }
    },
    {
        name: "Alice/Camp",
        img: "cijXI6f.png",
        opts: {
            series: ["alice"],
            stage: ["mins","event"]
        }
    },
    {
        name: "Alice/Wrath Wolf Crusher",
        img: "EJrloGi.png",
        opts: { series: ["alice"], stage: ["crusher"],sin:["wrath"], sinCheck:true}
    },
    {
        name: "Alice/Alternative Blood",
        img: "QJpYUkj.png",
        opts: { series: ["alice"], stage: ["breaker","alt"] }
    },
    {
        name: "Alice/Alternative Outfit2",
        img: "AR0K9UM.png",
        opts: {
            series: ["alice"],
            stage: ["breaker","alt"],
            outfit: true
        }
    },
    {
        name: "Alice/Alternative",
        img: "dW5pjcx.png",
        opts: {
            series: ["alice"],
            stage: ["breaker","alt"]
        }
    },
    {
        name: "Alice/Breaker",
        img: "yji9HhR.png",
        opts: { series: ["alice"], stage: ["breaker"] }
    },
    {
        name: "Alice/Cleric",
        img: "UhuFOES.png",
        opts: { series: ["alice"], stage: ["cleric"] }
    },
    {
        name: "Alice/Paladin",
        img: "zlSsBBX.png",
        opts: { series: ["alice"], stage: ["paladin"] }
    },
    {
        name: "Alice/Sorcerer",
        img: "Ta9YFwg.png",
        opts: { series: ["alice"], stage: ["sorc"] }
    },
    {
        name: "Alice/Half-Nightmare",
        img: "YxHBiWd.png",
        opts: {
            series: [ "alice"
            ],
            stage: ["hnm", "paladin"]
        }
    },
    {
        name: "Alice/Minstrel",
        img: "KCILbu4.png",
        opts: {
            series: [ "alice"
            ],
            stage: ["mins"]
        }
    },
    {
        name: "Alice/Luxury",
        img: "mGvIRgP.png",
        opts: {series: [ "alice"], stage: ["paladin","event"]
        }
    },
    {
        name: "Alice/Gluttonous Tiger Sorcerer",
        img: "6kd7xcS.png",
        opts: { series: ["alice"], stage: ["sorc"],sin:["glut"], sinCheck:true}
    },
    {
        name: "Alice/Proud Lion Breaker",
        img: "Wj4NWiq.png",
        opts: { series: ["alice"], stage: ["breaker"], sin:["pride"], sinCheck:true}
    },
    {
        name: "Alice/Travelers",
        img: "wzkVeF1.png",
        opts: {series: [ "alice"], stage: ["sorc","event"]
        }
    },
    {
        name: "Alice/Lustful Scorpion Cleric",
        img: "uzipQNL.png",
        opts: { series: ["alice"], stage: ["cleric"],sin:["lust"],sinCheck:true }
    },



    //       Snow White
    {
        name: "Snow White/Half-Nightmare",
        img: "gNB1Joe.png",
        opts: {
            series: ["snow"],
            stage: ["hnm", "gunner"]
        }
    },
    {
        name: "Snow White/Sorcerer",
        img: "GyxcNtq.png",
        opts: {
            series: ["snow"],
            stage: ["sorc"]
        }
    },
    {
        name: "Snow White/Alternative",
        img: "qm0IIod.png",
        opts: {
            series: ["snow"],
            stage: ["alt","sorc"]
        }
    },
    {
        name: "Snow White/Mage",
        img: "TSOVcFi.png",
        opts: { series: ["snow"], stage: ["mage"] }
    },
    {
        name: "Snow White/Gunner",
        img: "Ds8oHGJ.png",
        opts: { series: ["snow"], stage: ["gunner"] }
    },
    {
        name: "Snow White/Tuna Cleric",
        img: "2wEMXZO.png",
        opts: { series: ["snow"], stage: ["swimsuit", "cleric","event"] }
    },
    {
        name: "Snow White/Greedy Crow Paladin",
        img: "zwkeKBR.png",
        opts: { series: ["snow"], stage: ["paladin","sin"], sin:["greed"], sinCheck: true }
    },
    {
        name: "Snow White/Mizugi",
        img: "z9gLTJQ.png",
        opts: {
            series: ["snow"],
            stage: ["gunner","swimsuit"]
        }
    },
    {
        name: "Snow White/X-mas",
        img: "DzsVdA3.png",
        opts: { series: ["snow"], stage: ["breaker", "event"] }
    },
    {
        name: "Snow White/Kimono",
        img: "b0VHr9z.png",
        opts: { series: ["snow"], stage: ["mins","event"] }
    },
    {
        name: "Snow White/Wrath Wolf Crusher",
        img: "8ND0Lux.png",
        opts: { series: ["snow"], stage: ["crusher"], sin:["wrath"], sinCheck: true }
    },
    {
        name: "Snow White/Breaker",
        img: "O17z0TL.png",
        opts: {
            series: ["snow"],
            stage: ["breaker"]
        }
    },
    {
        name: "Snow White/Cleric",
        img: "ErLDmc8.png",
        opts: { series: ["snow"], stage: ["cleric"] }
    },
    {
        name: "Snow White/Grand Prix(H31)",
        img: "jwL9trm.png",
        opts: { series: ["snow"], stage: ["paladin","event"] }
    },
    {
        name: "Snow White/Crusher",
        img: "pu8j17y.png",
        opts: {
            series: ["snow"],
            stage: ["crusher"]
        }
    },
    {
        name: "Snow White/Paladin",
        img: "aocKGnB.png",
        opts: { series: ["snow"], stage: ["paladin"] }
    },
    {
        name: "Snow White/Minstrel",
        img: "NmdcYKB.png",
        opts: { series: ["snow"], stage: ["mins"] }
    },
    {
        name: "Snow White/Lustful Scorpion Cleric",
        img: "ZrCFf21.png",
        opts: { series: ["snow"], stage: ["cleric"], sin:["lust"], sinCheck: true }
    },
    {
        name: "Snow White/Pride Lion Breaker",
        img: "jnqPyff.png",
        opts: { series: ["snow"], stage: ["breaker"], sin:["pride"], sinCheck: true }
    },
    {
        name: "Snow White/Gluttonous Tiger Sorcerer",
        img: "IEB4cVQ.png",
        opts: { series: ["snow"], stage: ["sorc","sin"], sin:["glut"], sinCheck: true }
    },
    {
        name: "Snow White/Travelers",
        img: "Jv9TaT7.png",
        opts: { series: ["snow"], stage: ["crusher","event"] }
    },
    {
        name: "Snow White/Valentine",
        img: "piOeRDc.png",
        opts: { series: ["snow"], stage: ["event","sorc"] }
    },


    //       Red Riding Hood

    {
        name: "Red Riding Hood/Kimono",
        img: "sVUxbng.png",
        opts: { series: ["rrh"], stage: ["event","breaker"] }
    },
    {
        name: "Red Riding Hood/Gunner",
        img: "494pSic.png",
        opts: { series: ["rrh"], stage: ["gunner"] }
    },
    {
        name: "Red Riding Hood/X-mas",
        img: "JnDoFuL.png",
        opts: { series: ["rrh"], stage: ["event","sorc"] }
    },
    {
        name: "Red Riding Hood/Half-Nightmare",
        img: "EZ85yZ7.png",
        opts: { series: ["rrh"], stage: ["hnm","crusher"] }
    },
    {
        name: "Red Riding Hood/Lustful Scorpion Cleric",
        img: "EbxCaup.png",
        opts: {
            series: ["rrh"], stage: ["cleric"], sin:["lust"], sinCheck: true
        }
    },
    {
        name: "Red Riding Hood/Mage",
        img: "9boBy4i.png",
        opts: { series: ["rrh"], stage: ["mage"] }
    },
    {
        name: "Red Riding Hood/Alternative",
        img: "GwxSRb6.png",
        opts: { series: ["rrh"], stage: ["alt","crusher"] }
    },
    {
        name: "Red Riding Hood/Alternative Outfit2",
        img: "cPqu5D3.png",
        opts: { series: ["rrh"], stage: ["crusher","alt"],outfit:true }
    },
    {
        name: "Red Riding Hood/Crusher",
        img: "UXQBLXr.png",
        opts: { series: ["rrh"], stage: ["crusher"] }
    },
    {
        name: "Red Riding Hood/Sorcerer",
        img: "DhPsLF0.png",
        opts: { series: ["rrh"], stage: ["sorc"] }
    },
    {
        name: "Red Riding Hood/Cleric",
        img: "FVEzGoh.png",
        opts: { series: ["rrh"], stage: ["cleric"] }
    },
    {
        name: "Red Riding Hood/Breaker",
        img: "gIwz2Uv.png",
        opts: { series: ["rrh"], stage: ["breaker"] }
    },
    {
        name: "Red Riding Hood/Minstrel",
        img: "QIzGLZK.png",
        opts: { series: ["rrh"], stage: ["mins"] }
    },
    {
        name: "Red Riding Hood/Paladin",
        img: "P0Gz7na.png",
        opts: { series: ["rrh"], stage: ["paladin"] }
    },
    {
        name: "Red Riding Hood/Luxury",
        img: "QzdLRXw.png",
        opts: { series: ["rrh"], stage: ["event","crusher"] }
    },
    {
        name: "Red Riding Hood/Mizugi",
        img: "KM515MP.png",
        opts: { series: ["rrh"], stage: ["swimsuit","mins"] }
    },
    {
        name: "Red Riding Hood/Sloth Bear Minstrel",
        img: "icMdS5y.png",
        opts: { series: ["rrh"], stage: ["mins"], sin:["sloth"], sinCheck: true }
    },
    {
        name: "Red Riding Hood/Envious Serpent Gunner",
        img: "iXx39Sx.png",
        opts: { series: ["rrh"], stage: ["gunner"], sin:["envy"], sinCheck: true }
    },
    {
        name: "Red Riding Hood/Amphibious Assault Ship Type",
        img: "sEjS1q5.png",
        opts: { series: ["rrh"], stage: ["breaker"] }
    },
    {
        name: "Red Riding Hood/Valentine",
        img: "SW6KPOD.png",
        opts: { series: ["rrh"], stage: ["event","crusher"] }
    },

    //       Cinderella

    {
        name: "Cinderella/Cleric",
        img: "hYw9Yby.png",
        opts: { series: ["cindy"], stage: ["cleric"] }
    },
    {
        name: "Cinderella/Alternative",
        img: "e6P4bQY.png",
        opts: { series: ["cindy"], stage: ["alt","gunner"] }
    },
    {
        name: "Cinderella/Envious Serpent Gunner",
        img: "xGIQRYa.png",
        opts: { series: ["cindy"], stage: ["gunner"],sin:["envy"],sinCheck:true }
    },
    {
        name: "Cinderella/Halloween",
        img: "FS1qP4V.png",
        opts: { series: ["cindy"], stage: ["mins","event"] }
    },
    {
        name: "Cinderella/Proud Lion Breaker",
        img: "h2ZGL0b.png",
        opts: { series: ["cindy"], stage: ["breaker"],sin:["pride"],sinCheck:true }
    },
    {
        name: "Cinderella/Gunner",
        img: "bYHNRz9.png",
        opts: { series: ["cindy"], stage: ["gunner"] }
    },
    {
        name: "Cinderella/Alternative Outfit2",
        img: "zPnxMBI.png",
        opts: { series: ["cindy"], stage: ["gunner","alt"],outfit:true }
    },
    {
        name: "Cinderella/Half-Nightmare",
        img: "TPXqARO.png",
        opts: { series: ["cindy"], stage: ["gunner","hnm"] }
    },
    {
        name: "Cinderella/Breaker",
        img: "Eq9P7k5.png",
        opts: { series: ["cindy"], stage: ["breaker"] }
    },
    {
        name: "Cinderella/Crusher",
        img: "NyHGhaW.png",
        opts: { series: ["cindy"], stage: ["crusher"] }
    },
    {
        name: "Cinderella/Sorcerer",
        img: "y6TRRNq.png",
        opts: { series: ["cindy"], stage: ["sorc"] }
    },
    {
        name: "Cinderella/Minstrel",
        img: "8iUhBsL.png",
        opts: { series: ["cindy"], stage: ["mins"] }
    },
    {
        name: "Cinderella/Kimono",
        img: "QRJ02FR.png",
        opts: { series: ["cindy"], stage: ["sorc", "event"] }
    },
    {
        name: "Cinderella/Paladin",
        img: "0QWYiVJ.png",
        opts: { series: ["cindy"], stage: ["paladin"] }
    },
    {
        name: "Cinderella/Luxury",
        img: "tomkWV9.png",
        opts: { series: ["cindy"], stage: ["mins", "event"] }
    },
    {
        name: "Cinderella/Greedy Crow Paladin",
        img: "s91rc8m.png",
        opts: { series: ["cindy"], stage: ["pala"],sin:["greed"],sinCheck:true }
    },
    {
        name: "Cinderella/Mizugi",
        img: "DqH5784.png",
        opts: { series: ["cindy"], stage: ["gunner","swimsuit"] }
    },
    {
        name: "Cinderella/Gluttonous Tiger Sorcerer",
        img: "SE6wJVh.png",
        opts: { series: ["cindy"], stage: ["sorc"],sin:["glut"], sinCheck:true }
    },

    //       Pinocchio

    {
        name: "Pinocchio/Half-Nightmare",
        img: "xfHrAOb.png",
        opts: { series: ["pino"], stage: ["sorc","hnm"] }
    },
    {
        name: "Pinocchio/Crusher",
        img: "OJRF8aP.png",
        opts: { series: ["pino"], stage: ["crusher"] }
    },
    {
        name: "Pinocchio/Minstrel",
        img: "i9sK02p.png",
        opts: { series: ["pino"], stage: ["mins"] }
    },
    {
        name: "Pinocchio/Sorcerer",
        img: "LDj1RwF.png",
        opts: { series: ["pino"], stage: ["sorc"] }
    },
    {
        name: "Pinocchio/Gunner",
        img: "seNjqio.png",
        opts: { series: ["pino"], stage: ["gunner"] }
    },
    {
        name: "Pinocchio/Tuna Paladin",
        img: "NhM80c2.png",
        opts: { series: ["pino"], stage: ["paladin","event","swimsuit"] }
    },
    {
        name: "Pinocchio/Breaker",
        img: "X03yN5k.png",
        opts: { series: ["pino"], stage: ["breaker"] }
    },
    {
        name: "Pinocchio/Cleric",
        img: "NhHP10o.png",
        opts: { series: ["pino"], stage: ["cleric"] }
    },
    {
        name: "Pinocchio/Gluttonous Tiger Sorcerer",
        img: "BggfH0O.png",
        opts: { series: ["pino"], stage: ["sorc"],sin:["glut"], sinCheck:true }
    },
    {
        name: "Pinocchio/Alternative",
        img: "7Eo60Eb.png",
        opts: { series: ["pino"], stage: ["alt","crusher"] }
    },
    {
        name: "Pinnochio/Alternative Outfit2",
        img: "5DlEv5b.png",
        opts: { series: ["pino"], stage: ["crusher","alt"],outfit:true }
    },
    {
        name: "Pinocchio/X-mas",
        img: "b3OaP1s.png",
        opts: { series: ["pino"], stage: ["mins","event"] }
    },
    {
        name: "Pinocchio/Wrath Wolf Crusher",
        img: "UCHwuxP.png",
        opts: { series: ["pino"], stage: ["crusher"],sin:["wrath"],sinCheck:true }
    },
    {
        name: "Pinocchio/Sloth Bear Minstrel",
        img: "yjBtjUj.png",
        opts: { series: ["pino"], stage: ["mins"],sin:["sloth"],sinCheck:true }
    },
    {
        name: "Pinocchio/Paladin",
        img: "uDyJjYf.png",
        opts: { series: ["pino"], stage: ["paladin"] }
    },
    {
        name: "Pinocchio/Mage",
        img: "RwPzYT3.png",
        opts: { series: ["pino"], stage: ["mage"] }
    },
    {
        name: "Pinocchio/Gypsum, The Dependent Soul Amendment",
        img: "fPI9IuZ.png",
        opts: { series: ["pino"], stage: ["paladin"] }
    },
    {
        name: "Pinocchio/Halloween",
        img: "6SD8Gae.png",
        opts: { series: ["pino"], stage: ["gunner","event"] }
    },
    {
        name: "Pinocchio/Envious Serpent Gunner",
        img: "0wPZO5w.png",
        opts: { series: ["pino"], stage: ["gunner"],sin:["envy"],sinCheck:true }
    },

    //       Little Mermaid

    {
        name: "Little Mermaid/Poacher",
        img: "6NytD8h.png",
        opts: { series: ["lm"], stage: ["paladin","event"] }
    },
    {
        name: "Little Mermaid/Proud Lion Breaker",
        img: "EbkM1ut.png",
        opts: { series: ["lm"], stage: ["breaker"],sin:["pride"],sinCheck:true }
    },
    {
        name: "Little Mermaid/Crusher",
        img: "q8SJ5Jz.png",
        opts: { series: ["lm"], stage: ["crusher"] }
    },
    {
        name: "Little Mermaid/Alternative",
        img: "Gp1Hdu9.png",
        opts: { series: ["lm"], stage: ["mins","alt"] }
    },
    {
        name: "Little Mermaid/Half-Nightmare",
        img: "4Cef3vo.png",
        opts: { series: ["lm"], stage: ["hnm","mins"] }
    },
    {
        name: "Little Mermaid/Halloween",
        img: "1kULYEP.png",
        opts: { series: ["lm"], stage: ["gunner","event"] }
    },
    {
        name: "Little Mermaid/Breaker",
        img: "0gPXqN4.png",
        opts: { series: ["lm"], stage: ["breaker"] }
    },
    {
        name: "Little Mermaid/Envious Serpent Gunner",
        img: "zPC4Ps3.png",
        opts: { series: ["lm"], stage: ["gunner"],sin:["envy"],sinCheck:true }
    },
    {
        name: "Little Mermaid/Alternative Outfit2",
        img: "JMrKjoM.jpg",
        opts: { series: ["lm"], stage: ["alt","mins"],outfit:true }
    },
    {
        name: "Little Mermaid/Gunner",
        img: "aoNODOp.jpg",
        opts: { series: ["lm"], stage: ["gunner"] }
    },
    {
        name: "Little Mermaid/Minstrel",
        img: "vHkJSir.png",
        opts: { series: ["lm"], stage: ["mins"] }
    },
    {
        name: "Little Mermaid/Paladin",
        img: "TC25o85.png",
        opts: { series: ["lm"], stage: ["paladin"] }
    },
    {   name: "Little Mermaid/Cleric",
        img: "WNbfjNO.png",
        opts: { series: ["lm"], stage: ["cleric"] }
    },
    {
        name: "Little Mermaid/Sorcerer",
        img: "W4Ff98K.png",
        opts: { series: ["lm"], stage: ["sorc"] }
    },
    {
        name: "Little Mermaid/Mage",
        img: "TwxdYVG.png",
        opts: { series: ["lm"], stage: ["mage"] }
    },
    {
        name: "Little Mermaid/Greedy Crow Paladin",
        img: "RlAXrkl.png",
        opts: { series: ["lm"], stage: ["paladin"],sin:["greed"],sinCheck:true }
    },
    {
        name: "Little Mermaid/Dragoon",
        img: "2QZfcy5.png",
        opts: { series: ["lm","ffbe"], stage: ["paladin","event"] }
    },
    {
        name: "Little Mermaid/Lustful Scorpion Cleric",
        img: "DI5AQWO.png",
        opts: { series: ["lm"], stage: ["cleric"],sin:["lust"],sinCheck:true }
    },
    {
        name: "Little Mermaid/Sloth Bear Minstrel",
        img: "oHLnLw8.png",
        opts: { series: ["lm"], stage: ["mins"],sin:["sloth"],sinCheck:true }
    },


    //       Gretel

    {
        name: "Gretel/Half-Nightmare",
        img: "2zQd2uc.png",
        opts: { series: ["gretel"], stage: ["sorc","hnm"] }
    },
    {
        name: "Gretel/Crusher",
        img: "RSXPc8Y.png",
        opts: { series: ["gretel"], stage: ["crusher"] }
    },
    {
        name: "Gretel/Minstrel",
        img: "Bb8oMr6.png",
        opts: { series: ["gretel"], stage: ["mins"] }
    },
    {
        name: "Gretel/Sorcerer",
        img: "zS1uqQ1.png",
        opts: { series: ["gretel"], stage: ["sorc"] }
    },
    {
        name: "Gretel/Gunner",
        img: "HSNhC1E.png",
        opts: { series: ["gretel"], stage: ["gunner"] }
    },
    {
        name: "Gretel/Mizugi",
        img: "hyyPGXK.png",
        opts: { series: ["gretel"], stage: ["breaker","event","swimsuit"] }
    },
    {
        name: "Gretel/Breaker",
        img: "ZeL8VOq.png",
        opts: { series: ["gretel"], stage: ["breaker"] }
    },
    {
        name: "Gretel/Cleric",
        img: "3HKrkhW.png",
        opts: { series: ["gretel"], stage: ["cleric"] }
    },
    {
        name: "Gretel/Gluttonous Tiger Sorcerer",
        img: "zmehJTC.png",
        opts: { series: ["gretel"], stage: ["sorc"],sin:["glut"], sinCheck:true }
    },
    {
        name: "Gretel/Alternative",
        img: "0QiGrrx.png",
        opts: { series: ["gretel"], stage: ["alt","paladin"] }
    },
    {
        name: "Gretel/Envious Serpent Gunner",
        img: "D9aUOHm.png",
        opts: { series: ["gretel"], stage: ["gunner"],sin:["envy"],sinCheck:true }
    },
    {
        name: "Gretel/Lustful Scorpion Cleric",
        img: "APU7C1b.png",
        opts: { series: ["gretel"], stage: ["cleric"],sin:["lust"],sinCheck:true }
    },
    {
        name: "Gretel/Greedy Crow Paladin",
        img: "VQVP76Y.png",
        opts: { series: ["gretel"], stage: ["paladin"],sin:["greed"],sinCheck:true }
    },
    {
        name: "Gretel/Envious Serpent Half-Nightmare",
        img: "4x80UOG.png",
        opts: { series: ["gretel"], stage: ["gunner","hnm"],sin:["envy"],sinCheck:true }
    },
    {
        name: "Gretel/Paladin",
        img: "QJzRcf1.png",
        opts: { series: ["gretel"], stage: ["paladin"] }
    },
    {
        name: "Gretel/Proud Lion Breaker",
        img: "7957BZK.png",
        opts: { series: ["gretel"], stage: ["breaker"],sin:["pride"],sinCheck:true }
    },
    {
        name: "Gretel/Halloween",
        img: "AAtv7ni.png",
        opts: { series: ["gretel"], stage: ["crusher","event"] }
    },
    {
        name: "Gretel/Alternative Outfit2",
        img: "VzDd1Ce.jpg",
        opts: { series: ["gretel"], stage: ["alt","paladin"],outfit:true }
    },
    {
        name: "Gretel/Kimono",
        img: "32BLrhF.png",
        opts: { series: ["gretel"], stage: ["breaker","event"] }
    },
    {
        name: "Gretel/Mage",
        img: "Z5V8Q8F.png",
        opts: { series: ["gretel"], stage: ["mage"] }
    },
    {
        name: "Gretel/Sloth Bear Minstrel",
        img: "En3Bfxh.png",
        opts: { series: ["gretel"], stage: ["mins"], sin:["sloth"], sinCheck: true }
    },


    //       Ibarahime/Briar Rose/Sleeping Beauty

    {
        name: "Briar Rose/Half-Nightmare",
        img: "J6O194i.png",
        opts: { series: ["ibara"], stage: ["cleric","hnm"] }
    },
    {
        name: "Briar Rose/Crusher",
        img: "cykLp0T.png",
        opts: { series: ["ibara"], stage: ["crusher"] }
    },
    {
        name: "Briar Rose/Minstrel",
        img: "suZVbe6.png",
        opts: { series: ["ibara"], stage: ["mins"] }
    },
    {
        name: "Briar Rose/Sorcerer",
        img: "rEfSG6v.png",
        opts: { series: ["ibara"], stage: ["sorc"] }
    },
    {
        name: "Briar Rose/Gunner",
        img: "zzEYksy.png",
        opts: { series: ["ibara"], stage: ["gunner"] }
    },
    {
        name: "Briar Rose/Poacher",
        img: "BGsF2qt.png",
        opts: { series: ["ibara"], stage: ["crusher","event","swimsuit"] }
    },
    {
        name: "Briar Rose/Breaker",
        img: "uz0fVDb.png",
        opts: { series: ["ibara"], stage: ["breaker"] }
    },
    {
        name: "Briar Rose/Cleric",
        img: "wWZaATL.png",
        opts: { series: ["ibara"], stage: ["cleric"] }
    },
    {
        name: "Briar Rose/Lustful Scorpion Cleric",
        img: "k7VAAnm.png",
        opts: { series: ["ibara"], stage: ["cleric"],sin:["lust"], sinCheck:true }
    },
    {
        name: "Briar Rose/Alternative",
        img: "wAmWB3g.png",
        opts: { series: ["ibara"], stage: ["alt","sorc"] }
    },
    {
        name: "Briar Rose/Alternative Outfit2",
        img: "JoKbgAs.png",
        opts: { series: ["ibara"], stage: ["alt","sorc"],outfit:true }
    },
    {
        name: "Briar Rose/Camp",
        img: "VjaSR4L.png",
        opts: { series: ["ibara"], stage: ["paladin","event","swimsuit"] }
    },
    {
        name: "Briar Rose/Wrath Wolf Crusher",
        img: "WEuq15q.png",
        opts: { series: ["ibara"], stage: ["crusher"],sin:["wrath"],sinCheck:true }
    },
    {
        name: "Briar Rose/Sloth Bear Minstrel",
        img: "dV28Dop.png",
        opts: { series: ["ibara"], stage: ["mins"],sin:["sloth"],sinCheck:true }
    },
    {
        name: "Briar Rose/Paladin",
        img: "lfMcmAx.png",
        opts: { series: ["ibara"], stage: ["paladin"] }
    },
    {
        name: "Briar Rose/Sloth Bear Minstrel",
        img: "WUWbKES.png",
        opts: { series: ["ibara"], stage: ["gunner"],sin:["envy"],sinCheck:true }
    },
    {
        name: "Briar Rose/Gluttonous Tiger Sorcerer",
        img: "fyDb9bi.png",
        opts: { series: ["ibara"], stage: ["sorc"],sin:["glut"],sinCheck:true }
    },
    {
        name: "Briar Rose/Travelers",
        img: "YZeV69b.png",
        opts: { series: ["ibara"], stage: ["cleric","event"] }
    },
    {
        name: "Briar Rose/Invader",
        img: "ahFubA1.png",
        opts: { series: ["ibara"], stage: ["breaker","event"] }
    },

    //       Kaguyahime

    {
        name: "Kaguyahime/Half-Nightmare",
        img: "F5Us8Ro.png",
        opts: { series: ["kaguya"], stage: ["breaker","hnm"] }
    },
    {
        name: "Kaguyahime/Crusher",
        img: "TSUoaJU.png",
        opts: { series: ["kaguya"], stage: ["crusher"] }
    },
    {
        name: "Kaguyahime/Minstrel",
        img: "BPlUmVZ.png",
        opts: { series: ["kaguya"], stage: ["mins"] }
    },
    {
        name: "Kaguyahime/Sorcerer",
        img: "IOg3nsk.png",
        opts: { series: ["kaguya"], stage: ["sorc"] }
    },
    {
        name: "Kaguyahime/Gunner",
        img: "ff2vEII.png",
        opts: { series: ["kaguya"], stage: ["gunner"] }
    },
    {
        name: "Kaguyahime/Invader",
        img: "qAz1Tri.png",
        opts: { series: ["kaguya"], stage: ["cleric","event","swimsuit"] }
    },
    {
        name: "Kaguyahime/Kimono",
        img: "aHqNaNe.png",
        opts: { series: ["kaguya"], stage: ["sorc","event"] }
    },
    {
        name: "Kaguyahime/Breaker",
        img: "twJ93Lp.png",
        opts: { series: ["kaguya"], stage: ["breaker"] }
    },
    {
        name: "Kaguyahime/Cleric",
        img: "DFLQG3d.png",
        opts: { series: ["kaguya"], stage: ["cleric"] }
    },
    {
        name: "Kaguyahime/Gluttonous Tiger Sorcerer",
        img: "KfRRSdq.png",
        opts: { series: ["kaguya"], stage: ["sorc"],sin:["glut"], sinCheck:true }
    },
    {
        name: "Kaguyahime/Alternative",
        img: "KO4eK2h.png",
        opts: { series: ["kaguya"], stage: ["alt","cleric"] }
    },
    {
        name: "Kaguyahime/Lustful Scorpion Cleric",
        img: "2pebl91.png",
        opts: { series: ["kaguya"], stage: ["cleric"],sin:["lust"],sinCheck:true }
    },
    {
        name: "Kaguyahime/Proud Lion Breaker",
        img: "g7Bj9A1.png",
        opts: { series: ["kaguya"], stage: ["breaker"],sin:["pride"],sinCheck:true }
    },
    {
        name: "Kaguyahime/Paladin",
        img: "S5mbFy2.png",
        opts: { series: ["kaguya"], stage: ["paladin"] }
    },
    {
        name: "Kaguyahime/Lustful Scorpion Cleric",
        img: "WJ5DUlB.png",
        opts: { series: ["kaguya"], stage: ["mins"],sin:["sloth"],sinCheck:true }
    },
    {
        name: "Kaguyahime/Wrath Wolf Crusher",
        img: "9g9FhGo.png",
        opts: { series: ["kaguya"], stage: ["crusher"],sin:["wrath"],sinCheck:true }
    },
    {
        name: "Kaguyahime/Travelers",
        img: "Ni87aud.png",
        opts: { series: ["kaguya"], stage: ["paladin","event"] }
    },
    {
        name: "Kaguya/Envious Serpent Gunner",
        img: "t61ICzZ.png",
        opts: { series: ["kaguya"], stage: ["gunner"], sin:["envy"], sinCheck: true }
    },


    //       Dorothy

    {
        name: "Dorothy/Mizugi",
        img: "aeTtd8s.png",
        opts: { series: ["doro"], stage: ["cleric","swimsuit"] }
    },
    {
        name: "Dorothy/Crusher",
        img: "BTVRtzt.png",
        opts: { series: ["doro"], stage: ["crusher"] }
    },
    {
        name: "Dorothy/Minstrel",
        img: "pXi6QPG.png",
        opts: { series: ["doro"], stage: ["mins"] }
    },
    {
        name: "Dorothy/Sorcerer",
        img: "oqbfSj3.png",
        opts: { series: ["doro"], stage: ["sorc"] }
    },
    {
        name: "Dorothy/Gunner",
        img: "wRhovry.png",
        opts: { series: ["doro"], stage: ["gunner"] }
    },
    {
        name: "Dorothy/Camp",
        img: "PTFaSVC.png",
        opts: { series: ["doro"], stage: ["cleric","event","swimsuit"] }
    },
    {
        name: "Dorothy/Breaker",
        img: "KQscHt1.png",
        opts: { series: ["doro"], stage: ["breaker"] }
    },
    {
        name: "Dorothy/Cleric",
        img: "fbqReuK.png",
        opts: { series: ["doro"], stage: ["cleric"] }
    },
    {
        name: "Dorothy/Sloth Bear Minstrel",
        img: "ZYPLpmU.png",
        opts: { series: ["doro"], stage: ["sorc"],sin:["sloth"], sinCheck:true }
    },
    {
        name: "Dorothy/Alternative",
        img: "w7Zp6ir.png",
        opts: { series: ["doro"], stage: ["alt","crusher"] }
    },
    {
        name: "Dorothy/Envious Serpent Gunner",
        img: "qAR3tBp.png",
        opts: { series: ["doro"], stage: ["gunner"],sin:["envy"],sinCheck:true }
    },
    {
        name: "Dorothy/Greedy Crow Paladin",
        img: "H3veXT2.png",
        opts: { series: ["doro"], stage: ["paladin"],sin:["greed"],sinCheck:true }
    },
    {
        name: "Dorothy/Paladin",
        img: "ED3Abbr.png",
        opts: { series: ["doro"], stage: ["paladin"] }
    },
    {
        name: "Dorothy/Wrath Wolf Crusher",
        img: "1Ti5ZUY.png",
        opts: { series: ["doro"], stage: ["crusher"],sin:["wrath"],sinCheck:true }
    },
    {
        name: "Dorothy/Half-Nightmare",
        img: "c2Gw4Mw.png",
        opts: { series: ["doro"], stage: ["paladin","hnm"] }
    },
    {
        name: "Dorothy/Alternative Outfit2",
        img: "1H10fMa.jpg",
        opts: { series: ["doro"], stage: ["alt","crusher"],outfit:true }
    },
    {
        name: "Dorothy/Kimono",
        img: "Gnll4BI.png",
        opts: { series: ["doro"], stage: ["mins","event"] }
    },


    //       Nutcracker

    {
        name: "Nutcracker/Breaker",
        img: "1Q7yPo4.png",
        opts: { series: ["nut"], stage: ["breaker"] }
    },
    {
        name: "Nutcracker/Mizugi",
        img: "zgvwa5I.png",
        opts: { series: ["nut"], stage: ["mins","swimsuit"] }
    },
    {
        name: "Nutcracker/Valentine",
        img: "wl57WOY.png",
        opts: { series: ["nut"], stage: ["sorc","event"] }
    },
    {
        name: "Nutcracker/X-mas",
        img: "eENifyJ.png",
        opts: { series: ["nut"], stage: ["gunner","event"] }
    },
    {
        name: "Nutcracker/Gold",
        img: "zX1E1Lv.png",
        opts: { series: ["nut"], stage: ["breaker","event"] }
    },
    {
        name: "Nutcracker/Halloween",
        img: "VdvEleh.png",
        opts: { series: ["nut"], stage: ["paladin","event"] }
    },

    //       Three Little Pigs

    {
        name: "Three Little Pigs/Invader",
        img: "xN2TZ48.png",
        opts: { series: ["pigs"], stage: ["paladin","swimsuit","event"] }
    },
    {
        name: "Three Little Pigs/Cleric",
        img: "lotpXYU.png",
        opts: { series: ["pigs"], stage: ["cleric"] }
    },
    {
        name: "Three Little Pigs/Minstrel",
        img: "sgvfcVc.png",
        opts: { series: ["pigs"], stage: ["mins"] }
    },
    {
        name: "Three Little Pigs/Breaker",
        img: "aZYIfWS.png",
        opts: { series: ["pigs"], stage: ["breaker"] }
    },
    {
        name: "Three Little Pigs/Half-Nightmare",
        img: "fjVRSyY.png",
        opts: { series: ["pigs"], stage: ["mage","hnm"] }
    },
    {
        name: "Three Little Pigs/White Mage",
        img: "aQQWmGX.png",
        opts: { series: ["pigs","ffbe"], stage: ["cleric", "event"] }
    },
    {
        name: "Three Little Pigs/Kimono",
        img: "jrAP8cC.png",
        opts: { series: ["pigs"], stage: ["crusher", "event"] }
    },

    //       Aladdin

    {
        name: "Aladdin/Kimono",
        img: "OcFAn9n.png",
        opts: { series: ["aladdin"], stage: ["breaker","event"] }
    },
    {
        name: "Aladdin/Paladin",
        img: "UNreJU7.png",
        opts: { series: ["aladdin"], stage: ["paladin"] }
    },
    {
        name: "Aladdin/Sorcerer",
        img: "lbjA5oK.png",
        opts: { series: ["aladdin"], stage: ["sorc"] }
    },
    {
        name: "Aladdin/Cleric",
        img: "KmNy46W.png",
        opts: { series: ["aladdin"], stage: ["cleric"] }
    },
    {
        name: "Aladdin/Crusher",
        img: "v01uwrV.png",
        opts: { series: ["aladdin"], stage: ["crusher"] }
    },
    {
        name: "Aladdin/Halloween",
        img: "NLLIbej.png",
        opts: { series: ["aladdin"], stage: ["mins","event"] }
    },
    {
        name: "Aladdin/Half-Nightmare",
        img: "3Y601Db.png",
        opts: { series: ["aladdin"], stage: ["cleric","hnm"] }
    },
    {
        name: "Aladdin/Invader",
        img: "DwTdkfX.png",
        opts: { series: ["aladdin"], stage: ["sorc","event"] }
    },

    //       Rapunzel

    {
        name: "Rapunzel/Cleric",
        img: "X5nI530.png",
        opts: { series: ["rapun"], stage: ["cleric"] }
    },
    {
        name: "Rapunzel/Mizugi",
        img: "qANAlTt.png",
        opts: { series: ["rapun"], stage: ["breaker","swimsuit"] }
    },
    {
        name: "Rapunzel/Minstrel",
        img: "2jOxGU9.png",
        opts: { series: ["rapun"], stage: ["mins"] }
    },
    {
        name: "Rapunzel/Gunner",
        img: "BKVh5ph.png",
        opts: { series: ["rapun"], stage: ["gunner"] }
    },
    {
        name: "Rapunzel/Valentine",
        img: "9G1aUsW.png",
        opts: { series: ["rapun"], stage: ["event","paladin"] }
    },

    //       Hamelin

    {
        name: "Hamelin/Minstrel",
        img: "iAYk5L6.png",
        opts: { series: ["hamelin"], stage: ["mins"] }
    },
    {
        name: "Hamelin/Gunner",
        img: "82SwV1v.png",
        opts: { series: ["hamelin"], stage: ["gunner"] }
    },

    //       Nier Replicant

    {
        name: "Emil Clone/Minstrel",
        img: "qZ7KxVc.png",
        opts: { series: ["nier"], stage: ["mins"] }
    },
    {
        name: "Young Nier/Sorcerer",
        img: "6pDBd2o.png",
        opts: { series: ["nier"], stage: ["sorc"] }
    },
    {
        name: "Kaine/Breaker",
        img: "8HYU9RN.png",
        opts: { series: ["nier"], stage: ["breaker"] }
    },
    {
        name: "Devola and Popola/Cleric",
        img: "7yr9B1j.png",
        opts: { series: ["nier"], stage: ["cleric"] }
    },
    {
        name: "Young Emil/Mage",
        img: "CMqalVX.png",
        opts: { series: ["nier"], stage: ["mage"] }
    },
    {
        name: "Nier/Paladin",
        img: "pwwJcZT.png",
        opts: { series: ["nier"], stage: ["paladin"] }
    },



    //       Nier Automata

    {
        name: "A2/Breaker",
        img: "Jtg2ECO.png",
        opts: { series: ["nier"], stage: ["breaker"] }
    },
    {
        name: "2B/Breaker",
        img: "CA5fSTF.png",
        opts: { series: ["nier"], stage: ["breaker"] }
    },
    {
        name: "2B/Crusher",
        img: "ZMYDB5E.png",
        opts: { series: ["nier"], stage: ["crusher"] }
    },
    {
        name: "Emil/Cleric",
        img: "cKizDT6.png",
        opts: { series: ["nier"], stage: ["cleric"] }
    },
    {
        name: "9S/Paladin",
        img: "8kxzZoD.png",
        opts: { series: ["nier"], stage: ["paladin"] }
    },


    //       Drakengard 3/DOD3

    {
        name: "Zero/Breaker",
        img: "kdbWzKu.png",
        opts: { series: ["dod3"], stage: ["breaker"] }
    },
    {
        name: "One/Breaker",
        img: "Dofdbci.png",
        opts: { series: ["dod3"], stage: ["breaker"] }
    },
    {
        name: "Accord/Sorcerer",
        img: "lwsTBpl.png",
        opts: { series: ["dod3"], stage: ["sorc"] }
    },
    {
        name: "Zero/Cleric",
        img: "COtT2hN.png",
        opts: { series: ["dod3"], stage: ["cleric"] }
    },
    {
        name: "Boy Mikhail/Paladin",
        img: "vhdFm3n.png",
        opts: { series: ["dod3"], stage: ["paladin"] }
    },
    {
        name: "Five/Paladin",
        img: "k0jqS0K.png",
        opts: { series: ["dod3"], stage: ["paladin"] }
    },
    {
        name: "Four/Crusher",
        img: "7mTlOmz.png",
        opts: { series: ["dod3"], stage: ["crusher"] }
    },
    {
        name: "Two/Breaker",
        img: "aRvTjr8.png",
        opts: { series: ["dod3"], stage: ["breaker"] }
    },
    {
        name: "Three/Breaker",
        img: "qmRp6vb.png",
        opts: { series: ["dod3"], stage: ["breaker"] }
    },

    //       Code Geass

    {
        name: "Suzaku/Breaker",
        img: "OVeg6SP.png",
        opts: { series: ["cg"], stage: ["breaker"] }
    },
    {
        name: "Zero/Gunner",
        img: "l6iZEag.png",
        opts: { series: ["cg"], stage: ["gunner"] }
    },
    {
        name: "Kallen/Crusher",
        img: "siRrtNG.png",
        opts: { series: ["cg"], stage: ["crusher"] }
    },
    {
        name: "Euphemia/Cleric",
        img: "KbecAh6.png",
        opts: { series: ["cg"], stage: ["cleric"] }
    },
    {
        name: "C.C./Minstrel",
        img: "6EyTNFg.png",
        opts: { series: ["cg"], stage: ["mins"] }
    },
    {
        name: "Lelouch/Sorcerer",
        img: "y41Dv7o.png",
        opts: { series: ["cg"], stage: ["sorc"] }
    },


    //       FINAL FANTASY BRAVE EXVIUS

    {
        name: "Rain/Breaker",
        img: "CUnBC3j.png",
        opts: { series: ["ffbe"], stage: ["breaker"] }
    },
    {
        name: "Fina/Gunner",
        img: "DQNOZRc.png",
        opts: { series: ["ffbe"], stage: ["gunner"] }
    },

    //       Re:Zero − Starting Life in Another World

    {
        name: "Natsuki Subaru/Sorcerer",
        img: "17E7KSu.png",
        opts: { series: ["rezero"], stage: ["sorc"] }
    },
    {
        name: "Emilia/Cleric",
        img: "ALTEhdb.png",
        opts: { series: ["rezero"], stage: ["cleric"] }
    },
    {
        name: "Ram/Paladin",
        img: "PKVYDqm.png",
        opts: { series: ["rezero"], stage: ["paladin"] }
    },
    {
        name: "Rem/Crusher",
        img: "K23HRL3.png",
        opts: { series: ["rezero"], stage: ["crusher"] }
    },
    {
        name: "Natsuki Subaru/Sorcerer Outfit2",
        img: "g0P6A4N.png",
        opts: { series: ["rezero"], stage: ["sorc"], outfit:true }
    },
    {
        name: "Reinhard/Breaker",
        img: "pcKZnMD.png",
        opts: { series: ["rezero"], stage: ["breaker"] }
    }

];
